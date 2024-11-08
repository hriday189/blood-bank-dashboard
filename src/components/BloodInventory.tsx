import React from 'react';
import { Droplet } from 'lucide-react';

const bloodTypes = [
  { type: 'A+', level: 75 },
  { type: 'B+', level: 45 },
  { type: 'O+', level: 90 },
  { type: 'AB+', level: 30 },
  { type: 'A-', level: 60 },
  { type: 'B-', level: 25 },
  { type: 'O-', level: 85 },
  { type: 'AB-', level: 15 },
];

export function BloodInventory() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Blood Inventory</h2>
      <div className="grid grid-cols-4 gap-4">
        {bloodTypes.map((blood) => (
          <div key={blood.type} className="text-center">
            <div className="relative w-16 h-16 mx-auto mb-2">
              <div className="absolute inset-0 bg-red-100 rounded-full flex items-center justify-center">
                <Droplet className={`w-8 h-8 ${blood.level < 30 ? 'text-red-500' : 'text-red-400'}`} />
              </div>
              <svg className="transform -rotate-90 w-16 h-16">
                <circle
                  cx="32"
                  cy="32"
                  r="28"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  className="text-gray-200"
                />
                <circle
                  cx="32"
                  cy="32"
                  r="28"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={175.9}
                  strokeDashoffset={175.9 * (1 - blood.level / 100)}
                  className={`${blood.level < 30 ? 'text-red-500' : 'text-red-400'}`}
                />
              </svg>
            </div>
            <h3 className="font-bold text-gray-800">{blood.type}</h3>
            <p className="text-sm text-gray-500">{blood.level}%</p>
          </div>
        ))}
      </div>
    </div>
  );
}