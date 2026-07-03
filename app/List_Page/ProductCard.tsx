// app/List_Page/ProductCard.tsx
'use client';

import Image from 'next/image';
import { useCart } from '../cart-context';
import { memo, useCallback, useMemo } from 'react';

function ProductCard({ product }: { product: any }) {
  const { addToCart, cart } = useCart();

  const handleAddToCart = useCallback(() => {
    addToCart(product);
  }, [addToCart, product.id]);

  // Memoize these calculations
  const cartItem = useMemo(() => {
    return cart.find((item: any) => item.id === product.id);
  }, [cart, product.id]);

  const isInCart = useMemo(() => {
    return !!cartItem;
  }, [cartItem]);

  return (
    <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden hover:shadow-xl transition-all group">
      <div className="relative h-64 bg-white p-6">
        <Image
          src={product.thumbnail || product.image}
          alt={product.title}
          fill
          className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="p-6">
        <p className="text-xs uppercase tracking-widest text-gray-500">{product.category}</p>
        <h3 className="font-semibold text-lg mt-2 line-clamp-2 min-h-[3.5rem]">
          {product.title}
        </h3>

        <div className="mt-6 flex items-center justify-between">
          <span className="text-3xl font-bold">${product.price}</span>
          
          <button
            onClick={handleAddToCart}
            className={`px-6 py-3 rounded-full text-sm font-medium transition ${
              isInCart 
                ? 'bg-green-600 text-white' 
                : 'bg-black hover:bg-zinc-800 text-white'
            }`}
          >
            {isInCart ? `Added (${cartItem?.quantity})` : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default memo(ProductCard);