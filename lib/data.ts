export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  hoverImage: string;
  category: string;
  sizes: string[];
  colors: string[];
  isNew?: boolean;
  isBestSeller?: boolean;
  description: string;
}

export const CATEGORIES = [
  { id: 'women', name: 'Women', image: '/images/category_women_1791212799629.jpg' },
  { id: 'men', name: 'Men', image: '/images/category_men_1791212812343.jpg' },
  { id: 'accessories', name: 'Accessories', image: '/images/category_accessories_1791212829625.jpg' },
  { id: 'outerwear', name: 'Outerwear', image: '/images/category_outerwear_1791212841781.jpg' },
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Oversized Wool Blend Coat',
    price: 249.00,
    originalPrice: 299.00,
    rating: 4.8,
    reviews: 124,
    image: '/images/product_coat_1791212857066.jpg',
    hoverImage: '/images/category_outerwear_1791212841781.jpg',
    category: 'Outerwear',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['#000000', '#F5F5DC', '#808080'],
    isNew: true,
    description: 'A structural masterpiece crafted from a premium wool blend. Features dropped shoulders, a dramatic lapel, and a relaxed, enveloping silhouette perfect for layering.',
  },
  {
    id: '2',
    name: 'Essential Silk Slip Dress',
    price: 125.00,
    rating: 4.9,
    reviews: 89,
    image: '/images/product_dress_1791212868239.jpg',
    hoverImage: '/images/category_women_1791212799629.jpg',
    category: 'Women',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['#000000', '#800020', '#C0C0C0'],
    isBestSeller: true,
    description: 'Cut on the bias for a flawless drape, this 100% mulberry silk slip dress is a versatile wardrobe cornerstone. Features adjustable straps and a refined V-neckline.',
  },
  {
    id: '3',
    name: 'Heavyweight Cotton T-Shirt',
    price: 45.00,
    rating: 4.7,
    reviews: 312,
    image: '/images/product_tee_1791212882468.jpg',
    hoverImage: '/images/category_men_1791212812343.jpg',
    category: 'Men',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['#FFFFFF', '#000000', '#000080'],
    isBestSeller: true,
    description: 'The perfect t-shirt. Constructed from densely knit heavyweight cotton with a structured collar and slightly relaxed fit that maintains its shape wear after wear.',
  },
  {
    id: '4',
    name: 'Classic Straight Leg Denim',
    price: 110.00,
    originalPrice: 130.00,
    rating: 4.6,
    reviews: 56,
    image: '/images/product_jeans_1791212894664.jpg',
    hoverImage: '/images/category_men_1791212812343.jpg',
    category: 'Men',
    sizes: ['28', '30', '32', '34', '36'],
    colors: ['#000080', '#000000', '#87CEEB'],
    description: 'Vintage-inspired straight leg jeans crafted from non-stretch selvedge denim that breaks in beautifully over time. High rise with a button fly.',
  },
  {
    id: '5',
    name: 'Cashmere Crewneck Sweater',
    price: 185.00,
    rating: 4.9,
    reviews: 210,
    image: '/images/product_cashmere_1791212906871.jpg',
    hoverImage: '/images/category_women_1791212799629.jpg',
    category: 'Women',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['#D3D3D3', '#000000', '#F5DEB3'],
    isNew: true,
    isBestSeller: true,
    description: 'Incredibly soft Grade-A cashmere knit into a timeless crewneck silhouette. Lightweight yet exceptionally warm, designed to be a lifetime piece.',
  },
  {
    id: '6',
    name: 'Structured Leather Tote',
    price: 320.00,
    rating: 4.8,
    reviews: 42,
    image: '/images/product_bag_1791212919840.jpg',
    hoverImage: '/images/category_accessories_1791212829625.jpg',
    category: 'Accessories',
    sizes: ['One Size'],
    colors: ['#8B4513', '#000000'],
    description: 'Handcrafted from vegetable-tanned Italian leather. This spacious tote features a minimalist exterior, solid brass hardware, and a suede-lined interior with zip pockets.',
  },
  {
    id: '7',
    name: 'Pleated Wide-Leg Trousers',
    price: 140.00,
    rating: 4.5,
    reviews: 78,
    image: '/images/product_pants_1791212932359.jpg',
    hoverImage: '/images/category_women_1791212799629.jpg',
    category: 'Women',
    sizes: ['0', '2', '4', '6', '8', '10', '12'],
    colors: ['#F5F5DC', '#000000', '#556B2F'],
    isNew: true,
    description: 'Fluid, tailored trousers with subtle front pleats and a high, fitted waist that releases into a dramatic wide leg. Crafted from a breathable lyocell blend.',
  },
  {
    id: '8',
    name: 'Minimalist Leather Sneakers',
    price: 165.00,
    originalPrice: 195.00,
    rating: 4.7,
    reviews: 189,
    image: '/images/product_shoes_1791212947600.jpg',
    hoverImage: '/images/category_men_1791212812343.jpg',
    category: 'Men',
    sizes: ['8', '9', '10', '11', '12'],
    colors: ['#FFFFFF', '#000000'],
    isBestSeller: true,
    description: 'The ultimate everyday sneaker. Made in Portugal with premium full-grain leather, a durable Margom sole, and memory foam insoles for all-day comfort.',
  }
];

export const REVIEWS = [
  { id: 1, name: 'Sarah Jenkins', rating: 5, text: "The quality is simply unmatched. The cashmere sweater I bought feels incredibly luxurious and the fit is perfect.", avatar: '/images/avatar_sarah_1791212961243.jpg' },
  { id: 2, name: 'Michael Chen', rating: 5, text: "Finally found denim that feels substantial. The straight leg cut is exactly what I was looking for. Excellent customer service as well.", avatar: '/images/avatar_michael_1791212974556.jpg' },
  { id: 3, name: 'Emma Thompson', rating: 4, text: "Beautiful silhouettes and premium fabrics. I receive compliments every time I wear my oversized wool coat.", avatar: '/images/avatar_emma_1791212987874.jpg' },
];
