import React from "react";
import FooterLink from "./FooterLink";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaYoutube,
  FaRegEnvelope,
  FaPhone,
} from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer
      className={`flex flex-col items-center md:flex-row  md:justify-between md:items-center gap-10 md:gap-0 md:h-[450px] bg-slate-100 p-10 md:p-[44px] lg:p-12 font-montserrat`}
    >
      <div className="flex flex-col gap-10">
        <div>
          <h2 className="text-[42px] lg:text-[52px] selection:bg-[#31769e] whitespace-nowrap ">
            Get in Touch.
          </h2>
        </div>

        <div className="flex items-center justify-center gap-6 lg:items-start lg:justify-start ">
          <FooterLink href="https://www.facebook.com/profile.php?id=61567021770630">
            <FaFacebook />
          </FooterLink>
          <FooterLink href="https://www.instagram.com/ma_v0id/">
            <FaInstagram />
          </FooterLink>
          <FooterLink href="https://www.linkedin.com/in/ziad-ahmed-634202332/">
            <FaLinkedin />
          </FooterLink>
          <FooterLink>
            <FaTwitter />
          </FooterLink>
          <FooterLink href="https://github.com/MaV0id">
            <FaGithub />
          </FooterLink>
          <FooterLink href="https://www.youtube.com/@MaVoid25">
            <FaYoutube />
          </FooterLink>
        </div>

        <div>
          <p className="hidden text-gray-500 md:block">
            © 2024 MaVoid. All rights reserved.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-5 md:gap-3 lg:gap-10 lg:flex-row">
        <div className=" bg-[#173648] w-[270px] h-[150px] md:size-[170px] lg:size-[250px] rounded-br-3xl left-[18px] md:top-[25px]  relative mb-6">
          <div className=" bg-[#31769e] w-[270px] h-[150px] md:size-[170px] lg:size-[250px] rounded-tl-3xl rounded-br-3xl absolute right-6 bottom-7 md:right-7 md:bottom-7 text-center">
            <div className="flex flex-col items-center justify-center h-full gap-6 text-white">
              <FaRegEnvelope size={30} />
              <p className="text-[17px] md:text-[14px] lg:text-[17px]">info@mavoid.com</p>
            </div>
          </div>
        </div>

        <div className=" bg-[#173648] w-[270px] h-[150px] md:size-[170px] lg:size-[250px] rounded-br-3xl left-[18px] md:top-[25px] relative mb-6">
          <div className=" bg-[#31769e] w-[270px] h-[150px] md:size-[170px] lg:size-[250px] rounded-tl-3xl rounded-br-3xl absolute right-6 bottom-7 md:right-7 md:bottom-7 text-center">
            <div className="flex flex-col items-center justify-center h-full gap-6 text-white">
              <FaPhone size={30} />
              <p className="text-[17px] md:text-[14px] lg:text-[17px]">+201500800591</p>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <p className="text-gray-500 whitespace-nowrap">
          © 2024 MaVoid. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
