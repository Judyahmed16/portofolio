import React from 'react'
import Navbar from "@/components/navbar/Navbar";
import { TimelineDemo } from "@/components/ui/Timeline/TimelineDemo";

export default function services() {
  return (
    <div>
      <Navbar />
      <h1 className="relative z-20 pt-8  font-bold text-center text-[#31769e] text-[80px] ">
        Services
      </h1>
      <TimelineDemo />
    </div>
  )
}
