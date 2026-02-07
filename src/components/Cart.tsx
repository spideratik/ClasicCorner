"use client";
import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Trash2 } from 'lucide-react';

// Replace with your public key from Stripe Dashboard
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function Cart({ cartItems }: { cartItems: any[] }) {
  const [isRedirecting, setIsRedirecting] = useState(false);

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);

  const handleCheckout = async () => {
    setIsRedirecting(true);
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: cartItems }),
      });

      const { sessionId } = await response.json();
      const stripe = await stripePromise;
      await stripe?.redirectToCheckout({ sessionId });
    } catch (err) {
      console.error("Checkout failed", err);
      alert("Something went wrong with checkout.");
    } finally {
      setIsRedirecting(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-3xl border border-[#E7C6BB] shadow-sm">
      <h2 className="font-serif text-2xl text-[#3E2F28] mb-6">Your Shopping Bag</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-400 italic">Your bag is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b border-[#F9F8F4] pb-4">
              <div className="flex items-center space-x-4">
                <img src={item.mainImage} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
                <div>
                  <h4 className="font-medium text-[#3E2F28]">{item.name}</h4>
                  <p className="text-sm text-gray-500">${item.price}</p>
                </div>
              </div>
              <button className="text-gray-400 hover:text-red-400 transition">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}

          <div className="pt-6">
            <div className="flex justify-between text-lg font-serif mb-6">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <button
              onClick={handleCheckout}
              disabled={isRedirecting}
              className="w-full py-4 bg-[#3E2F28] text-white rounded-full font-bold hover:bg-[#9CAF88] transition-all disabled:opacity-50"
            >
              {isRedirecting ? "Processing..." : "Proceed to Checkout"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}