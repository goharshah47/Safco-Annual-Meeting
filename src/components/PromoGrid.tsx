import { PROMO_TILES } from '../data/mockData';
import { Button } from './ui/button';
import { motion } from 'motion/react';

export default function PromoGrid() {
  return (
    <section className="py-12 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROMO_TILES.map((tile, index) => (
            <motion.div
              key={tile.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative group overflow-hidden rounded-xl border border-clinical-border bg-slate-50 ${tile.span || 'col-span-1'}`}
            >
              <div className="absolute inset-0">
                <img
                  src={tile.image}
                  alt={tile.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#005696]/90 via-[#005696]/20 to-transparent" />
              </div>
              
              <div className="relative h-full min-h-[240px] p-8 flex flex-col justify-end">
                <h3 className="text-2xl font-black text-white mb-2 tracking-tight">{tile.title}</h3>
                <p className="text-blue-50 mb-6 max-w-md font-medium">{tile.subtitle}</p>
                <Button className="w-fit bg-white text-[#005696] hover:bg-slate-100 font-bold">
                  {tile.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
