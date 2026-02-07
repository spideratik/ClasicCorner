export default function ProductCard({ product }: { product: any }) {
    return (
      <div className="break-inside-avoid mb-6 group">
        <div className="bg-brand-cream rounded-3xl overflow-hidden">
          <img src={product.mainImage} alt={product.name} className="w-full hover:scale-105 transition duration-500" />
        </div>
        <div className="mt-3">
          <p className="text-xs text-brand-sage uppercase font-bold">{product.category}</p>
          <h3 className="font-serif text-xl text-brand-walnut">{product.name}</h3>
          <p className="text-brand-terracotta">${product.price}</p>
        </div>
      </div>
    );
  }