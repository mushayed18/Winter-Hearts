import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";


const HowToHelp = () => {
  const navigate = useNavigate();

  const handleGetStartedBtn = () => {
    navigate('/donation-campaigns')
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 my-12">
      <Helmet>
        <title>How to Help | Winter Hearts</title>
      </Helmet>

      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[#EF4323]">How You Can Help</h1>
        <p className="text-gray-600 mt-3">
          Your small contributions can bring warmth to someone in need. Follow these steps to make an impact.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-5">
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-800">Step 1: Donate Items</h2>
          <p className="text-gray-600 mt-2">
            Collect unused winter clothes, such as jackets, blankets, and sweaters, and make a donation via our platform.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-800">Step 2: Volunteer</h2>
          <p className="text-gray-600 mt-2">
            Join our team of volunteers to help sort, pack, and distribute donations to those in need.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-800">Step 3: Spread the Word</h2>
          <p className="text-gray-600 mt-2">
            Share our mission with your friends and family to encourage more people to join this cause.
          </p>
        </div>
      </div>

      <div className="bg-[#EF4323] text-white py-10 mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold">Make a Difference Today!</h2>
          <p className="mt-4">
            Start helping by donating clothes or volunteering for campaigns. Every little step can make a huge impact.
          </p>
          <button onClick={handleGetStartedBtn} className="btn bg-white text-[#EF4323] mt-6 font-semibold px-8 py-3 rounded-md">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowToHelp;

