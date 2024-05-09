import image1 from "../../../assets/images/banner/1.jpg";
import image2 from "../../../assets/images/banner/2.jpg";
import image3 from "../../../assets/images/banner/3.jpg";
import image4 from "../../../assets/images/banner/4.jpg";
import BannerItem from "./BannerItem";

const Banner = () => {
  return (
    <div className="carousel w-full h-[600px]">
      <BannerItem
      slide='slide1'
      img={image1} 
      title="Affordable price for car service"
      body="There are many variations of passage of available but the majority
      have suffered alteration in some forever"

      nextArrow="#slide2"
      prevArrow="#slide4"
      ></BannerItem>

      <BannerItem
      slide='slide2'
      img={image2}
      title="Title 2 "
      body="Body description 2"
      nextArrow="#slide3"
      prevArrow="#slide1"
      ></BannerItem>

      <BannerItem
      slide='slide3'
      img={image3}
      title='Title Three'
      body='slide item three description'
      nextArrow="#slide4"
      prevArrow="#slide2"
      ></BannerItem>
    
      <BannerItem
      slide='slide4'
      img={image4}
      title='Title four for car doctor'
      body='slide item four car doctor description'
      nextArrow="#slide1"
      prevArrow="#slide3"
      ></BannerItem>
    </div>
  );
};

export default Banner;
