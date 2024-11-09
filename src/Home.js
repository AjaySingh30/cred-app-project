import React from "react";
import HeroSection from "./Components/HeroSection";
import Services from "./Components/Services";
import Trusted from "./Components/Trusted";
import FeatureProduct from "./Components/FeatureProduct";

const Home = () => {
  const data = {
    name: "Ajay Kumar Singh",
  };

  return (
    <>
      <HeroSection myData={data} />
      <FeatureProduct/>
      <Services />
      <Trusted />
    </>
  );}

export default Home;