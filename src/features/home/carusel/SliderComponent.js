import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaRegHeart } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";

import sliderCaruselItems from "./SliderItem";

const SliderComponent = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 830,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <Slider {...settings} className="home__card">
      {sliderCaruselItems.map((item) => (
        <div key={item.id}>
          <div className="home__card__item">
            <div className="home__card__item__top">
              <img
                className="home__card__item__top__img"
                src={item.img}
                alt={item.title}
              />
            </div>
            <div className="home__card__item__body">
              <div className="home__card__item__body__inner">
                <h5 className="home__card__item__body__inner__title">
                  {item.title}
                </h5>
                <div className="home__card__item__body__inner__details">
                  <span>{item.year}</span>
                  <span className="home__card__item__body__inner__details__time">
                    {item.time}
                  </span>
                </div>
              </div>
              <div className="home__card__item__body__icons">
                <FaRegHeart className="home__card__item__body__icons__heart" />
                <FaPlayCircle className="home__card__item__body__icons__play" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};
export default SliderComponent;
