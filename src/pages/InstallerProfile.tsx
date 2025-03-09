
import React, { useState } from 'react';
import { MapPin, Star, Calendar, Users, Building, Check, Phone, Mail, Globe, ChevronRight, ThumbsUp, ThumbsDown, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

const InstallerProfile: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentPage, setCurrentPage] = useState(1);
  
  const installerData = {
    name: "Ceesolar",
    establishedYear: 2017,
    rating: 4.2,
    reviewCount: 12,
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
    // Sample reviews data
    reviews: [
      {
        id: 1,
        authorName: "John Smith",
        authorLocation: "Lagos, Nigeria",
        date: "2023-05-15",
        rating: 4.5,
        title: "Great service and professional installation",
        content: "The installation team was professional and completed the job ahead of schedule. The system has been working flawlessly for 6 months now. I'm very satisfied with the performance and the savings I'm getting. Would recommend to anyone looking for a reliable solar provider.",
        helpful: 12,
        notHelpful: 2,
        tags: ["Residential", "10kW System", "Battery Storage"],
        installerResponse: {
          author: "Alex Johnson, Customer Service Manager",
          date: "2023-05-18",
          content: "Thank you for your kind words, John! We're glad to hear that your system is working well. Please don't hesitate to reach out if you need anything else."
        }
      },
      {
        id: 2,
        authorName: "Sarah Okafor",
        authorLocation: "Abuja, Nigeria",
        date: "2023-04-20",
        rating: 5,
        title: "Excellent customer service and quality installation",
        content: "I had Ceesolar install a 5kW system for my home in Abuja. From the initial consultation to the final installation, the team was professional, knowledgeable, and efficient. The system has been working perfectly for several months now, and I'm seeing significant savings on my electricity bills.",
        helpful: 8,
        notHelpful: 0,
        tags: ["Residential", "5kW System"],
        installerResponse: {
          author: "Alex Johnson, Customer Service Manager",
          date: "2023-04-22",
          content: "Thank you for your review, Sarah! We're happy to hear that you're satisfied with our work and seeing the benefits of your solar system. Don't hesitate to contact us if you need any assistance in the future."
        }
      },
      {
        id: 3,
        authorName: "Michael Adebayo",
        authorLocation: "Lagos, Nigeria",
        date: "2023-03-10",
        rating: 4,
        title: "Good quality but installation took longer than expected",
        content: "The system works well and the quality of the components is excellent. However, the installation process took about a week longer than initially promised. Despite this delay, the team was communicative and explained the reasons for the delay. Once installed, the system has been performing very well for my business.",
        helpful: 5,
        notHelpful: 1,
        tags: ["Commercial", "15kW System", "Battery Storage"],
        installerResponse: null
      },
      {
        id: 4,
        authorName: "Chioma Eze",
        authorLocation: "Port Harcourt, Nigeria",
        date: "2023-02-05",
        rating: 5,
        title: "Best decision for our company's energy needs",
        content: "We had Ceesolar install a 25kW system for our manufacturing facility. The team conducted a thorough energy audit and designed a custom solution that perfectly meets our needs. The installation was completed on time and within budget. The system has significantly reduced our energy costs and provided reliable backup power during grid outages.",
        helpful: 10,
        notHelpful: 0,
        tags: ["Commercial", "25kW System", "Industrial"],
        installerResponse: {
          author: "Alex Johnson, Customer Service Manager",
          date: "2023-02-07",
          content: "Thank you for your positive feedback, Chioma! We're thrilled to hear that our solution is working well for your manufacturing facility. Our team is always available if you need any further assistance."
        }
      },
      {
        id: 5,
        authorName: "Ibrahim Mohammed",
        authorLocation: "Kano, Nigeria",
        date: "2023-01-15",
        rating: 3.5,
        title: "Good system but customer support could improve",
        content: "The solar system installed by Ceesolar works well and has helped reduce our electricity bills. However, I had some issues with getting timely responses from their customer support team when I had questions about system maintenance. Once I did get through, the advice was helpful, but the response time could be improved.",
        helpful: 7,
        notHelpful: 3,
        tags: ["Residential", "8kW System"],
        installerResponse: {
          author: "Alex Johnson, Customer Service Manager",
          date: "2023-01-20",
          content: "Ibrahim, thank you for your honest feedback. We apologize for the delay in responding to your inquiries. We're actively working on improving our customer support response times. We've noted your concerns and will use them to enhance our service."
        }
      },
      {
        id: 6,
        authorName: "Funke Adeyemi",
        authorLocation: "Ibadan, Nigeria",
        date: "2022-12-10",
        rating: 4.5,
        title: "Reliable system and great technical knowledge",
        content: "I'm impressed with the technical expertise of the Ceesolar team. They answered all my questions about the solar system and provided clear explanations about how everything works. The installation was completed promptly, and the system has been reliable through the rainy season with no issues.",
        helpful: 9,
        notHelpful: 1,
        tags: ["Residential", "7kW System", "Battery Storage"],
        installerResponse: null
      }
    ]
  };
  
  // Pagination logic for reviews
  const reviewsPerPage = 2;
  const pageCount = Math.ceil(installerData.reviews.length / reviewsPerPage);
  const paginatedReviews = installerData.reviews.slice(
    (currentPage - 1) * reviewsPerPage,
    currentPage * reviewsPerPage
  );
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Section */}
      <section className="py-8 bg-white border-b">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 bg-primary text-primary-foreground rounded-xl flex items-center justify-center text-3xl font-bold">
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
      <section className="py-8 bg-muted/50">
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
                            className={star <= Math.round(installerData.rating) ? "text-amber-400" : "text-muted"} 
                            fill={star <= Math.round(installerData.rating) ? "currentColor" : "none"}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{installerData.reviewCount} Reviews</p>
                  </div>
                  <Button size="sm">Write a Review</Button>
                </div>
                
                {/* Rating Breakdown */}
                <div className="mt-6 space-y-2">
                  {[
                    {label: "Excellent", percent: 60}, 
                    {label: "Very good", percent: 25}, 
                    {label: "Average", percent: 10}, 
                    {label: "Poor", percent: 5}, 
                    {label: "Terrible", percent: 0}
                  ].map((rating) => (
                    <div key={rating.label} className="flex items-center">
                      <span className="text-sm w-24">{rating.label}</span>
                      <div className="flex-grow h-2 bg-muted rounded-full mx-2">
                        <div 
                          className="h-2 bg-primary rounded-full" 
                          style={{width: `${rating.percent}%`}}
                        ></div>
                      </div>
                      <span className="text-sm w-8 text-right">{rating.percent}%</span>
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
                    <Calendar size={18} className="mr-3 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Established Year</p>
                      <p className="font-medium">{installerData.establishedYear}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Users size={18} className="mr-3 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Employees</p>
                      <p className="font-medium">{installerData.employeeRange}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Building size={18} className="mr-3 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Parent Company</p>
                      <p className="font-medium">{installerData.parentCompany}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin size={18} className="mr-3 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Headquarters</p>
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
                    <Phone size={18} className="mr-3 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-medium">Request contact details</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail size={18} className="mr-3 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">Request email address</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Globe size={18} className="mr-3 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Website</p>
                      <p className="font-medium">
                        <a href="#" className="text-primary hover:underline">Visit website</a>
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
                  { id: 'team', label: 'Team' },
                  { id: 'warranties', label: 'Warranties' },
                  { id: 'partners', label: 'Partners' },
                  { id: 'certifications', label: 'Certifications' },
                  { id: 'licenses', label: 'Licenses & Insurance' },
                ].map((tab) => (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.id}
                    className="px-1 py-4 border-b-2 border-transparent data-[state=active]:border-primary rounded-none text-base"
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
                  <p className="text-foreground mb-6 leading-relaxed">
                    {installerData.description}
                  </p>
                  <p className="text-foreground leading-relaxed">
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
            
            {["team", "warranties", "partners", "certifications", "licenses"].map((tab) => (
              <TabsContent key={tab} value={tab} className="mt-6">
                <Card>
                  <CardContent className="p-8 text-center py-16">
                    <h3 className="text-xl font-semibold mb-2 text-muted-foreground">No information available</h3>
                    <p className="text-muted-foreground">
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
      <section className="py-8 bg-muted/50">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <h2 className="text-2xl font-semibold">{installerData.name} Reviews</h2>
            <Button>Write a Review</Button>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            {paginatedReviews.map((review) => (
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
                              className={star <= Math.round(review.rating) ? "text-amber-400" : "text-muted"} 
                              fill={star <= Math.round(review.rating) ? "currentColor" : "none"}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
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
                  
                  <p className="text-foreground mb-4">{review.content}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {review.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                  
                  {review.installerResponse && (
                    <div className="bg-muted p-4 rounded-md">
                      <div className="flex items-center mb-2">
                        <MessageCircle size={16} className="mr-2 text-primary" />
                        <h4 className="font-medium">Response from {installerData.name}</h4>
                      </div>
                      <p className="text-foreground mb-2">{review.installerResponse.content}</p>
                      <p className="text-sm text-muted-foreground">
                        {review.installerResponse.author} • {new Date(review.installerResponse.date).toLocaleDateString()}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Pagination */}
          {installerData.reviewCount > reviewsPerPage && (
            <Pagination className="mt-6">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    href="#" 
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage > 1) setCurrentPage(currentPage - 1);
                    }}
                    className={currentPage === 1 ? "pointer-events-none opacity-50" : ""} 
                  />
                </PaginationItem>
                
                {Array.from({ length: pageCount }).map((_, i) => (
                  <PaginationItem key={i}>
                    <PaginationLink 
                      href="#" 
                      isActive={currentPage === i + 1}
                      onClick={(e) => {
                        e.preventDefault();
                        setCurrentPage(i + 1);
                      }}
                    >
                      {i + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                
                <PaginationItem>
                  <PaginationNext 
                    href="#" 
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage < pageCount) setCurrentPage(currentPage + 1);
                    }}
                    className={currentPage === pageCount ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
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
                  <MapPin size={18} className="mr-3 text-primary shrink-0 mt-0.5" />
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
      <section className="py-8 bg-muted/50">
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
                      <div className="w-12 h-12 bg-muted rounded-md overflow-hidden mr-3">
                        <img 
                          src={company.logo}
                          alt={company.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold">{company.shortName}</h3>
                        <p className="text-sm text-muted-foreground">{company.location}</p>
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
    </div>
  );
};

export default InstallerProfile;
