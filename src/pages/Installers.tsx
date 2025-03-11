
import React, { useState } from 'react';
import { Search, Filter, MapPin, Star, Shield, CheckCircle, ArrowUpDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

// Sample data for demonstration
const installersData = [
  {
    id: 1,
    name: 'Arnergy Solar',
    rating: 4.2,
    reviews: 12,
    location: 'Lagos, Nigeria',
    establishedYear: 2013,
    verified: true,
    logo: 'https://images.unsplash.com/photo-1611365892117-bcea8789ac2d?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Auxano Solar',
    rating: 3.8,
    reviews: 8,
    location: 'Lagos, Nigeria',
    establishedYear: 2014,
    verified: false,
    logo: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Ceesolar',
    rating: 4.5,
    reviews: 15,
    location: 'Abuja, Nigeria',
    establishedYear: 2017,
    verified: true,
    logo: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Gennex Technologies',
    rating: 4.0,
    reviews: 10,
    location: 'Lagos, Nigeria',
    establishedYear: 2013,
    verified: false,
    logo: 'https://images.unsplash.com/photo-1595437193398-f24279553f4f?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: 5,
    name: 'PAM Africa',
    rating: 4.7,
    reviews: 18,
    location: 'Lagos, Nigeria',
    establishedYear: 2015,
    verified: true,
    logo: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: 6,
    name: 'Revocube Energies',
    rating: 3.9,
    reviews: 7,
    location: 'Lagos, Nigeria',
    establishedYear: 2016,
    verified: false,
    logo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: 7,
    name: 'Wavetra',
    rating: 4.4,
    reviews: 14,
    location: 'Lagos, Nigeria',
    establishedYear: 2014,
    verified: true,
    logo: 'https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: 8,
    name: 'Livoltek',
    rating: 3.5,
    reviews: 5,
    location: 'Not available',
    establishedYear: 2018,
    verified: false,
    logo: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=200&auto=format&fit=crop',
  }
];

// Nigerian states 
const nigerianStates = [
  'All States', 'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno', 'Cross River',
  'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'FCT (Abuja)', 'Gombe', 'Imo', 'Jigawa', 'Kaduna', 'Kano',
  'Katsina', 'Kebbi', 'Kogi', 'Kwara', 'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo',
  'Plateau', 'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara'
];

// Primary business types
const businessTypes = [
  'All Types', 'Installation', 'Financing', 'Manufacturing', 'Architecture', 'Energy Auditing',
  'Construction', 'Plumbing', 'Roofing', 'Electrical Contracting', 'General Contracting',
  'Solar Repair & Maintenance', 'Community Solar'
];

// Technologies
const technologies = [
  'All Technologies', 'Solar PV', 'Solar Thermal', 'Battery Storage', 'Microgrids', 'Smart Energy Management',
  'Hybrid Systems', 'Off-grid Solutions', 'Grid-tied Systems'
];

const Installers: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [installers] = useState(installersData);
  const [selectedState, setSelectedState] = useState('All States');
  const [selectedBusinessType, setSelectedBusinessType] = useState('All Types');
  const [selectedTechnology, setSelectedTechnology] = useState('All Technologies');
  const [sortBy, setSortBy] = useState('highest-rated');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  
  // Filter installers based on search term and filters
  const filteredInstallers = installers.filter(installer => {
    const matchesSearch = 
      installer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      installer.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Apply state filter if selected
    const matchesState = selectedState === 'All States' ? 
      true : 
      installer.location.toLowerCase().includes(selectedState.toLowerCase());
    
    // For demo purposes we're just checking state filter
    // In a real app, we'd check business type and technology as well
    return matchesSearch && matchesState;
  });
  
  // Sort filtered installers
  const sortedInstallers = [...filteredInstallers].sort((a, b) => {
    switch (sortBy) {
      case 'highest-rated':
        return b.rating - a.rating;
      case 'most-reviews':
        return b.reviews - a.reviews;
      case 'newest':
        return b.establishedYear - a.establishedYear;
      case 'a-z':
        return a.name.localeCompare(b.name);
      case 'z-a':
        return b.name.localeCompare(a.name);
      default:
        return 0;
    }
  });
  
  // Calculate pagination
  const totalPages = Math.ceil(sortedInstallers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedInstallers = sortedInstallers.slice(startIndex, startIndex + itemsPerPage);
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const handleApplyFilters = () => {
    setCurrentPage(1); // Reset to first page when applying filters
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-700 to-blue-600 py-12 text-white">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-semibold mb-6">
              Find Trusted Solar Installers
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Connect with experienced solar installation companies across Nigeria
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
                <Button size="lg" className="px-8 py-6 bg-white text-purple-700 hover:bg-gray-100">
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
        <div className="container mx-auto px-4">
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
                      <h4 className="text-sm font-medium mb-3">Business Type:</h4>
                      <Select 
                        value={selectedBusinessType} 
                        onValueChange={setSelectedBusinessType}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select business type" />
                        </SelectTrigger>
                        <SelectContent>
                          {businessTypes.map((business) => (
                            <SelectItem key={business} value={business}>
                              {business}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    {/* Location Filter */}
                    <div>
                      <h4 className="text-sm font-medium mb-3">Location:</h4>
                      <Select 
                        value={selectedState} 
                        onValueChange={setSelectedState}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select location" />
                        </SelectTrigger>
                        <SelectContent>
                          {nigerianStates.map((state) => (
                            <SelectItem key={state} value={state}>
                              {state}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    {/* Technology Filter */}
                    <div>
                      <h4 className="text-sm font-medium mb-3">Technology:</h4>
                      <Select 
                        value={selectedTechnology} 
                        onValueChange={setSelectedTechnology}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select technology" />
                        </SelectTrigger>
                        <SelectContent>
                          {technologies.map((tech) => (
                            <SelectItem key={tech} value={tech}>
                              {tech}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <Button className="w-full" onClick={handleApplyFilters}>Apply Filters</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Installers List */}
            <div className="lg:w-3/4">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">
                  {sortedInstallers.length} Solar Companies
                </h2>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600 hidden sm:inline">Sort by:</span>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="highest-rated">Highest Rated</SelectItem>
                      <SelectItem value="most-reviews">Most Reviews</SelectItem>
                      <SelectItem value="newest">Newest First</SelectItem>
                      <SelectItem value="a-z">A-Z</SelectItem>
                      <SelectItem value="z-a">Z-A</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              {/* Companies Cards */}
              {paginatedInstallers.length > 0 ? (
                <div className="space-y-6">
                  {paginatedInstallers.map((installer) => (
                    <Card key={installer.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <CardContent className="p-0">
                        <div className="flex flex-col md:flex-row">
                          {/* Company Logo */}
                          <div className="md:w-1/5 p-4 flex items-center justify-center bg-gray-50">
                            <div className="w-32 h-32 overflow-hidden rounded-lg border border-gray-100">
                              <img 
                                src={installer.logo} 
                                alt={installer.name}
                                className="h-full w-full object-cover"
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
                                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 flex items-center gap-1">
                                      <CheckCircle size={14} />
                                      Verified
                                    </Badge>
                                  )}
                                </div>
                                
                                <div className="flex flex-wrap gap-2 mb-3">
                                  <Badge variant="outline" className="flex items-center gap-1">
                                    <MapPin size={14} />
                                    {installer.location}
                                  </Badge>
                                  <Badge variant="outline">
                                    Est. {installer.establishedYear}
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
                                  to={`/installer-profile/${installer.id}`}
                                  className="text-purple-600 hover:text-purple-800 font-medium"
                                >
                                  View Profile
                                </Link>
                              </div>
                              
                              <div className="mt-4 md:mt-0">
                                <Button className="bg-purple-600 hover:bg-purple-700">
                                  Contact Company
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card className="p-8 text-center">
                  <h3 className="text-xl font-medium text-gray-600 mb-2">No companies found</h3>
                  <p className="text-gray-500 mb-4">Try adjusting your search or filters</p>
                  <Button variant="outline" onClick={() => {
                    setSearchTerm('');
                    setSelectedState('All States');
                    setSelectedBusinessType('All Types');
                    setSelectedTechnology('All Technologies');
                  }}>
                    Clear all filters
                  </Button>
                </Card>
              )}
              
              {/* Pagination */}
              {totalPages > 1 && (
                <Pagination className="mt-10">
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious 
                        onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                        className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                      />
                    </PaginationItem>
                    
                    {Array.from({ length: totalPages }).map((_, i) => {
                      // Show first 3 pages, current page, and last 3 pages
                      if (
                        i < 2 || 
                        i > totalPages - 3 || 
                        Math.abs(i + 1 - currentPage) <= 1
                      ) {
                        return (
                          <PaginationItem key={i}>
                            <PaginationLink
                              onClick={() => handlePageChange(i + 1)}
                              isActive={currentPage === i + 1}
                              className="cursor-pointer"
                            >
                              {i + 1}
                            </PaginationLink>
                          </PaginationItem>
                        );
                      } else if (
                        i === 2 && currentPage > 4 ||
                        i === totalPages - 3 && currentPage < totalPages - 3
                      ) {
                        return (
                          <PaginationItem key={i}>
                            <PaginationEllipsis />
                          </PaginationItem>
                        );
                      }
                      return null;
                    })}
                    
                    <PaginationItem>
                      <PaginationNext 
                        onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                        className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Installers;
