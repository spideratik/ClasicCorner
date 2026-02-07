"use client";
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { ShoppingBag, ChevronLeft, ShieldCheck, Truck } from 'lucide-react';
import Link from 'next/link';

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetching the specific product by ID
    fetch(`/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="min-h-screen flex items-center justify-center italic text-brand-sage">Loading treasure...</div>;
  if (!product) return <div className="text-center py-20">Product not found.</div>;

  return (
    <main className="bg-[#FDFCFB] min-h-screen">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-6 py-12">
        <Link href="/shop" className="flex items-center text-sm text-brand-sage mb-8 hover:text-brand-walnut transition">
          <ChevronLeft className="w-4 h-4 mr-1" /> Back to Collection
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left: Product Image */}
          <div className="rounded-[3rem] overflow-hidden bg-brand-cream shadow-inner">
            <img 
              src={product.mainImage} 
              alt={product.name} 
              className="w-full h-auto object-cover hover:scale-105 transition duration-700"
            />
          </div>

          {/* Right: Product Details */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-brand-sage font-bold mb-2">
                {product.category}
              </p>
              <h1 className="font-serif text-5xl text-brand-walnut leading-tight">
                {product.name}
              </h1>
              <p className="text-2xl text-brand-terracotta mt-4">${product.price}</p>
            </div>

            <p className="text-gray-600 leading-relaxed italic text-lg">
              "{product.description || "A timeless piece curated specifically for the modern home, blending heritage craft with contemporary minimalist aesthetic."}"
            </p>

            <div className="space-y-4 pt-6">
              <button className="w-full py-5 bg-brand-walnut text-white rounded-full font-bold flex items-center justify-center space-x-3 hover:bg-brand-sage transition-all shadow-lg hover:shadow-brand-sage/20">
                <ShoppingBag className="w-5 h-5" />
                <span>Add to Shopping Bag</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4 pt-8 border-t border-brand-cream">
              <div className="flex items-center space-x-3 text-xs text-gray-500 uppercase tracking-widest">
                <Truck className="w-5 h-5 text-brand-sage" />
                <span>Fast Delivery</span>
              </div>
              <div className="flex items-center space-x-3 text-xs text-gray-500 uppercase tracking-widest">
                <ShieldCheck className="w-5 h-5 text-brand-sage" />
                <span>Secure Checkout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}