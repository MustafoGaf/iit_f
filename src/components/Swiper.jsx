import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles/swiper.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import useLocalStorage from "../hooks/useLocalstorage";
export default function Slider() {
  const { t } = useTranslation();
  const sliders = useSelector((state) => state.slider.data.data);
  useEffect(() => {
    console.log("reload");
  }, [localStorage.getItem("language")]);
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {sliders.length ? (
          sliders.map((slider) => (
            <SwiperSlide>
              <div class="slider_1">
                <img src={slider.image} alt="Slider" />
                <div class="descriptions">
                  <h3>{slider["title_" + localStorage.getItem("language")]}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide>
            <div class="slider_1">
              <img src="/img/slider1.jpg" alt="Slider" />
              <div class="descriptions">
                <h3>{t("home.slider1")}</h3>
              </div>
            </div>
          </SwiperSlide>
        )}
        {/* <SwiperSlide>
          {" "}
          <div class="slider_1">
            <img src="/img/slider1.jpg" alt="Slider" />
            <div class="descriptions">
              <h3>{t("home.slider1")}</h3>
            </div>
          </div>
        </SwiperSlide> */}
        {/* <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  );
}
