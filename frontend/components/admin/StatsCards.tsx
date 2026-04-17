import { LayoutDashboard, Calendar, Clock, CheckCircle } from 'lucide-react';

interface StatsProps {
  stats: {
    total: number;
    today: number;
    pending: number;
    completed: number;
  } | null;
  loading: boolean;
}

export default function StatsCards({ stats, loading }: StatsProps) {
  const cards = [
    { label: 'Total Bookings', value: stats?.total, icon: LayoutDashboard, color: 'text-blue-500' },
    { label: "Today's Bookings", value: stats?.today, icon: Calendar, color: 'text-indigo-500' },
    { label: 'Pending Bookings', value: stats?.pending, icon: Clock, color: 'text-amber-500' },
    { label: 'Completed Bookings', value: stats?.completed, icon: CheckCircle, color: 'text-green-500' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {cards.map((card, idx) => {
        const Icon = card.icon;
        return (
          <div key={idx} className="bg-[#161b22] border border-white/10 rounded-xl p-6 shadow-sm flex items-center gap-4">
            <div className={`p-4 bg-white/5 rounded-lg ${card.color}`}>
              <Icon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-400 font-medium">{card.label}</p>
              {loading ? (
                <div className="h-8 w-16 bg-white/10 animate-pulse rounded mt-1"></div>
              ) : (
                <h3 className="text-2xl font-bold text-white mt-1">{card.value !== undefined ? card.value : '0'}</h3>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
