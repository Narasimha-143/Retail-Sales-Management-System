import { useEffect, useState } from "react";
import { getSales } from "../api/salesApi";
import Filters from "../components/Filters";
import Sorting from "../components/Sorting";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";
import Loader from "../components/Loader";
import SalesGrid from "../components/SalesGrid";

export default function SalesPage() {
  const [sales, setSales] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const [query, setQuery] = useState({
    search: "",
    region: [],
    gender: [],
    ageRange: [],
    productCategory: [],
    tags: [],
    paymentMethod: [],
    dateFrom: "",
    dateTo: "",
    sortBy: "date",
    sortOrder: "desc",
    page: 1
  });

  const fetchSales = async () => {
    setLoading(true);
    try {
      const data = await getSales(query);
      setSales(data.items || []);
      setTotalPages(data.totalPages || 1);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSales();
  }, [query]);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Sales Dashboard</h2>

      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
        <SearchBar
          value={query.search}
          onChange={(val) => setQuery({ ...query, search: val, page: 1 })}
        />
        <Sorting query={query} setQuery={setQuery} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-4">
        <aside className="lg:col-span-1">
          <Filters query={query} setQuery={setQuery} />
        </aside>
        <main className="lg:col-span-3">
          {loading ? <Loader /> : <SalesGrid sales={sales} />}
        </main>
      </div>

      <Pagination page={query.page} totalPages={totalPages} setQuery={setQuery} />
    </div>
  );
}
