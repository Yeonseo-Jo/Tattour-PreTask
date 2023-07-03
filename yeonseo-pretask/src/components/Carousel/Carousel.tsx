import FirstCarousel from "./FirstCarousel";
import SecondCarousel from "./SecondCarousel";
import ThirdCarousel from "./ThirdCarousel";

const Carousel = () => {
  return (
    <>
      <div>
        <FirstCarousel />
      </div>
      <div>
        <SecondCarousel />
      </div>
      <div>
        <ThirdCarousel />
      </div>
    </>
  );
};

export default Carousel;
