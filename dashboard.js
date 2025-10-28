import { Product } from '../../types';
import { getProducts } from '../../lib/api';

export const dynamic = 'force-dynamic'; // SSR on every request

export default async function Dashboard() {
  const products: Product[] = await getProducts(); // Fetched on request

  const totalProducts = products.length;
  const lowStock = products.filter(p => p.inventory < 10).length;

  return (
    <main className="p-8">
      <h1 className="text-3xl mb-4">Inventory Dashboard</h1>
      <div className="mb-4">
        <p>Total Products: {totalProducts}</p>
        <p>Low Stock Alerts: {lowStock}</p>
      </div>
      <ul>
        {products.map(p => (
          <li key={p.id}>{p.name} - Stock: {p.inventory}</li>
        ))}
      </ul>
    </main>
  );
}
