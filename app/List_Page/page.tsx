// app/page.tsx
import { Suspense } from 'react';
import ProductGrid from '../components/ProductGrid';

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <h1 className="text-4xl font-bold">ShopHub</h1>
          <p className="text-zinc-500">React 19 + Server Components + TanStack Query</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold mb-8">Product Listing</h2>
        
        <Suspense fallback={
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array(8).fill(0).map((_, i) => (
              <div key={i} className="h-96 bg-zinc-200 rounded-3xl animate-pulse" />
            ))}
          </div>
        }>
          <ProductGrid />
        </Suspense>
      </main>
    </div>
  );
}