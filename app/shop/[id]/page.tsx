'use client';

import { useState, use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Star, Minus, Plus, Heart, Share2, ArrowRight } from 'lucide-react';
import { PRODUCTS, Product } from '@/lib/data';
import Button from '@/components/ui/Button';
import ProductCard from '@/components/ProductCard';

export default function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const product = PRODUCTS.find(p => p.id === resolvedParams.id) || PRODUCTS[0];
  
  if (!product) {
    notFound();
  }

  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(product.image);

  const images = [product.image, product.hoverImage, '/images/category_women_1791212799629.jpg', '/images/category_men_1791212812343.jpg'];
  const relatedProducts = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="bg-white min-h-screen pt-8">
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 md:px-10 max-w-full mb-8">
        <div className="flex items-center text-[9px] tracking-widest uppercase text-stone-400 gap-2">
          <Link href="/" className="hover:text-[#1a1a1a] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-[#1a1a1a] transition-colors">Shop</Link>
          <span>/</span>
          <Link href={`/shop?category=${product.category.toLowerCase()}`} className="hover:text-[#1a1a1a] transition-colors">{product.category}</Link>
          <span>/</span>
          <span className="text-[#1a1a1a] font-medium">{product.name}</span>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-10 max-w-full">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-24">
          
          {/* Images Section */}
          <div className="w-full lg:w-3/5 flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-4 overflow-x-auto md:w-24 flex-shrink-0 hide-scrollbar">
              {images.map((img, idx) => (
                <button 
                  key={idx} 
                  className={`relative w-20 md:w-full aspect-[3/4] overflow-hidden bg-stone-50 ${activeImage === img ? 'ring-1 ring-[#1a1a1a]' : 'opacity-70 hover:opacity-100 transition-opacity'}`}
                  onClick={() => setActiveImage(img)}
                >
                  <Image src={img} alt={`Thumbnail ${idx}`} fill className="object-cover" />
                </button>
              ))}
            </div>
            
            {/* Main Image */}
            <div className="relative w-full aspect-[3/4] bg-stone-50 overflow-hidden cursor-zoom-in">
              <Image src={activeImage} alt={product.name} fill className="object-cover object-center" priority />
              {product.isNew && (
                <div className="absolute top-4 left-4 bg-white text-[#1a1a1a] text-[9px] px-3 py-1.5 uppercase tracking-tighter z-10 shadow-sm">
                  New Arrival
                </div>
              )}
            </div>
          </div>

          {/* Product Info Section */}
          <div className="w-full lg:w-2/5 flex flex-col pt-2 lg:pt-10">
            <h1 className="font-serif text-3xl md:text-4xl text-[#1a1a1a] mb-2">{product.name}</h1>
            
            <div className="flex items-center justify-between mb-6 border-b border-stone-100 pb-6">
              <div className="flex items-center gap-3">
                <span className="text-2xl text-[#1a1a1a]">${product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <span className="text-lg text-stone-400 line-through">${product.originalPrice.toFixed(2)}</span>
                )}
              </div>
              <div className="flex items-center gap-1">
                <div className="flex text-[#1a1a1a]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-stone-300'}`} />
                  ))}
                </div>
                <span className="text-xs text-stone-500 ml-2">({product.reviews})</span>
              </div>
            </div>

            <p className="text-stone-500 text-sm mb-10 leading-relaxed">
              {product.description}
            </p>

            {/* Colors */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#1a1a1a]">Color</span>
              </div>
              <div className="flex gap-3">
                {product.colors.map(color => (
                  <button 
                    key={color} 
                    className={`w-8 h-8 rounded-full border ${selectedColor === color ? 'border-[#1a1a1a] p-0.5' : 'border-transparent'} transition-all`}
                    onClick={() => setSelectedColor(color)}
                  >
                    <div className="w-full h-full rounded-full border border-stone-200" style={{ backgroundColor: color }} />
                  </button>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#1a1a1a]">Size</span>
                <button className="text-[9px] text-stone-500 uppercase tracking-widest hover:text-[#1a1a1a] border-b border-stone-300">Size Guide</button>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map(size => (
                  <button 
                    key={size} 
                    className={`w-12 h-10 flex items-center justify-center text-[10px] font-medium border transition-colors ${
                      selectedSize === size 
                        ? 'border-[#1a1a1a] bg-[#1a1a1a] text-white' 
                        : 'border-stone-200 text-stone-600 hover:border-[#1a1a1a] hover:text-[#1a1a1a]'
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Actions */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center border border-stone-200 h-14 w-28">
                <button 
                  className="w-8 h-full flex items-center justify-center text-stone-500 hover:text-[#1a1a1a] transition-colors"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="flex-1 text-center font-medium text-sm">{quantity}</span>
                <button 
                  className="w-8 h-full flex items-center justify-center text-stone-500 hover:text-[#1a1a1a] transition-colors"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>
              <Link href="/cart" className="flex-1">
                <button className="w-full h-14 bg-[#1a1a1a] text-white text-[11px] uppercase tracking-widest hover:bg-stone-800 transition-colors">
                  Add To Bag
                </button>
              </Link>
              <button className="w-14 h-14 border border-stone-200 flex items-center justify-center text-stone-500 hover:border-[#1a1a1a] hover:text-[#1a1a1a] transition-colors">
                <Heart className="w-4 h-4" />
              </button>
            </div>

            {/* Product Details Accordion Placeholder */}
            <div className="border-t border-stone-100 divide-y divide-stone-100">
              {['Product Details', 'Shipping & Returns', 'Care Instructions'].map((tab) => (
                <button key={tab} className="w-full py-5 flex items-center justify-between text-left group">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#1a1a1a]">{tab}</span>
                  <Plus className="w-4 h-4 text-stone-400 group-hover:text-[#1a1a1a] transition-colors" />
                </button>
              ))}
            </div>
            
            <div className="mt-8 pt-8 border-t border-stone-100 flex items-center gap-4 text-stone-400">
              <span className="text-[9px] uppercase tracking-widest">Share</span>
              <button className="hover:text-[#1a1a1a] transition-colors"><Share2 className="w-4 h-4" /></button>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-20 bg-[#f9f9f7] border-t border-stone-100">
          <div className="container mx-auto px-4 md:px-10 max-w-full">
            <div className="flex justify-between items-end mb-12">
              <h2 className="font-serif text-3xl text-[#1a1a1a]">You May Also Like</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
