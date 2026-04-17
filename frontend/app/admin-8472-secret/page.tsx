"use client";

import { useEffect, useState } from 'react';
import { 
  fetchAdminStats, 
  fetchAdminBookings, 
  fetchAdminPartners, 
  updateBookingStatus, 
  updatePartnerStatus 
} from '@/lib/adminApi';
import StatsCards from '@/components/admin/StatsCards';
import BookingsTable from '@/components/admin/BookingsTable';
import PartnersTable from '@/components/admin/PartnersTable';
import AdminToast, { ToastType } from '@/components/admin/AdminToast';

export default function AdminDashboard() {
  const [stats, setStats] = useState<any>(null);
  const [bookings, setBookings] = useState<any[]>([]);
  const [partners, setPartners] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastType, setToastType] = useState<ToastType>(null);

  const showToast = (message: string, type: ToastType) => {
    setToastMessage(message);
    setToastType(type);
  };

  const loadData = async () => {
    try {
      setLoading(true);
      const [statsRes, bookingsRes, partnersRes] = await Promise.all([
        fetchAdminStats().catch(() => null),
        fetchAdminBookings().catch(() => []),
        fetchAdminPartners().catch(() => [])
      ]);
      
      if (statsRes?.success) setStats(statsRes.data);
      if (bookingsRes?.success) setBookings(bookingsRes.data);
      if (partnersRes?.success) setPartners(partnersRes.data);
    } catch (error) {
      showToast('Failed to load dashboard data.', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Basic body styling for isolation since we disabled global components
    document.body.style.backgroundColor = '#0d1117'; // dark theme
    loadData();
    
    return () => {
      document.body.style.backgroundColor = '';
    }
  }, []);

  const handleBookingStatusChange = async (id: string, newStatus: string) => {
    try {
      // Optimistic update
      setBookings(prev => prev.map(b => b.id === id ? { ...b, status: newStatus } : b));
      const res = await updateBookingStatus(id, newStatus);
      if (res?.success) {
        showToast('Booking status updated.', 'success');
        // Refresh stats
        const newStats = await fetchAdminStats();
        if (newStats?.success) setStats(newStats.data);
      } else {
        throw new Error(res?.error || 'Update failed');
      }
    } catch (error) {
      showToast('Failed to update booking status.', 'error');
      // Revert optimism by reloading
      loadData();
    }
  };

  const handlePartnerStatusChange = async (id: string, newStatus: string) => {
    try {
      // Optimistic update
      setPartners(prev => prev.map(p => p.id === id ? { ...p, status: newStatus } : p));
      const res = await updatePartnerStatus(id, newStatus);
      if (res?.success) {
        showToast(`Partner application ${newStatus}.`, 'success');
      } else {
        throw new Error(res?.error || 'Update failed');
      }
    } catch (error) {
      showToast('Failed to update partner status.', 'error');
      // Revert optimism
      loadData();
    }
  };

  return (
    <div className="min-h-screen bg-[#0d1117] text-white p-4 md:p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-black uppercase tracking-tight text-white mb-1">
            <span className="text-accent">FixWheel</span> Admin Dashboard
          </h1>
          <p className="text-gray-400 text-sm">Manage bookings and operations</p>
        </header>

        <StatsCards stats={stats} loading={loading} />

        <BookingsTable 
          bookings={bookings} 
          loading={loading} 
          onStatusChange={handleBookingStatusChange} 
        />

        <PartnersTable 
          partners={partners} 
          loading={loading} 
          onStatusChange={handlePartnerStatusChange} 
        />
      </div>

      <AdminToast 
        message={toastMessage} 
        type={toastType} 
        onClose={() => setToastMessage(null)} 
      />
    </div>
  );
}
