'use client';

import { useCart } from '../cart-context';
import Image from 'next/image';
import { memo, useMemo } from 'react';

const CartItem = memo(({ item, onUpdate, onRemove }: any) => {
  return (
    <div className="flex gap-6 bg-white p-6 rounded-3xl">
      <Image src={item.thumbnail || item.image} alt={item.title} width={100} height={100} />
      <div className="flex-1">
        <h3>{item.title}</h3>
        <p>${item.price}</p>
        {/* quantity buttons */}
      </div>
    </div>
  );
});

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const totalPrice = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cart]);

  return (
    <div className="min-h-screen bg-zinc-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8">Shopping Cart ({cart.length})</h1>

        {cart.map(item => (
          <CartItem 
            key={item.id} 
            item={item}
            onRemove={removeFromCart}
            onUpdate={updateQuantity}
          />
        ))}

        <div className="text-2xl font-bold mt-8">
          Total: ${totalPrice.toFixed(2)}
        </div>
      </div>
    </div>
  );
}