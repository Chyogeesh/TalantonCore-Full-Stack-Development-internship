'use client';
import { useState } from 'react';
import ProductCard from './ProductCard';
import { Product } from '../types';

interface Props {
  products: Product[];
}

export default function ProductList({ products }: Props) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');

  const filtered = products.filter(p => 
    p.name.toLowerCase().includes(search.toLowerCase()) &&
    (category ? p.category === category : true)
  );

  return (
    <div>
      <input 
        type="text" 
        placeholder="Search..." 
        value={search} 
        onChange={e => setSearch(e.target.value)} 
        className="border p-2 m-2"
      />
      <select value={category} onChange={e => setCategory(e.target.value)} className="border p-2 m-2">
        <option value="">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Books">Books</option>
      </select>
      <div className="grid grid-cols-3">
        {filtered.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}
