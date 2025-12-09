const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  product_id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  brand: { type: String },
  category: { type: String },
  tags: [String],
});

ProductSchema.index({ name: "text", brand: "text", category: "text", tags: "text" });

module.exports = mongoose.model("Product", ProductSchema);     
