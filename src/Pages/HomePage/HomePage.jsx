import { useEffect } from "react";
import HeroSec from "../../Components/HeroSec/HeroSec";
import HomeCategorySec from "../../Components/HomeCategorySec/HomeCategorySec";
import HomeProductSec from "../../Components/HomeProductSec/HomeProductSec";
import Footer from "../Footer/Footer";

const HomePage = () => {

  return (
    <>

      <HeroSec />
      <HomeCategorySec />
      <HomeProductSec />
      <Footer/>
    </>
  );
};

export default HomePage;
