import { useEffect } from "react";
import HeroSec from "../../Components/HeroSec/HeroSec";
import HomeCategorySec from "../../Components/HomeCategorySec/HomeCategorySec";
import HomeProductSec from "../../Components/HomeProductSec/HomeProductSec";

const HomePage = () => {

  return (
    <>

      <HeroSec />
      <HomeCategorySec />
      <HomeProductSec />
    </>
  );
};

export default HomePage;
