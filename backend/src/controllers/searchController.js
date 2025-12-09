const Sales = require("../models/Sales");

const applySearchQuery = require("./search/applySearchQuery");
const buildCustomerFilter = require("./search/buildCustomerFilter");
const buildProductFilter = require("./search/buildProductFilter");
const buildOperationFilter = require("./search/buildOperationFilter");
const applySorting = require("./search/applySorting");
const applyPagination = require("./search/applyPagination");

const advancedSearch = async (req, res) => {
  try {
    const { query, region, gender, minAge, maxAge, category, tags, payment, startDate, endDate, sortField, sortOrder, page } = req.query;

    const { pageNum, skip, pageSize } = applyPagination(page);

    const ids1 = await applySearchQuery(query);
    const ids2 = await buildCustomerFilter({ region, gender, minAge, maxAge });
    const productIds = await buildProductFilter({ category, tags });
    const saleIds = await buildOperationFilter({ payment, startDate, endDate });

    const salesMatch = {};
    if (ids1 || ids2) {
      const final = ids1 && ids2 ? ids1.filter(id => ids2.includes(id)) : (ids1 || ids2);
      if (final.length === 0) return res.json({ page: pageNum, totalPages: 0, totalResults: 0, results: [] });
      salesMatch.customerId = { $in: final };
    }

    if (productIds) salesMatch.productId = { $in: productIds };
    if (saleIds) salesMatch._id = { $in: saleIds };

    const sort = applySorting(sortField, sortOrder);

    const pipeline = [
      { $match: salesMatch },
      { $lookup: { from: "customers", localField: "customerId", foreignField: "customer_id", as: "customer" } },
      { $unwind: "$customer" },
      { $lookup: { from: "products", localField: "productId", foreignField: "product_id", as: "product" } },
      { $unwind: "$product" },
      { $lookup: { from: "operations", localField: "_id", foreignField: "saleId", as: "operations" } },
      { $sort: sort },
      {
        $facet: {
          metadata: [{ $count: "total" }],
          data: [{ $skip: skip }, { $limit: pageSize }]
        }
      }
    ];

    const result = await Sales.aggregate(pipeline);

    res.json({
      page: pageNum,
      totalPages: Math.ceil((result[0].metadata[0]?.total || 0) / pageSize),
      totalResults: result[0].metadata[0]?.total || 0,
      results: result[0].data
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { advancedSearch };