"use client";
import React from 'react';
import Link from 'next/link';
import { ShoppingBag, Search, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#F9F8F4] px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <Menu className="text-[#3E2F28] w-6 h-6" />
        </div>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest text-[#3E2F28]">
          <Link href="/shop" className="hover:text-[#9CAF88] transition">Shop</Link>
          <Link href="/about" className="hover:text-[#9CAF88] transition">Our Story</Link>
        </div>

        {/* Center Logo */}
        <Link href="/" className="text-2xl font-serif text-[#3E2F28] tracking-tight">
          Classic Corner
        </Link>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-5">
          <Search className="text-[#3E2F28] w-5 h-5 cursor-pointer hover:text-[#D4A373] transition" />
          <Link href="/cart" className="relative group">
            <ShoppingBag className="text-[#3E2F28] w-5 h-5 group-hover:text-[#D4A373] transition" />
            {/* Notification Badge */}
            <span className="absolute -top-2 -right-2 bg-[#9CAF88] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}