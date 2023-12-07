import React, { HTMLAttributes } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { JsonImage } from "../../utils";

interface ArrowProps extends HTMLAttributes<HTMLDivElement> {}

const NextArrow = (props: ArrowProps) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      Next
    </div>
  );
};

const PrevArrow = (props: ArrowProps) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      Prev
    </div>
  );
};

export const SlideImage: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div>
      <Slider {...settings}>
        {JsonImage.map((img, index) => (
          <div key={`sliderimage-${index}`}>
            <img
              src={img.url}
              alt={img.name}
              style={{
                maxWidth: "100%",
                maxHeight: "500px",
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
