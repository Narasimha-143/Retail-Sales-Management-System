const Customer = require("../../models/Customer");

module.exports = async function applySearchQuery(query) {
  if (!query) return null;

  // Try full text search
  let textMatched = await Customer.find(
    { $text: { $search: query } },
    { customer_id: 1, score: { $meta: "textScore" } }
  ).sort({ score: { $meta: "textScore" } }).limit(1000);

  if (textMatched.length > 0)
    return textMatched.map(c => c.customer_id);

  // Fallback regex
  const regex = { $regex: query, $options: "i" };
  let regexMatched = await Customer.find(
    { $or: [{ name: regex }, { phone: regex }] },
    { customer_id: 1 }
  ).limit(1000);

  return regexMatched.map(c => c.customer_id);
};
