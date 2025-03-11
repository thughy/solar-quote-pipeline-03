
import React from 'react';
import { useParams } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Check, Download, ShoppingCart, Share2 } from 'lucide-react';

// Product types with sample data
const productData = {
  'solar-panels': {
    name: 'Premium Monocrystalline Solar Panel',
    rating: 4.8,
    reviews: 56,
    price: 85000,
    description: 'High-efficiency monocrystalline solar panels designed for optimal performance in Nigerian climate conditions.',
    features: [
      'Efficiency: 21.5%',
      'Power Output: 400W',
      'Warranty: 25 years',
      'Temperature Coefficient: -0.35%/°C',
      'Cell Type: Monocrystalline PERC',
      'Dimensions: 1755 x 1038 x 35mm'
    ],
    image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2047&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1631252984999-fdeef9def06a?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1611365892117-bcea8789ac2d?q=80&w=1000&auto=format&fit=crop'
    ]
  },
  'inverters': {
    name: 'Hybrid Solar Inverter with MPPT',
    rating: 4.6,
    reviews: 42,
    price: 320000,
    description: 'Advanced hybrid solar inverter with built-in MPPT charge controller for optimal energy conversion.',
    features: [
      'Capacity: 5kVA/5kW',
      'MPPT Efficiency: >99%',
      'Battery Voltage: 48V',
      'Pure Sine Wave Output',
      'LCD Display with Smart Monitoring',
      'Multiple Operating Modes: Grid-tied, Off-grid, Hybrid'
    ],
    image: 'https://images.unsplash.com/photo-1559347429-b413a197542a?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1592833143226-1126c8cae9cc?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1605980776566-0486cda076e6?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1591817121133-99b5409a3642?q=80&w=1000&auto=format&fit=crop'
    ]
  },
  'batteries': {
    name: 'Lithium Iron Phosphate Battery',
    rating: 4.9,
    reviews: 38,
    price: 450000,
    description: 'Long-lasting LiFePO4 battery designed for solar energy storage with exceptional cycle life.',
    features: [
      'Capacity: 5.12kWh (100Ah)',
      'Voltage: 51.2V',
      'Cycle Life: >4000 cycles',
      'DoD: 95%',
      'Built-in BMS (Battery Management System)',
      'Wall-mountable design'
    ],
    image: 'https://images.unsplash.com/photo-1515525941374-bdb06f80966e?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1605089103010-bcba7ca31e64?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1598550427287-8cd58081cd5f?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1606073008164-7319a1549a6c?q=80&w=1000&auto=format&fit=crop'
    ]
  },
  'solar-kits': {
    name: 'Complete Solar Home System',
    rating: 4.7,
    reviews: 29,
    price: 850000,
    description: 'All-in-one solar power solution for Nigerian homes, including panels, inverter, batteries and installation materials.',
    features: [
      '4 x 400W Solar Panels',
      '5kVA Hybrid Inverter',
      '5kWh LiFePO4 Battery',
      'Mounting Structure and Cables',
      'AC & DC Protection',
      'Monitoring System'
    ],
    image: 'https://images.unsplash.com/photo-1623227413711-25ee4388dae3?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1584276433396-beb090e91702?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1628599096035-92cdad5cc3d6?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1629452065060-1373a998e795?q=80&w=1000&auto=format&fit=crop'
    ]
  }
};

const ProductDetails = () => {
  const { productType } = useParams();
  const product = productData[productType as keyof typeof productData];
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold">Product not found</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="bg-gray-100 rounded-lg overflow-hidden h-[400px]">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            {product.gallery.map((img, idx) => (
              <div key={idx} className="bg-gray-100 rounded-lg overflow-hidden h-24 cursor-pointer hover:opacity-80 transition-opacity">
                <img 
                  src={img} 
                  alt={`${product.name} view ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                {productType?.replace('-', ' ').toUpperCase()}
              </Badge>
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                IN STOCK
              </Badge>
            </div>
            
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star}
                    size={16} 
                    className="text-amber-400" 
                    fill={star <= Math.round(product.rating) ? "currentColor" : "none"}
                  />
                ))}
              </div>
              <span className="text-gray-600">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>
            
            <div className="text-3xl font-bold text-solar-blue-dark mb-6">
              ₦{product.price.toLocaleString()}
            </div>
            
            <p className="text-gray-700 mb-6">
              {product.description}
            </p>
            
            <div className="space-y-4 mb-6">
              <h3 className="font-semibold">Key Features:</h3>
              <ul className="space-y-2">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check size={18} className="text-green-600 mt-1 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button className="bg-solar-orange hover:bg-solar-orange-dark min-w-[180px]">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
              </Button>
              <Button variant="outline" className="border-solar-blue text-solar-blue hover:bg-solar-blue/10">
                <Download className="mr-2 h-4 w-4" />
                Download Spec Sheet
              </Button>
              <Button variant="outline" className="border-gray-300">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tabs Section */}
      <Tabs defaultValue="specifications" className="mt-10">
        <TabsList className="w-full max-w-2xl grid grid-cols-3">
          <TabsTrigger value="specifications">Specifications</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
          <TabsTrigger value="compatibility">Compatibility</TabsTrigger>
        </TabsList>
        
        <TabsContent value="specifications" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <div className="prose max-w-none">
                <h3 className="text-xl font-semibold mb-4">Technical Specifications</h3>
                <table className="w-full border-collapse">
                  <tbody>
                    {product.features.map((feature, idx) => {
                      const [key, value] = feature.split(':');
                      return (
                        <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50' : ''}>
                          <td className="py-3 px-4 font-medium border border-gray-200">{key}</td>
                          <td className="py-3 px-4 border border-gray-200">{value || feature}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                
                <h3 className="text-xl font-semibold mt-8 mb-4">Warranty Information</h3>
                <p>
                  This product comes with a comprehensive warranty covering manufacturing defects and performance guarantees.
                  Please see product documentation for full details on warranty terms and conditions.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="reviews" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold">Customer Reviews</h3>
                <Button>Write a Review</Button>
              </div>
              
              <div className="space-y-6">
                {[1, 2, 3].map((review) => (
                  <div key={review} className="border-b border-gray-200 pb-6 last:border-0">
                    <div className="flex justify-between mb-2">
                      <div className="font-semibold">Customer Name</div>
                      <div className="text-gray-500 text-sm">Posted on 12 Jul 2023</div>
                    </div>
                    <div className="flex mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star 
                          key={star}
                          size={16} 
                          className="text-amber-400" 
                          fill={star <= 4 ? "currentColor" : "none"}
                        />
                      ))}
                    </div>
                    <p className="text-gray-700">
                      This product has exceeded my expectations. The performance is outstanding and installation was straightforward.
                      I've seen significant savings on my electricity bills since installing this system.
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="compatibility" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Compatible Products</h3>
              <p className="mb-6">
                This product is compatible with the following items from our catalog:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {Object.entries(productData)
                  .filter(([key]) => key !== productType)
                  .slice(0, 3)
                  .map(([key, item]) => (
                    <Card key={key} className="overflow-hidden">
                      <div className="h-48 bg-gray-100">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h4 className="font-semibold truncate">{item.name}</h4>
                        <div className="flex items-center gap-1 mt-1 mb-2">
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star 
                                key={star}
                                size={12} 
                                className="text-amber-400" 
                                fill={star <= Math.round(item.rating) ? "currentColor" : "none"}
                              />
                            ))}
                          </div>
                          <span className="text-xs text-gray-500">({item.reviews})</span>
                        </div>
                        <div className="text-solar-blue-dark font-semibold mt-1">
                          ₦{item.price.toLocaleString()}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProductDetails;
