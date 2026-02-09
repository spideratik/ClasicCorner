import React from 'react';
import { Search, ShoppingCart, Heart, Phone, Mail, User, Laptop, Smartphone, Tablet, Mouse, Camera, Watch, Printer, Headphones } from 'lucide-react';

const Homepage = () => {
  // Mock Data for Categories
  const categories = [
    { name: 'Smart Phones', icon: <Smartphone size={32} /> },
    { name: 'Tablets', icon: <Tablet size={32} /> },
    { name: 'Mouses', icon: <Mouse size={32} /> },
    { name: 'Cameras', icon: <Camera size={32} /> },
    { name: 'Smart Watches', icon: <Watch size={32} /> },
    { name: 'Laptops', icon: <Laptop size={32} /> },
    { name: 'PCs', icon: <Laptop size={32} /> },
    { name: 'Printers', icon: <Printer size={32} /> },
    { name: 'Earbuds', icon: <Headphones size={32} /> },
    { name: 'Head Phones', icon: <Headphones size={32} /> },
  ];

  // Mock Data for Products
  const products = Array(12).fill({
    name: 'SMART PHONE',
    price: '$22',
    rating: 5,
    image: 'https://via.placeholder.com/150' 
  });

  return (
    <div className="font-sans text-gray-800">
      {/* --- TOP BAR --- */}
      <div className="bg-[#3b82f6] text-white text-xs py-2 px-10 flex justify-between items-center">
        <div className="flex gap-4">
          <span className="flex items-center gap-1"><Phone size={14}/> +880123456789</span>
          <span className="flex items-center gap-1"><Mail size={14}/> test@gmail.com</span>
        </div>
        <div className="flex gap-4">
          <span className="flex items-center gap-1 cursor-pointer"><User size={14}/> Login</span>
          <span className="flex items-center gap-1 cursor-pointer font-bold">Register</span>
        </div>
      </div>

      {/* --- HEADER / NAV --- */}
      <header className="py-6 px-10 flex justify-between items-center bg-white">
        <h1 className="text-2xl font-black text-[#1e40af] italic">SINGITRONIC</h1>
        <div className="flex-1 max-w-xl mx-10 flex">
          <input type="text" placeholder="Search here..." className="w-full border p-2 rounded-l-md outline-none focus:border-blue-500" />
          <button className="bg-[#3b82f6] text-white px-6 rounded-r-md flex items-center gap-2">Search</button>
        </div>
        <div className="flex gap-6 text-gray-600">
          <div className="relative"><Heart /><span className="absolute -top-2 -right-2 bg-blue-600 text-white text-[10px] rounded-full px-1">0</span></div>
          <div className="relative"><ShoppingCart /><span className="absolute -top-2 -right-2 bg-blue-600 text-white text-[10px] rounded-full px-1">0</span></div>
        </div>
      </header>

      {/* --- HERO SECTION --- */}
      <section className="bg-[#3b82f6] text-white py-20 px-10 flex items-center justify-between overflow-hidden">
        <div className="max-w-xl">
          <h2 className="text-5xl font-bold mb-4 uppercase">The Product of the Future</h2>
          <p className="mb-8 opacity-90 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div className="flex gap-4">
            <button className="bg-white text-blue-600 px-8 py-2 rounded font-bold uppercase hover:bg-gray-100">Buy Now</button>
            <button className="border-2 border-white text-white px-8 py-2 rounded font-bold uppercase hover:bg-white hover:text-blue-600">Learn More</button>
          </div>
        </div>
        <div className="hidden lg:block relative">
           {/* Replace with your smartwatch image */}
          <img src="https://via.placeholder.com/400" alt="Watch" className="drop-shadow-2xl" />
        </div>
      </section>

      {/* --- INTRO BANNER --- */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-300 py-16 text-center text-white">
        <h2 className="text-4xl font-black mb-2 uppercase tracking-tight">Introducing <span className="text-[#1e3a8a]">Singitronic</span></h2>
        <p className="mb-6 font-medium">Buy the latest electronics. The best electronics for tech lovers.</p>
        <button className="bg-white text-blue-600 px-10 py-2 font-bold uppercase text-sm">Shop Now</button>
      </section>

      {/* --- BROWSE CATEGORIES --- */}
      <section className="bg-[#3b82f6] py-16 px-10">
        <h3 className="text-white text-3xl font-bold text-center mb-10 uppercase italic">Browse Categories</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {categories.map((cat, i) => (
            <div key={i} className="bg-white p-6 flex flex-col items-center justify-center rounded shadow-md hover:scale-105 transition-transform cursor-pointer">
              <div className="text-blue-500 mb-2">{cat.icon}</div>
              <span className="text-xs font-bold uppercase text-center">{cat.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* --- FEATURED PRODUCTS --- */}
      <section className="bg-[#3b82f6] pb-20 px-10">
        <h3 className="text-white text-3xl font-bold text-center mb-10 uppercase italic">Featured Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {products.map((prod, i) => (
            <div key={i} className="bg-white p-4 flex flex-col items-center rounded-sm">
              <div className="h-40 w-full bg-gray-50 mb-4 flex items-center justify-center">
                <img src={prod.image} alt={prod.name} className="object-contain" />
              </div>
              <h4 className="text-blue-600 font-bold text-xs uppercase tracking-tighter">{prod.name}</h4>
              <p className="font-bold text-sm mb-1">{prod.price}</p>
              <div className="flex text-yellow-400 mb-4">{'★'.repeat(prod.rating)}</div>
              <button className="bg-blue-600 text-white text-[10px] py-2 w-full uppercase font-bold tracking-widest hover:bg-blue-700">View Product</button>
            </div>
          ))}
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-white py-12 px-10 border-t flex flex-wrap justify-between items-start gap-10">
        <div className="max-w-xs">
          <h2 className="text-xl font-black text-[#1e40af] italic mb-4">SINGITRONIC</h2>
        </div>
        <div className="flex flex-wrap gap-16">
          <div>
            <h5 className="font-bold text-blue-700 mb-4 text-xs uppercase">Sale</h5>
            <ul className="text-[10px] space-y-2 text-gray-500 uppercase font-medium">
              <li>Discount</li>
              <li>News</li>
              <li>Top Sellers</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-blue-700 mb-4 text-xs uppercase">About Us</h5>
            <ul className="text-[10px] space-y-2 text-gray-500 uppercase font-medium">
              <li>About Singitronic</li>
              <li>Work With Us</li>
              <li>Company Profile</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-blue-700 mb-4 text-xs uppercase">Buying</h5>
            <ul className="text-[10px] space-y-2 text-gray-500 uppercase font-medium">
              <li>Loyalty Card</li>
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;