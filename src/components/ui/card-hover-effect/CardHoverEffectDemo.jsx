import { HoverEffect } from "./card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className=" max-w-[1400px] mx-auto px-8  h-[200vh] md:h-[80vh]">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Web Development",
    description:
      "A technology company that builds economic infrastructure for the internet.",
  },
  {
    title: "Mobile Applications",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
  },
  {
    title: "Digital Marketing",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
  },
  {
    title: "Networking",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
  },
];
