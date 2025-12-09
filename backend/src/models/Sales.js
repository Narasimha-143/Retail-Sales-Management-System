const mongoose = require("mongoose");

const SalesSchema = new mongoose.Schema({
  customerId: { type: String, required: true },
  productId: { type: String, required: true },

  quantity: { type: Number, required: true },
  pricePerUnit: { type: Number, required: true },
  discountPercentage: { type: Number, default: 0 },
  totalAmount: { type: Number, required: true },
  finalAmount: { type: Number, required: true },
});

module.exports = mongoose.model("Sales", SalesSchema);
