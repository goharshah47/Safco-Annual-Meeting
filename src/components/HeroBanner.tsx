import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

export default function HeroBanner() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-[#dbeafe] via-[#eff6ff] to-[#005696] min-h-[320px] lg:min-h-[450px] flex items-center">
      {/* Tech Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(#005696_1px,transparent_1px)] [background-size:20px_20px]" />
      </div>

      <div className="container-custom relative z-10 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-6 mb-6">
              {/* AAE Logo Recreation */}
              <div className="flex -space-x-4 shrink-0">
                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-[#d4e157] opacity-80" />
                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-[#9ccc65] opacity-80" />
                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-[#005696] flex items-center justify-center text-white font-black text-xl lg:text-2xl leading-none">
                  <div className="flex flex-col items-center">
                    <span>aa</span>
                    <span>ae</span>
                  </div>
                </div>
              </div>
              <h2 className="text-2xl lg:text-4xl font-medium text-[#003d6b] tracking-tight">
                AAE26 Annual Meeting
              </h2>
            </div>

            <h1 className="text-5xl lg:text-7xl font-black text-[#003d6b] mb-6 tracking-tighter">
              Exclusive <span className="text-[#005696]">Deals!</span>
            </h1>

            <div className="flex items-center gap-3 mb-8">
              <div className="bg-[#d4e157] text-[#003d6b] font-black text-2xl lg:text-4xl px-4 py-1 rounded-sm shadow-sm">
                Visit us at Booth #910
              </div>
            </div>

            <div className="flex gap-4">
              <Button size="lg" className="bg-[#005696] hover:bg-[#004578] text-white px-8 h-14 text-lg font-bold shadow-lg border-none">
                Shop Meeting Specials
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>

          {/* Right Content - Product Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex justify-end relative"
          >
            <div className="relative flex items-end gap-4">
              {/* Product 1: Curing Light */}
              <div className="relative group">
                <div className="absolute -inset-8 bg-white/40 blur-3xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
                <img 
                  src="https://images.unsplash.com/photo-1629679019911-20a1083c9479?auto=format&fit=crop&q=80&w=600&h=800" 
                  alt="Dental Curing Light" 
                  className="h-96 w-auto object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.3)] relative z-10"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              {/* Product 2: Dental Tools & Handpiece */}
              <div className="flex flex-col gap-6 mb-8">
                <div className="bg-white p-2 rounded-lg shadow-xl rotate-3">
                  <img 
                    src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=400&h=300" 
                    alt="Dental Instruments" 
                    className="h-28 w-auto object-contain"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                <div className="bg-white p-2 rounded-lg shadow-xl -rotate-2">
                  <img 
                    src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=400&h=300" 
                    alt="Dental Handpiece" 
                    className="h-28 w-auto object-contain"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
