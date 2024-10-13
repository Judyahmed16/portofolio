import React from 'react'
import { Montserrat } from "next/font/google";
import { CardHoverEffectDemo } from '@/components/ui/card-hover-effect/CardHoverEffectDemo'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/ui/footer/Footer'

const montserrat = Montserrat({
    subsets: ["latin"],
    weights: ["400", "700"], // Specify the font weights you want to include
  });

export default function page() {
  return (
    <div className='bg-black'>
        <Navbar>black</Navbar>
        <h1 className={`relative z-20 pt-20 font-bold text-center text-white text-6xl md:text-[80px] ${montserrat.className}`}>
        Pricings
      </h1>
        <CardHoverEffectDemo />
        <Footer />
    </div>
  )
}
