import { Facebook, Linkedin, Instagram, Youtube, Phone, MessageSquare, Printer, Mail, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export default function Footer() {
  return (
    <footer className="bg-[#f8fafc] border-t border-clinical-border">
      {/* Newsletter Section */}
      <div className="bg-[#f0f4f8] py-12">
        <div className="container-custom text-center max-w-2xl">
          <h3 className="text-xl font-bold text-slate-900 mb-4">Sign up for Exclusive Savings!</h3>
          <div className="flex gap-2 max-w-md mx-auto mb-2">
            <Input 
              placeholder="Enter your email" 
              className="bg-white border-slate-300 h-11"
            />
            <Button className="bg-[#005696] hover:bg-[#004578] h-11 px-8 font-bold">Subscribe</Button>
          </div>
          <p className="text-xs text-slate-500">Get exclusive offers, current specials, new product announcements and more!</p>
        </div>
      </div>

      {/* Flyer Links Row */}
      <div className="py-8 border-b border-clinical-border">
        <div className="container-custom flex flex-wrap justify-center gap-4">
          {['Request a Catalog', 'Q3 Sales Flyer', 'Q3 ODA Sales Flyer', 'Q3 Endo Sales Flyer', 'August Sales Flyer', 'August ODA Sales Flyer'].map((text) => (
            <Button key={text} variant="outline" className="bg-white border-slate-200 text-slate-700 font-bold text-xs h-10 px-6 hover:bg-slate-50">
              {text}
            </Button>
          ))}
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand & Contact */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex flex-col">
              <svg viewBox="0 0 280 100" className="h-8 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            <p className="text-sm text-slate-600 font-medium leading-relaxed">
              More Products. More Savings. Delivered.
            </p>
            <div className="flex items-center gap-4 text-slate-400">
              <Facebook className="h-5 w-5 cursor-pointer hover:text-[#005696]" />
              <Linkedin className="h-5 w-5 cursor-pointer hover:text-[#005696]" />
              <Instagram className="h-5 w-5 cursor-pointer hover:text-[#005696]" />
              <Youtube className="h-5 w-5 cursor-pointer hover:text-[#005696]" />
            </div>
            <div className="space-y-3 text-[13px] text-slate-700 font-medium">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-slate-400" />
                <span>800-621-2178</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageSquare className="h-4 w-4 text-slate-400" />
                <span>847-495-7494</span>
              </div>
              <div className="flex items-center gap-3">
                <Printer className="h-4 w-4 text-slate-400" />
                <span>800-899-9954</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-slate-400" />
                <span className="text-[#005696] hover:underline cursor-pointer">customerservice@safcodental.com</span>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 mb-6 uppercase tracking-wider">About Us</h4>
            <ul className="space-y-3 text-[13px] text-slate-600 font-medium">
              <li><a href="#" className="hover:text-[#005696]">About Safco</a></li>
              <li><a href="#" className="hover:text-[#005696]">Safco History</a></li>
              <li><a href="#" className="hover:text-[#005696]">Careers</a></li>
              <li><a href="#" className="hover:text-[#005696]">Contact Us</a></li>
              <li><a href="#" className="hover:text-[#005696]">Women in Dentistry</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-slate-900 mb-6 uppercase tracking-wider">My Account</h4>
            <ul className="space-y-3 text-[13px] text-slate-600 font-medium">
              <li><a href="#" className="hover:text-[#005696]">Make a payment</a></li>
              <li><a href="#" className="hover:text-[#005696]">Manage Payment Options</a></li>
              <li><a href="#" className="hover:text-[#005696]">My Balance</a></li>
              <li><a href="#" className="hover:text-[#005696]">Shopping Lists</a></li>
              <li><a href="#" className="hover:text-[#005696]">Order History</a></li>
              <li><a href="#" className="hover:text-[#005696]">Start a Return</a></li>
              <li><a href="#" className="hover:text-[#005696]">Track Orders</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-slate-900 mb-6 uppercase tracking-wider">Customer Service</h4>
            <ul className="space-y-3 text-[13px] text-slate-600 font-medium">
              <li><a href="#" className="hover:text-[#005696]">Manufacturer Partners</a></li>
              <li><a href="#" className="hover:text-[#005696]">Meet Customer Service</a></li>
              <li><a href="#" className="hover:text-[#005696]">FAQs</a></li>
              <li><a href="#" className="hover:text-[#005696]">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-[#005696]">Return Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-slate-900 mb-6 uppercase tracking-wider">Services & Resources</h4>
            <ul className="space-y-3 text-[13px] text-slate-600 font-medium">
              <li><a href="#" className="hover:text-[#005696]">In-office Repair & Service</a></li>
              <li><a href="#" className="hover:text-[#005696]">Hand-piece Repair</a></li>
              <li><a href="#" className="hover:text-[#005696]">Financial Services</a></li>
              <li><a href="#" className="hover:text-[#005696]">Klas Solutions</a></li>
              <li><a href="#" className="hover:text-[#005696]">Blog</a></li>
              <li><a href="#" className="hover:text-[#005696]">Popular Dental Products</a></li>
              <li><a href="#" className="hover:text-[#005696]">Webinars</a></li>
              <li><a href="#" className="hover:text-[#005696]">Sitemap</a></li>
            </ul>
            
            <div className="mt-8 flex items-center gap-3">
              <div className="h-8 w-12 bg-white border border-slate-200 rounded flex items-center justify-center text-[10px] font-bold text-blue-800 italic">VISA</div>
              <div className="h-8 w-12 bg-white border border-slate-200 rounded flex items-center justify-center">
                <div className="flex -space-x-2">
                  <div className="w-4 h-4 rounded-full bg-red-500 opacity-80" />
                  <div className="w-4 h-4 rounded-full bg-yellow-500 opacity-80" />
                </div>
              </div>
              <div className="h-8 w-12 bg-[#0070d2] rounded flex items-center justify-center text-[8px] font-bold text-white">AMEX</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-clinical-border flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-center gap-6 text-[13px] font-medium text-slate-500">
            <a href="#" className="hover:text-[#005696]">Privacy Policy</a>
            <span className="text-slate-300">|</span>
            <a href="#" className="hover:text-[#005696]">Do Not Sell My Personal Information</a>
            <span className="text-slate-300">|</span>
            <a href="#" className="hover:text-[#005696]">Terms of Sale</a>
            <span className="text-slate-300">|</span>
            <a href="#" className="hover:text-[#005696]">Email Preferences</a>
          </div>
          <p className="text-[13px] text-slate-500 font-medium">
            © 2025 Safco Dental Supply LLC. All rights reserved.
          </p>
        </div>
      </div>

      {/* Floating Message Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button className="bg-[#005696] hover:bg-[#004578] text-white rounded-full px-6 h-12 flex items-center gap-2 shadow-xl">
          <MessageCircle className="h-5 w-5" />
          <span className="font-bold">Message</span>
          <div className="flex gap-0.5">
            <div className="w-1 h-1 rounded-full bg-white" />
            <div className="w-1 h-1 rounded-full bg-white" />
            <div className="w-1 h-1 rounded-full bg-white" />
          </div>
        </Button>
      </div>
    </footer>
  );
}
