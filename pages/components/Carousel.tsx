import React, { useCallback, useEffect, useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, Embla } from "@mantine/carousel";
import Image from "next/image";
import imagesAndText from "../../public/media";
import { FaLongArrowAltRight } from "react-icons/fa";
import { BsArrowDownCircle } from "react-icons/bs";
import Link from "next/link";

export default function ImgSlides({ startRef }: { startRef: null | any }) {
  const [embla, setEmbla] = useState<Embla | null>(null);
  const autoplay = useRef(Autoplay({ delay: 5000 }));

  // scale animation
  // const [activeIndex,setActiveIndex] = useState(0)

  // useEffect(()=> {
  //   if(embla) {
  //     setActiveIndex(embla.selectedScrollSnap())
  //   }
  // },[embla])

  // useEffect(()=> {
  //   const currentImage = embla?.scrollSnapList()[activeIndex]
  //   currentImage?.classList.add("transform", "scale-150")
  //   currentImage.addEventListener("transitioned", ()={currentImage.classList.remove("transform", "scale-150")})
  // })

  const handleButtonClick = useCallback(
    (startRef: null | any) => {
      if (startRef.current) {
        window.scrollTo({
          top: startRef.current.offsetTop,
          behavior: "smooth",
        });
      }

      if (!embla) return;
      embla.reInit();
    },
    [embla]
  );

  const slides = imagesAndText.map((item, i) => (
    <Carousel.Slide key={i}>
      <div className="h-screen bg-inherit flex w-full relative">
        <Image
          src={item.image.src}
          alt="tali consultancy"
          fill
          objectFit="cover"
          data-pin-no-hover="true"
        />
        <div className="absolute top-1/3 md:mt-6 h-auto flex flex-col mt-">
          <div className="text-sm opacity-90 w-fit mb-2 pl-11 lg:pl-12 text-gray-100 font-bold px-2 py-2 ">
            {item.headline}
          </div>
          <Link
            href="/"
            className="pl-11 lg:pl-12 text-gray-50 mb-4 lg:mb-6 text-4xl lg:text-5xl xl:text-6xl font-semibold md:left-16 z-10"
          >
            {item.article}
          </Link>
          <Link
            href="/"
            className="text-gray-50 lg:pl-12 pl-11 uppercase flex items-center font-semibold text-sm"
          >
            Learn more
            <FaLongArrowAltRight className="text-2xl font-semibold pt-1 pl-2" />
          </Link>
        </div>
        <button
          className="absolute text-gray-50 font-bold bottom-10 pb-10 left-1/2 animate-bounce text-lg lg:text-base"
          onClick={() => handleButtonClick(startRef)}
        >
          <BsArrowDownCircle />
        </button>
      </div>
    </Carousel.Slide>
  ));

  return (
    <Carousel
      mx="auto"
      // withIndicators
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      loop={true}
      getEmblaApi={setEmbla}
    >
      {slides}
    </Carousel>
  );
}
