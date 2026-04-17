import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';

interface Booking {
  id: string;
  name: string;
  phone: string;
  address: string;
  bikeModel: string;
  servicePackage: string;
  price: string;
  status: string;
  createdAt: string;
}

interface BookingsTableProps {
  bookings: Booking[];
  loading: boolean;
  onStatusChange: (id: string, newStatus: string) => void;
}

export default function BookingsTable({ bookings, loading, onStatusChange }: BookingsTableProps) {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');

  const filteredBookings = useMemo(() => {
    return bookings.filter(b => {
      const matchesSearch = b.name?.toLowerCase().includes(search.toLowerCase()) || 
                            b.phone?.includes(search);
      let matchesFilter = true;
      if (filter === 'Today') {
        const today = new Date().toISOString().split('T')[0];
        matchesFilter = b.createdAt?.startsWith(today);
      } else if (filter !== 'All') {
        matchesFilter = b.status?.toLowerCase() === filter.toLowerCase();
      }
      return matchesSearch && matchesFilter;
    });
  }, [bookings, search, filter]);

  const getStatusColor = (status: string) => {
    switch (status?.toLowerCase()) {
      case 'done':
      case 'completed':
        return 'bg-green-500/10 text-green-500 border-green-500/20';
      case 'confirmed':
        return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
      default:
        return 'bg-amber-500/10 text-amber-500 border-amber-500/20';
    }
  };

  return (
    <div className="bg-[#161b22] border border-white/10 rounded-xl overflow-hidden mb-8">
      {/* Header & Controls */}
      <div className="p-6 border-b border-white/10 flex flex-col md:flex-row gap-4 justify-between items-center bg-[#1a2027]">
        <h2 className="text-xl font-bold text-white flex-shrink-0">Recent Bookings</h2>
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input 
              type="text" 
              placeholder="Search name or phone..." 
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full bg-[#0d1117] border border-white/10 rounded-lg pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-accent"
            />
          </div>
          <select 
            value={filter}
            onChange={e => setFilter(e.target.value)}
            className="w-full sm:w-36 bg-[#0d1117] border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-accent appearance-none cursor-pointer"
          >
            <option value="All">All Status</option>
            <option value="Today">Today</option>
            <option value="Pending">Pending</option>
            <option value="Confirmed">Confirmed</option>
            <option value="Done">Completed</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left whitespace-nowrap">
          <thead className="bg-[#0d1117] text-gray-400 text-xs uppercase tracking-wider">
            <tr>
              <th className="px-6 py-4 font-semibold">ID / Date</th>
              <th className="px-6 py-4 font-semibold">Customer</th>
              <th className="px-6 py-4 font-semibold">Details</th>
              <th className="px-6 py-4 font-semibold">Package & Price</th>
              <th className="px-6 py-4 font-semibold">Status</th>
              <th className="px-6 py-4 font-semibold text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {loading ? (
              [...Array(5)].map((_, i) => (
                <tr key={i}>
                  <td colSpan={6} className="px-6 py-4">
                    <div className="h-12 w-full bg-white/5 animate-pulse rounded"></div>
                  </td>
                </tr>
              ))
            ) : filteredBookings.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                  No bookings found
                </td>
              </tr>
            ) : (
              filteredBookings.map((b) => (
                <tr key={b.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-4">
                    <p className="text-white font-medium text-sm">#{b.id?.slice(0, 6)}</p>
                    <p className="text-gray-500 text-xs mt-1">{new Date(b.createdAt).toLocaleDateString()}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-white font-medium text-sm">{b.name}</p>
                    <p className="text-gray-500 text-xs mt-1">{b.phone}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-white text-sm">{b.bikeModel}</p>
                    <p className="text-gray-500 text-xs mt-1 truncate max-w-[200px]" title={b.address}>
                      {b.address}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-accent text-sm font-medium">{b.servicePackage}</p>
                    <p className="text-white font-bold text-xs mt-1">₹{b.price}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${getStatusColor(b.status)}`}>
                      {b.status || 'Pending'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <select
                      value={b.status}
                      onChange={(e) => onStatusChange(b.id, e.target.value)}
                      className="bg-[#0d1117] border border-white/20 rounded md:rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-accent cursor-pointer"
                    >
                      <option value="pending">Pending</option>
                      <option value="confirmed">Confirmed</option>
                      <option value="done">Done</option>
                    </select>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
