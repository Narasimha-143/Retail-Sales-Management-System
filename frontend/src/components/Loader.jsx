import React from 'react';

export default function Loader({ message = "Loading...", size = 12, color = "blue-500" }) {
  return (
    <div className="flex flex-col items-center justify-center p-6">
      {/* Spinner */}
      <div
        className={`w-${size} h-${size} border-4 border-${color} border-dashed rounded-full animate-spin mb-4`}
      ></div>
      {/* Loading text */}
      <p className="text-gray-700 text-lg">{message}</p>
    </div>
  );
}
