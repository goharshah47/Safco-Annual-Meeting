import { CATEGORIES } from '../data/mockData';
import * as Icons from 'lucide-react';
import { motion } from 'motion/react';

export default function CategoryShortcuts() {
  return (
    <section className="py-12 border-y border-clinical-border bg-[#f8fafc]">
      <div className="container-custom">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">Shop by Category</h2>
          <a href="#" className="text-[#005696] font-bold hover:underline text-sm">View All Categories</a>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 sm:gap-8">
          {CATEGORIES.map((cat, index) => {
            const Icon = (Icons as any)[cat.icon];
            return (
              <motion.a
                key={cat.id}
                href={`#${cat.id}`}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white border border-clinical-border flex items-center justify-center mb-3 shadow-sm transition-all group-hover:border-[#005696] group-hover:shadow-md">
                  {Icon && <Icon className="h-8 w-8 text-slate-400 group-hover:text-[#005696] transition-colors" />}
                </div>
                <span className="text-sm font-bold text-slate-700 group-hover:text-[#005696] transition-colors">
                  {cat.name}
                </span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
