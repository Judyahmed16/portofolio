import React from 'react'
import { CardHoverEffectDemo } from '@/components/ui/card-hover-effect/CardHoverEffectDemo'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/ui/footer/Footer'



export default function page() {
  return (
    <div className='bg-black'>
        <Navbar>black</Navbar>
        <h2 className='relative font-montserrat z-20 pt-32 pb-16 font-bold text-center text-white text-6xl md:text-[80px] '>
        Pricings
      </h2>
        <CardHoverEffectDemo />
        <Footer />
    </div>
  )
}
