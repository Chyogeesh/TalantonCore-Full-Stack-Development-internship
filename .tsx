import ProductList from '../components/ProductList';
import { Product } from '../types';
import { getProducts } from '../lib/api'; // Helper for fetch

// Generate static params at build time
export const revalidate = 0; // SSG - no reval

export default async function Home() {
  const products: Product[] = await getProducts(); // Fetched at build time

  return (
    <main className="p-8">
      <h1 className="text-3xl mb-4">Product Catalog</h1>
      <ProductList products={products} />
    </main>
  );
}
