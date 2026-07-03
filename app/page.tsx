// app/page.tsx
'use client';

import { Suspense } from 'react';
import ProductGrid from './components/ProductGrid';
import Link from 'next/link';
import { useCart } from './cart-context';

export default function Home() {
  const { cart } = useCart();
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-zinc-50">
      <header className="bg-white border-b py-8 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold">ShopHub</h1>
            <p className="text-zinc-600 mt-1">Modern Product Listing</p>
          </div>

          <Link 
            href="/cart"
            className="flex items-center gap-3 bg-black hover:bg-zinc-800 text-white px-6 py-3 rounded-full transition-all"
          >
            🛒 Cart 
            <span className="bg-white text-black text-xs font-medium px-2.5 py-1 rounded-full">
              {cartCount}
            </span>
          </Link>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold mb-10">All Products</h2>
        
        <Suspense fallback={
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array(8).fill(0).map((_, i) => (
              <div key={i} className="h-96 bg-zinc-200 rounded-3xl animate-pulse" />
            ))}
          </div>
        }>
          <ProductGrid />
        </Suspense>
      </div>
    </div>
  );
}