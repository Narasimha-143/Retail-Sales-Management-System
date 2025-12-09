    const mongoose = require("mongoose");

    const CustomerSchema = new mongoose.Schema({
    customer_id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    phone: { type: String, required: true },
    gender: { type: String },
    age: { type: Number },
    region: { type: String },
    type: { type: String }, // New, Returning, Loyal
    });

    CustomerSchema.index(
        { name: "text", phone: "text" },
        { default_language: "none" }
    );


    module.exports = mongoose.model("Customer", CustomerSchema);
