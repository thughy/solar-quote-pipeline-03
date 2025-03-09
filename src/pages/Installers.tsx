import React, { useState } from 'react';
import { Search, Filter, MapPin, Star, Shield, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Sample data for demonstration
const installersData = [
  {
    id: 1,
    name: 'Arnergy Solar',
    rating: 0.0,
    reviews: 0,
    location: 'Lagos, Nigeria',
    establishedYear: 2013,
    verified: true,
    logo: 'https://images.unsplash.com/photo-1611365892117-bcea8789ac2d?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Auxano Solar',
    rating: 0.0,
    reviews: 0,
    location: 'Lagos, Nigeria',
    establishedYear: 2014,
    verified: false,
    logo: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Ceesolar',
    rating: 0.0,
    reviews: 0,
    location: 'Abuja, Nigeria',
    establishedYear: 2017,
    verified: true,
    logo: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Gennex Technologies',
    rating: 0.0,
    reviews: 0,
    location: 'Lagos, Nigeria',
    establishedYear: 2013,
    verified: false,
    logo: 'https://images.unsplash.com/photo-1595437193398-f24279553f4f?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: 5,
    name: 'PAM Africa',
    rating: 0.0,
    reviews: 0,
    location: 'Lagos, Nigeria',
    establishedYear: 2015,
    verified: true,
    logo: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: 6,
    name: 'Revocube Energies',
    rating: 0.0,
    reviews: 0,
    location: 'Lagos, Nigeria',
    establishedYear: 2016,
    verified: false,
    logo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: 7,
    name: 'Wavetra',
    rating: 0.0,
    reviews: 0,
    location: 'Lagos, Nigeria',
    establishedYear: 2014,
    verified: true,
    logo: 'https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: 8,
    name: 'Livoltek',
    rating: 0.0,
    reviews: 0,
    location: 'Not available',
    establishedYear: 2018,
    verified: false,
    logo: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=200&auto=format&fit=crop',
  }
];

// Nigerian states 
const nigerianStates = [
  'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno', 'Cross River',
  'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'FCT (Abuja)', 'Gombe', 'Imo', 'Jigawa', 'Kaduna', 'Kano',
  'Katsina', 'Kebbi', 'Kogi', 'Kwara', 'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo',
  'Plateau', 'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara'
];

// Primary business types
const businessTypes = [
  'Installation', 'Financing', 'Manufacturing', 'Architecture', 'Energy Auditing',
  'Construction', 'Plumbing', 'Roofing', 'Electrical Contracting', 'General Contracting',
  'Solar Repair & Maintenance', 'Community Solar'
];

// Technologies
const technologies = [
  'Solar PV', 'Solar Thermal', 'Battery Storage', 'Microgrids', 'Smart Energy Management',
  'Hybrid Systems', 'Off-grid Solutions', 'Grid-tied Systems'
];

const Installers: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [installers] = useState(installersData);
  const [selectedState, setSelectedState] = useState('');
  const [selectedBusinessType, setSelectedBusinessType] = useState('');
  const [selectedTechnology, setSelectedTechnology] = useState('');
  
  // Filter installers based on search term and filters
  const filteredInstallers = installers.filter(installer => {
    const matchesSearch = 
      installer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      installer.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Apply state filter if selected
    const matchesState = selectedState ? 
      installer.location.toLowerCase().includes(selectedState.toLowerCase()) : 
      true;
    
    // For demo purposes we'll return based on search and state filters
    // In a real app, we'd check business type and technology as well
    return matchesSearch && matchesState;
  });
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-solar-blue to-blue-600 py-12 text-white">
          <div className="container-tight relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-semibold mb-6">
                Solar Company Directory
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Find trusted solar installation companies across Nigeria
              </p>
              
              {/* Search Box */}
              <div className="relative max-w-xl mx-auto">
                <div className="flex gap-2">
                  <div className="relative flex-grow">
                    <Input
                      type="text"
                      placeholder="Search for solar companies..."
                      className="pl-10 py-6 text-gray-900 border-0 shadow-lg rounded-xl"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                  </div>
                  <Button size="lg" className="px-8 py-6 bg-white text-solar-blue hover:bg-gray-100">
                    <Search size={20} className="mr-2" /> Search
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-white/10 rounded-full blur-3xl"></div>
        </section>
        
        {/* Companies List Section */}
        <section className="py-12">
          <div className="container-wide">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Filters (sidebar) */}
              <div className="lg:w-1/4">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <Filter size={18} className="mr-2" /> Filters
                    </h3>
                    
                    <div className="space-y-6">
                      {/* Primary Business Filter */}
                      <div>
                        <h4 className="text-sm font-medium mb-3">Primary Business:</h4>
                        <div className="space-y-2 max-h-60 overflow-y-auto pr-2">
                          {businessTypes.map((business) => (
                            <label key={business} className="flex items-center space-x-2 cursor-pointer">
                              <input 
                                type="checkbox" 
                                className="rounded text-solar-blue focus:ring-solar-blue h-4 w-4"
                                checked={selectedBusinessType === business}
                                onChange={() => setSelectedBusinessType(business === selectedBusinessType ? '' : business)}
                              />
                              <span className="text-sm">{business}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                      
                      {/* Location Filter */}
                      <div>
                        <h4 className="text-sm font-medium mb-3">Company Locations:</h4>
                        <div className="space-y-2 max-h-60 overflow-y-auto pr-2">
                          {nigerianStates.map((state) => (
                            <label key={state} className="flex items-center space-x-2 cursor-pointer">
                              <input 
                                type="checkbox" 
                                className="rounded text-solar-blue focus:ring-solar-blue h-4 w-4"
                                checked={selectedState === state}
                                onChange={() => setSelectedState(state === selectedState ? '' : state)}
                              />
                              <span className="text-sm">{state}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                      
                      {/* Technology Filter */}
                      <div>
                        <h4 className="text-sm font-medium mb-3">Technology:</h4>
                        <div className="space-y-2 max-h-60 overflow-y-auto pr-2">
                          {technologies.map((tech) => (
                            <label key={tech} className="flex items-center space-x-2 cursor-pointer">
                              <input 
                                type="checkbox" 
                                className="rounded text-solar-blue focus:ring-solar-blue h-4 w-4"
                                checked={selectedTechnology === tech}
                                onChange={() => setSelectedTechnology(tech === selectedTechnology ? '' : tech)}
                              />
                              <span className="text-sm">{tech}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                      
                      <Button className="w-full">Apply Filters</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Installers List */}
              <div className="lg:w-3/4">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-semibold">
                    {filteredInstallers.length} Solar Companies
                  </h2>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">Sort by:</span>
                    <select className="border-gray-300 rounded-md text-sm">
                      <option>Highest Rated</option>
                      <option>Most Reviews</option>
                      <option>A-Z</option>
                    </select>
                  </div>
                </div>
                
                {/* Companies Cards */}
                <div className="space-y-6">
                  {filteredInstallers.map((installer) => (
                    <Card key={installer.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <CardContent className="p-0">
                        <div className="flex flex-col md:flex-row">
                          {/* Company Logo */}
                          <div className="md:w-1/5 p-4 flex items-center justify-center bg-gray-50">
                            <div className="w-32 h-32 overflow-hidden rounded">
                              <img 
                                src={installer.logo} 
                                alt={installer.name}
                                className="h-full w-full object-contain"
                              />
                            </div>
                          </div>
                          
                          {/* Company Details */}
                          <div className="md:w-4/5 p-6">
                            <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                              <div>
                                <div className="flex items-center gap-2 mb-2">
                                  <h2 className="text-2xl font-semibold">{installer.name}</h2>
                                  {installer.verified && (
                                    <CheckCircle size={18} className="text-green-500" />
                                  )}
                                </div>
                                
                                <div className="flex flex-wrap gap-2 mb-3">
                                  <Badge variant="outline" className="flex items-center gap-1">
                                    <MapPin size={14} />
                                    {installer.location}
                                  </Badge>
                                  <Badge variant="outline">
                                    Established Year: {installer.establishedYear}
                                  </Badge>
                                </div>
                                
                                <div className="flex items-center mb-4">
                                  <div className="text-3xl font-bold mr-2">{installer.rating.toFixed(1)}</div>
                                  <div className="flex mr-2">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                      <Star 
                                        key={star}
                                        size={20} 
                                        className="text-amber-400" 
                                        fill={star <= Math.round(installer.rating) ? "currentColor" : "none"}
                                      />
                                    ))}
                                  </div>
                                  <div className="flex items-center text-gray-600">
                                    <span className="mr-1">{installer.reviews}</span>
                                    <span>Reviews</span>
                                  </div>
                                </div>
                                
                                <Link 
                                  to="/installer-profile" 
                                  className="text-purple-600 hover:text-purple-800 font-medium"
                                >
                                  View Profile
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                {/* Pagination */}
                <div className="mt-10 flex justify-center">
                  <nav className="flex items-center space-x-2">
                    <Button variant="outline" size="sm" disabled>Previous</Button>
                    {[1, 2, 3, 4, 5].map((page) => (
                      <Button 
                        key={page} 
                        variant={page === 1 ? "default" : "outline"} 
                        size="sm"
                        className="w-9 p-0"
                      >
                        {page}
                      </Button>
                    ))}
                    <Button variant="outline" size="sm">Next</Button>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Installers;
