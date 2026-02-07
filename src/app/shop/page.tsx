import React from 'react';
import Link from 'next/link';

export default function PlaceholderPage() {
  return (
    <div className="min-h-screen bg-[#F9F8F4] flex flex-col items-center justify-center p-10 text-center">
      <h2 className="font-serif text-brand-sage text-sm uppercase tracking-widest mb-2">Classic Corner</h2>
      <h1 className="font-serif text-4xl text-[#3E2F28] mb-6">Something Beautiful is Coming</h1>
      <p className="text-gray-500 italic mb-8 max-w-md">
        We are currently curating our finest collection for this page. Please check back soon.
      </p>
      <Link 
        href="/" 
        className="px-8 py-3 bg-[#3E2F28] text-white rounded-full hover:bg-[#9CAF88] transition-all"
      >
        Return Home
      </Link>
    </div>
  );
}