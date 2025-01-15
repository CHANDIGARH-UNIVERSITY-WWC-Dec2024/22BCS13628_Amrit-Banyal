import React from 'react';
import { BarChart3, TrendingUp, Clock, Truck } from 'lucide-react';
import { useDeliveryStore } from '../store/useDeliveryStore';

const StatCard = ({ icon: Icon, label, value, trend }: { icon: any, label: string, value: string, trend: string }) => (
  <div className="bg-white rounded-lg p-6 shadow-md">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-gray-500 text-sm">{label}</p>
        <h3 className="text-2xl font-bold mt-1">{value}</h3>
        <p className="text-green-500 text-sm mt-2">{trend}</p>
      </div>
      <Icon className="w-8 h-8 text-blue-500" />
    </div>
  </div>
);

const Dashboard = () => {
  const { deliveries, drivers } = useDeliveryStore();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={Truck}
          label="Active Deliveries"
          value="24"
          trend="+12% from last week"
        />
        <StatCard
          icon={Clock}
          label="Average Delivery Time"
          value="28 mins"
          trend="-8% from last week"
        />
        <StatCard
          icon={BarChart3}
          label="Efficiency Score"
          value="94%"
          trend="+5% from last week"
        />
        <StatCard
          icon={TrendingUp}
          label="Cost Savings"
          value="$1,284"
          trend="+18% from last month"
        />
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4">Recent Deliveries</h2>
          {/* Delivery list would go here */}
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4">Route Optimization</h2>
          {/* Route optimization metrics would go here */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;