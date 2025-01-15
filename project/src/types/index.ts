export interface Delivery {
  id: string;
  pickupLocation: Location;
  dropoffLocation: Location;
  status: 'pending' | 'in-progress' | 'completed';
  estimatedTime: number;
  actualTime?: number;
  driver?: Driver;
  route: Route;
}

export interface Location {
  address: string;
  lat: number;
  lng: number;
}

export interface Driver {
  id: string;
  name: string;
  vehicle: string;
  currentLocation: Location;
  status: 'available' | 'busy';
}

export interface Route {
  points: Location[];
  distance: number;
  duration: number;
  optimizationScore: number;
}