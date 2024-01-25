import said1 from "/src/assets/img/said1.png";
import said2 from "/src/assets/img/said2.png";
import said3 from "/src/assets/img/said3.png";
import { FaStar } from "react-icons/fa";
import "./Feedback.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
export default function Feedback() {
  return (
    <div className="swiper swiper2">
      <h2>What They Said</h2>
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
            },
            768: {
              slidesPerView: 2,
            },
            340: {
              slidesPerView: 1,
            },
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="slide">
            <img src={said1} />
            <h6>Essence Long Denim</h6>
            <div>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p>-Lisa-</p>
            <p>
              “I like this pants. Its fit and per=fect for me. The material is
              so comfortable that it can be used anywhere. It is also suitable
              to be combined with all types of my clothes.”
            </p>
          </SwiperSlide>
          <SwiperSlide className="slide">
            <img src={said2} />
            <h6>Andcable Knit Top</h6>
            <div>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p>-Celine-</p>
            <p>
              “I like knitted materials. I bought this shirt because the design
              is very pretty and comfortable to wear casually. The material is
              also neat and good. I love shopping here and .”
            </p>
          </SwiperSlide>
          <SwiperSlide className="slide">
            <img src={said3} />
            <h6>Candy Stripe Boxy</h6>
            <div>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p>-Tiffany-</p>
            <p>
              “This shirt is very pretty and nice. The color is cute too. At
              first I bought it as a present for my friend but I also wanted it
              so we ended up going out wearing twin clothes haha.”
            </p>
          </SwiperSlide>
          <SwiperSlide className="slide">
            <img src={said1} />
            <h6>Essence Long Denim</h6>
            <div>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p>-Lisa-</p>
            <p>
              “I like this pants. Its fit and per=fect for me. The material is
              so comfortable that it can be used anywhere. It is also suitable
              to be combined with all types of my clothes.”
            </p>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
}
