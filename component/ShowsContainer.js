import Box from "@mui/material/Box"
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";

// import "./styles.css";

// import required modules
import { FreeMode, Scrollbar, Mousewheel } from "swiper";

export default function ShowsContainer() {
  return (
    <Box sx={{
        height:'85vh'
    }}>
      <Swiper
        direction={"vertical"}
        slidesPerView={"auto"}
        freeMode={true}
        scrollbar={true}
        mousewheel={true}
        modules={[FreeMode, Scrollbar, Mousewheel]}
        className="mySwiper"
        style={{
            background:'pink'
        }}
      >
        <SwiperSlide>
          <h4>Scroll Container</h4>

        </SwiperSlide>
        <SwiperSlide>
          <h4>Scroll Container</h4>

        </SwiperSlide>
        <SwiperSlide>
          <h4>Scroll Container</h4>

        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
