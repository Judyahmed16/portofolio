"use client";
import { TypewriterEffect } from "../ui/typewriter-effect";

export function TypewriterEffectDemo() {
  const words = [
    {
      text: "MaVoid",
      className: "text-white text-6xl md:text-9xl",
    },
  ];
  return (
    <article className="flex flex-col items-center justify-center  ">
      <TypewriterEffect words={words} />
    </article>
  );
}
