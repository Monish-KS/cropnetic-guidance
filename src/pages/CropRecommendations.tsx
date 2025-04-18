
import { Layout } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CropRecommendationChart } from "@/components/crop-recommendation-chart";
import { CropList } from "@/components/crop-list";

export default function CropRecommendations() {
  return (
    <Layout>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6">Crop Recommendations</h1>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Top Recommended Crops</CardTitle>
            </CardHeader>
            <CardContent>
              <CropList />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Suitability Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <CropRecommendationChart />
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
