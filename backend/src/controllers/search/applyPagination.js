module.exports = function applyPagination(page) {
  const pageNum = Math.max(1, parseInt(page) || 1);
  const pageSize = 10;

  return {
    pageNum,
    skip: (pageNum - 1) * pageSize,
    pageSize
  };
};
