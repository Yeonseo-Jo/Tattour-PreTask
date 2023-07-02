import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../style/firstCarousel.css";

import Slider from "react-slick";

import nextArrowIcon from "../../assets/nextArrowIcon.svg";
import prevArrowIcon from "../../assets/prevArrowIcon.svg";

interface arrowProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const FirstCarousel = () => {
  //버튼 커스텀
  const PrevArrow = ({ onClick }: arrowProps) => {
    return (
      <div className="slick-BtnWrapper">
        <button className="slick-prevBtn" onClick={onClick}>
          <img src={prevArrowIcon} alt="이전 화살표" />
        </button>
      </div>
    );
  };
  const NextArrow = ({ onClick }: arrowProps) => {
    return (
      <div className="slick-BtnWrapper">
        <button className="slick-nextBtn" onClick={onClick}>
          <img src={nextArrowIcon} alt="다음 화살표" />
        </button>
      </div>
    );
  };

  const settings = {
    dots: true, //pagination bullet (아래 점)
    arrow: true, //옆으로 이동하는 화살표 버튼 표시 여부
    infinite: true, //무한 반복
    autoplay: true, //자동 스크롤 사용 여부
    pauseOnHover: true, //슬라이드 이동 시 마우스 호버하면 슬라이더 멈춤 여부
    draggable: true, // 드개르 가능 여부
    speed: 500, //페이지 넘어갈 때 속도(ms)
    slidesToShow: 1, //한 화면에 보이는 페이지 개수
    slidesToScroll: 1, //한 번에 넘어가는 콘텐츠 수
    prevArrow: <PrevArrow />, //커스텀 화살표 버튼 (이전 버튼)
    nextArrow: <NextArrow />, //커스텀 화살표 버튼 (다음 버튼)
  };

  return (
    <section>
      <h2> React-Slick 라이브러리 </h2>
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </section>
  );
};

export default FirstCarousel;
