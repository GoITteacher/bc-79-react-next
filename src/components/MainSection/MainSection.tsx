import AboutUs from "./AboutUs/AboutUs";
import Hero from "./Hero/Hero";
import Reviews from "./Reviews/Reviews";
import css from "./MainSection.module.css";

const MainSection = () => {
  return (
    <section className={css.wrapper}>
      <Hero />
      <AboutUs />
      <Reviews />
    </section>
  );
};

export default MainSection;
