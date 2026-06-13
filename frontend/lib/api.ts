import axios from 'axios';
import { BookingFormData, BookingResponse, PartnerFormData, PartnerResponse, QueryFormData, QueryResponse } from '../types';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export const submitBooking = async (data: BookingFormData): Promise<BookingResponse> => {
  try {
    const response = await axios.post(`${API_URL}/bookings`, data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return {
        success: false,
        error: error.response.data.error || 'Something went wrong. Please try again or call us.',
        details: error.response.data.details
      };
    }
    return {
      success: false,
      error: 'Network error. Please make sure you are connected to the internet.'
    };
  }
};

export const submitPartner = async (data: PartnerFormData): Promise<PartnerResponse> => {
  try {
    const response = await axios.post(`${API_URL}/partners`, data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return {
        success: false,
        error: error.response.data.error || 'Something went wrong. Please try again or call us.',
        details: error.response.data.details
      };
    }
    return {
      success: false,
      error: 'Network error. Please make sure you are connected to the internet.'
    };
  }
};

export const submitQuery = async (data: QueryFormData): Promise<QueryResponse> => {
  try {
    const response = await axios.post(`${API_URL}/queries`, data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return {
        success: false,
        error: error.response.data.error || 'Something went wrong. Please try again or call us.',
        details: error.response.data.details
      };
    }
    return {
      success: false,
      error: 'Network error. Please make sure you are connected to the internet.'
    };
  }
};

