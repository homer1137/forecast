'use client'

import Link from "next/link"
import { Search } from './components/Search'
import { useEffect, useState } from 'react'
import Loader from './components/Loader'
import { ResponseWeather, WeatherState } from './types/types'
import { useDebounce } from './utils/debounce'
import axios, { AxiosError, } from 'axios'
import { CityCard } from './components/CityCard'
import { FetchError } from './components/FetchError'
import { ShowGraph } from './components/ShowGraph'



export default function Home() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState<WeatherState | null>(null);
  const [error, setError] = useState<null | string>(null);
  const [loader, setLoader] = useState(false);
  const [forecast, setForecast] = useState([]);

  const debouncedQuery = useDebounce(query, 500)



  const onDismiss = () => {
    setError(null)
  }



  useEffect(() => {

    async function getWeather() {
      setError(null)
      setLoader(true)
      try {
        const { data }: { data: ResponseWeather } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${debouncedQuery?.trim()}&appid=b9bb873ef3dc0afafa6557604e742823`);

        if (data) {

          setError(null)
          setLoader(false)
          setWeather({
            name: data.name,
            temperature: data.main.temp,
            description: data.weather[0].description,
            humidity: data.main?.humidity,
            windSpeed: data.wind.speed,
            icon: data.weather[0].icon
          })
        }

      } catch (error) {
        setError((error as AxiosError).message || 'Some error');
        setLoader(false);
        setWeather(null)

      }
    }

    async function getWeatherForecast() {
      setError(null)
      setLoader(true)
      try {
        const { data }: { data: any } = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${debouncedQuery?.trim()}&appid=b9bb873ef3dc0afafa6557604e742823`);

        if (data) {
          //из массива различных времен выбираем одно время на сутки - 12:00
          const fiveDays = data.list.filter((item: any) => item.dt_txt.split(' ')[1] === '12:00:00')
          setForecast(fiveDays)


        }

      } catch (error) {
        console.log(error)


      }
    }

    debouncedQuery.length > 1 && getWeather()
    debouncedQuery.length > 1 && getWeatherForecast()
  }, [debouncedQuery])


  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {

    const enteredName = event.target.value;
    setQuery(enteredName);
  };
  return (
    <div className="flex  flex-col items-center  p-4 ">
      <h1 className=' mb-5 text-4xl font-bold tracking-tight sm:text-center sm:text-6xl  '>Weather</h1>

      <Search query={query} setQuery={setQuery} inputHandler={inputHandler} />
      <div className='mt-8 flex gap-x-4 sm:justify-center'>
        <Loader status={loader} />

        {query && weather && !loader && (
          <CityCard weather={weather} />
        )}

        {query && !loader && error && <FetchError onDismiss={onDismiss} error={error} />}
      </div>
     {weather&& <div className="text-xl font-bold my-4 text-blue-700 hover:text-brand-100 " >
            <Link href={`/city/${weather.name}`}>Посмотреть детальный прогноз погоды на 5 дней</Link>
        </div>}
      <div className='flex  flex-col items-center'>
        <h2 className='p-10 '>Температура на 5 дней</h2>
        {/* температура */}
        {weather? <ShowGraph data={forecast.map((item: any) => { return { temp: Math.round(item.main.temp - 273.15), date: item.dt_txt.split(' ')[0] } })} /> : ''}

      </div>
    </div>
  )
}
