import { render, screen, fireEvent } from '@testing-library/react';
import ProductCard from '../app/List_Page/ProductCard';
import { CartProvider } from '../app/cart-context';

const mockProduct = {
  id: 1,
  title: "Wireless Headphones",
  price: 79.99,
  thumbnail: "https://via.placeholder.com/300",
  category: "electronics"
};

describe('ProductCard', () => {
  it('renders product details correctly', () => {
    render(
      <CartProvider>
        <ProductCard product={mockProduct} />
      </CartProvider>
    );

    expect(screen.getByText('Wireless Headphones')).toBeInTheDocument();
    expect(screen.getByText('$79.99')).toBeInTheDocument();
    expect(screen.getByText('electronics')).toBeInTheDocument();
  });

  it('calls addToCart when button is clicked', () => {
    render(
      <CartProvider>
        <ProductCard product={mockProduct} />
      </CartProvider>
    );

    const button = screen.getByRole('button', { name: /add to cart/i });
    fireEvent.click(button);

    expect(screen.getByText(/added/i)).toBeInTheDocument();
  });
});