import React, { useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";
import Image from "next/image";
import imagesAndText from "../../public/media";
import { FaLongArrowAltRight } from "react-icons/fa";
import { BsArrowDownCircle } from "react-icons/bs";
import Link from "next/link";
// import EmblaCarousel from 'embla-carousel'


// const options = { loop: false }
// const embla = EmblaCarousel(emblaNode, options)

export default function Demo() {
  const slides = imagesAndText.map((item, i) => (
    <Carousel.Slide key={i}>
      <div className="h-screen bg-inherit flex w-full relative">
        <Image src={item.image.src} alt="tali consultancy" fill />
        <p className="absolute top-1/3 z-10  text-gray-100 font-semibold text-lg bg-teal-600 px-1 py-2 border border-gray-200">
          {item.headline}
        </p>
        <div className="absolute top-96 text-gray-50 text-6xl font-semibold left-10 z-10">
          {item.article}
        </div>
        <div className="text-gray-50 absolute z-10 bottom-56 flex items-center font-semibold text-xl left-9">
          Learn more
          <FaLongArrowAltRight className="text-2xl font-semibold pt-1 pl-2" />
        </div>
        <Link
          href="#start-home"
          className="absolute text-gray-50 font-bold bottom-5 text-3xl left-1/2 animate-bounce"
        >
          <BsArrowDownCircle />
        </Link>
      </div>
    </Carousel.Slide>
  ));

  const autoplay = useRef(Autoplay({ delay: 5000 }));

  return (
    <Carousel
      // sx={{ maxWidth: 320 }}
      mx="auto"
      // withIndicators
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      // loop={true}
    >
      {slides}
    </Carousel>
  );
}
