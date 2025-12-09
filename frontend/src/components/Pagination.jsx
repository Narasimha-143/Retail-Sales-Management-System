import React from 'react';

export default function Pagination({ page = 1, totalPages = 1, setQuery }) {
  if (typeof setQuery !== "function") return null;

  return (
    <div className="flex items-center gap-4 mt-4">
      <button
        disabled={page <= 1}
        onClick={() => setQuery(q => ({ ...q, page: Math.max(1, q.page - 1) }))}
        className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
      >
        Previous
      </button>

      <span>{page} / {totalPages}</span>

      <button
        disabled={page >= totalPages}
        onClick={() => setQuery(q => ({ ...q, page: Math.min(totalPages, q.page + 1) }))}
        className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}
