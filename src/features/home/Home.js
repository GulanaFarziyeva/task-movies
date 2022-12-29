import Hero from "./hero/Hero";
import Carousel from "./carusel/Carusel";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Carousel />
      <Carousel />
    </div>
  );
};

export default Home;
