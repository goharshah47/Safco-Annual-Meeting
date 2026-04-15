import { useState, useMemo } from 'react';
import { PRODUCTS, CATEGORIES } from '../data/mockData';
import ProductCard from './ProductCard';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Button } from './Button';
import { Filter, X, SlidersHorizontal, Search } from 'lucide-react';
import { Badge } from './ui/badge';

export default function ProductGrid() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = PRODUCTS.filter(p => p.promo); // Only promo products for this page

    if (search) {
      result = result.filter(p => 
        p.name.toLowerCase().includes(search.toLowerCase()) || 
        p.brand.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category !== 'all') {
      result = result.filter(p => p.category.toLowerCase() === category.toLowerCase());
    }

    if (sortBy === 'price-low') {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result = [...result].sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result = [...result].sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [search, category, sortBy]);

  return (
    <section className="py-12 bg-white" id="plp">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-1">All Promotional Deals</h2>
            <p className="text-slate-500 text-sm">Showing {filteredProducts.length} results</p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative w-full sm:w-64">
              <Input 
                placeholder="Filter these deals..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-slate-50 border-slate-200"
              />
            </div>
            
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px] bg-slate-50 border-slate-200">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest Arrivals</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Top Rated</SelectItem>
              </SelectContent>
            </Select>

            <Button 
              variant="outline" 
              className="md:hidden"
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Sidebar Filters */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              <div>
                <h3 className="font-bold text-slate-900 mb-4 flex items-center">
                  <Filter className="h-4 w-4 mr-2" />
                  Categories
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setCategory('all')}
                    className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                      category === 'all' ? 'bg-primary/10 text-primary font-semibold' : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    All Categories
                  </button>
                  {CATEGORIES.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setCategory(cat.name)}
                      className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                        category === cat.name ? 'bg-primary/10 text-primary font-semibold' : 'text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 className="font-bold text-slate-900 text-sm mb-2">Need a Custom Quote?</h4>
                <p className="text-xs text-slate-500 mb-4">For large practices or group orders, contact our specialists.</p>
                <Button variant="outline" size="sm" className="w-full text-xs">Contact Sales</Button>
              </div>
            </div>
          </aside>

          {/* Active Filters */}
          <div className="flex-1">
            {(category !== 'all' || search) && (
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="text-sm text-slate-500 mr-2">Active Filters:</span>
                {category !== 'all' && (
                  <Badge variant="secondary" className="pl-2 pr-1 py-1 flex items-center gap-1">
                    {category}
                    <button onClick={() => setCategory('all')}><X className="h-3 w-3" /></button>
                  </Badge>
                )}
                {search && (
                  <Badge variant="secondary" className="pl-2 pr-1 py-1 flex items-center gap-1">
                    "{search}"
                    <button onClick={() => setSearch('')}><X className="h-3 w-3" /></button>
                  </Badge>
                )}
                <button 
                  onClick={() => { setCategory('all'); setSearch(''); }}
                  className="text-xs text-primary font-semibold hover:underline ml-2"
                >
                  Clear All
                </button>
              </div>
            )}

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="py-20 text-center border-2 border-dashed border-slate-200 rounded-2xl">
                <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-slate-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">No deals found</h3>
                <p className="text-slate-500">Try adjusting your filters or search terms to find what you're looking for.</p>
                <Button 
                  variant="link" 
                  onClick={() => { setCategory('all'); setSearch(''); }}
                  className="mt-4"
                >
                  Reset all filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
