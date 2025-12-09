const mongoose = require("mongoose");

const OperationsSchema = new mongoose.Schema({
  saleId: { type: mongoose.Schema.Types.ObjectId, ref: "Sales", required: true },

  date: { type: Date, required: true },
  paymentMethod: { type: String },
  orderStatus: { type: String },
  deliveryType: { type: String },

  storeId: { type: String },
  storeLocation: { type: String },

  salespersonId: { type: String },
  employeeName: { type: String },
});

module.exports = mongoose.model("Operations", OperationsSchema);
