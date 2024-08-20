import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Image from "next/image";
import { bannerFour, bannerOne, bannerThree, bannerTwo } from "../assets";

const Banner = () => {
  const bannerImage = [
    {
      id: 101,
      src: bannerOne,
    },
    {
      id: 102,
      src: bannerTwo,
    },
    {
      id: 103,
      src: bannerThree,
    },
    {
      id: 104,
      src: bannerFour,
    },
    {
      id: 105,
      src: bannerOne,
    },
    {
      id: 106,
      src: bannerTwo,
    },
  ];
  return (
    <Carousel>
      <CarouselContent>
        {bannerImage?.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <Image
              src={item?.src}
              key={item?.id}
              alt="banner-image"
              width={1000}
              height={1000}
              className="w-full h-[300px] object-cover rounded-lg"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute top-1/2 -left-4" />
      <CarouselNext className="absolute top-1/2 -right-4" />
    </Carousel>
  );
};

export default Banner;
