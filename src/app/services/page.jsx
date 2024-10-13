import React from 'react'
import Navbar from "@/components/navbar/Navbar";
import { TimelineDemo } from "@/components/ui/Timeline/TimelineDemo";
import { Montserrat } from "next/font/google";
import Footer from '@/components/ui/footer/Footer';

const montserrat = Montserrat({
  subsets: ["latin"],
  weights: ["400", "700"], // Specify the font weights you want to include
});


export default function services() {

  
  return (
    <div className='bg-black'>
      <Navbar>black</Navbar>
      <h1 className={`relative z-20 pt-14 font-bold text-center text-white text-6xl md:text-[80px] ${montserrat.className}`}>
        Services
      </h1>
      <TimelineDemo />
      <Footer />
    </div>
  )
}
