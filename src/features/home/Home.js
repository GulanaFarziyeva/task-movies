import Hero from "./hero/Hero";
import SliderComponent from "./carusel/SliderComponent";

const Home = () =>{
    return(
        <div className="home">
            <Hero />
            <SliderComponent />
            <SliderComponent />
        </div>
    )
}

export default Home;