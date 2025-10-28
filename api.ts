import { Product } from '../types';

export async function getProducts(): Promise<Product[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/products`);
  if (!res.ok) throw new Error('Failed to fetch');
  return res.json();
}

export async function getProductBySlug(slug: string): Promise<Product> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/products/${slug}`);
  if (!res.ok) throw new Error('Failed to fetch');
  return res.json();
}
