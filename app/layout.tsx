import { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import {Header} from './components/Header'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ovva test task',
  description: 'react next js test task'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <Header />
      <main className='min-h-screen bg-gray-300'>
        <div className='relative px-6 lg:px-8'>
          {children}
        </div>
      </main>
      </body>
      
    </html>
  )
}
