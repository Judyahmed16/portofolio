"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weights: ["400", "700"], // Specify the font weights you want to include
});

export default function NavLink({ children, href }) {
  const pathname = usePathname();
  const isActive = pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={
        isActive
          ? `
        py-1 text-[15px] md:text-[17px] transition duration-500 ease-in-out    whitespace-nowrap ${montserrat.className} hover:text-[#31769e] border-b-[#31769e] text-[#31769e] font-semibold`
          : `
        py-1 text-[15px] md:text-[17px] transition duration-500 ease-in-out border-b-2border-b-transparent text-white whitespace-nowrap ${montserrat.className} hover:text-[#31769e] hover:border-b-[#31769e]  font-semibold`
      }
    >
      {children}
    </Link>
  );
}
