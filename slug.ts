import { Product } from '../../../types';
import { getProductBySlug } from '../../../lib/api';

interface Props {
  params: { slug: string };
}

export default async function ProductDetail({ params }: Props) {
  const product: Product = await getProductBySlug(params.slug);
  if (!product) return <div>Product not found</div>;

  return (
    <main className="p-8">
      <h1 className="text-3xl">{product.name}</h1>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <p>Stock: {product.inventory}</p>
      <p>Last Updated: {new Date(product.lastUpdated).toLocaleString()}</p>
    </main>
  );
}

// ISR: Revalidate every 60s
export const revalidate = 60;
