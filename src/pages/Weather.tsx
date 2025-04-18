
import { Card } from "@/components/ui/card";
import { Cloud, CloudDrizzle, CloudLightning, CloudSun, Thermometer } from "lucide-react";

const Weather = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Weather Forecast</h1>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="p-4">
          <div className="flex flex-col items-center space-y-2">
            <CloudSun className="h-8 w-8 text-blue-500" />
            <h3 className="font-semibold">Today</h3>
            <p className="text-2xl font-bold">28°C</p>
            <p className="text-sm text-muted-foreground">Partly Cloudy</p>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex flex-col items-center space-y-2">
            <CloudDrizzle className="h-8 w-8 text-blue-500" />
            <h3 className="font-semibold">Tomorrow</h3>
            <p className="text-2xl font-bold">24°C</p>
            <p className="text-sm text-muted-foreground">Light Rain</p>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex flex-col items-center space-y-2">
            <Cloud className="h-8 w-8 text-blue-500" />
            <h3 className="font-semibold">Saturday</h3>
            <p className="text-2xl font-bold">26°C</p>
            <p className="text-sm text-muted-foreground">Cloudy</p>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex flex-col items-center space-y-2">
            <CloudLightning className="h-8 w-8 text-blue-500" />
            <h3 className="font-semibold">Sunday</h3>
            <p className="text-2xl font-bold">23°C</p>
            <p className="text-sm text-muted-foreground">Thunderstorms</p>
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <Thermometer className="h-6 w-6 text-blue-500" />
          <h2 className="text-xl font-semibold">Weekly Temperature Range</h2>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span>Min Temperature</span>
            <span className="font-semibold">21°C</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Max Temperature</span>
            <span className="font-semibold">29°C</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Average Temperature</span>
            <span className="font-semibold">25°C</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Weather;
