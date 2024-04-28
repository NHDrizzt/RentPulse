import React from "react";
import Hero from "@/components/Hero";
import InfoBoxes from "@/components/InfoBoxes";
import HomeProperties from "@/components/HomeProperties";

export const metadata = {
  title: "RentPulse | Your perfect Rental",
  description: "Find your next rental property here",
  keywords: "rental, property, rent, house, apartment, condo",
};

const HomePage = () => {
  return (
    <>
      <Hero />
      <InfoBoxes />
      <HomeProperties />
    </>
  );
};

export default HomePage;
