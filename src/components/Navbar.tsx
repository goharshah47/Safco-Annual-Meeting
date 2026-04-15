import { Search, ShoppingCart, User, Menu, Phone } from 'lucide-react';
import { Button } from './Button';
import { Input } from './ui/input';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-clinical-border shadow-sm">
      <div className="bg-primary text-white py-1 text-xs text-center font-medium">
        Free Shipping on orders over $250 | Need help? Call 1-800-621-2178
      </div>
      <div className="container-custom flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <a href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold tracking-tighter text-primary">SAFCO</span>
            <span className="text-sm font-medium text-slate-500 uppercase tracking-widest hidden sm:block">Dental Supply</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#" className="text-slate-600 hover:text-primary transition-colors">Products</a>
            <a href="#" className="text-primary font-semibold">Deals</a>
            <a href="#" className="text-slate-600 hover:text-primary transition-colors">Brands</a>
            <a href="#" className="text-slate-600 hover:text-primary transition-colors">Resources</a>
          </nav>
        </div>

        <div className="flex-1 max-w-md hidden lg:block">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
            <Input
              type="search"
              placeholder="Search products, brands, or item #..."
              className="pl-9 bg-slate-50 border-slate-200 focus:bg-white transition-all"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <User className="h-5 w-5" />
          </Button>
          <div className="relative">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <span className="absolute -top-1 -right-1 bg-accent text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
              3
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
