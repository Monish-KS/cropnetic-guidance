
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts';

const data = [
  { factor: 'Soil Compatibility', value: 85 },
  { factor: 'Water Availability', value: 75 },
  { factor: 'Climate Suitability', value: 90 },
  { factor: 'Market Demand', value: 80 },
  { factor: 'Expected Yield', value: 70 },
];

export function CropRecommendationChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="factor" />
          <Radar
            name="Suitability"
            dataKey="value"
            stroke="var(--primary)"
            fill="var(--primary)"
            fillOpacity={0.5}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
