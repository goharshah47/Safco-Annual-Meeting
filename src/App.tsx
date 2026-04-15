import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import PromoGrid from './components/PromoGrid';
import CategoryShortcuts from './components/CategoryShortcuts';
import ProductGrid from './components/ProductGrid';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';
import { DEFAULT_PAGE_CONFIG, PRODUCTS } from './data/mockData';
import { SectionType } from './types';
import { Button } from './components/Button';
import { Settings2, Eye, Layout } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [config, setConfig] = useState(DEFAULT_PAGE_CONFIG);
  const [showCMS, setShowCMS] = useState(false);

  const toggleSection = (type: SectionType) => {
    setConfig(prev => ({
      ...prev,
      sections: prev.sections.map(s => 
        s.type === type ? { ...s, enabled: !s.enabled } : s
      )
    }));
  };

  const moveSection = (index: number, direction: 'up' | 'down') => {
    const newSections = [...config.sections];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    
    if (targetIndex >= 0 && targetIndex < newSections.length) {
      [newSections[index], newSections[targetIndex]] = [newSections[targetIndex], newSections[index]];
      setConfig({ ...config, sections: newSections });
    }
  };

  const renderSection = (type: SectionType) => {
    switch (type) {
      case 'hero': return <HeroBanner key="hero" />;
      case 'promo-grid': return <PromoGrid key="promo-grid" />;
      case 'categories': return <CategoryShortcuts key="categories" />;
      case 'featured-deals': return (
        <section key="featured-deals" className="py-12 bg-slate-50 border-y border-clinical-border">
          <div className="container-custom">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-slate-900">Featured Deals</h2>
              <span className="text-xs font-bold text-accent bg-accent/10 px-2 py-1 rounded uppercase tracking-wider">Hand-Picked for You</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {PRODUCTS.slice(0, 4).map(product => (
                <ProductCard key={`featured-${product.id}`} product={product} />
              ))}
            </div>
          </div>
        </section>
      );
      case 'plp': return <ProductGrid key="plp" />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <AnimatePresence mode="popLayout">
          {config.sections
            .filter(s => s.enabled)
            .map((section) => renderSection(section.type))}
        </AnimatePresence>
      </main>

      <Footer />

      {/* CMS Controls Toggle (Simulating a marketer's view) */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          onClick={() => setShowCMS(!showCMS)}
          className="rounded-full h-14 w-14 shadow-2xl bg-slate-900 hover:bg-slate-800 text-white"
        >
          {showCMS ? <Eye className="h-6 w-6" /> : <Settings2 className="h-6 w-6" />}
        </Button>
      </div>

      {/* CMS Panel */}
      <AnimatePresence>
        {showCMS && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className="fixed top-20 right-6 bottom-24 w-80 bg-white border border-clinical-border shadow-2xl rounded-2xl z-40 overflow-hidden flex flex-col"
          >
            <div className="p-4 bg-slate-50 border-b border-clinical-border flex items-center justify-between">
              <h3 className="font-bold text-slate-900 flex items-center">
                <Layout className="h-4 w-4 mr-2" />
                Page Builder
              </h3>
              <span className="text-[10px] font-bold bg-primary/10 text-primary px-2 py-0.5 rounded-full uppercase">Marketer View</span>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              <p className="text-xs text-slate-500 mb-4">Drag and drop or toggle sections to customize the deals landing page experience.</p>
              
              {config.sections.map((section, index) => (
                <div 
                  key={section.type}
                  className={`p-3 rounded-lg border transition-all ${
                    section.enabled ? 'bg-white border-slate-200 shadow-sm' : 'bg-slate-50 border-slate-100 opacity-60'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold capitalize text-slate-700">
                      {section.type.replace('-', ' ')}
                    </span>
                    <div className="flex items-center gap-1">
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-6 w-6"
                        onClick={() => moveSection(index, 'up')}
                        disabled={index === 0}
                      >
                        <span className="sr-only">Move Up</span>
                        ↑
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-6 w-6"
                        onClick={() => moveSection(index, 'down')}
                        disabled={index === config.sections.length - 1}
                      >
                        <span className="sr-only">Move Down</span>
                        ↓
                      </Button>
                    </div>
                  </div>
                  <Button 
                    variant={section.enabled ? "default" : "outline"} 
                    size="sm" 
                    className="w-full h-8 text-xs"
                    onClick={() => toggleSection(section.type)}
                  >
                    {section.enabled ? 'Enabled' : 'Disabled'}
                  </Button>
                </div>
              ))}
            </div>
            
            <div className="p-4 bg-slate-50 border-t border-clinical-border">
              <Button className="w-full bg-primary">Publish Changes</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
