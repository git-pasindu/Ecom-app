import React from "react";
import Categories from "../../components/Categories/Categories";
import FeaturedProducts from "../../components/FeatureProduct/FeaturedProducts";
import Slider from "../../components/Slider/Slider";
import Contact from "../../components/Contact/Contact";

function Home() {
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts type="featured" />
      <Categories />
      <FeaturedProducts type="treading" />
      <Contact />
    </div>
  );
}

export default Home;
