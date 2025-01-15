import React from 'react';
import { useDeliveryStore } from '../store/useDeliveryStore';
import { Clock, MapPin, Truck } from 'lucide-react';

const Deliveries = () => {
  const { deliveries, loading, error } = useDeliveryStore();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8">
        <div className="bg-red-50 text-red-500 p-4 rounded-lg">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Active Deliveries</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
          New Delivery
        </button>
      </div>

      <div className="grid gap-6">
        {deliveries.map((delivery) => (
          <div key={delivery.id} className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className={`p-2 rounded-full ${
                  delivery.status === 'in-progress' ? 'bg-blue-100 text-blue-500' :
                  delivery.status === 'completed' ? 'bg-green-100 text-green-500' :
                  'bg-yellow-100 text-yellow-500'
                }`}>
                  <Truck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Delivery #{delivery.id}</h3>
                  <p className="text-gray-500">{delivery.status}</p>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-gray-400 mr-2" />
                  <span>{delivery.estimatedTime} mins</span>
                </div>
                <button className="text-blue-500 hover:text-blue-600">
                  View Details
                </button>
              </div>
            </div>
            
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-gray-400 mr-2 mt-1" />
                <div>
                  <p className="text-sm text-gray-500">Pickup</p>
                  <p>{delivery.pickupLocation.address}</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-gray-400 mr-2 mt-1" />
                <div>
                  <p className="text-sm text-gray-500">Dropoff</p>
                  <p>{delivery.dropoffLocation.address}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Deliveries;