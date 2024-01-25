import slider1 from "/src/assets/img/slide1.png";
import slider2 from "/src/assets/img/slide2.png";
import slider3 from "/src/assets/img/slide3.png";
import "./slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
export default function Slider() {
  return (
    <div className="swiper">
      <>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            1024: {
              slidesPerView: 3,
              // spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              // spaceBetween: 40,
            },
            340: {
              slidesPerView: 1,
              // spaceBetween: 50,
            },
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={slider1} />
            <p>Euphoria Crop Blouse</p>
            <p>Rp 125.000</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider2} />
            <p>Euphoria Crop Blouse</p>
            <p>Rp 180.000</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider3} />
            <p>Euphoria Crop Blouse</p>
            <p>Rp 129.000</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider1} />
            <p>Euphoria Crop Blouse</p>
            <p>Rp 125.000</p>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
}
