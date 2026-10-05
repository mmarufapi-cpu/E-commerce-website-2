import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#f9f9f7] border-t border-stone-100 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-10 max-w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          <div className="flex flex-col gap-6">
            <span className="font-serif text-2xl tracking-tighter font-bold text-[#1a1a1a] block">
              AURA
            </span>
            <p className="text-stone-500 leading-relaxed text-xs">
              Defining modern elegance. Curated collections for the contemporary wardrobe, focusing on premium materials and timeless silhouettes.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-[#1a1a1a] tracking-widest text-[9px] uppercase mb-6">Shop</h4>
            <ul className="flex flex-col gap-4">
              {['New Arrivals', 'Women', 'Men', 'Accessories', 'Sale'].map((item) => (
                <li key={item}>
                  <Link href="/shop" className="text-stone-400 hover:text-[#1a1a1a] text-xs transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#1a1a1a] tracking-widest text-[9px] uppercase mb-6">Support</h4>
            <ul className="flex flex-col gap-4">
              {['Contact Us', 'FAQ', 'Shipping & Returns', 'Track Order', 'Size Guide'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-stone-400 hover:text-[#1a1a1a] text-xs transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#1a1a1a] tracking-widest text-[9px] uppercase mb-6">Connect</h4>
            <ul className="flex flex-col gap-4">
              {['Instagram', 'Pinterest', 'Twitter', 'Facebook'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-stone-400 hover:text-[#1a1a1a] text-xs transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-stone-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[9px] uppercase tracking-widest text-stone-400">
            &copy; {new Date().getFullYear()} AURA ARCHIVE
          </p>
          <div className="flex gap-6 items-center">
            <Link href="#" className="text-[9px] uppercase tracking-widest text-stone-400 hover:text-[#1a1a1a] transition-colors">Privacy</Link>
            <Link href="#" className="text-[9px] uppercase tracking-widest text-stone-400 hover:text-[#1a1a1a] transition-colors">Terms</Link>
            <Link href="#" className="text-[9px] uppercase tracking-widest text-stone-400 hover:text-[#1a1a1a] transition-colors">Shipping</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
