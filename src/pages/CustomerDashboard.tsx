
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sun, Zap, FileText, Clock, TrendingDown, BarChart3, Calendar } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

const CustomerDashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Customer Dashboard</h1>
        <p className="text-muted-foreground">
          Monitor your solar system performance, energy savings, and upcoming maintenance.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Current Production
            </CardTitle>
            <Sun className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.4 kW</div>
            <p className="text-xs text-muted-foreground">
              Operating at 87% capacity
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Today's Energy
            </CardTitle>
            <Zap className="h-4 w-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18.5 kWh</div>
            <p className="text-xs text-muted-foreground">
              +12% from yesterday
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Monthly Savings
            </CardTitle>
            <TrendingDown className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₦45,800</div>
            <p className="text-xs text-muted-foreground">
              68% reduction in electricity bills
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              System Health
            </CardTitle>
            <FileText className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Excellent</div>
            <p className="text-xs text-muted-foreground">
              Last checked: 2 hours ago
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Energy Production</CardTitle>
            <CardDescription>
              Your solar system's energy output over time
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full rounded-md border flex items-center justify-center">
              <BarChart3 className="h-16 w-16 text-muted-foreground/50" />
              <span className="ml-2 text-muted-foreground">Energy production chart</span>
            </div>
          </CardContent>
        </Card>
        
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Upcoming Maintenance</CardTitle>
            <CardDescription>
              Scheduled maintenance and service visits
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium">Annual System Inspection</p>
                  <div className="flex items-center text-muted-foreground text-xs">
                    <Calendar className="mr-1 h-3 w-3" />
                    <span>June 15, 2024 • 10:00 AM</span>
                  </div>
                </div>
                <Badge variant="outline">Scheduled</Badge>
              </div>
              
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium">Panel Cleaning</p>
                  <div className="flex items-center text-muted-foreground text-xs">
                    <Calendar className="mr-1 h-3 w-3" />
                    <span>July 8, 2024 • 11:30 AM</span>
                  </div>
                </div>
                <Badge variant="outline">Pending</Badge>
              </div>
              
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium">Inverter Check-up</p>
                  <div className="flex items-center text-muted-foreground text-xs">
                    <Calendar className="mr-1 h-3 w-3" />
                    <span>August 22, 2024 • 9:00 AM</span>
                  </div>
                </div>
                <Badge variant="outline">Pending</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="daily" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="daily">Daily</TabsTrigger>
          <TabsTrigger value="weekly">Weekly</TabsTrigger>
          <TabsTrigger value="monthly">Monthly</TabsTrigger>
        </TabsList>
        <TabsContent value="daily" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Energy Consumption</CardTitle>
              <CardDescription>
                Your energy usage compared to production
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Solar Production</span>
                  <span className="text-sm">24.5 kWh</span>
                </div>
                <Progress value={80} className="h-2 bg-muted" />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Home Consumption</span>
                  <span className="text-sm">18.2 kWh</span>
                </div>
                <Progress value={60} className="h-2 bg-muted" />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Grid Export</span>
                  <span className="text-sm">6.3 kWh</span>
                </div>
                <Progress value={20} className="h-2 bg-muted" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="weekly" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Weekly Energy Overview</CardTitle>
              <CardDescription>
                Your energy trends for the past week
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full rounded-md border flex items-center justify-center">
                <span className="text-muted-foreground">Weekly data visualization</span>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="monthly" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Energy Overview</CardTitle>
              <CardDescription>
                Your energy trends for the past month
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full rounded-md border flex items-center justify-center">
                <span className="text-muted-foreground">Monthly data visualization</span>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CustomerDashboard;
