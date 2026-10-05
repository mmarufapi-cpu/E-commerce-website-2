import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import Button from '@/components/ui/Button';
import { CATEGORIES, PRODUCTS, REVIEWS } from '@/lib/data';

export default function Home() {
  const featuredProducts = PRODUCTS.slice(0, 4);
  const newArrivals = PRODUCTS.filter(p => p.isNew).slice(0, 4);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row h-auto md:h-[600px] items-stretch border-b border-stone-100">
        <div className="w-full md:w-7/12 bg-stone-100 relative overflow-hidden flex items-center justify-center min-h-[400px]">
          <Image src="/images/hero_fashion_1791212765253.jpg" alt="Fall Collection" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-[#e5e5e0] mix-blend-multiply opacity-20"></div>
          <div className="z-10 text-center flex flex-col items-center">
            <span className="block text-[10px] uppercase tracking-[0.4em] mb-4 text-white drop-shadow-md">The Winter Campaign</span>
            <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-6 text-white drop-shadow-md">
              Modern<br/><i className="font-light">Minimalism</i>
            </h1>
            <Link href="/shop" className="inline-block px-10 py-4 bg-[#1a1a1a] text-white text-[11px] uppercase tracking-widest hover:bg-stone-800 transition-colors">
              Explore Collection
            </Link>
          </div>
        </div>
        <div className="w-full md:w-5/12 flex flex-col">
          <div className="flex-1 p-8 md:p-12 flex flex-col justify-center border-b border-stone-100">
            <h2 className="font-serif text-3xl mb-4 text-[#1a1a1a]">Sartorial Elegance</h2>
            <p className="text-stone-500 text-sm leading-relaxed mb-6 max-w-xs">
              An exploration of form and silhouette, crafted for the discerning individual who values timeless design over transient trends.
            </p>
            <div className="flex gap-4">
              <Link href="/shop?category=new" className="text-[10px] border-b border-stone-300 pb-1 uppercase tracking-widest text-[#1a1a1a] hover:border-[#1a1a1a] transition-colors">
                View Lookbook
              </Link>
            </div>
          </div>
          <div className="h-auto md:h-1/3 grid grid-cols-2">
            <Link href="/shop?category=men" className="border-r border-stone-100 p-6 flex flex-col justify-end bg-[#f9f9f7] hover:bg-stone-100 transition-colors min-h-[120px]">
              <span className="text-[10px] uppercase tracking-widest text-stone-400 mb-1">01</span>
              <span className="text-xs font-medium text-[#1a1a1a]">Men&apos;s Essential</span>
            </Link>
            <Link href="/shop?category=women" className="p-6 flex flex-col justify-end hover:bg-stone-50 transition-colors min-h-[120px]">
              <span className="text-[10px] uppercase tracking-widest text-stone-400 mb-1">02</span>
              <span className="text-xs font-medium text-[#1a1a1a]">Women&apos;s Capsule</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-10 max-w-full">
          <div className="flex justify-between items-end mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a]">Shop by Category</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORIES.map((category) => (
              <Link 
                key={category.id} 
                href={`/shop?category=${category.id}`}
                className="group relative h-[400px] overflow-hidden bg-stone-100 flex items-end border border-stone-100"
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-80" />
                <div className="relative z-10 p-8 w-full flex justify-between items-center">
                  <h3 className="text-white text-2xl font-serif">{category.name}</h3>
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white -translate-x-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-[#f9f9f7] border-t border-stone-100">
        <div className="container mx-auto px-4 md:px-10 max-w-full">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a] mb-3">Featured Arrivals</h2>
            </div>
            <Link href="/shop" className="text-[10px] uppercase tracking-widest text-stone-400 border-b border-stone-200 hover:text-[#1a1a1a] hover:border-[#1a1a1a] transition-colors">
              View All
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-10 max-w-full">
          <div className="relative min-h-[500px] flex items-center overflow-hidden bg-[#1a1a1a]">
            <Image
              src="/images/promo_banner_1791212782143.jpg"
              alt="Mid-Season Sale"
              fill
              className="object-cover opacity-60 mix-blend-overlay"
            />
            <div className="relative z-10 p-8 md:p-16 max-w-2xl text-white">
              <span className="uppercase tracking-[0.3em] text-[10px] mb-4 block text-stone-300">
                Limited Time
              </span>
              <h2 className="font-serif text-4xl md:text-6xl mb-6 leading-tight">Mid-Season Event</h2>
              <p className="text-sm text-stone-300 mb-8 max-w-md leading-relaxed">
                Enjoy up to 50% off selected styles. Elevate your wardrobe with our signature pieces at exceptional value.
              </p>
              <Link href="/shop" className="inline-block px-10 py-4 bg-white text-[#1a1a1a] text-[11px] uppercase tracking-widest hover:bg-stone-200 transition-colors">
                Shop The Sale
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-10 max-w-full">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a] mb-4">New Arrivals</h2>
            <p className="text-stone-500 text-sm max-w-xl mx-auto leading-relaxed">
              Fresh silhouettes and innovative textures. Explore the latest additions to our collection.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {newArrivals.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-16 text-center flex justify-center">
            <Link href="/shop?category=new" className="inline-block px-10 py-4 bg-transparent border border-[#1a1a1a] text-[#1a1a1a] text-[11px] uppercase tracking-widest hover:bg-[#1a1a1a] hover:text-white transition-colors">
              View Full Collection
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#f9f9f7] border-y border-stone-100">
        <div className="container mx-auto px-4 md:px-10 max-w-full">
          <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a] mb-16 text-center">Aura Community</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((review) => (
              <div key={review.id} className="bg-white p-8 border border-stone-100 hover:border-stone-200 transition-colors">
                <div className="flex text-[#1a1a1a] mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-current' : 'text-stone-300'}`} />
                  ))}
                </div>
                <p className="text-stone-500 text-sm mb-8 italic leading-relaxed">&ldquo;{review.text}&rdquo;</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 relative rounded-full overflow-hidden bg-stone-200">
                    <Image src={review.avatar} alt={review.name} fill className="object-cover" />
                  </div>
                  <span className="font-medium text-[#1a1a1a] text-[10px] tracking-widest uppercase">{review.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-10 max-w-2xl text-center flex flex-col items-center">
          <span className="block text-[10px] uppercase tracking-[0.4em] mb-4 text-stone-500">Stay Connected</span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a] mb-6">Join The Archive</h2>
          <p className="text-stone-500 text-sm mb-10 leading-relaxed">
            Subscribe to receive updates, access to exclusive deals, and insights into our design process.
          </p>
          <form className="flex w-full flex-col sm:flex-row gap-4" action="#">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1 px-6 py-4 border border-stone-200 text-sm focus:outline-none focus:border-[#1a1a1a] transition-colors bg-[#f9f9f7]"
              required
            />
            <button type="submit" className="px-10 py-4 bg-[#1a1a1a] text-white text-[11px] uppercase tracking-widest hover:bg-stone-800 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
