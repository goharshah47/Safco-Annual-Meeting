import { FEATURED_DEALS } from '../data/mockData';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const getTint = (category: string) => {
  const cat = category.toLowerCase();
  if (cat.includes('infection')) return 'from-blue-50/95';
  if (cat.includes('restorative')) return 'from-slate-50/95';
  if (cat.includes('instrument')) return 'from-cyan-50/95';
  if (cat.includes('ppe') || cat.includes('disposable')) return 'from-emerald-50/95';
  return 'from-blue-50/95';
};

export default function FeaturedDealsGrid() {
  return (
    <section className="py-12 bg-white">
      <div className="container-custom">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">Featured Deals</h2>
          <a href="#" className="text-[#005696] font-bold hover:underline text-sm flex items-center gap-1">
            View All Deals
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_DEALS.map((deal, index) => (
            <motion.div
              key={deal.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={deal.variant === 'featured' ? 'lg:col-span-2' : 'col-span-1'}
            >
              <Card className="group relative h-full min-h-[240px] overflow-hidden border-clinical-border rounded-xl hover:shadow-xl transition-all duration-500 bg-white hover:brightness-[1.02]">
                {/* Background Image */}
                {deal.image && (
                  <div className="absolute inset-0 z-0">
                    <img
                      src={deal.image}
                      alt={deal.category}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    {/* Localized Text Overlay (Top-Left) */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/60 to-transparent opacity-100 z-1" />
                    {/* Subtle Category Tint */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${getTint(deal.category)} opacity-40 mix-blend-multiply z-2`} />
                  </div>
                )}

                <CardContent className="relative z-10 p-8 h-full flex flex-col justify-between">
                  <div className="text-left">
                    <div className="mb-1">
                      <span className="text-[11px] font-black text-[#005696] uppercase tracking-[0.2em] block mb-1 drop-shadow-sm">
                        {deal.category}
                      </span>
                      <h3 className="text-3xl lg:text-4xl font-black text-slate-900 leading-[0.95] tracking-tighter drop-shadow-sm">
                        {deal.offer}
                      </h3>
                    </div>
                  </div>
                  
                  {deal.cta && (
                    <div className="mt-auto pt-6">
                      <span className="inline-flex items-center gap-2 text-sm font-bold text-[#005696] bg-white/90 backdrop-blur-md px-5 py-2.5 rounded-full border border-[#005696]/20 group-hover:bg-[#005696] group-hover:text-white transition-all duration-300 shadow-md">
                        {deal.cta}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
