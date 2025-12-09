const Operations = require("../../models/Operations");

module.exports = async function buildOperationFilter({ payment, startDate, endDate }) {
  const filter = {};
  if (payment) filter.paymentMethod = { $in: payment.split(",") };

  if (startDate || endDate) {
    filter.date = {};
    if (startDate) filter.date.$gte = new Date(startDate);
    if (endDate) filter.date.$lte = new Date(endDate);
  }

  if (Object.keys(filter).length === 0) return null;

  const matched = await Operations.find(filter, { saleId: 1 });
  return matched.map(o => o.saleId);
};
