
import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from '@/hooks/use-toast';

const InstallerEditProfile = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('about');
  
  const handleSave = () => {
    toast({
      title: "Profile updated",
      description: "Your profile changes have been saved successfully.",
    });
  };
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Edit Company Profile</h1>
        <p className="text-muted-foreground">
          Update your company information and services to attract more customers.
        </p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Company Profile</CardTitle>
          <CardDescription>
            Complete your profile to appear in customer searches. More complete profiles rank higher.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs 
            defaultValue="about" 
            value={activeTab} 
            onValueChange={setActiveTab} 
            className="w-full"
          >
            <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mb-8">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="team">Team</TabsTrigger>
              <TabsTrigger value="warranties">Warranties</TabsTrigger>
              <TabsTrigger value="financing">Financing</TabsTrigger>
              <TabsTrigger value="partners">Partners</TabsTrigger>
              <TabsTrigger value="locations">Locations</TabsTrigger>
            </TabsList>
            
            {/* About Company Section */}
            <TabsContent value="about" className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-4">About Company</h2>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="short-bio">Short Bio</Label>
                    <Textarea 
                      id="short-bio" 
                      placeholder="Brief description of your company (150 characters max)"
                      className="h-20"
                    />
                  </div>
                  
                  <div className="pt-4">
                    <Label htmlFor="full-overview">Full Company Overview</Label>
                    <Textarea 
                      id="full-overview" 
                      placeholder="Comprehensive description of your company, services, history, etc."
                      className="h-40"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* Team Section */}
            <TabsContent value="team" className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-4">Team</h2>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="team-description">About Team</Label>
                    <Textarea 
                      id="team-description" 
                      placeholder="Brief text about your team, expertise, and experience"
                      className="h-20"
                    />
                  </div>
                  
                  <div className="pt-4">
                    <Label>Number of Employees</Label>
                    <RadioGroup defaultValue="11-50" className="mt-2 space-y-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="0-1" id="emp-0-1" />
                        <Label htmlFor="emp-0-1">0-1 employees</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="2-10" id="emp-2-10" />
                        <Label htmlFor="emp-2-10">2-10 employees</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="11-50" id="emp-11-50" />
                        <Label htmlFor="emp-11-50">11-50 employees</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="51-200" id="emp-51-200" />
                        <Label htmlFor="emp-51-200">51-200 employees</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="201-500" id="emp-201-500" />
                        <Label htmlFor="emp-201-500">201-500 employees</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="501-1000" id="emp-501-1000" />
                        <Label htmlFor="emp-501-1000">501-1,000 employees</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="1001-5000" id="emp-1001-5000" />
                        <Label htmlFor="emp-1001-5000">1,001-5,000 employees</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="5001-10000" id="emp-5001-10000" />
                        <Label htmlFor="emp-5001-10000">5,001-10,000 employees</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="10001+" id="emp-10001" />
                        <Label htmlFor="emp-10001">10,001+ employees</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* Warranties Section */}
            <TabsContent value="warranties" className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-4">Warranties</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label>Workmanship</Label>
                      <RadioGroup defaultValue="10" className="mt-2">
                        {[5, 10, 15, 20].map(year => (
                          <div key={`workmanship-${year}`} className="flex items-center space-x-2">
                            <RadioGroupItem value={year.toString()} id={`workmanship-${year}`} />
                            <Label htmlFor={`workmanship-${year}`}>{year} years</Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                    
                    <div>
                      <Label>Watertight Guarantee (Roof Penetration)</Label>
                      <RadioGroup defaultValue="10" className="mt-2">
                        {[5, 10, 15, 20].map(year => (
                          <div key={`watertight-${year}`} className="flex items-center space-x-2">
                            <RadioGroupItem value={year.toString()} id={`watertight-${year}`} />
                            <Label htmlFor={`watertight-${year}`}>{year} years</Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                    
                    <div>
                      <Label>System Warranty</Label>
                      <RadioGroup defaultValue="10" className="mt-2">
                        {[5, 10, 15, 20].map(year => (
                          <div key={`system-${year}`} className="flex items-center space-x-2">
                            <RadioGroupItem value={year.toString()} id={`system-${year}`} />
                            <Label htmlFor={`system-${year}`}>{year} years</Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <Label>Inverter Warranty</Label>
                      <RadioGroup defaultValue="10" className="mt-2">
                        {[5, 10, 15, 20].map(year => (
                          <div key={`inverter-${year}`} className="flex items-center space-x-2">
                            <RadioGroupItem value={year.toString()} id={`inverter-${year}`} />
                            <Label htmlFor={`inverter-${year}`}>{year} years</Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                    
                    <div>
                      <Label>Solar Panel Warranty</Label>
                      <RadioGroup defaultValue="10" className="mt-2">
                        {[5, 10, 15, 20].map(year => (
                          <div key={`panel-${year}`} className="flex items-center space-x-2">
                            <RadioGroupItem value={year.toString()} id={`panel-${year}`} />
                            <Label htmlFor={`panel-${year}`}>{year} years</Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                    
                    <div>
                      <Label>Battery Warranty</Label>
                      <RadioGroup defaultValue="10" className="mt-2">
                        {[5, 10, 15, 20].map(year => (
                          <div key={`battery-${year}`} className="flex items-center space-x-2">
                            <RadioGroupItem value={year.toString()} id={`battery-${year}`} />
                            <Label htmlFor={`battery-${year}`}>{year} years</Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                  </div>
                </div>
                
                <div className="pt-6">
                  <Label>Full System Monitoring</Label>
                  <RadioGroup defaultValue="yes" className="mt-2 flex space-x-6">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="monitoring-yes" />
                      <Label htmlFor="monitoring-yes">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="monitoring-no" />
                      <Label htmlFor="monitoring-no">No</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </TabsContent>
            
            {/* Financing Section */}
            <TabsContent value="financing" className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-4">Associated Financing Companies</h2>
                <div className="space-y-2">
                  {["Payhippo", "Sunfi", "Uwana"].map((company) => (
                    <div key={company} className="flex items-center space-x-2">
                      <Checkbox id={`financing-${company.toLowerCase()}`} />
                      <Label htmlFor={`financing-${company.toLowerCase()}`}>{company}</Label>
                    </div>
                  ))}
                  
                  <div className="pt-4">
                    <Label htmlFor="custom-bank">Other Bank/Financing Company</Label>
                    <Input id="custom-bank" placeholder="Enter bank or financing company name" className="mt-1" />
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* Partners Section */}
            <TabsContent value="partners" className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-4">Associated Installers (for manufacturers only)</h2>
                <div className="space-y-4">
                  <div className="space-y-2">
                    {[1, 2].map((num) => (
                      <div key={`installer-${num}`} className="flex items-center space-x-2">
                        <Checkbox id={`installer-${num}`} />
                        <Label htmlFor={`installer-${num}`}>Solar company name here</Label>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-2">
                    <Button variant="outline" size="sm">+ Add Another Company</Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* Locations Section */}
            <TabsContent value="locations" className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-4">Other Locations</h2>
                <p className="text-sm text-muted-foreground mb-4">For installers and others with multiple branches</p>
                
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((num) => (
                    <div key={`address-${num}`}>
                      <Label htmlFor={`address-${num}`}>Address {num}</Label>
                      <Input id={`address-${num}`} placeholder={`Enter address ${num}`} className="mt-1" />
                    </div>
                  ))}
                </div>
                
                <div className="pt-8">
                  <h2 className="text-xl font-semibold mb-4">Warehouse Location</h2>
                  <p className="text-sm text-muted-foreground mb-4">For manufacturers only</p>
                  
                  <div className="space-y-4">
                    {[1, 2, 3, 4].map((num) => (
                      <div key={`warehouse-${num}`}>
                        <Label htmlFor={`warehouse-${num}`}>Address {num}</Label>
                        <Input id={`warehouse-${num}`} placeholder={`Enter warehouse address ${num}`} className="mt-1" />
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="pt-8">
                  <h2 className="text-xl font-semibold mb-4">Service Centers in Nigeria</h2>
                  <p className="text-sm text-muted-foreground mb-4">For manufacturers only</p>
                  
                  <div className="space-y-4">
                    {[1, 2, 3, 4].map((num) => (
                      <div key={`service-${num}`}>
                        <Label htmlFor={`service-${num}`}>Address {num}</Label>
                        <Input id={`service-${num}`} placeholder={`Enter service center address ${num}`} className="mt-1" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="flex justify-end pt-6">
            <Button onClick={handleSave}>Save Changes</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InstallerEditProfile;
