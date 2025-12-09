import React, { useState, useEffect, useCallback } from 'react';
import SearchBar from './components/SearchBar';
import Filters from './components/Filters';
import SalesGrid from './components/SalesGrid';
import Sorting from './components/Sorting';
import Pagination from './components/Pagination';
import Loader from './components/Loader';
import { getSales } from './api/salesApi';
import useDebouncedValue from './hooks/useDebouncedValue';
import { mapOptionsFromDataset } from './utils/helpers';

export default function App() {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebouncedValue(search, 400);

  const [filters, setFilters] = useState({
    regions: [], genders: [], ageMin: '', ageMax: '', categories: [], tags: [], paymentMethods: [], dateFrom: '', dateTo: ''
  });
  const [sortBy, setSortBy] = useState('date');
  const [page, setPage] = useState(1);
  const [pageSize] = useState(10);

  const [data, setData] = useState({ results: [], total: 0, page: 1, totalPages: 1 });
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState({ regions: [], genders: [], categories: [], tags: [], paymentMethods: [] });

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const params = {
        q: debouncedSearch || undefined,
        regions: filters.regions.length ? filters.regions : undefined,
        genders: filters.genders.length ? filters.genders : undefined,
        ageMin: filters.ageMin || undefined,
        ageMax: filters.ageMax || undefined,
        categories: filters.categories.length ? filters.categories : undefined,
        tags: filters.tags.length ? filters.tags : undefined,
        paymentMethods: filters.paymentMethods.length ? filters.paymentMethods : undefined,
        dateFrom: filters.dateFrom || undefined,
        dateTo: filters.dateTo || undefined,
        sortBy,
        page,
        pageSize
      };

      const res = await getSales(params);
      setData(res);

      // populate options from first page
      setOptions(prev => {
        if (Object.values(prev).every(arr => arr.length === 0)) {
          return mapOptionsFromDataset(res.results || []);
        }
        return prev;
      });
    } catch (err) {
      console.error('Load error', err);
      setData({ results: [], total: 0, page: 1, totalPages: 1 });
    } finally {
      setLoading(false);
    }
  }, [debouncedSearch, filters, sortBy, page, pageSize]);

  // Reset page when filters/search/sort changes
  useEffect(() => setPage(1), [debouncedSearch, JSON.stringify(filters), sortBy]);
  useEffect(() => { load(); }, [load, page]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Retail Sales Management</h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar Filters */}
          <aside className="lg:col-span-1 bg-white p-4 rounded-lg shadow">
            <Filters options={options} filters={filters} onChange={setFilters} />
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3 space-y-4">
            {/* Search + Sort */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex-1">
                <SearchBar value={search} onChange={setSearch} />
              </div>
              <Sorting value={sortBy} onChange={setSortBy} />
            </div>

            <div>
                {loading ? <Loader /> : <SalesGrid sales={data.results || []} />}
            </div>


            {/* Pagination */}
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-600">
                Showing {data.results.length} of {data.total} results
              </div>
              <Pagination
                page={data.page || page}
                totalPages={data.totalPages || 1}
                onPageChange={setPage}
              />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
