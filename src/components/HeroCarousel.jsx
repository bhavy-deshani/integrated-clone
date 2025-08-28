"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const HeroCarousel = ({ slides }) => {
  return (
    <section className="relative w-full h-[80vh] min-h-[600px] text-white">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              <Image 
                src={slide.imageUrl} 
                alt={slide.title}
                layout="fill"
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-primary/70 bg-gradient-to-r from-primary via-transparent"></div>
              <div className="absolute inset-0 container mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
                <div className="max-w-2xl text-left">
                  {slide.overline && <p className="font-semibold text-accent mb-2">{slide.overline.toUpperCase()}</p>}
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight whitespace-pre-line">{slide.title}</h1>
                  <p className="mt-4 text-lg text-gray-200 whitespace-pre-line">{slide.description}</p>
                  {slide.buttonText && (
                    <Link href={slide.buttonLink} className="btn btn-primary mt-8">
                      {slide.buttonText}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroCarousel;