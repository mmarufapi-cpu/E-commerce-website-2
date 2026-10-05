'use client';

import { PRODUCTS } from '@/lib/data';
import Button from '@/components/ui/Button';
import Image from 'next/image';

export default function CheckoutPage() {
  const items = [
    { product: PRODUCTS[0], quantity: 1, size: 'M' },
    { product: PRODUCTS[3], quantity: 2, size: '32' },
  ];
  
  const subtotal = items.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  const total = subtotal;

  return (
    <div className="bg-white min-h-screen py-16">
      <div className="container mx-auto px-4 md:px-10 max-w-full">
        <h1 className="font-serif text-3xl md:text-4xl text-[#1a1a1a] mb-12 text-center md:text-left">Checkout</h1>
        
        <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-20">
          
          {/* Form Section */}
          <div className="w-full lg:w-3/5">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-12">
              
              {/* Contact Info */}
              <section>
                <h2 className="text-[11px] font-bold uppercase tracking-widest text-[#1a1a1a] mb-6 border-b border-stone-100 pb-2">Contact Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-[9px] font-bold text-stone-400 uppercase tracking-widest mb-2">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 border border-stone-200 focus:outline-none focus:border-[#1a1a1a] transition-colors" placeholder="you@example.com" />
                  </div>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded-sm border-stone-200 text-[#1a1a1a] focus:ring-[#1a1a1a]" defaultChecked />
                    <span className="text-xs text-stone-500">Email me with news and offers</span>
                  </label>
                </div>
              </section>

              {/* Shipping Address */}
              <section>
                <h2 className="text-[11px] font-bold uppercase tracking-widest text-[#1a1a1a] mb-6 border-b border-stone-100 pb-2">Shipping Address</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[9px] font-bold text-stone-400 uppercase tracking-widest mb-2">First Name</label>
                    <input type="text" className="w-full px-4 py-3 border border-stone-200 focus:outline-none focus:border-[#1a1a1a] transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[9px] font-bold text-stone-400 uppercase tracking-widest mb-2">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 border border-stone-200 focus:outline-none focus:border-[#1a1a1a] transition-colors" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-[9px] font-bold text-stone-400 uppercase tracking-widest mb-2">Address</label>
                    <input type="text" className="w-full px-4 py-3 border border-stone-200 focus:outline-none focus:border-[#1a1a1a] transition-colors" placeholder="Street address or P.O. Box" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-[9px] font-bold text-stone-400 uppercase tracking-widest mb-2">Apartment, suite, etc. (optional)</label>
                    <input type="text" className="w-full px-4 py-3 border border-stone-200 focus:outline-none focus:border-[#1a1a1a] transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[9px] font-bold text-stone-400 uppercase tracking-widest mb-2">City</label>
                    <input type="text" className="w-full px-4 py-3 border border-stone-200 focus:outline-none focus:border-[#1a1a1a] transition-colors" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[9px] font-bold text-stone-400 uppercase tracking-widest mb-2">State</label>
                      <input type="text" className="w-full px-4 py-3 border border-stone-200 focus:outline-none focus:border-[#1a1a1a] transition-colors" />
                    </div>
                    <div>
                      <label className="block text-[9px] font-bold text-stone-400 uppercase tracking-widest mb-2">ZIP Code</label>
                      <input type="text" className="w-full px-4 py-3 border border-stone-200 focus:outline-none focus:border-[#1a1a1a] transition-colors" />
                    </div>
                  </div>
                </div>
              </section>

              {/* Payment Info */}
              <section>
                <h2 className="text-[11px] font-bold uppercase tracking-widest text-[#1a1a1a] mb-6 border-b border-stone-100 pb-2">Payment</h2>
                <div className="bg-[#f9f9f7] border border-stone-100 p-6 space-y-4">
                  <div>
                    <label className="block text-[9px] font-bold text-stone-400 uppercase tracking-widest mb-2">Card Number</label>
                    <input type="text" className="w-full px-4 py-3 border border-stone-200 focus:outline-none focus:border-[#1a1a1a] transition-colors bg-white" placeholder="0000 0000 0000 0000" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[9px] font-bold text-stone-400 uppercase tracking-widest mb-2">Expiration Date (MM/YY)</label>
                      <input type="text" className="w-full px-4 py-3 border border-stone-200 focus:outline-none focus:border-[#1a1a1a] transition-colors bg-white" placeholder="MM/YY" />
                    </div>
                    <div>
                      <label className="block text-[9px] font-bold text-stone-400 uppercase tracking-widest mb-2">Security Code</label>
                      <input type="text" className="w-full px-4 py-3 border border-stone-200 focus:outline-none focus:border-[#1a1a1a] transition-colors bg-white" placeholder="CVC" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[9px] font-bold text-stone-400 uppercase tracking-widest mb-2">Name on Card</label>
                    <input type="text" className="w-full px-4 py-3 border border-stone-200 focus:outline-none focus:border-[#1a1a1a] transition-colors bg-white" />
                  </div>
                </div>
              </section>

              <button type="submit" className="w-full py-5 bg-[#1a1a1a] text-white text-[11px] uppercase tracking-widest hover:bg-stone-800 transition-colors">
                Place Order
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-2/5">
            <div className="bg-[#f9f9f7] p-6 md:p-8 border border-stone-100 sticky top-24">
              <h2 className="font-serif text-xl text-[#1a1a1a] mb-6">In Your Bag</h2>
              
              <div className="space-y-6 mb-8">
                {items.map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="relative w-20 aspect-[3/4] bg-white border border-stone-100 flex-shrink-0">
                      <Image src={item.product.image} alt={item.product.name} fill className="object-cover" />
                      <span className="absolute -top-2 -right-2 bg-[#1a1a1a] text-white w-5 h-5 rounded-full text-[10px] flex items-center justify-center font-bold">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex flex-col flex-1 justify-center">
                      <span className="font-medium text-[#1a1a1a] text-sm mb-1 line-clamp-1">{item.product.name}</span>
                      <span className="text-[10px] text-stone-500 mb-2 uppercase tracking-widest">Size: {item.size}</span>
                      <span className="text-sm text-[#1a1a1a] font-medium">${(item.product.price * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4 border-t border-stone-200 pt-6 text-sm">
                <div className="flex justify-between">
                  <span className="text-stone-500">Subtotal</span>
                  <span className="text-[#1a1a1a] font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Shipping</span>
                  <span className="text-[#1a1a1a] font-medium">Free</span>
                </div>
              </div>

              <div className="flex justify-between items-center mt-6 pt-6 border-t border-stone-200 border-dashed">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#1a1a1a]">Total</span>
                <span className="text-2xl text-[#1a1a1a] font-medium">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
