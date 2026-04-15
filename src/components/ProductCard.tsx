import { Product } from '../types';
import { Card, CardContent, CardFooter } from './ui/card';
import { Button } from './Button';
import { Badge } from './ui/badge';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { motion } from 'motion/react';

interface ProductCardProps {
  product: Product;
  key?: string | number;
}

export default function ProductCard({ product }: ProductCardProps) {
  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Card className="group h-full flex flex-col overflow-hidden border-clinical-border hover:shadow-lg transition-all duration-300">
      <div className="relative aspect-square overflow-hidden bg-white p-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1.5">
          {product.promo && (
            <Badge className="bg-accent text-white border-none font-bold">
              {product.dealType === 'BOGO' ? 'BUY 1 GET 1' : `${discount}% OFF`}
            </Badge>
          )}
          {!product.inStock && (
            <Badge variant="secondary" className="bg-slate-100 text-slate-500">
              OUT OF STOCK
            </Badge>
          )}
        </div>
        
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/80 backdrop-blur-sm shadow-sm"
        >
          <Heart className="h-4 w-4 text-slate-600" />
        </Button>
      </div>

      <CardContent className="flex-1 p-4">
        <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
          {product.brand}
        </div>
        <h3 className="font-bold text-slate-900 line-clamp-2 mb-2 group-hover:text-primary transition-colors h-10">
          {product.name}
        </h3>
        
        <div className="flex items-center gap-1 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${
                  i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-slate-300'
                }`}
              />
            ))}
          </div>
          <span className="text-[10px] text-slate-500 font-medium">({product.reviewCount})</span>
        </div>

        <div className="flex items-baseline gap-2">
          <span className="text-xl font-bold text-slate-900">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="text-sm text-slate-400 line-through">${product.originalPrice.toFixed(2)}</span>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button 
          className="w-full bg-primary hover:bg-primary/90 text-white font-semibold h-10"
          disabled={!product.inStock}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
