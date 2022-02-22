import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

export default function Banner() {
  return (
    <div
      style={{
        height: "265px",
        margin: "16px",
      }}
    >
        <Swiper
          direction={"vertical"}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
              <img src="https://www.activefm.co.za/img/Banner%201.png" alt="" width={"100%"} height="100%" style={{ objectFit:'contain'}} />
          </SwiperSlide>
          <SwiperSlide>
              <img src="https://www.activefm.co.za/img/Banner%202.png" alt="" width={"100%"} height="100%" style={{ objectFit:'contain'}} />
          </SwiperSlide>
          <SwiperSlide>
              <img src="https://www.activefm.co.za/img/Banner%203.png" alt="" width={"100%"} height="100%" style={{ objectFit:'contain'}} />
          </SwiperSlide>

        </Swiper>
    </div>
  );
}
