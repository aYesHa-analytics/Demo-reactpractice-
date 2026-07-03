
'use client';

import { useState } from 'react';

export default function ProductFilters() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="bg-white border border-gray-200 rounded-3xl p-6 sticky top-6">
      <h3 className="font-semibold mb-4">Filters</h3>
      
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:border-black"
        />
      </div>

      <div>
        <p className="text-sm text-gray-500">
          Total Products: <span className="font-medium text-black">20</span>
        </p>
      </div>
    </div>
  );
}