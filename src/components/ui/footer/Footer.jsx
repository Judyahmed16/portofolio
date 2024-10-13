import React from "react";
import FooterLink from "./FooterLink";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center h-[200px] bg-slate-100 gap-6">
      <div className="flex gap-10">
        <FooterLink href="https://www.facebook.com/profile.php?id=61567021770630">
          <FaFacebook />
        </FooterLink>
        <FooterLink>
          <FaInstagram />
        </FooterLink>
        <FooterLink href="https://www.linkedin.com/in/ziad-ahmed-634202332/">
          <FaLinkedin />
        </FooterLink>
        <FooterLink href="https://github.com/MaV0id">
          <FaGithub />
        </FooterLink>
        <FooterLink href="">
          <FaYoutube />
        </FooterLink>
      </div>
      <div>
        <p className="text-[#31769e]">© 2024 MaVoid. All rights reserved.</p>
      </div>
    </footer>
  );
}
