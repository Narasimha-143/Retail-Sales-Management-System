const Product = require("../../models/Product");

module.exports = async function buildProductFilter({ category, tags }) {
  const filter = {};

  if (category) filter.category = { $in: category.split(",") };
  if (tags) filter.tags = { $in: tags.split(",") };

  if (Object.keys(filter).length === 0) return null;

  const matched = await Product.find(filter, { product_id: 1 });
  return matched.map(p => p.product_id);
};
