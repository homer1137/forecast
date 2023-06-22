
import React, { ChangeEvent } from 'react'

type Props = {
    query: string;
    inputHandler: (e: ChangeEvent<HTMLInputElement>) => void
    setQuery: (st: string)=>void;
}


export const Search = ({ query, inputHandler, setQuery }: Props) => {
    return (
        <form><div className='relative '>
            <div className=' absolute top-4 inset-y-o left-0 flex items-center pl-3 pointer-events-none'>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>

            </div>
            <input maxLength={20} type="text" className='block w-full p-4 pl-10 text-sm text-brand border border-gray-300 rounded-lg bg-gray-50 focus:ring-brand focus:border-brand focus:outline-none dark:bg-gray-100 dark: placeholderbg-gray-400 dark:text-black dark:focus:ring-brand dark:focus:border-brand'
                placeholder='Serch for the city'
                value={query || ''}
                onChange={(e)=>{ inputHandler(e)}}
            />
            {query && <div onClick={()=>{ setQuery('')}} className='absolute  top-4 inset-y-o right-0 items-center pr-3  cursor-pointer' >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
            }
        </div></form>)
}

