import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Badge } from './ui/badge';
import { ArrowRight, Clock } from 'lucide-react';

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-slate-900 text-white py-12 lg:py-20">
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://picsum.photos/seed/dental-hero/1920/1080?blur=2"
          alt="Dental Background"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="container-custom relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="mb-4 bg-accent hover:bg-accent/90 text-white border-none flex w-fit items-center gap-1.5 px-3 py-1">
              <Clock className="h-3.5 w-3.5" />
              THIS WEEK ONLY
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Spring Dental <span className="text-secondary">Meeting Specials</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
              Our biggest deals of the season are here. Save up to 40% on top-tier instruments, 
              infection control, and restorative essentials.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 h-14 text-lg font-semibold">
                Shop All Specials
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900 px-8 h-14 text-lg">
                Download Flyer (PDF)
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute right-0 bottom-0 w-1/3 h-full hidden lg:block">
        <div className="w-full h-full bg-gradient-to-l from-primary/30 to-transparent" />
      </div>
    </section>
  );
}
