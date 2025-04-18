
import { Layout } from "@/components/layout";
import { DashboardCard, StatsCard } from "@/components/dashboard/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Droplets, FileBarChart, Sun, Sprout, Store } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Dashboard() {
  return (
    <Layout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Farm Overview</h2>
            <p className="text-sm text-muted-foreground">
              Last updated: April 18, 2025, 10:30 AM
            </p>
          </div>
          <div className="mt-4 flex flex-col sm:flex-row gap-2 md:mt-0">
            <Button variant="outline">Import Data</Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatsCard
            title="Weather Summary"
            value="27°C"
            icon={<Sun className="h-4 w-4" />}
            trend="neutral"
            trendValue="Clear day"
          />
          <StatsCard
            title="Soil Health"
            value="Excellent"
            icon={<FileBarChart className="h-4 w-4" />}
            trend="up"
            trendValue="85/100"
          />
          <StatsCard
            title="Current Crop Status"
            value="Wheat"
            icon={<Sprout className="h-4 w-4" />}
            trend="up"
            trendValue="Flowering stage"
          />
          <StatsCard
            title="Water Status"
            value="Optimal"
            icon={<Droplets className="h-4 w-4" />}
            trend="neutral"
            trendValue="Next irrigation in 3 days"
          />
        </div>

        <Tabs defaultValue="summary" className="mt-4">
          <TabsList>
            <TabsTrigger value="summary">Summary</TabsTrigger>
            <TabsTrigger value="soil">Soil</TabsTrigger>
            <TabsTrigger value="weather">Weather</TabsTrigger>
            <TabsTrigger value="crops">Crops</TabsTrigger>
          </TabsList>
          <TabsContent value="summary" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <DashboardCard
                title="Weekly Irrigation"
                description="Latest updated water metrics"
              >
                <div className="h-[200px] flex items-center justify-center bg-muted/20 rounded-md">
                  <p className="text-muted-foreground text-sm">Irrigation chart would be displayed here</p>
                </div>
              </DashboardCard>
              <DashboardCard
                title="Yield Forecast"
                description="Expected harvest metrics"
              >
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <Sprout className="h-4 w-4 text-agrisense-primary" />
                    <span className="font-medium">Wheat</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Expected Harvest: 3.1 tons/acre</p>
                  <div className="mt-4 h-[150px] flex items-center justify-center bg-muted/20 rounded-md">
                    <p className="text-muted-foreground text-sm">Yield forecast chart</p>
                  </div>
                </div>
              </DashboardCard>
            </div>

            <DashboardCard
              title="Recent Field Activities"
              description="Latest actions"
            >
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="rounded-full p-2 bg-agrisense-light text-agrisense-primary">
                    <Droplets className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">Irrigation Completed</p>
                      <p className="text-xs text-muted-foreground">2 hours ago</p>
                    </div>
                    <p className="text-sm text-muted-foreground">Field sector A, 5L/sq.m</p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-start gap-4">
                  <div className="rounded-full p-2 bg-agrisense-light text-agrisense-primary">
                    <FileBarChart className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">Soil Analysis</p>
                      <p className="text-xs text-muted-foreground">8 hours ago</p>
                    </div>
                    <p className="text-sm text-muted-foreground">pH and nutrient levels checked</p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-start gap-4">
                  <div className="rounded-full p-2 bg-agrisense-light text-agrisense-primary">
                    <Sun className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">Weather Alert</p>
                      <p className="text-xs text-muted-foreground">24 hours ago</p>
                    </div>
                    <p className="text-sm text-muted-foreground">Light rain expected tomorrow</p>
                  </div>
                </div>
              </div>
            </DashboardCard>
          </TabsContent>
          
          <TabsContent value="soil" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-3">
              <DashboardCard
                title="Overall Soil Health"
                description="Quality score"
              >
                <div className="flex flex-col items-center">
                  <div className="text-3xl font-bold text-agrisense-primary">85/100</div>
                  <p className="text-sm text-muted-foreground">Your soil is in good condition overall</p>
                </div>
              </DashboardCard>
              <DashboardCard
                title="pH Level"
                description="Ideal range: 6.0-7.0"
              >
                <div className="flex flex-col items-center">
                  <div className="text-3xl font-bold">6.8</div>
                  <p className="text-sm text-agrisense-success">Optimal</p>
                  <p className="text-xs text-muted-foreground">Slightly acidic, ideal for most crops</p>
                </div>
              </DashboardCard>
              <DashboardCard
                title="Organic Matter"
                description="Ideal range: 3-5%"
              >
                <div className="flex flex-col items-center">
                  <div className="text-3xl font-bold">3.2%</div>
                  <p className="text-sm text-agrisense-success">Decent</p>
                  <p className="text-xs text-muted-foreground">Good amount of organic material</p>
                </div>
              </DashboardCard>
            </div>
            
            <DashboardCard
              title="Soil Health Summary"
              description="Key indicators of your soil's condition"
            >
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Nitrogen (N)</span>
                    <span className="text-sm text-muted-foreground">Good</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-2 rounded-full bg-agrisense-primary" style={{ width: "75%" }}></div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Phosphorus (P)</span>
                    <span className="text-sm text-muted-foreground">Adequate</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-2 rounded-full bg-agrisense-warning" style={{ width: "60%" }}></div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Potassium (K)</span>
                    <span className="text-sm text-muted-foreground">Excellent</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-2 rounded-full bg-agrisense-success" style={{ width: "85%" }}></div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Water Retention</span>
                    <span className="text-sm text-muted-foreground">Good</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-2 rounded-full bg-agrisense-info" style={{ width: "70%" }}></div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Microbial Activity</span>
                    <span className="text-sm text-muted-foreground">Good</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-2 rounded-full bg-agrisense-primary" style={{ width: "75%" }}></div>
                  </div>
                </div>
              </div>
            </DashboardCard>
          </TabsContent>
          
          <TabsContent value="weather" className="space-y-4">
            <p>Weather information will be displayed here.</p>
          </TabsContent>
          
          <TabsContent value="crops" className="space-y-4">
            <p>Crop recommendations will be displayed here.</p>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
