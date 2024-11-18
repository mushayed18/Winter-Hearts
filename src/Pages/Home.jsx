import About from "../Layouts/About";
import HowItWorksSection from "../Layouts/HowItWorksSection";
import ImpactSection from "../Layouts/ImpactSection";
import SwiperLayout from "../Layouts/SwiperLayout";


const Home = () => {
  return (
    <div>
      <SwiperLayout></SwiperLayout>
      <About></About>
      <HowItWorksSection></HowItWorksSection>
      <ImpactSection></ImpactSection>
    </div>
  );
};

export default Home;
