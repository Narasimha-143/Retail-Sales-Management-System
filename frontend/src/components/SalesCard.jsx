import React from 'react';

export default function SalesCard({ sale }) {
  const { customer, product, quantity, finalAmount, operations } = sale;
  const lastOperation = operations && operations.length > 0 ? operations[0] : {};

  return (
    <div className="bg-white shadow-md rounded-xl p-4 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
      {/* Customer info */}
      <div className="flex justify-between items-center mb-2">
        <div>
          <h3 className="text-lg font-semibold">{customer?.name || "Unknown Customer"}</h3>
          <p className="text-sm text-gray-500">{customer?.phone}</p>
        </div>
        <div className="text-right">
          <span className="text-gray-400 text-sm">{customer?.region}</span>
        </div>
      </div>

      {/* Product info */}
      <div className="mb-2">
        <p className="font-medium">{product?.name || "Product"}</p>
        <p className="text-sm text-gray-500">{product?.brand} | {product?.category}</p>
        {product?.tags?.length > 0 && (
          <div className="flex flex-wrap mt-1 gap-1">
            {product.tags.map((tag, i) => (
              <span key={i} className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">{tag}</span>
            ))}
          </div>
        )}
      </div>

      {/* Sale info */}
      <div className="flex justify-between items-center mt-2">
        <div>
          <p className="text-sm text-gray-500">Quantity: <span className="font-medium">{quantity}</span></p>
          <p className="text-sm text-gray-500">Amount: <span className="font-medium">₹{finalAmount}</span></p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500">{lastOperation?.paymentMethod || "-"}</p>
          <p className="text-sm text-gray-400">{lastOperation?.date ? new Date(lastOperation.date).toLocaleDateString() : "-"}</p>
        </div>
      </div>
    </div>
  );
}
