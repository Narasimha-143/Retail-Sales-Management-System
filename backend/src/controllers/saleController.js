const { getSalesData } = require("../services/saleService");

exports.getSales = async (req, res) => {
  try {
    const data = await getSalesData(req.query);

    return res.status(200).json(data);   // ⬅ FIXED
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
};
