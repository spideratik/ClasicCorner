import React from 'react';
import './globals.css'; // Or whatever your CSS file is named
import { Search, ShoppingCart, Heart, Phone, Mail, User, Laptop, Smartphone, Tablet, Mouse, Camera, Watch, Printer, Headphones, BedDouble, Paperclip } from 'lucide-react';

const Homepage = () => {
  // Mock Data for Categories
  const categories = [
    { name: 'Bed Sheet', icon: <BedDouble size={32} /> },
    { name: 'Curtains', icon: <Paperclip size={32} /> },
    { name: 'Carpates', icon: <Mouse size={32} /> },
    { name: 'Ceramics', icon: <Camera size={32} /> },
    { name: 'Indoor Plants', icon: <Watch size={32} /> },
  ];

  // Mock Data for Products
  const products = [
    {
      name: "Pink Bed Sheet",
      image: "pink-bed-sheet.jpg",
      price: 950,
      rating: 4,
    },
    {
      name: "White Bed Sheet",
      image: "white-bed-sheet.jpg",
      price: 950,
      rating: 5,
    },
    {
      name: "White block print Bed Sheet",
      image: "white-block-print-bed-sheet.jpg",
      price: 950,
      rating: 3,
    },

    {
      name: "white Bed Sheet",
      image: "white-blue-block.jpg",
      price: 950,
      rating: 3,
    },

    {
      name: "white pink Bed Sheet",
      image: "white-pink-flower-bed-sheet.jpg",
      price: 950,
      rating: 3,
    },

    {
      name: "yellow Bed Sheet",
      image: "yellow-bed-sheet.jpg",
      price: 1050,
      rating: 3,
    },
  ];

  return (
    <div className="bg-blue-100 min-h-screen">
      {/* --- TOP BAR --- */}
      <div className="bg-[#3b82f6] text-white text-xs py-2 px-10 flex justify-between items-center">
        <div className="flex gap-4">
          <span className="flex items-center gap-1"><Phone size={14}/> +88015</span>
          <span className="flex items-center gap-1"><Mail size={14}/> test@gmail.com</span>
        </div>
        <div className="flex gap-4">
          <span className="flex items-center gap-1 cursor-pointer font-bold py-3"><User size={14}/> Login</span>
          <span className="flex items-center gap-1 cursor-pointer font-bold">Register</span>
        </div>
      </div>

      {/* --- HEADER / NAV --- */}
      <header className="py-6 px-10 flex justify-between items-center bg-white">
      <h1 className="text-2xl font-black text-[#1e40af] italic">
  <div>Home sweet home</div>
  <div>Where dreams are designed</div>
</h1>
        <div className="flex-1 max-w-xl mx-10 flex">
          <input type="text" placeholder="Search here..." className="w-full border p-2 rounded-l-md outline-none focus:border-blue-500" />
          <button className="bg-[#3b82f6] text-white px-6 rounded-r-md flex items-center gap-2">Search</button>
        </div>
        <div className="flex gap-6 text-gray-600">
          <div className="relative"><Heart /><span className="absolute -top-2 -right-2 bg-blue-600 text-white text-[10px] rounded-full px-1">0</span></div>
          <div className="relative"><ShoppingCart /><span className="absolute -top-2 -right-2 bg-blue-600 text-white text-[10px] rounded-full px-1">0</span></div>
        </div>
      </header>
      <h1 className="bg-brand-sage text-white p-10 text-5xl italic">CLASSIC CORNER</h1>
    
      {/* --- HERO SECTION --- */}
<section className="min-h-screen bg-brand-blue flex flex-col md:flex-row items-center justify-center gap-10 px-5 py-10">
  
  {/* Left Side: Brand Text */}
  <div className="max-w-md space-y-6 text-center md:text-left">
    <h2 className="text-5xl font-bold text-brand-walnut uppercase leading-tight">
      The Product of <br /> the Future
    </h2>
    <p className="text-brand-walnut opacity-100 text-lg">
      Experience the comfort of our premium bed sheets, crafted for your lifestyle.
    </p>
    <div className="flex justify-center md:justify-start gap-4">
      <button className="bg-brand-sage text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-opacity-90 transition">
        Buy Now
      </button>
      <button className="border-2 border-brand-sage text-brand-sage px-8 py-3 rounded-full font-bold hover:bg-brand-sage hover:text-white transition">
        Learn More
      </button>
    </div>
  </div>

  {/* Right Side: Product Card */}
  
  <div className="bg-white p-6 rounded-[2.5rem] shadow-2xl flex flex-col items-center gap-8 border border-white/50 hover:-translate-y-2 transition-transform duration-300">
    <h3 className="text-brand-walnut font-bold text-xl">Premium Collections</h3>
    
    {/* Controlled Image Box */}
    <div className="w-64 h-64 overflow-hidden rounded-3xl border-4 border-brand-cream shadow-inner">
      <img 
        src="/multiple-bed-sheets.jpg" 
        className="w-full h-full object-cover" 
        alt="Product"
      />
    </div>

    <div className="text-center">
      <span className="text-brand-sage font-bold text-2xl">$120.00</span>
      <p className="text-gray-400 text-sm">Free Shipping Included</p>
    </div>
  </div>

</section>

      {/* --- INTRO BANNER --- */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-300 py-16 text-center text-white">
        <h2 className="text-4xl font-black mb-2 uppercase tracking-tight">Introducing <span className="text-[#1e3a8a]">Clasic Corner</span></h2>
        <p className="mb-6 font-medium">Buy the quality product from us.</p>
        <button className="bg-white text-blue-600 px-10 py-2 font-bold uppercase text-sm">Shop Now</button>
      </section>

      {/* --- BROWSE CATEGORIES --- */}
      <section className="bg-[#3b82f6] py-16 px-10">
        <h3 className="text-white text-3xl font-bold text-center mb-10 uppercase italic">Browse Categories</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-6xl mx-auto">
        {categories.map((cat, i) => (
  <div 
    key={i} 
    className="
      /* Glassmorphism Classes */
      bg-white/10 backdrop-blur-md border border-white/20 
      /* Layout & Animation */
      p-6 flex flex-col items-center justify-center rounded-xl 
      shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] 
      hover:bg-white/20 transition-all duration-300 cursor-pointer group
    "
  >
    <div className="text-white mb-2 group-hover:scale-110 transition-transform">
      {cat.icon}
    </div>
    <span className="text-[10px] font-bold uppercase text-center text-white tracking-widest">
      {cat.name}
    </span>
  </div>
))}
        </div>
      </section>

      {/* --- FEATURED PRODUCTS --- */}
<section className="bg-[#3b82f6] pb-20 px-10">
  <h3 className="text-white text-3xl font-bold text-center mb-10 uppercase italic">Featured Products</h3>
  
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
    {products.map((prod, i) => (
      <div key={i} className="bg-white p-4 flex flex-col items-center rounded-lg shadow-md hover:shadow-xl transition-shadow">
        
        {/* Fixed Product Image Container */}
        <div className="h-80 w-full bg-gray-50 mb-4 flex items-center justify-center overflow-hidden rounded-md">
          <img 
            src={prod.image} 
            alt={prod.name} 
            /* Added w-full h-full and object-contain to keep it centered and proportional */
            className="w-full h-full object-contain p-2" 
          />
        </div>

        {/* Product Details - Added flex-grow to keep buttons aligned at the bottom */}
        <div className="flex flex-col items-center flex-grow w-full">
          <h4 className="text-blue-600 font-bold text-xs uppercase tracking-tighter text-center">{prod.name}</h4>
          <p className="font-bold text-sm mb-1">${prod.price}</p>
          <div className="flex text-yellow-400 mb-4">{'★'.repeat(prod.rating)}</div>
        </div>

        {/* View Product Button */}
        <button className="bg-blue-600 text-white text-[10px] py-2 w-full uppercase font-bold tracking-widest hover:bg-blue-700 transition-colors">
          View Product
        </button>
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