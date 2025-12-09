const Operations = require("../models/Operations");

exports.createOperation = async (req, res) => {
  try {
    const op = await Operations.create(req.body);
    res.json(op);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getOperations = async (req, res) => {
  const ops = await Operations.find({});
  res.json(ops);
};
