import React from 'react';

interface DashboardCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  gradient: string;
}

export function DashboardCard({ title, value, icon, gradient }: DashboardCardProps) {
  return (
    <div className={`${gradient} p-6 rounded-2xl shadow-lg`}>
      <div className="flex items-center justify-between">
        <div className="text-white">{icon}</div>
        <div className="text-right">
          <p className="text-white/80 text-sm font-medium mb-1">{title}</p>
          <h3 className="text-white text-2xl font-bold">{value}</h3>
        </div>
      </div>
    </div>
  );
}