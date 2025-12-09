require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const  connectDB  = require('./utils/db');
const saleRoutes = require('./routes/saleRoutes');
const customerRoutes = require("./routes/customerRoutes");
const productRoutes = require("./routes/productRoutes");
const operationsRoutes = require("./routes/operationsRoutes");
const searchRoutes = require("./routes/searchRoutes");

const app = express();

const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, PATCH,, DELETE, HEAD",
    credentials: true,
}

app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/sales', saleRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/products", productRoutes);
app.use("/api/operations", operationsRoutes);
app.use("/api/search", searchRoutes);

const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/retail_sales_db';

connectDB(MONGO_URI).then(() => {
    app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
}).catch(err => {
    console.error('Failed to start server:', err);
});


module.exports = app;