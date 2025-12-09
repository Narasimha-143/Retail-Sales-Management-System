import React from 'react';

export default function Filters({ query = {}, setQuery }) {
  // Ensure each field has a default array
  const safeQuery = {
    region: [],
    gender: [],
    ageRange: [],
    productCategory: [],
    tags: [],
    paymentMethod: [],
    dateFrom: '',
    dateTo: '',
    ...query
  };

  const updateMultiSelect = (field, value) => {
    const arr = safeQuery[field] || [];
    const newArr = arr.includes(value)
      ? arr.filter(v => v !== value)
      : [...arr, value];

    setQuery({ ...safeQuery, [field]: newArr, page: 1 });
  };

  return (
    <div className="space-y-4">
      {/* Region */}
      <div>
        <h4 className="font-semibold mb-1">Region</h4>
        {["North", "South", "East", "West"].map(r => (
          <label key={r} className="block">
            <input
              type="checkbox"
              checked={safeQuery.region.includes(r)}
              onChange={() => updateMultiSelect("region", r)}
            />
            {r}
          </label>
        ))}
      </div>

      {/* Gender */}
      <div>
        <h4 className="font-semibold mb-1">Gender</h4>
        {["Male", "Female", "Other"].map(g => (
          <label key={g} className="block">
            <input
              type="checkbox"
              checked={safeQuery.gender.includes(g)}
              onChange={() => updateMultiSelect("gender", g)}
            />
            {g}
          </label>
        ))}
      </div>

      {/* Age Range */}
      <div>
        <h4 className="font-semibold mb-1">Age Range</h4>
        {["0-18", "19-30", "31-50", "51+"].map(range => (
          <label key={range} className="block">
            <input
              type="checkbox"
              checked={safeQuery.ageRange.includes(range)}
              onChange={() => updateMultiSelect("ageRange", range)}
            />
            {range}
          </label>
        ))}
      </div>

      {/* Product Category */}
      <div>
        <h4 className="font-semibold mb-1">Product Category</h4>
        {["Electronics", "Beauty", "Groceries"].map(c => (
          <label key={c} className="block">
            <input
              type="checkbox"
              checked={safeQuery.productCategory.includes(c)}
              onChange={() => updateMultiSelect("productCategory", c)}
            />
            {c}
          </label>
        ))}
      </div>

      {/* Tags */}
      <div>
        <h4 className="font-semibold mb-1">Tags</h4>
        {["organic", "wireless", "smart", "makeup"].map(tag => (
          <label key={tag} className="block">
            <input
              type="checkbox"
              checked={safeQuery.tags.includes(tag)}
              onChange={() => updateMultiSelect("tags", tag)}
            />
            {tag}
          </label>
        ))}
      </div>

      {/* Payment Method */}
      <div>
        <h4 className="font-semibold mb-1">Payment Method</h4>
        {["Cash", "UPI", "Credit Card", "Debit Card"].map(p => (
          <label key={p} className="block">
            <input
              type="checkbox"
              checked={safeQuery.paymentMethod.includes(p)}
              onChange={() => updateMultiSelect("paymentMethod", p)}
            />
            {p}
          </label>
        ))}
      </div>

      {/* Date Range */}
      <div>
        <h4 className="font-semibold mb-1">Date Range</h4>
        <input
          type="date"
          value={safeQuery.dateFrom}
          onChange={(e) => setQuery({ ...safeQuery, dateFrom: e.target.value, page: 1 })}
          className="mr-2"
        />
        <input
          type="date"
          value={safeQuery.dateTo}
          onChange={(e) => setQuery({ ...safeQuery, dateTo: e.target.value, page: 1 })}
        />
      </div>
    </div>
  );
}
