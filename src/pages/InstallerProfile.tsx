import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { MapPin, Star, Calendar, Users, Building, Check, Phone, Mail, Globe, ChevronRight, ThumbsUp, ThumbsDown, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const InstallerProfile: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  const installerData = {
    name: "Ceesolar",
    establishedYear: 2017,
    rating: 0.0,
    reviewCount: 0,
    employeeRange: "11-50",
    headquarters: "Abuja, Nigeria",
    parentCompany: "Ceesolar Energy Limited",
    description: "Ceesolar is involved in designing, supplying, and installing solar power systems. They also provide mini-grid development, consulting services, energy audits, energy systems, and commercial and industrial solar. They offer on-site and remote maintenance for customer satisfaction, and to ensure long-term use of the system.",
    mission: "Ceesolar is a solar power company that offers grid development, commercial and industrial power supply, audits and consulting services. We adopt a unique, detailed, and all-encompassing approach to the implementation of our projects across all business segments.",
    services: [
      "Commercial Installation",
      "Community Solar",
      "Electrical Contracting",
      "Residential Installation",
      "Mini-grid Development",
      "Energy Audits",
      "Consulting Services"
    ],
    locations: [
      {
        type: "Headquarters", 
        address: "1143b Okoi Arikpo Street, Utako, Abuja 900108, Federal Capital Territory"
      }
    ],
    statesServed: [
      "Abia", "Abuja", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa"
    ],
    similarCompanies: [
      {
        name: "Sygnite power and energy solutions",
        shortName: "Sygnite",
        location: "Lagos, Nigeria",
        logo: "https://images.unsplash.com/photo-1595437193398-f24279553f4f?q=80&w=100&auto=format&fit=crop"
      },
      {
        name: "Gennex Technologies",
        shortName: "Gennex Technologies",
        location: "Lagos, Nigeria",
        logo: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=100&auto=format&fit=crop"
      },
      {
        name: "PAM Africa",
        shortName: "PAM Africa",
        location: "Lagos, Nigeria",
        logo: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=100&auto=format&fit=crop"
      },
      {
        name: "Revocube Energies",
        shortName: "Revocube Energies",
        location: "Lagos, Nigeria",
        logo: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=100&auto=format&fit=crop"
      }
    ],
    // Sample reviews data (empty for this company)
    reviews: []
  };
  
  // Sample review data structure for reference
  const sampleReview = {
    id: 1,
    authorName: "John Smith",
    authorLocation: "Lagos, Nigeria",
    date: "2023-05-15",
    rating: 4.5,
    title: "Great service and professional installation",
    content: "The installation team was professional and completed the job ahead of schedule. The system has been working flawlessly for 6 months now.",
    helpful: 12,
    notHelpful: 2,
    tags: ["Residential", "10kW System", "Battery Storage"],
    installerResponse: {
      author: "Alex Johnson, Customer Service Manager",
      date: "2023-05-18",
      content: "Thank you for your kind words, John! We're glad to hear that your system is working well. Please don't hesitate to reach out if you need anything else."
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-20">
        {/* Header Section */}
        <section className="py-8 bg-white border-b">
          <div className="container-wide">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 bg-solar-blue text-white rounded-xl flex items-center justify-center text-3xl font-bold">
                  {installerData.name.substring(0, 2).toUpperCase()}
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <h1 className="text-3xl font-bold">{installerData.name}</h1>
                    <Button variant="outline" size="sm">
                      Claim this profile
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {installerData.services.slice(0, 4).map((service, index) => (
                      <Badge key={index} variant="secondary">{service}</Badge>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button>Contact Installer</Button>
                <Button variant="outline">Visit Website</Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Rating & Info Cards */}
        <section className="py-8 bg-gray-50">
          <div className="container-wide">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Rating Card */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold mb-1">EnergyLucid Rating</h3>
                      <div className="flex items-center">
                        <span className="text-4xl font-bold">{installerData.rating.toFixed(1)}</span>
                        <div className="flex ml-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star 
                              key={star} 
                              size={18} 
                              className="text-gray-300" 
                              fill="currentColor" 
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">{installerData.reviewCount} Reviews</p>
                    </div>
                    <Button size="sm">Write a Review</Button>
                  </div>
                  
                  {/* Rating Breakdown */}
                  <div className="mt-6 space-y-2">
                    {["Excellent", "Very good", "Average", "Poor", "Terrible"].map((rating) => (
                      <div key={rating} className="flex items-center">
                        <span className="text-sm w-24">{rating}</span>
                        <div className="flex-grow h-2 bg-gray-200 rounded-full mx-2">
                          <div className="h-2 bg-solar-blue rounded-full w-0"></div>
                        </div>
                        <span className="text-sm w-8 text-right">0%</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* Company Info Card */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Company Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Calendar size={18} className="mr-3 text-solar-blue shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-600">Established Year</p>
                        <p className="font-medium">{installerData.establishedYear}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Users size={18} className="mr-3 text-solar-blue shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-600">Employees</p>
                        <p className="font-medium">{installerData.employeeRange}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Building size={18} className="mr-3 text-solar-blue shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-600">Parent Company</p>
                        <p className="font-medium">{installerData.parentCompany}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin size={18} className="mr-3 text-solar-blue shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-600">Headquarters</p>
                        <p className="font-medium">{installerData.headquarters}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Contact Card */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Phone size={18} className="mr-3 text-solar-blue shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-600">Phone</p>
                        <p className="font-medium">Request contact details</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Mail size={18} className="mr-3 text-solar-blue shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-600">Email</p>
                        <p className="font-medium">Request email address</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Globe size={18} className="mr-3 text-solar-blue shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-600">Website</p>
                        <p className="font-medium">
                          <a href="#" className="text-solar-blue hover:underline">Visit website</a>
                        </p>
                      </div>
                    </div>
                    <div className="mt-6">
                      <Button className="w-full">Contact Ceesolar</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Tabs Section */}
        <section className="py-8">
          <div className="container-wide">
            <Tabs 
              defaultValue="overview" 
              value={activeTab} 
              onValueChange={setActiveTab} 
              className="w-full"
            >
              <div className="border-b">
                <TabsList className="bg-transparent h-auto p-0 w-full justify-start space-x-8">
                  {[
                    { id: 'overview', label: 'Overview' },
                    { id: 'services', label: 'Services' },
                    { id: 'reviews', label: 'Reviews' },
                    { id: 'team', label: 'Team' },
                    { id: 'warranties', label: 'Warranties' },
                    { id: 'partners', label: 'Partners' },
                    { id: 'certifications', label: 'Certifications' },
                    { id: 'licenses', label: 'Licenses & Insurance' },
                    { id: 'contact', label: 'Contact' }
                  ].map((tab) => (
                    <TabsTrigger
                      key={tab.id}
                      value={tab.id}
                      className="px-1 py-4 border-b-2 border-transparent data-[state=active]:border-solar-blue rounded-none text-base"
                    >
                      {tab.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              
              <TabsContent value="overview" className="mt-6">
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold mb-4">About {installerData.name}</h3>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {installerData.description}
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      {installerData.mission}
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="services" className="mt-6">
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold mb-4">Services Offered</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {installerData.services.map((service, index) => (
                        <div key={index} className="flex items-center">
                          <Check size={18} className="mr-2 text-green-500" />
                          <span>{service}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="reviews" className="mt-6">
                <Card>
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                      <h3 className="text-xl font-semibold">
                        {installerData.name} Reviews
                        <span className="ml-2 text-sm text-gray-500">({installerData.reviewCount})</span>
                      </h3>
                      <Button>Write a Review</Button>
                    </div>
                    
                    {installerData.reviews && installerData.reviews.length > 0 ? (
                      <div className="space-y-8">
                        {/* If we had reviews, we'd map over them here */}
                      </div>
                    ) : (
                      <div className="text-center py-12">
                        <h4 className="text-xl font-semibold mb-2">No Reviews Yet</h4>
                        <p className="text-gray-500 mb-6 max-w-md mx-auto">
                          Be the first to review {installerData.name}. Your feedback helps others make informed decisions.
                        </p>
                        <Button>Write a Review</Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
              
              {["team", "warranties", "partners", "certifications", "licenses", "contact"].map((tab) => (
                <TabsContent key={tab} value={tab} className="mt-6">
                  <Card>
                    <CardContent className="p-8 text-center py-16">
                      <h3 className="text-xl font-semibold mb-2 text-gray-400">No information available</h3>
                      <p className="text-gray-500">
                        This information will be available once the company claims and updates their profile.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
        
        {/* Reviews Section - Main Page */}
        <section className="py-8 bg-gray-50">
          <div className="container-wide">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <h2 className="text-2xl font-semibold">{installerData.name} Reviews</h2>
              <Button>Write a Review</Button>
            </div>
            
            {installerData.reviewCount > 0 ? (
              <div className="grid grid-cols-1 gap-6">
                {/* Sample review card format (for demonstration) */}
                {installerData.reviews && installerData.reviews.length > 0 && installerData.reviews.map((review: any) => (
                  <Card key={review.id} className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center">
                            <h3 className="font-semibold text-lg mr-2">{review.title}</h3>
                            <div className="flex">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star 
                                  key={star}
                                  size={16} 
                                  className="text-amber-400" 
                                  fill={star <= Math.round(review.rating) ? "currentColor" : "none"}
                                />
                              ))}
                            </div>
                          </div>
                          <p className="text-sm text-gray-500">
                            By {review.authorName} from {review.authorLocation} • {new Date(review.date).toLocaleDateString()}
                          </p>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm" className="flex items-center gap-1">
                            <ThumbsUp size={14} /> Helpful ({review.helpful})
                          </Button>
                          <Button variant="outline" size="sm" className="flex items-center gap-1">
                            <ThumbsDown size={14} /> Not Helpful ({review.notHelpful})
                          </Button>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mb-4">{review.content}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {review.tags.map((tag: string, index: number) => (
                          <Badge key={index} variant="secondary">{tag}</Badge>
                        ))}
                      </div>
                      
                      {review.installerResponse && (
                        <div className="bg-gray-50 p-4 rounded-md">
                          <div className="flex items-center mb-2">
                            <MessageCircle size={16} className="mr-2 text-solar-blue" />
                            <h4 className="font-medium">Response from {installerData.name}</h4>
                          </div>
                          <p className="text-gray-700 mb-2">{review.installerResponse.content}</p>
                          <p className="text-sm text-gray-500">
                            {review.installerResponse.author} • {new Date(review.installerResponse.date).toLocaleDateString()}
                          </p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="p-8 text-center py-16">
                  <h3 className="text-xl font-semibold mb-2">No Reviews Yet</h3>
                  <p className="text-gray-500 mb-6">
                    There are no reviews for {installerData.name} yet. Be the first one to write a review.
                  </p>
                  <Button>Write a Review</Button>
                </CardContent>
              </Card>
            )}
          </div>
        </section>
        
        {/* Locations Section */}
        <section className="py-8">
          <div className="container-wide">
            <h2 className="text-2xl font-semibold mb-6">Locations</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Headquarters */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">Headquarter</h3>
                  <div className="flex items-start">
                    <MapPin size={18} className="mr-3 text-solar-blue shrink-0 mt-0.5" />
                    <p>{installerData.locations[0].address}</p>
                  </div>
                </CardContent>
              </Card>
              
              {/* States Served */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">States Served</h3>
                  <div className="flex flex-wrap gap-2">
                    {installerData.statesServed.map((state, index) => (
                      <Badge key={index} variant="secondary">{state}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Similar Companies Section */}
        <section className="py-8 bg-gray-50">
          <div className="container-wide">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">Similar Companies</h2>
              <Button variant="outline" size="sm">
                Explore all companies <ChevronRight size={16} className="ml-1" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {installerData.similarCompanies.map((company, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-0">
                    <div className="p-5">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gray-200 rounded-md overflow-hidden mr-3">
                          <img 
                            src={company.logo}
                            alt={company.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold">{company.shortName}</h3>
                          <p className="text-sm text-gray-600">{company.location}</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="w-full">View Profile</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default InstallerProfile;
