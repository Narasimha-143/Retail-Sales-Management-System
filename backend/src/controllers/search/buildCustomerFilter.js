const Customer = require("../../models/Customer");

module.exports = async function buildCustomerFilter({ region, gender, minAge, maxAge }) {
  const filter = {};

  if (region) filter.region = { $in: region.split(",") };
  if (gender) filter.gender = { $in: gender.split(",") };
  if (minAge || maxAge) {
    filter.age = {};
    if (minAge) filter.age.$gte = parseInt(minAge);
    if (maxAge) filter.age.$lte = parseInt(maxAge);
  }

  if (Object.keys(filter).length === 0) return null;

  const matched = await Customer.find(filter, { customer_id: 1 });
  return matched.map(c => c.customer_id);
};
