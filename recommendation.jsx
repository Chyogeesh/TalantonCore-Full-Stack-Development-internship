import { Product } from '../../types';
import { getProducts } from '../../lib/api';
import { WishlistButton } from '../../components/WishlistButton'; // Client component

// Server Component: Fetch on server
export default async function Recommendations() {
  const products: Product[] = await getProducts(); // Server-side fetch
  const recommended = products.slice(0, 2); // e.g., top 2

  return (
    <main className="p-8">
      <h1 className="text-3xl mb-4">Recommended Products</h1>
      {recommended.map(p => (
        <div key={p.id} className="border p-4 mb-4">
          <h2>{p.name}</h2>
          <p>${p.price}</p>
          {/* Client Component for interactivity */}
          <WishlistButton productId={p.id} />
        </div>
      ))}
    </main>
  );
}
