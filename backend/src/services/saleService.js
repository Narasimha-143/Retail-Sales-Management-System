const Sales = require("../models/Sales");
const mongoose = require("mongoose");

exports.getSalesData = async (query) => {
  let {
    q,
    regions,
    genders,
    categories,
    tags,
    paymentMethods,
    ageMin,
    ageMax,
    dateFrom,
    dateTo,
    sortBy = "date",
    page = 1,
    pageSize = 10,
  } = query;

  const normalize = (v) => (Array.isArray(v) ? v : v ? [v] : undefined);

  regions = normalize(regions);
  genders = normalize(genders);
  categories = normalize(categories);
  tags = normalize(tags);
  paymentMethods = normalize(paymentMethods);

  page = Number(page);
  pageSize = Number(pageSize);
  const skip = (page - 1) * pageSize;

  // ---------------------------
  // SORT MAP
  // ---------------------------
  const sortMap = {
    date: { "operations.date": -1 },
    quantity: { quantity: -1 },
    customerName: { "customer.name": 1 },
  };

  const sort = sortMap[sortBy] || sortMap.date;

  // ---------------------------
  // PIPELINE START
  // ---------------------------
  const pipeline = [
    { $match: {} }, // base
  ];

  // ---------------------------
  // JOIN CUSTOMER
  // ---------------------------
  pipeline.push(
    {
      $lookup: {
        from: "customers",
        localField: "customerId",
        foreignField: "customer_id",
        as: "customer",
      },
    },
    { $unwind: "$customer" }
  );

  // ---------------------------
  // CUSTOMER FILTERS
  // ---------------------------
  const customerFilter = {};

  if (regions) customerFilter["customer.region"] = { $in: regions };
  if (genders) customerFilter["customer.gender"] = { $in: genders };

  if (ageMin || ageMax) {
    customerFilter["customer.age"] = {};
    if (ageMin) customerFilter["customer.age"].$gte = Number(ageMin);
    if (ageMax) customerFilter["customer.age"].$lte = Number(ageMax);
  }

  // Search (NO $text — use regex)
  if (q) {
    customerFilter["$or"] = [
      { "customer.name": { $regex: q, $options: "i" } },
      { "customer.phone": { $regex: q, $options: "i" } },
    ];
  }

  if (Object.keys(customerFilter).length) {
    pipeline.push({ $match: customerFilter });
  }

  // ---------------------------
  // JOIN PRODUCT
  // ---------------------------
  pipeline.push(
    {
      $lookup: {
        from: "products",
        localField: "productId",
        foreignField: "product_id",
        as: "product",
      },
    },
    { $unwind: "$product" }
  );

  // PRODUCT FILTER
  const productFilter = {};
  if (categories) productFilter["product.category"] = { $in: categories };
  if (tags) productFilter["product.tags"] = { $in: tags };

  if (Object.keys(productFilter).length) {
    pipeline.push({ $match: productFilter });
  }

  // ---------------------------
  // JOIN OPERATIONS
  // ---------------------------
  pipeline.push(
    {
      $lookup: {
        from: "operations",
        localField: "_id",
        foreignField: "saleId",
        as: "operations",
      },
    },
    { $unwind: "$operations" }
  );

  // OPERATIONS FILTER
  const opsFilter = {};

  if (paymentMethods) opsFilter["operations.paymentMethod"] = { $in: paymentMethods };

  if (dateFrom || dateTo) {
    opsFilter["operations.date"] = {};
    if (dateFrom) opsFilter["operations.date"].$gte = new Date(dateFrom);
    if (dateTo) opsFilter["operations.date"].$lte = new Date(dateTo);
  }

  if (Object.keys(opsFilter).length) {
    pipeline.push({ $match: opsFilter });
  }

  // ---------------------------
  // SORTING + PAGINATION
  // ---------------------------
  pipeline.push(
    { $sort: sort },
    { $skip: skip },
    { $limit: pageSize }
  );

  // RUN MAIN QUERY
  const results = await Sales.aggregate(pipeline);

  // COUNT QUERY
  const countPipeline = pipeline.slice(0, -3).concat([{ $count: "total" }]);
  const countRes = await Sales.aggregate(countPipeline);

  const total = countRes.length ? countRes[0].total : 0;

  return {
    results,
    total,
    page,
    pageSize,
    totalPages: Math.ceil(total / pageSize),
  };
};
