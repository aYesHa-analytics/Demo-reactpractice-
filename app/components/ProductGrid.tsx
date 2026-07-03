// app/List_Page/ProductGrid.tsx
import ProductCard from '../List_Page/ProductCard';

const mockProducts = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: 79.99,
    thumbnail: "https://picsum.photos/id/60/400/300",
    category: "electronics"
  },
  {
    id: 2,
    title: "Smart Watch",
    price: 129.99,
    thumbnail: "https://picsum.photos/id/201/400/300",
    category: "electronics"
  },
  {
    id: 3,
    title: "Laptop Backpack",
    price: 49.99,
    thumbnail: "https://picsum.photos/id/201/400/300",
    category: "fashion"
  },
  {
    id: 4,
    title: "Coffee Maker",
    price: 89.99,
    thumbnail: "https://picsum.photos/id/292/400/300",
    category: "home"
  },
  {
    id: 5,
    title: "Running Shoes",
    price: 119.99,
    thumbnail: "https://picsum.photos/id/21/400/300",
    category: "fashion"
  },
];

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {mockProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}