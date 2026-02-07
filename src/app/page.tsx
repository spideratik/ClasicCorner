"use client";
import { useEffect, useState } from 'react';
import ProductCard from '@/components/ProductCard';

export default function ShopPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products').then(res => res.json()).then(setProducts);
  }, []);

  return (
    <div className="p-8">
      <h1 className="font-serif text-4xl text-center mb-10 text-brand-walnut">Our Collection</h1>
      <div className="columns-2 md:columns-4 gap-6">
        {products.map((p: any) => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}