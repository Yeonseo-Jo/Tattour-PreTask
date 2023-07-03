import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../../style/thirdCarousel.css";

// import { useRef } from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import nextArrowIcon from "../../assets/nextArrowIcon.svg";
import onBoarding from "../../assets/onBoarding.png";
import prevArrowIcon from "../../assets/prevArrowIcon.svg";

const ThirdCarousel = () => {
  return (
    <>
      <h2>Swiper 라이브러리 : 버튼이 안쪽에</h2>
      <section className="thirdSwiperWrapper">
        <section className="swiper-btn-wrapper">
          <button className="swiper-prevBtn">
            <img src={prevArrowIcon} alt="이전 화살표" />
          </button>
          <button className="swiper-nextBtn">
            <img src={nextArrowIcon} alt="다음 화살표" />
          </button>
        </section>
        <section className="swiper-area">
          <Swiper
            id="third-swiper"
            // install Swiper modules
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            navigation={{
              prevEl: ".swiper-prevBtn",
              nextEl: ".swiper-nextBtn",
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            // onSwiper={(swiper) => {
            //   swiperRef?.current = swiper;
            // }}
          >
            <SwiperSlide id="third-swiper-slide">
              <article className="swiper-content">
                <header>
                  <h2>크기를 선택해주세요</h2>
                  <p>고민 중인 실제 사이즈를 선택해보세요!</p>
                </header>
                <div className="swiper-content-img">
                  <img src={onBoarding} alt="첫번째 온보딩 이미지" />
                </div>
              </article>
            </SwiperSlide>
            <SwiperSlide id="third-swiper-slide">
              <article>
                <header>
                  <h2>도안 이미지를 첨부해주세요</h2>
                  <p>직접 그린 도안을 첨부해주세요</p>
                </header>
                <div className="swiper-content-img">
                  <img src={onBoarding} alt="두번째 온보딩 이미지" />
                </div>
              </article>
            </SwiperSlide>
          </Swiper>
        </section>
      </section>
    </>
  );
};

export default ThirdCarousel;
