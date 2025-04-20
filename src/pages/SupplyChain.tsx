import { Layout } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Store, Truck, ShoppingBag, Package } from "lucide-react";
import { TractorCanvas } from "@/components/3d/TractorModel";

const suppliers = [
  { name: "Akshar Seeds Ltd.", type: "Seeds", distance: "5.2 km", contact: "+91 9876543210", rating: 4.5, inventory: "Rice, Wheat, Cotton seeds" },
  { name: "Krishna Fertilizers", type: "Fertilizers", distance: "8.7 km", contact: "+91 8765432109", rating: 4.2, inventory: "NPK, Urea, Zinc supplements" },
  { name: "Mitra Equipment Rentals", type: "Equipment", distance: "12.1 km", contact: "+91 7654321098", rating: 4.8, inventory: "Tractors, Harvesters, Water pumps" },
  { name: "Ganesh Storage Facility", type: "Storage", distance: "7.5 km", contact: "+91 6543210987", rating: 4.0, inventory: "Cold storage, Grain warehousing" },
];

const markets = [
  { name: "Rajkot APMC", type: "Wholesale", distance: "15.2 km", commodities: "Rice, Wheat, Cotton", currentPrice: "₹ 2,450/quintal (Wheat)" },
  { name: "Gondal Mandi", type: "Wholesale", distance: "22.7 km", commodities: "Rice, Millet, Pulses", currentPrice: "₹ 3,250/quintal (Rice)" },
  { name: "Junagadh Farmers Market", type: "Retail", distance: "35.1 km", commodities: "Vegetables, Fruits, Grains", currentPrice: "₹ 28/kg (Tomatoes)" },
  { name: "Jasdan Agricultural Market", type: "Mixed", distance: "18.5 km", commodities: "All agricultural products", currentPrice: "Varies by product" },
];

export default function SupplyChain() {
  return (
    <Layout>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6">Agricultural Supply Chain</h1>
        
        <div className="mb-6">
          <TractorCanvas />
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Closest Supplier</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-primary mr-2" />
                <div>
                  <div className="text-xl font-bold">5.2 km</div>
                  <p className="text-xs text-muted-foreground">Akshar Seeds Ltd.</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Closest Market</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <Store className="h-5 w-5 text-primary mr-2" />
                <div>
                  <div className="text-xl font-bold">15.2 km</div>
                  <p className="text-xs text-muted-foreground">Rajkot APMC</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Market Price</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <ShoppingBag className="h-5 w-5 text-primary mr-2" />
                <div>
                  <div className="text-xl font-bold">₹ 2,450</div>
                  <p className="text-xs text-muted-foreground">Wheat (per quintal)</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Logistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <Truck className="h-5 w-5 text-primary mr-2" />
                <div>
                  <div className="text-xl font-bold">2 Services</div>
                  <p className="text-xs text-muted-foreground">Available nearby</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <Tabs defaultValue="suppliers">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="suppliers">Suppliers & Services</TabsTrigger>
              <TabsTrigger value="markets">Markets & Buyers</TabsTrigger>
            </TabsList>
            <TabsContent value="suppliers">
              <Card>
                <CardHeader>
                  <CardTitle>Agricultural Suppliers Near You</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <div className="grid grid-cols-6 bg-muted p-3 font-medium">
                      <div className="col-span-2">Name</div>
                      <div>Type</div>
                      <div>Distance</div>
                      <div>Contact</div>
                      <div>Rating</div>
                    </div>
                    {suppliers.map((supplier, index) => (
                      <div key={index} className="grid grid-cols-6 p-3 border-t hover:bg-muted/50 cursor-pointer transition-colors">
                        <div className="col-span-2 font-medium">{supplier.name}</div>
                        <div>{supplier.type}</div>
                        <div>{supplier.distance}</div>
                        <div>{supplier.contact}</div>
                        <div className="flex items-center">
                          {supplier.rating}
                          <span className="text-yellow-500 ml-1">★</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="markets">
              <Card>
                <CardHeader>
                  <CardTitle>Agricultural Markets Near You</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <div className="grid grid-cols-4 bg-muted p-3 font-medium">
                      <div>Market Name</div>
                      <div>Type</div>
                      <div>Distance</div>
                      <div>Current Prices</div>
                    </div>
                    {markets.map((market, index) => (
                      <div key={index} className="grid grid-cols-4 p-3 border-t hover:bg-muted/50 cursor-pointer transition-colors">
                        <div className="font-medium">{market.name}</div>
                        <div>{market.type}</div>
                        <div>{market.distance}</div>
                        <div>{market.currentPrice}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Supply Chain Optimization Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex gap-4 p-4 border rounded-lg bg-muted/30">
                  <Package className="h-12 w-12 text-primary" />
                  <div>
                    <h3 className="text-lg font-medium">Bulk Purchasing</h3>
                    <p className="text-muted-foreground">Coordinate with nearby farmers to make bulk purchases of seeds and fertilizers, potentially saving 15-20% on costs.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 p-4 border rounded-lg bg-muted/30">
                  <Truck className="h-12 w-12 text-primary" />
                  <div>
                    <h3 className="text-lg font-medium">Shared Transportation</h3>
                    <p className="text-muted-foreground">Share transportation costs with other farmers in your area when bringing produce to the Rajkot APMC market.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 p-4 border rounded-lg bg-muted/30">
                  <Store className="h-12 w-12 text-primary" />
                  <div>
                    <h3 className="text-lg font-medium">Diversify Sales Channels</h3>
                    <p className="text-muted-foreground">Consider selling a portion of your crop directly to consumers at the Junagadh Farmers Market for potentially higher margins.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
