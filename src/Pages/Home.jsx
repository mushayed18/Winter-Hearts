import { Helmet } from "react-helmet-async";
import About from "../Layouts/About";
import DonateUs from "../Layouts/DonateUs";
import HowItWorksSection from "../Layouts/HowItWorksSection";
import ImpactSection from "../Layouts/ImpactSection";
import SwiperLayout from "../Layouts/SwiperLayout";


const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Winter Hearts</title>
      </Helmet>
      <SwiperLayout></SwiperLayout>
      <About></About>
      <HowItWorksSection></HowItWorksSection>
      <ImpactSection></ImpactSection>
      <DonateUs></DonateUs>
    </div>
  );
};

export default Home;
