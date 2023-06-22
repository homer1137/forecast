

import React from 'react'

interface Props {
    error: string | null
    onDismiss: () => void
}

export const FetchError = ({ error, onDismiss }: Props) => {
    return (
        <div onClick={onDismiss} className="rounded-lg overflow-hidden shadow-lg mt-4 p-8 bg-pink-500 border border-red-800 dark:bg-red-200 role='alert'  ">
            <div className='flex items-center font-bold text-white'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>
                No such city found: {error}
            </div>
        </div>
    )
}