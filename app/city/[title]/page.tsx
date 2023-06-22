


import { Metadata } from 'next';
import axios from 'axios'
import { CityCard } from '@/app/components/CityCard';
import { WeatherState } from '@/app/types/types';

async function getCityData(title: string) {
    const { data }: { data: any } = await axios(`https://api.openweathermap.org/data/2.5/forecast?q=${title?.trim()}&appid=b9bb873ef3dc0afafa6557604e742823`);

    const fiveDays = data.list.filter((item: any) => item.dt_txt.split(' ')[1] === '12:00:00')

    return fiveDays
}

interface Props {
    params: {
        title: string
    }
}

export async function generateMetadata({ params: { title } }: Props): Promise<Metadata> {
    const city = await getCityData(title)

    return {
        title: title
    }
}

export default async function City({ params: { title } }: Props) {
    const city = await getCityData(title)

    const arrayOfData = city.map((item: any) => {
        return {
            temperature: Math.round(item.main.temp), name: item.dt_txt.split(' ')[0], description: item.weather[0].description,
            humidity: item.main?.humidity,
            windSpeed: item.wind.speed,
            icon: item.weather[0].icon
        }
    }) || null

    return (<>
        <h1>{title}</h1>
        <div className='flex  flex-col items-center'>
            <h2 className='p-10 '>Температура на 5 дней</h2>
         
            <div className='flex mx-3 flex-wrap justify-center'>{arrayOfData.map((item: WeatherState) => (<div className='mr-2' key={item.name}><CityCard weather={item} /></div>))}</div>


        </div>
    </>)
}