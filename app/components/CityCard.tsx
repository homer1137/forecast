
import { WeatherState } from "../types/types"

interface Props {
    weather: WeatherState
}


export const CityCard = ({ weather }: Props) => {

    return (<div className="rounded overflow-hidden shadow-lg mt-4 p-8 bg-white  ">
        <div className=" text-4xl font-bold mb-4 capitalize text-orange-700">
            {weather.name}
        </div>
        <div className="flex items-center justify-between mb-4" >
      
            <div className=" text-3xl font-bold mr-20" >
               Температура по цельсию {Math.round( weather.temperature-273.15)} 
            </div>
            <img src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt={weather.description}></img>
        </div>
        <div className="text-xl font-bold mb-4 capitalize text-brand-100">
            {weather.description}
        </div>
        <div className="flex flex-col">
            <div className="text-lg font-bold mr-4">
               Влажность {weather.humidity} %
            </div>
            <div className="text-lg font-bold mr-4">
               Скорость ветра {weather.windSpeed} м/с
            </div>
        </div>
        
    </div>)
}