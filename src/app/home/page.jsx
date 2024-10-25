import React from "react";
import Navbar from "@/components/navbar/Navbar";
import Mavoid from "@/components/hero/Mavoid";
// import AfterMavoid from "@/components/hero/AfterMavoid";
import Footer from "@/components/ui/footer/Footer";
import { TimelineDemo } from "@/components/ui/Timeline/TimelineDemo";
// import Trial from "@/components/ui/trial";

export default function index() {
  return (
    <div className="bg-black font-montserrat">
      <Navbar>black</Navbar>
      <Mavoid />
      {/* <AfterMavoid /> */}

      <h2
        className="relative z-20 pt-20 font-montserrat text-center text-white text-6xl md:text-[90px] "
      >
        What we offer
      </h2>

      <TimelineDemo />
      {/* <Trial /> */}
      <Footer />
    </div>
  );
}
