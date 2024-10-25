import React from "react";
import Navbar from "@/components/navbar/Navbar";
import { LayoutGridDemo } from "@/components/ui/our-team/LayoutGridDemo";
import Footer from "@/components/ui/footer/Footer";

export default function page() {
  return (
    <div className="h-full bg-black ">
      <Navbar>black</Navbar>
      <h2 className="relative z-20 pt-20 font-montserrat text-center text-white text-6xl md:text-[90px] ">
        Meet our Team
      </h2>
      <LayoutGridDemo />
      <Footer />
    </div>
  );
}
