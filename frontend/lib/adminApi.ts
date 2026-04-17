import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
const ADMIN_SECRET = process.env.NEXT_PUBLIC_ADMIN_KEY || '';

const adminAxios = axios.create({
  baseURL: API_URL,
  headers: {
    'Authorization': `Bearer ${ADMIN_SECRET}`
  }
});

export const fetchAdminStats = async () => {
  const { data } = await adminAxios.get('/admin/stats');
  return data;
};

export const fetchAdminBookings = async () => {
  const { data } = await adminAxios.get('/admin/bookings');
  return data;
};

export const fetchAdminPartners = async () => {
  const { data } = await adminAxios.get('/admin/partners');
  return data;
};

export const updateBookingStatus = async (id: string, status: string) => {
  const { data } = await adminAxios.patch(`/admin/booking-status/${id}`, { status });
  return data;
};

export const updatePartnerStatus = async (id: string, status: string) => {
  const { data } = await adminAxios.patch(`/admin/partner-status/${id}`, { status });
  return data;
};
