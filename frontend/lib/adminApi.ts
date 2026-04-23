import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const ADMIN_KEY = process.env.NEXT_PUBLIC_ADMIN_KEY;

const adminHeaders = {
  "x-admin-key": ADMIN_KEY,
};

export async function getAdminStats() {
  try {
    const res = await axios.get(`${API_URL}/admin/stats`, {
      headers: adminHeaders,
    });
    return res.data;
  } catch (error: any) {
    console.error("Stats fetch error:", error?.response?.status, error?.response?.data);
    return { total: 0, today: 0, pending: 0, completed: 0 };
  }
}

export async function getAdminBookings() {
  try {
    const res = await axios.get(`${API_URL}/admin/bookings`, {
      headers: adminHeaders,
    });
    return res.data;
  } catch (error: any) {
    console.error("Bookings fetch error:", error?.response?.status, error?.response?.data);
    return [];
  }
}

export async function getAdminPartners() {
  try {
    const res = await axios.get(`${API_URL}/admin/partners`, {
      headers: adminHeaders,
    });
    return res.data;
  } catch (error: any) {
    console.error("Partners fetch error:", error?.response?.status, error?.response?.data);
    return [];
  }
}

export async function updateBookingStatus(id: string, status: string) {
  try {
    const res = await axios.patch(
      `${API_URL}/admin/bookings/${id}/status`,
      { status },
      { headers: adminHeaders }
    );
    return res.data;
  } catch (error: any) {
    console.error("Status update error:", error?.response?.status, error?.response?.data);
    return null;
  }
}

// Aliases to prevent UI build breaks since the user snippet dropped the original export names
export const fetchAdminStats = getAdminStats;
export const fetchAdminBookings = getAdminBookings;
export const fetchAdminPartners = getAdminPartners;

export async function updatePartnerStatus(id: string, status: string) {
  try {
    const res = await axios.patch(
      `${API_URL}/admin/partner-status/${id}`,
      { status },
      { headers: adminHeaders }
    );
    return res.data;
  } catch (error: any) {
    return null;
  }
}
