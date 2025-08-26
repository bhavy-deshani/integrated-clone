"use client";
import React from 'react';
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
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: '.swiper-pagination-custom', // Custom pagination element
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white p-8 rounded-xl shadow-lg h-full">
              <p className="text-text-secondary italic">“{testimonial.quote}”</p>
              <p className="mt-4 font-bold text-primary text-right">- {testimonial.author}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom Pagination container */}
      <div className="swiper-pagination-custom text-center mt-8"></div>
    </div>
  );
};

export default TestimonialSlider;