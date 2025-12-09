module.exports = function applySorting(sortField, sortOrder) {
  const dir = sortOrder === "asc" ? 1 : -1;

  switch (sortField) {
    case "date":
      return { "operations.0.date": dir };
    case "quantity":
      return { quantity: dir };
    case "customer":
      return { "customer.name": dir };
    default:
      return { "operations.0.date": -1, _id: -1 };
  }
};
