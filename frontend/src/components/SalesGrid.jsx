import React from 'react';
import SalesCard from './SalesCard';

export default function SalesGrid({ sales = [] }) {
  // Ensure sales is always an array
  if (!Array.isArray(sales)) sales = [];

  if (sales.length === 0) return <p className="text-gray-500">No sales found.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {sales.map((sale, index) => (
        <SalesCard key={sale.id || index} sale={sale} />
      ))}
    </div>
  );
}
