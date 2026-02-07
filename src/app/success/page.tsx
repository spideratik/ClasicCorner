"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';
import { CheckCircle2, Heart } from 'lucide-react';

export default function SuccessPage() {
  // Optional: You could use the session_id from the URL to fetch order details
  
  return (
    <div className="min-h-screen bg-[#F9F8F4] flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white p-10 rounded-[3rem] shadow-sm border border-[#E7C6BB] text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-[#9CAF88]/10 p-4 rounded-full">
            <CheckCircle2 className="w-12 h-12 text-[#9CAF88]" />
          </div>
        </div>
        
        <h1 className="font-serif text-3xl text-[#3E2F28] mb-4">Thank You!</h1>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Your order has been placed beautifully. We are preparing your items to bring that 
          <span className="text-[#D4A373] italic"> classic corner </span> 
          vibe to your home.
        </p>

        <div className="space-y-4">
          <Link 
            href="/shop" 
            className="block w-full py-4 bg-[#3E2F28] text-white rounded-full font-bold hover:bg-[#9CAF88] transition-all"
          >
            Continue Shopping
          </Link>
          
          <Link 
            href="/" 
            className="block w-full py-4 border border-[#E7C6BB] text-[#3E2F28] rounded-full font-medium hover:bg-[#FDFCFB] transition-all"
          >
            Back to Home
          </Link>
        </div>

        <div className="mt-10 flex items-center justify-center text-[#E7C6BB] space-x-2">
          <Heart className="w-4 h-4 fill-current" />
          <span className="text-xs uppercase tracking-widest text-gray-400">Made for you</span>
        </div>
      </div>
    </div>
  );
}