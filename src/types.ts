export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  promo: boolean;
  dealType?: 'BOGO' | 'Percentage' | 'Fixed' | 'Bundle';
  rating: number;
  reviewCount: number;
  inStock: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface PromoTile {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  cta: string;
  link: string;
  span?: 'col-span-1' | 'col-span-2';
}

export interface FeaturedDeal {
  id: string;
  offer: string;
  category: string;
  image?: string;
  cta?: string;
  variant: 'standard' | 'text-only' | 'featured';
}

export type SectionType = 'hero' | 'featured-deals-grid' | 'promo-grid' | 'categories' | 'plp';

export interface PageConfig {
  sections: {
    type: SectionType;
    enabled: boolean;
    order: number;
    props?: any;
  }[];
}
