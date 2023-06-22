

export interface WeatherState {
    name: string;
    temperature: number;
    description: string;
    humidity?: string;
    windSpeed: number;
    icon: string;
  }

export interface ResponseWeather {
  base: string,
clouds: {}
cod: number
coord: {lon: number, lat: number}
dt: number
id: number
main: {temp: number, feels_like: number, temp_min: number, temp_max: number, pressure: number, humidity?: string}
name: string
sys: {type: number, id: number, country: string, sunrise: number, sunset: number}
timezone: number
visibility: number
weather: any[]
wind: {speed: number, deg: number, gust: number}

}
  