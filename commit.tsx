'use client';
import { useState, useEffect } from 'react';
import ProductForm from '../../components/ProductForm';
import { Product } from '../../types';

export default function Admin() {
  const [products, setProducts] = useState<Product[]>([]);
  const [editing, setEditing] = useState<Product | null>(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await fetch('/api/products');
    const data = await res.json();
    setProducts(data);
  };

  const handleSubmit = async (data: Partial<Product>) => {
    const method = editing ? 'PUT' : 'POST';
    const url = editing ? `/api/products/${editing.id}` : '/api/products';
    await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${process.env.NEXT_PUBLIC_ADMIN_KEY || 'secret'}` },
      body: JSON.stringify(data),
    });
    fetchProducts();
    setEditing(null);
  };

  return (
    <main className="p-8">
      <h1 className="text-3xl mb-4">Admin Panel</h1>
      <ProductForm product={editing} onSubmit={handleSubmit} />
      <ul className="mt-8">
        {products.map(p => (
          <li key={p.id} className="border p-2 mb-2">
            {p.name} - <button onClick={() => setEditing(p)} className="text-blue-500">Edit</button>
          </li>
        ))}
      </ul>
    </main>
  );
}
