
import { Check } from "lucide-react";

const recommendedCrops = [
  {
    name: "Rice",
    suitability: 95,
    yield: "5.2 tons/ha",
    season: "Kharif",
  },
  {
    name: "Wheat",
    suitability: 90,
    yield: "4.8 tons/ha",
    season: "Rabi",
  },
  {
    name: "Cotton",
    suitability: 85,
    yield: "2.5 tons/ha",
    season: "Kharif",
  },
  {
    name: "Sugarcane",
    suitability: 80,
    yield: "70 tons/ha",
    season: "Annual",
  },
];

export function CropList() {
  return (
    <div className="space-y-4">
      {recommendedCrops.map((crop) => (
        <div
          key={crop.name}
          className="flex items-center justify-between p-4 rounded-lg border bg-card"
        >
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
              <Check className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium">{crop.name}</h3>
              <p className="text-sm text-muted-foreground">
                {crop.season} • Expected yield: {crop.yield}
              </p>
            </div>
          </div>
          <div className="text-right">
            <span className="text-lg font-semibold text-primary">
              {crop.suitability}%
            </span>
            <p className="text-sm text-muted-foreground">Suitability</p>
          </div>
        </div>
      ))}
    </div>
  );
}
