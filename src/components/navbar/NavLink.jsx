"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function NavLink({ children, href }) {
  const pathname = usePathname();
  const isActive = pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={
        isActive
          ? `
        py-1 text-[15px] md:text-[19px] transition duration-500 ease-in-out font-montserrat font-medium whitespace-nowrap hover:text-[#31769e] border-b-[#31769e] text-[#31769e] `
          : `
        py-1 text-[15px] md:text-[19px] transition duration-500 ease-in-out font-montserrat font-medium text-white whitespace-nowrap  hover:text-[#31769e] hover:border-b-[#31769e]  `
      }
    >
      {children}
    </Link>
  );
}
