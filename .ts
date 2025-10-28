import { Product } from '../types'; // Assume types.ts with interface

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <div className="border p-4 m-2 rounded">
      <h2 className="text-xl">{product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <p>Stock: {product.inventory}</p>
      <a href={`/products/${product.slug}`} className="text-blue-500">View Details</a>
    </div>
  );
}
