
import { Layout } from "@/components/layout";
import { Card } from "@/components/ui/card";
import { Cloud, CloudDrizzle, CloudLightning, CloudSun, Thermometer, Wind, Droplets } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import SensorData from "@/components/weather/sensor-dashboard";

const Weather = () => {
  return (
    <Layout>
      <div className="space-y-8 animate-fade-in">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Weather & Sensor Data
            </h1>
            <p className="text-muted-foreground mt-1">Last updated: {new Date().toLocaleTimeString()}</p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Sensor Readings</h2>
          <SensorData />
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Weather Forecast</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: CloudSun, day: "Today", temp: 28, condition: "Partly Cloudy", details: "UV Index: High" },
              { icon: CloudDrizzle, day: "Tomorrow", temp: 24, condition: "Light Rain", details: "80% precipitation" },
              { icon: Cloud, day: "Saturday", temp: 26, condition: "Cloudy", details: "70% humidity" },
              { icon: CloudLightning, day: "Sunday", temp: 23, condition: "Thunderstorms", details: "Strong winds" }
            ].map((forecast, index) => (
              <HoverCard key={forecast.day}>
                <HoverCardTrigger asChild>
                  <Card className="p-6 transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer border-blue-100 hover:border-blue-200">
                    <div className="flex flex-col items-center space-y-3">
                      <div className="rounded-full bg-blue-50 p-3">
                        <forecast.icon className="h-8 w-8 text-blue-500" />
                      </div>
                      <h3 className="font-semibold text-lg">{forecast.day}</h3>
                      <p className="text-3xl font-bold text-blue-600">{forecast.temp}°C</p>
                      <p className="text-sm text-muted-foreground">{forecast.condition}</p>
                    </div>
                  </Card>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex justify-between space-x-4">
                    <div>
                      <h4 className="text-sm font-semibold">{forecast.day}'s Details</h4>
                      <p className="text-sm text-muted-foreground mt-1">{forecast.details}</p>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-6 transition-all duration-300 hover:shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="rounded-full bg-blue-50 p-2">
                <Thermometer className="h-6 w-6 text-blue-500" />
              </div>
              <h2 className="text-xl font-semibold">Weekly Temperature Range</h2>
            </div>
            <div className="space-y-4">
              {[
                { label: "Min Temperature", value: "21°C", color: "from-blue-400" },
                { label: "Max Temperature", value: "29°C", color: "from-red-400" },
                { label: "Average Temperature", value: "25°C", color: "from-purple-400" }
              ].map((item) => (
                <div key={item.label} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>{item.label}</span>
                    <span className="font-semibold">{item.value}</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-gray-100">
                    <div 
                      className={`h-2 rounded-full bg-gradient-to-r ${item.color} to-transparent animate-slide-right`} 
                      style={{ 
                        width: `${(parseInt(item.value) / 40) * 100}%`,
                        transition: 'width 1s ease-in-out'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 transition-all duration-300 hover:shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="rounded-full bg-blue-50 p-2">
                <Wind className="h-6 w-6 text-blue-500" />
              </div>
              <h2 className="text-xl font-semibold">Additional Information</h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Wind, label: "Wind Speed", value: "15 km/h" },
                { icon: Droplets, label: "Humidity", value: "65%" },
                { icon: Cloud, label: "Cloud Cover", value: "45%" },
                { icon: CloudSun, label: "UV Index", value: "High" }
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 transition-colors hover:bg-gray-100">
                  <item.icon className="h-5 w-5 text-blue-500" />
                  <div>
                    <p className="text-sm font-medium">{item.label}</p>
                    <p className="text-sm text-muted-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Weather;
