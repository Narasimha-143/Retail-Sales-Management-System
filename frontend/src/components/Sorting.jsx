import React from 'react';

export default function Sorting({ query = {}, setQuery }) {
  const safeQuery = {
    sortBy: 'date',
    sortOrder: 'desc',
    ...query
  };

  return (
    <div className="flex items-center gap-2">
      <h4 className="font-semibold">Sort By:</h4>

      <select
        value={safeQuery.sortBy}
        onChange={(e) => setQuery({ ...safeQuery, sortBy: e.target.value })}
        className="border rounded px-2 py-1"
      >
        <option value="date">Date</option>
        <option value="quantity">Quantity</option>
        <option value="customerName">Customer Name</option>
      </select>

      <select
        value={safeQuery.sortOrder}
        onChange={(e) => setQuery({ ...safeQuery, sortOrder: e.target.value })}
        className="border rounded px-2 py-1"
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
}
