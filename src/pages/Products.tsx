
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Star, Search, Filter, X } from 'lucide-react';

const productCategories = [
  {
    id: 'solar-panels',
    name: 'Solar Panels',
    description: 'High-efficiency solar panels for residential and commercial use',
    image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=800&auto=format&fit=crop',
    count: 12
  },
  {
    id: 'inverters',
    name: 'Inverters',
    description: 'Pure sine wave inverters for reliable power conversion',
    image: 'https://images.unsplash.com/photo-1559347429-b413a197542a?q=80&w=800&auto=format&fit=crop',
    count: 8
  },
  {
    id: 'batteries',
    name: 'Batteries',
    description: 'Long-lasting lithium and lead-acid batteries for energy storage',
    image: 'https://images.unsplash.com/photo-1515525941374-bdb06f80966e?q=80&w=800&auto=format&fit=crop',
    count: 10
  },
  {
    id: 'solar-kits',
    name: 'Solar Kits',
    description: 'Complete solar power systems with all required components',
    image: 'https://images.unsplash.com/photo-1623227413711-25ee4388dae3?q=80&w=800&auto=format&fit=crop',
    count: 5
  }
];

// Sample products for each category
const products = [
  {
    id: 1,
    name: 'Premium Monocrystalline Solar Panel',
    category: 'solar-panels',
    price: 85000,
    rating: 4.8,
    reviews: 56,
    image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=500&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Polycrystalline Solar Panel 300W',
    category: 'solar-panels',
    price: 65000,
    rating: 4.5,
    reviews: 38,
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=500&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Hybrid Solar Inverter with MPPT',
    category: 'inverters',
    price: 320000,
    rating: 4.6,
    reviews: 42,
    image: 'https://images.unsplash.com/photo-1559347429-b413a197542a?q=80&w=500&auto=format&fit=crop'
  },
  {
    id: 4,
    name: 'Off-Grid Solar Inverter 5kVA',
    category: 'inverters',
    price: 280000,
    rating: 4.3,
    reviews: 29,
    image: 'https://images.unsplash.com/photo-1592833143226-1126c8cae9cc?q=80&w=500&auto=format&fit=crop'
  },
  {
    id: 5,
    name: 'Lithium Iron Phosphate Battery',
    category: 'batteries',
    price: 450000,
    rating: 4.9,
    reviews: 38,
    image: 'https://images.unsplash.com/photo-1515525941374-bdb06f80966e?q=80&w=500&auto=format&fit=crop'
  },
  {
    id: 6,
    name: 'Deep Cycle AGM Battery 200Ah',
    category: 'batteries',
    price: 180000,
    rating: 4.4,
    reviews: 24,
    image: 'https://images.unsplash.com/photo-1605089103010-bcba7ca31e64?q=80&w=500&auto=format&fit=crop'
  },
  {
    id: 7,
    name: 'Complete Solar Home System 5kW',
    category: 'solar-kits',
    price: 850000,
    rating: 4.7,
    reviews: 29,
    image: 'https://images.unsplash.com/photo-1623227413711-25ee4388dae3?q=80&w=500&auto=format&fit=crop'
  },
  {
    id: 8,
    name: 'Portable Solar Generator Kit',
    category: 'solar-kits',
    price: 120000,
    rating: 4.2,
    reviews: 17,
    image: 'https://images.unsplash.com/photo-1584276433396-beb090e91702?q=80&w=500&auto=format&fit=crop'
  }
];

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000000]);
  
  // Filter products based on search, category, and price range
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    
    return matchesSearch && matchesCategory && matchesPrice;
  });
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <h1 className="text-3xl font-bold text-solar-blue-dark">Solar Products</h1>
        
        <div className="flex gap-2 w-full md:w-auto">
          <div className="relative flex-grow">
            <Input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={16} />
          </div>
          <Button 
            variant="outline" 
            className="shrink-0"
            onClick={() => setShowFilters(!showFilters)}
          >
            {showFilters ? <X size={16} /> : <Filter size={16} />}
            <span className="ml-2 hidden sm:inline">{showFilters ? 'Hide Filters' : 'Filters'}</span>
          </Button>
        </div>
      </div>
      
      {/* Category Tabs */}
      <Tabs 
        defaultValue="all" 
        className="mb-8"
        value={selectedCategory}
        onValueChange={setSelectedCategory}
      >
        <TabsList className="w-full overflow-x-auto flex flex-nowrap mb-2">
          <TabsTrigger value="all" className="flex-shrink-0">All Products</TabsTrigger>
          {productCategories.map(category => (
            <TabsTrigger 
              key={category.id} 
              value={category.id}
              className="flex-shrink-0"
            >
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
      
      {/* Filter drawer - conditionally rendered */}
      {showFilters && (
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Price Range</h3>
                <div className="flex items-center gap-2">
                  <Input 
                    type="number" 
                    placeholder="Min" 
                    value={priceRange[0]} 
                    onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                  />
                  <span>to</span>
                  <Input 
                    type="number" 
                    placeholder="Max" 
                    value={priceRange[1]} 
                    onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                  />
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Brand</h3>
                <div className="space-y-2">
                  {['Jinko Solar', 'Canadian Solar', 'Growatt', 'LG', 'All Brands'].map((brand, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <input 
                        type="checkbox" 
                        id={`brand-${index}`} 
                        className="rounded text-solar-blue focus:ring-solar-blue"
                      />
                      <label htmlFor={`brand-${index}`}>{brand}</label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Availability</h3>
                <div className="space-y-2">
                  {['In Stock', 'Ships in 1-3 Days', 'Pre-order'].map((status, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <input 
                        type="checkbox" 
                        id={`status-${index}`} 
                        className="rounded text-solar-blue focus:ring-solar-blue"
                      />
                      <label htmlFor={`status-${index}`}>{status}</label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex justify-end mt-6">
              <Button 
                variant="outline" 
                className="mr-2"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setPriceRange([0, 1000000]);
                }}
              >
                Reset
              </Button>
              <Button>Apply Filters</Button>
            </div>
          </CardContent>
        </Card>
      )}
      
      {/* Main product grid */}
      {selectedCategory === 'all' && searchTerm === '' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {productCategories.map(category => (
            <Link 
              key={category.id} 
              to={`/products/${category.id}`}
              className="no-underline"
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-60">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h2 className="text-2xl font-bold">{category.name}</h2>
                    <p className="text-white/80">{category.count} products</p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-gray-600">{category.description}</p>
                  <Button className="w-full mt-4">
                    View Products
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
      
      {/* Products grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <Link 
            key={product.id} 
            to={`/products/${product.category}/${product.id}`}
            className="no-underline"
          >
            <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <Badge 
                  className="absolute top-3 right-3 bg-white text-solar-blue-dark border-0"
                >
                  New
                </Badge>
              </div>
              <CardContent className="p-4 flex-grow flex flex-col">
                <div className="mb-2">
                  <Badge variant="outline" className="text-xs">
                    {productCategories.find(c => c.id === product.category)?.name}
                  </Badge>
                </div>
                <h3 className="font-medium text-solar-blue-dark line-clamp-2 mb-1">
                  {product.name}
                </h3>
                <div className="flex items-center gap-1 mt-1 mb-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star}
                        size={14} 
                        className="text-amber-400" 
                        fill={star <= Math.round(product.rating) ? "currentColor" : "none"}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500">({product.reviews})</span>
                </div>
                <div className="text-xl font-bold text-solar-blue-dark mt-auto">
                  ₦{product.price.toLocaleString()}
                </div>
                <Button className="w-full mt-4 bg-solar-blue hover:bg-solar-blue-dark">
                  View Details
                </Button>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <h2 className="text-xl font-semibold mb-2">No products found</h2>
          <p className="text-gray-600 mb-6">Try adjusting your filters or search term</p>
          <Button 
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('all');
              setPriceRange([0, 1000000]);
            }}
          >
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  );
};

export default Products;
