import React from 'react'
import Navbar from '@/components/Navbar';


export default function about() {
  return (
    <>
    <Navbar/>
    <div>
        <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center relative px-4">
    <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-30">
    </div>
    <h1 className="text-5xl md:text-7xl text-white font-bold mb-8 z-10">Coming Soon</h1>
    <p className="text-white text-xl md:text-2xl">
        I am working hard to bring you something amazing. Stay tuned!
    </p>       
  </div>
    </div>
    </>
  )
}
