import React from "react";
import Header from "../components/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Footer from "../components/Footer";
import HowItWorks from "../components/Howitworks";
import WhatWeOffer from "../components/Whatweoffer";
import WhoWeServe from "../components/WhoWeServe";
import AboutUs from "../components/ABoutUs";

const Landing = () => {
  const slides = [
    {
      id: 1,
      bgImage:
        'bg-[url("https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=2071&auto=format&fit=crop")]',
      text: "Smart storage & packaging tools for food processors, farmers & exporters",
      subtext:
        "Helping you store more, waste less, and sell better — season after season.",
      buttonText: "Order on WhatsApp",
    },
    {
      id: 2,
      bgImage:
        'bg-[url("https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2070&auto=format&fit=crop")]',
      text: "Affordable and quality storage and packaging tools.",
      subtext: "From farm to processing to export. We help you protect your food and profits.",
      buttonText: "View Products",
    },
    {
      id: 3,
      bgImage: 'bg-[url("assets/Harvest.jpeg")]',
      text: "Eco-Friendly Packaging Solutions",
      subtext:
        "Biodegradable materials that keep produce fresh 2x longer while reducing environmental impact.",
      buttonText: "View Products",
    },
  ];
  return (
    <div>
      <Header />
      <div className="relative w-full h-screen -mt-[80px] pt-[80px]">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          className="h-full w-full"
        >
          {slides.map((slide) => (
            <SwiperSlide
              key={slide.id}
              className={`${slide.bgImage} bg-cover bg-center`}
            >
              <div className="absolute inset-0 bg-black/40 flex items-center">
                <div className="container mx-auto px-6 text-white">
                  <div className="max-w-2xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                      {slide.text}
                    </h1>
                    <p className="text-xl md:text-2xl mb-8">{slide.subtext}</p>
                    <a
                      href="https://wa.me/2348182443958"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors"
                    >
                      {slide.buttonText} →
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <WhatWeOffer/>
      <HowItWorks/>
      <WhoWeServe/>
      <AboutUs/>
      <Footer/>
    </div>
  );
};

export default Landing;
