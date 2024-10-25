"use client";
import React from "react";
import { LayoutGrid } from "./layout-grid";

export function LayoutGridDemo() {
  return (
    <div className="w-full h-screen py-20">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="text-xl font-bold text-white md:text-4xl">
        Ziad
      </p>
      <p className="text-base font-normal text-white"></p>
      <p className="max-w-lg my-4 text-base font-normal text-neutral-200">
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="text-xl font-bold text-white md:text-4xl">
        Mo&apos;men
      </p>
      <p className="text-base font-normal text-white"></p>
      <p className="max-w-lg my-4 text-base font-normal text-neutral-200">
        Perched high above the world, this house offers breathtaking views and a
        unique living experience. It&apos;s a place where the sky meets home,
        and tranquility is a way of life.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="text-xl font-bold text-white md:text-4xl">
        Hesham
      </p>
      <p className="text-base font-normal text-white"></p>
      <p className="max-w-lg my-4 text-base font-normal text-neutral-200">
        A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="text-xl font-bold text-white md:text-4xl">
        Mohamed
      </p>
      <p className="text-base font-normal text-white"></p>
      <p className="max-w-lg my-4 text-base font-normal text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};

const SkeletonFive = () => {
    return (
      <div>
        <p className="text-xl font-bold text-white md:text-4xl">
          Amira
        </p>
        <p className="text-base font-normal text-white"></p>
        <p className="max-w-lg my-4 text-base font-normal text-neutral-200">
          A house by the river is a place of peace and tranquility. It&apos;s the
          perfect place to relax, unwind, and enjoy life.
        </p>
      </div>
    );
  };
  
  const SkeletonSix = () => {
    return (
      <div>
        <p className="text-xl font-bold text-white md:text-4xl">
          Ahmed
        </p>
        <p className="text-base font-normal text-white"></p>
        <p className="max-w-lg my-4 text-base font-normal text-neutral-200">
          A house by the river is a place of peace and tranquility. It&apos;s the
          perfect place to relax, unwind, and enjoy life.
        </p>
      </div>
    );
  };

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-1 h-[150px] sm:h-[300px] md:h-[450px]",
    thumbnail: "/assets/team-pics/ziad.jpg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "md:col-span-1 h-[150px] sm:h-[250px] md:h-[450px]",
    thumbnail: "/assets/team-pics/moemen.jpg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "md:col-span-1 h-[150px] sm:h-[250px] md:h-[450px]",
    thumbnail: "/assets/team-pics/hesham.jpg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-1 h-[150px] sm:h-[250px] md:h-[450px]",
    thumbnail: "/assets/team-pics/mohamed.jpg",
  },
  {
    id: 5,
    content: <SkeletonFive />,
    className: "md:col-span-1 h-[150px] sm:h-[250px] md:h-[450px]",
    thumbnail: "/assets/team-pics/amira.jpg",
  },
  {
    id: 6,
    content: <SkeletonSix />,
    className: "md:col-span-1 h-[150px] sm:h-[250px] md:h-[450px]",
    thumbnail: "/assets/team-pics/ahmed.jpg",
  },
];
