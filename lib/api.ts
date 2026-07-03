// lib/api.ts
export const fetchProducts = async () => {
  const res = await fetch('https://dummyjson.com/products?limit=20');
  if (!res.ok) throw new Error('Failed to fetch products');
  return res.json();
};