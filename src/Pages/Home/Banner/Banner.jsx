import image1 from "../../../assets/images/banner/1.jpg";
import image2 from "../../../assets/images/banner/2.jpg";
import image3 from "../../../assets/images/banner/3.jpg";
import image4 from "../../../assets/images/banner/4.jpg";
import BannerContent from "./BannerContent";
import SliderArrow from "./SliderArrow";
const Banner = () => {
  return (
    <div className="carousel w-full h-[600px]">
      <div id="slide1" className="carousel-item relative w-full h-full ">
        <img src={image1} className="w-full rounded-xl" />
        <BannerContent></BannerContent>
        <SliderArrow></SliderArrow>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={image2} className="w-full" />
        <SliderArrow></SliderArrow>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={image3} className="w-full" />
        <SliderArrow></SliderArrow>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={image4} className="w-full" />
        <SliderArrow></SliderArrow>
      </div>
    </div>
  );
};

export default Banner;
