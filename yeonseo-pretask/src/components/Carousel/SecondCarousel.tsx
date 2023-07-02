// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../../style/secondCarousel.css";

// import { useRef } from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import nextArrowIcon from "../../assets/nextArrowIcon.svg";
import prevArrowIcon from "../../assets/prevArrowIcon.svg";

const SecondCarousel = () => {
  // const nextBtnRef = useRef<HTMLButtonElement>(null);
  // const prevBtnRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <h2>Swiper 라이브러리</h2>
      <section className="swiperWrapper">
        <div className="custom-btnWrapper">
          <button className="custom-prevBtn">
            <img src={prevArrowIcon} alt="이전 화살표" />
          </button>
          <button className="custom-nextBtn">
            <img src={nextArrowIcon} alt="다음 화살표" />
          </button>
        </div>
        <article className="swiper-area">
          <Swiper
            // install Swiper modules
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            navigation={{
              prevEl: ".custom-prevBtn",
              nextEl: ".custom-nextBtn",
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            // onSwiper={(swiper) => {
            //   swiperRef?.current = swiper;
            // }}
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
          </Swiper>
        </article>
      </section>
    </>
  );
};

export default SecondCarousel;
