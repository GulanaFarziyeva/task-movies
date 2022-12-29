import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaRegHeart } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";

const SliderComponent = ({ item }) => {
  return (
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
          <h5 className="home__card__item__body__inner__title">{item.title}</h5>
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
  );
};
export default SliderComponent;
