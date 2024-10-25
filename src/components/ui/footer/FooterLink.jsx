import React from "react";

export default function FooterLink({ children, href }) {
  return (
    <a target="_blank" href={href} className="text-[#808690] hover:text-[#31769e] text-xl md:text-2xl ease-in-out transition duration-300">
      {children}
    </a>
  );
}
