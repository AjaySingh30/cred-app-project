import React from 'react';
import HeroSection from './Components/HeroSection';
import { useProductContext } from './ContextAPI';


const About = () => {
  const {myName}  = useProductContext();

  const data = {
    name: "It's Your Car Ajay",
  };

  return (
    <>
      {myName}
      <HeroSection myData={data} />
    </>
  );
};

export default About;