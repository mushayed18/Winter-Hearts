import { Helmet } from "react-helmet-async";
import About from "../Layouts/About";
import DonateUs from "../Layouts/DonateUs";
import HowItWorksSection from "../Layouts/HowItWorksSection";
import ImpactSection from "../Layouts/ImpactSection";
import SwiperLayout from "../Layouts/SwiperLayout";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Loading from "./Loading";


const Home = () => {

  const {loading} = useContext(AuthContext);

  if(loading) {
    return <Loading></Loading>
  }

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
