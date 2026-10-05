'use client';

import { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { PRODUCTS } from '@/lib/data';
import { Filter, ChevronDown } from 'lucide-react';

export default function ShopPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Dummy pagination and sorting
  const totalProducts = PRODUCTS.length * 3; // Simulating more products
  const displayProducts = [...PRODUCTS, ...PRODUCTS, ...PRODUCTS].slice(0, 12);

  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <div className="bg-[#f9f9f7] py-16 border-b border-stone-100">
        <div className="container mx-auto px-4 md:px-10 max-w-full text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] mb-4">Shop All</h1>
          <p className="text-stone-500 text-sm max-w-xl mx-auto">
            Explore our complete collection of meticulously designed garments and accessories.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-10 max-w-full py-12">
        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-stone-100 pb-6 mb-8 gap-4">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-[#1a1a1a] hover:text-stone-500 transition-colors md:hidden"
            >
              <Filter className="w-4 h-4" /> Filters
            </button>
            <span className="text-[10px] uppercase tracking-widest text-stone-500">{totalProducts} Products</span>
          </div>
          
          <div className="flex items-center gap-2 text-[10px] text-[#1a1a1a]">
            <span className="uppercase tracking-widest font-bold text-stone-500 mr-2">Sort By</span>
            <select className="bg-transparent border-none focus:ring-0 cursor-pointer font-medium outline-none uppercase tracking-widest">
              <option>Recommended</option>
              <option>New Arrivals</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Filters Sidebar */}
          <aside className={`md:w-64 flex-shrink-0 ${isFilterOpen ? 'block' : 'hidden md:block'}`}>
            <div className="space-y-10">
              {/* Category Filter */}
              <div>
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#1a1a1a] mb-4 border-b border-stone-100 pb-2">Categories</h3>
                <ul className="space-y-3">
                  {['All', 'Women', 'Men', 'Outerwear', 'Knitwear', 'Denim', 'Accessories'].map(cat => (
                    <li key={cat}>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input type="checkbox" className="w-4 h-4 rounded-sm border-stone-300 text-[#1a1a1a] focus:ring-[#1a1a1a] cursor-pointer" defaultChecked={cat === 'All'} />
                        <span className="text-xs text-stone-500 group-hover:text-[#1a1a1a] transition-colors uppercase tracking-widest">{cat}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price Filter */}
              <div>
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#1a1a1a] mb-4 border-b border-stone-100 pb-2">Price</h3>
                <ul className="space-y-3">
                  {['Under $50', '$50 - $150', '$150 - $300', 'Over $300'].map(price => (
                    <li key={price}>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input type="checkbox" className="w-4 h-4 rounded-sm border-stone-300 text-[#1a1a1a] focus:ring-[#1a1a1a] cursor-pointer" />
                        <span className="text-xs text-stone-500 group-hover:text-[#1a1a1a] transition-colors">{price}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Size Filter */}
              <div>
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#1a1a1a] mb-4 border-b border-stone-100 pb-2">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {['XS', 'S', 'M', 'L', 'XL', '28', '30', '32', '34'].map(size => (
                    <button key={size} className="w-8 h-8 border border-stone-200 flex items-center justify-center text-[9px] font-medium text-stone-500 hover:border-[#1a1a1a] hover:text-[#1a1a1a] transition-colors">
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Filter */}
              <div>
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#1a1a1a] mb-4 border-b border-stone-100 pb-2">Color</h3>
                <div className="flex flex-wrap gap-3">
                  {['#000000', '#FFFFFF', '#F5F5DC', '#808080', '#000080', '#8B4513'].map(color => (
                    <button 
                      key={color} 
                      className={`w-6 h-6 rounded-full border ${color === '#FFFFFF' ? 'border-stone-300' : 'border-transparent'} ring-1 ring-transparent hover:ring-stone-300 transition-all`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayProducts.map((product, idx) => (
                <ProductCard key={`${product.id}-${idx}`} product={product} />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-16 flex justify-center items-center gap-2">
              <button className="w-8 h-8 border border-stone-200 flex items-center justify-center text-stone-500 hover:border-[#1a1a1a] hover:text-[#1a1a1a] transition-colors disabled:opacity-50">
                &lt;
              </button>
              <button className="w-8 h-8 bg-[#1a1a1a] text-white flex items-center justify-center text-[10px] font-medium">
                1
              </button>
              <button className="w-8 h-8 border border-stone-200 flex items-center justify-center text-stone-500 hover:border-[#1a1a1a] hover:text-[#1a1a1a] transition-colors text-[10px] font-medium">
                2
              </button>
              <button className="w-8 h-8 border border-stone-200 flex items-center justify-center text-stone-500 hover:border-[#1a1a1a] hover:text-[#1a1a1a] transition-colors text-[10px] font-medium">
                3
              </button>
              <button className="w-8 h-8 border border-stone-200 flex items-center justify-center text-stone-500 hover:border-[#1a1a1a] hover:text-[#1a1a1a] transition-colors">
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
