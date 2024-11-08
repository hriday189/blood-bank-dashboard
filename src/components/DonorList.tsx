import React from 'react';
import { User } from 'lucide-react';

const donors = [
  { name: 'Sarah Johnson', bloodType: 'A+', lastDonation: '2024-03-01', status: 'Available' },
  { name: 'Michael Chen', bloodType: 'O-', lastDonation: '2024-02-28', status: 'Cooling' },
  { name: 'Emma Davis', bloodType: 'B+', lastDonation: '2024-02-25', status: 'Available' },
];

export function DonorList() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Recent Donors</h2>
      <div className="space-y-4">
        {donors.map((donor, index) => (
          <div key={index} className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50">
            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-red-500" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-gray-800">{donor.name}</h3>
              <p className="text-sm text-gray-500">Last donation: {donor.lastDonation}</p>
            </div>
            <div className="text-right">
              <span className="font-bold text-gray-800">{donor.bloodType}</span>
              <p className={`text-sm ${donor.status === 'Available' ? 'text-green-500' : 'text-orange-500'}`}>
                {donor.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}