import { Search, ShoppingCart, User, ChevronDown, Phone, Truck, Pencil } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export default function Navbar() {
  return (
    <header className="w-full bg-white border-b border-clinical-border">
      {/* Top Bar */}
      <div className="bg-[#f0f4f8] py-2 text-[13px] text-slate-700">
        <div className="container-custom flex justify-center items-center gap-8">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-[#005696]" />
            <span className="font-medium">(800) 621-2178</span>
          </div>
          <div className="flex items-center gap-2">
            <Truck className="h-4 w-4 text-[#005696]" />
            <span className="font-medium">Free Shipping on orders over $250</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container-custom py-4 flex items-center justify-between gap-8">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 shrink-0 group">
          <div className="relative h-12 flex items-center">
            <svg viewBox="0 0 280 100" className="h-10 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Arc of dots */}
              <circle cx="20" cy="20" r="4.5" fill="#c2cce4" />
              <circle cx="12" cy="32" r="4.5" fill="#b1bddc" />
              <circle cx="8" cy="46" r="4.5" fill="#a1afd4" />
              <circle cx="10" cy="60" r="4.5" fill="#8f9fcb" />
              <circle cx="16" cy="74" r="4.5" fill="#7d8fc2" />
              <circle cx="28" cy="86" r="4.5" fill="#6c80b9" />
              <circle cx="44" cy="92" r="4.5" fill="#5a70b0" />
              <circle cx="62" cy="94" r="4.5" fill="#4961a7" />
              <circle cx="80" cy="90" r="4.5" fill="#3b529e" />
              
              {/* Text "safco" */}
              <text x="40" y="72" className="text-[72px] font-[900]" fill="#3b66ad" style={{ fontFamily: 'Inter, sans-serif' }}>safco</text>
              
              {/* Text "Dental Supply" */}
              <text x="145" y="94" className="text-[22px] font-bold" fill="#333" style={{ fontFamily: 'Inter, sans-serif' }}>Dental Supply</text>
            </svg>
          </div>
        </a>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl">
          <div className="flex">
            <Input
              type="search"
              placeholder="Search by product name or item number"
              className="rounded-r-none border-r-0 h-11 bg-white border-slate-300 focus:ring-0 focus:border-slate-400"
            />
            <Button className="rounded-l-none h-11 px-6 bg-[#005696] hover:bg-[#004578]">
              <Search className="h-5 w-5 text-white" />
            </Button>
          </div>
        </div>

        {/* User & Cart */}
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold text-xs border border-slate-200">
              SD
            </div>
            <span className="text-sm font-bold text-slate-700 group-hover:text-[#005696]">Safco Dental</span>
            <ChevronDown className="h-4 w-4 text-slate-400" />
          </button>

          <div className="relative flex items-center gap-2 cursor-pointer group">
            <div className="relative">
              <ShoppingCart className="h-7 w-7 text-slate-700 group-hover:text-[#005696]" />
              <span className="absolute -top-1 -right-1 bg-[#005696] text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full border-2 border-white">
                3
              </span>
            </div>
            <span className="text-sm font-bold text-slate-700 group-hover:text-[#005696]">Cart</span>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="border-t border-clinical-border">
        <div className="container-custom flex items-center gap-1 py-1">
          <Button variant="ghost" className="font-bold text-slate-700 hover:bg-slate-50 px-4 h-10 flex items-center gap-2">
            All Products <ChevronDown className="h-4 w-4" />
          </Button>
          
          <nav className="flex items-center text-[13px] font-bold text-slate-700">
            <a href="#" className="px-4 py-2 hover:text-[#005696] flex items-center gap-1">
              Restorative & Preventives <ChevronDown className="h-3 w-3" />
            </a>
            <a href="#" className="px-4 py-2 hover:text-[#005696] flex items-center gap-1">
              Services & Equipment <ChevronDown className="h-3 w-3" />
            </a>
            <a href="#" className="px-4 py-2 hover:text-[#005696] flex items-center gap-1">
              Laboratory <ChevronDown className="h-3 w-3" />
            </a>
            <a href="#" className="px-4 py-2 hover:text-[#005696] flex items-center gap-1">
              Endodontics <ChevronDown className="h-3 w-3" />
            </a>
          </nav>

          <div className="ml-auto flex items-center gap-4">
            <Button variant="outline" className="border-[#00a0df] text-[#005696] hover:bg-[#e6f4fa] h-9 px-4 font-bold flex items-center gap-2 rounded-full">
              <Pencil className="h-3.5 w-3.5 text-[#00a0df]" />
              Personalized
            </Button>
            <a href="#" className="text-[13px] font-bold text-slate-700 hover:text-[#005696] px-2">Quick Order</a>
            <a href="#" className="text-[13px] font-bold text-slate-700 hover:text-[#005696] px-2">Order History</a>
          </div>
        </div>
      </div>
    </header>
  );
}
