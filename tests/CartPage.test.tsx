// tests/CartPage.test.tsx
import { render, screen } from '@testing-library/react';
import CartPage from '../app/cart/page';
import { CartProvider } from '../app/cart-context';

describe('CartPage', () => {
  it('shows empty cart message when cart is empty', () => {
    render(
      <CartProvider>
        <CartPage />
      </CartProvider>
    );

    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument();
  });

  it('shows shopping cart title', () => {
    render(
      <CartProvider>
        <CartPage />
      </CartProvider>
    );

    expect(screen.getByText(/shopping cart/i)).toBeInTheDocument();
  });
});