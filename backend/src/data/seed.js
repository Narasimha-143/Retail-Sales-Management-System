require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = require("../utils/db");

const Sales = require("../models/Sales");
const Customer = require("../models/Customer");
const Product = require("../models/Product");
const Operations = require("../models/Operations");

const salesData = require("./salesData");
const customerData = require("./customerData");
const productData = require("./productData");
const operationsData = require("./operationsData");

async function seedDB() {
  try {
    await connectDB(process.env.MONGO_URI);

    console.log("Connected to MongoDB");

    await Sales.deleteMany({});
    await Customer.deleteMany({});
    await Product.deleteMany({});
    await Operations.deleteMany({});

    await Sales.insertMany(salesData);
    await Customer.insertMany(customerData);
    await Product.insertMany(productData);
    await Operations.insertMany(operationsData);

    console.log("Database seeded successfully");
    mongoose.connection.close();
  } catch (err) {
    console.error("Seed error:", err);
    mongoose.connection.close();
  }
}

seedDB();
