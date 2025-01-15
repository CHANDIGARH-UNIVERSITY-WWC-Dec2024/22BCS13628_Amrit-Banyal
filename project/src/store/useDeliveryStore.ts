import { create } from 'zustand';
import { Delivery, Driver } from '../types';

interface DeliveryStore {
  deliveries: Delivery[];
  drivers: Driver[];
  loading: boolean;
  error: string | null;
  setDeliveries: (deliveries: Delivery[]) => void;
  setDrivers: (drivers: Driver[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useDeliveryStore = create<DeliveryStore>((set) => ({
  deliveries: [],
  drivers: [],
  loading: false,
  error: null,
  setDeliveries: (deliveries) => set({ deliveries }),
  setDrivers: (drivers) => set({ drivers }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
}));