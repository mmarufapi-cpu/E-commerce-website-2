import Image from 'next/image';
import Link from 'next/link';
import { Heart } from 'lucide-react';
import { Product } from '@/lib/data';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="aspect-[3/4] bg-stone-50 w-full relative group">
        {/* Badges */}
        {product.isNew && (
          <div className="absolute top-3 right-3 bg-white px-2 py-1 text-[9px] uppercase tracking-tighter z-20 shadow-sm">
            New
          </div>
        )}
        {product.originalPrice && !product.isNew && (
          <div className="absolute top-3 left-3 bg-black text-white px-2 py-1 text-[9px] uppercase tracking-tighter z-20">
            Sale
          </div>
        )}

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors z-10 pointer-events-none"></div>

        {/* Images */}
        <Link href={`/shop/${product.id}`} className="block w-full h-full relative z-0">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover object-center transition-opacity duration-500 group-hover:opacity-0"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <Image
            src={product.hoverImage}
            alt={`${product.name} alternate view`}
            fill
            className="object-cover object-center absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Link>
        
        {/* Quick Add Button */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity z-20">
          <button className="bg-white text-black px-4 py-2 text-[9px] uppercase tracking-widest whitespace-nowrap hover:bg-stone-100 transition-colors shadow-sm">
            Quick View
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-0.5">
        <span className="text-[10px] uppercase text-stone-400 tracking-wider">{product.category}</span>
        <div className="flex justify-between items-center">
          <Link href={`/shop/${product.id}`}>
            <span className="text-xs font-medium text-[#1a1a1a] hover:text-stone-500 transition-colors line-clamp-1">{product.name}</span>
          </Link>
          <div className="flex items-center gap-1.5">
            <span className="text-xs text-stone-400">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-[10px] text-stone-300 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>
        
        {/* Colors */}
        {product.colors && product.colors.length > 0 && (
          <div className="flex items-center gap-1.5 pt-1.5">
            {product.colors.map((color, idx) => (
              <div 
                key={idx} 
                className="w-2.5 h-2.5 rounded-full border border-stone-200"
                style={{ backgroundColor: color }}
                title="Color option"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
