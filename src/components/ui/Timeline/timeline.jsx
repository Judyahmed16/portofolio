"use client";;
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({
  data
}) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    (<div
      className="w-full font-sans bg-black md:px-10"
      ref={containerRef}>
      <div className="px-4 py-20 mx-auto max-w-7xl md:px-8 lg:px-10">
        <h2 className="max-w-4xl mb-4 text-lg text-white md:text-4xl">
          Changelog from my journey
        </h2>
        <p
          className="max-w-sm text-sm text-neutral-300 md:text-base">
          Mavoid has been dedicated to delivering top-notch services in networking, website development, mobile applications, and security solutions. Here&apos;s a timeline showcasing all our services.
        </p>
      </div>
      <div ref={ref} className="relative pb-20 mx-auto max-w-7xl">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10">
            <div
              className="sticky z-40 flex flex-col items-center self-start max-w-xs md:flex-row top-40 lg:max-w-sm md:w-full">
              <div
                className="absolute flex items-center justify-center w-10 h-10 bg-white rounded-full left-3 md:left-3 dark:bg-black">
                <div
                  className="w-4 h-4 p-2 border rounded-full bg-neutral-200 dark:bg-neutral-800 border-neutral-300 dark:border-neutral-700" />
              </div>
              <h3
                className="hidden text-xl font-bold md:block md:pl-20 md:text-5xl text-neutral-300 dark:text-neutral-500 ">
                {item.title}
              </h3>
            </div>

            <div className="relative w-full pl-20 pr-4 md:pl-4">
              <h3
                className="block mb-4 text-2xl font-bold text-left md:hidden text-neutral-300">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] ">
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-cyan-200 via-[#3d8ebc] to-transparent from-[0%] via-[10%] rounded-full" />
        </div>
      </div>
    </div>)
  );
};
