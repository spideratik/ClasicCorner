// src/app/admin/page.tsx
import React from 'react';

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-[#FDFCFB] p-10">
      <h1 className="font-serif text-3xl text-[#3E2F28] mb-6">Classic Corner Admin</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white border border-[#E7C6BB] rounded-2xl shadow-sm">
          <h3 className="text-sm font-bold text-gray-500 uppercase">Total Sales</h3>
          <p className="text-2xl font-serif text-[#3E2F28]">$0.00</p>
        </div>
        <div className="p-6 bg-white border border-[#E7C6BB] rounded-2xl shadow-sm">
          <h3 className="text-sm font-bold text-gray-500 uppercase">Active Orders</h3>
          <p className="text-2xl font-serif text-[#3E2F28]">0</p>
        </div>
        <div className="p-6 bg-white border border-[#E7C6BB] rounded-2xl shadow-sm">
          <h3 className="text-sm font-bold text-gray-500 uppercase">Inventory Items</h3>
          <p className="text-2xl font-serif text-[#3E2F28]">5 Categories</p>
        </div>
      </div>
      
      <div className="mt-10 p-6 bg-white border border-[#E7C6BB] rounded-2xl">
        <p className="text-[#9CAF88] italic">Welcome to your dashboard. Start by adding products to your categories.</p>
      </div>
    </div>
  );
}