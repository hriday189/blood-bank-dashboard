import React from 'react';
import { Heart, Users, Calendar, Activity, Menu, Bell, Search } from 'lucide-react';
import { DashboardCard } from './components/DashboardCard';
import { DonorList } from './components/DonorList';
import { BloodInventory } from './components/BloodInventory';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Menu className="h-6 w-6 text-gray-500" />
              <h1 className="ml-4 text-xl font-bold text-red-600">BloodBank Dashboard</h1>
            </div>
            <div className="flex items-center gap-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <button className="relative">
                <Bell className="h-6 w-6 text-gray-500" />
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                  3
                </span>
              </button>
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Profile"
                className="h-8 w-8 rounded-full"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <DashboardCard
            title="Total Donations"
            value="1,234"
            icon={<Heart className="h-6 w-6" />}
            gradient="bg-gradient-to-r from-red-500 to-pink-500"
          />
          <DashboardCard
            title="Active Donors"
            value="856"
            icon={<Users className="h-6 w-6" />}
            gradient="bg-gradient-to-r from-blue-500 to-indigo-500"
          />
          <DashboardCard
            title="This Month"
            value="89"
            icon={<Calendar className="h-6 w-6" />}
            gradient="bg-gradient-to-r from-green-500 to-emerald-500"
          />
          <DashboardCard
            title="Success Rate"
            value="98%"
            icon={<Activity className="h-6 w-6" />}
            gradient="bg-gradient-to-r from-purple-500 to-violet-500"
          />
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <BloodInventory />
          <DonorList />
        </div>
      </main>
    </div>
  );
}

export default App;