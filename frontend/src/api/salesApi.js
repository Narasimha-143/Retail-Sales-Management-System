export const getSales = async (params) => {
  const queryString = new URLSearchParams(params).toString();

  const res = await fetch(`http://localhost:4000/api/sales?${queryString}`);

  if (!res.ok) {
    throw new Error("Failed to fetch sales data");
  }

  return await res.json();
};
