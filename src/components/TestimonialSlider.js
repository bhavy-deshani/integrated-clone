"use client";
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const TestimonialSlider = ({ testimonials }) => {
  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={2}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: '.swiper-pagination-custom',
        }}
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="text-center">
              <Image 
                src={testimonial.imageSrc} 
                alt={testimonial.author}
                width={100} 
                height={100}
                className="rounded-full mx-auto border-4 border-white shadow-lg"
              />
              <p className="mt-4 font-bold text-primary">{testimonial.author}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-pagination-custom text-center mt-8"></div>
    </div>
  );
};

export default TestimonialSlider;