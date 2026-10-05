'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Trash2, Minus, Plus, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import { PRODUCTS } from '@/lib/data';

export default function CartPage() {
  const [items, setItems] = useState([
    { product: PRODUCTS[0], quantity: 1, size: 'M', color: PRODUCTS[0].colors[0] },
    { product: PRODUCTS[3], quantity: 2, size: '32', color: PRODUCTS[3].colors[0] },
  ]);

  const subtotal = items.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  const shipping = subtotal > 200 ? 0 : 15;
  const total = subtotal + shipping;

    if (items.length === 0) {
      return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center bg-white px-4">
          <h1 className="font-serif text-4xl text-[#1a1a1a] mb-6">Your Cart is Empty</h1>
          <p className="text-stone-500 mb-8 max-w-md text-center text-sm">
            Looks like you haven&apos;t added anything to your cart yet. Discover our latest collections.
          </p>
          <Link href="/shop" className="px-10 py-4 bg-[#1a1a1a] text-white text-[11px] uppercase tracking-widest hover:bg-stone-800 transition-colors">
            Continue Shopping
          </Link>
        </div>
      );
    }

  return (
    <div className="bg-white min-h-screen py-16">
      <div className="container mx-auto px-4 md:px-10 max-w-full">
        <h1 className="font-serif text-4xl text-[#1a1a1a] mb-12">Shopping Bag</h1>
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Cart Items */}
          <div className="w-full lg:w-2/3">
            <div className="hidden md:grid grid-cols-12 pb-4 border-b border-stone-100 mb-6 text-[10px] font-bold uppercase tracking-widest text-stone-500">
              <div className="col-span-6">Product</div>
              <div className="col-span-3 text-center">Quantity</div>
              <div className="col-span-2 text-right">Total</div>
              <div className="col-span-1"></div>
            </div>
            
            <div className="flex flex-col gap-8 md:gap-6">
              {items.map((item, idx) => (
                <div key={idx} className="flex flex-col md:grid md:grid-cols-12 items-start md:items-center gap-4 md:gap-0 border-b border-stone-100 md:border-none pb-6 md:pb-0">
                  
                  {/* Product Details */}
                  <div className="col-span-6 flex gap-4 w-full">
                    <div className="relative w-24 aspect-[3/4] bg-stone-50 flex-shrink-0">
                      <Image src={item.product.image} alt={item.product.name} fill className="object-cover" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <Link href={`/shop/${item.product.id}`} className="font-medium text-[#1a1a1a] hover:text-stone-500 transition-colors mb-1 text-sm">
                        {item.product.name}
                      </Link>
                      <span className="text-xs text-stone-500 mb-2">${item.product.price.toFixed(2)}</span>
                      <div className="flex items-center gap-3 text-[10px] text-stone-500 uppercase tracking-widest">
                        <span>Size: {item.size}</span>
                        <div className="w-2.5 h-2.5 rounded-full border border-stone-200" style={{ backgroundColor: item.color }} />
                      </div>
                    </div>
                  </div>

                  {/* Quantity Mobile & Desktop */}
                  <div className="col-span-3 w-full md:w-auto flex justify-between md:justify-center items-center">
                    <div className="md:hidden text-[10px] font-bold uppercase tracking-widest text-[#1a1a1a]">Quantity:</div>
                    <div className="flex items-center border border-stone-200 h-10 w-28">
                      <button className="w-8 h-full flex items-center justify-center text-stone-500 hover:text-[#1a1a1a] transition-colors">
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="flex-1 text-center text-sm font-medium">{item.quantity}</span>
                      <button className="w-8 h-full flex items-center justify-center text-stone-500 hover:text-[#1a1a1a] transition-colors">
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  {/* Total & Remove */}
                  <div className="col-span-2 w-full text-right md:text-right flex justify-between md:block items-center">
                     <div className="md:hidden text-[10px] font-bold uppercase tracking-widest text-[#1a1a1a]">Total:</div>
                    <span className="font-medium text-[#1a1a1a] text-sm">${(item.product.price * item.quantity).toFixed(2)}</span>
                  </div>
                  
                  <div className="col-span-1 text-right w-full md:w-auto flex justify-end">
                    <button className="text-stone-400 hover:text-[#1a1a1a] transition-colors p-2 md:p-0">
                      <Trash2 className="w-4 h-4 md:w-3 md:h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-1/3">
            <div className="bg-[#f9f9f7] p-8 border border-stone-100 sticky top-24">
              <h2 className="font-serif text-2xl text-[#1a1a1a] mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6 border-b border-stone-100 pb-6 text-xs">
                <div className="flex justify-between">
                  <span className="text-stone-500">Subtotal</span>
                  <span className="text-[#1a1a1a] font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Estimated Shipping</span>
                  <span className="text-[#1a1a1a] font-medium">{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                </div>
                {shipping > 0 && (
                  <p className="text-[10px] text-stone-400 tracking-widest uppercase">Spend ${(200 - subtotal).toFixed(2)} more to unlock free shipping.</p>
                )}
              </div>

              <div className="flex justify-between items-center mb-8">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#1a1a1a]">Total</span>
                <span className="text-2xl text-[#1a1a1a] font-medium">${total.toFixed(2)}</span>
              </div>

              <div className="flex flex-col gap-4">
                <Link href="/checkout" className="block w-full">
                  <button className="w-full flex justify-between items-center group px-10 py-4 bg-[#1a1a1a] text-white text-[11px] uppercase tracking-widest hover:bg-stone-800 transition-colors">
                    Checkout <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </Link>
                
                {/* Promo Code */}
                <div className="pt-6">
                  <p className="text-[9px] font-bold uppercase tracking-widest text-[#1a1a1a] mb-3">Promo Code</p>
                  <div className="flex">
                    <input type="text" placeholder="Enter code" className="flex-1 px-4 py-3 border border-stone-200 text-xs focus:outline-none focus:border-[#1a1a1a]" />
                    <button className="px-6 py-3 bg-stone-200 text-[#1a1a1a] text-[9px] font-bold tracking-widest uppercase hover:bg-stone-300 transition-colors">Apply</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
