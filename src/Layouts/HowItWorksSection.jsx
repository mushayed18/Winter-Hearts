
const HowItWorksSection = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl font-bold text-primaryColor mb-6">How It Works</h2>
        <p className="text-lg text-gray-700 mb-8">
          Donating winter clothing through Winter Donation is easy and impactful. Here's how you can help:
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div data-aos="zoom-in-right" data-aos-duration="500" className="p-6 bg-white shadow-lg rounded-lg">
            <h4 className="text-xl font-semibold text-primaryColor mb-4">Step 1: Choose What to Donate</h4>
            <p className="text-gray-700 mb-4">
              Go through your wardrobe and select gently used or new winter clothing such as jackets, sweaters, scarves, gloves, and hats. Make sure the items are clean and in good condition.
            </p>
          </div>

          <div data-aos="zoom-in" data-aos-duration="500" className="p-6 bg-white shadow-lg rounded-lg">
            <h4 className="text-xl font-semibold text-primaryColor mb-4">Step 2: Find a Collection Point</h4>
            <p className="text-gray-700 mb-4">
              Locate the nearest donation collection point using our interactive map or contact a volunteer. Collection points are located in major cities and rural areas.
            </p>
          </div>

          <div data-aos="zoom-in-left" data-aos-duration="500" className="p-6 bg-white shadow-lg rounded-lg">
            <h4 className="text-xl font-semibold text-primaryColor mb-4">Step 3: Drop Off Your Donation</h4>
            <p className="text-gray-700 mb-4">
              Drop off your items at the designated collection points. If you need help, our volunteers will assist you in the donation process. Your contribution will be sorted and delivered to those in need.
            </p>
          </div>
        </div>

        <h3 className="text-2xl font-semibold text-primaryColor mt-12 mb-6">Supported Divisions</h3>
        <p className="text-lg text-gray-700 mb-8">
          Winter Donation supports several divisions across Bangladesh. Here are the divisions where your donations will make the most impact:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div data-aos="flip-left" data-aos-duration="1000" className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h4 className="text-xl font-semibold text-primaryColor mb-4">Dhaka</h4>
          </div>
          <div data-aos="flip-up" data-aos-duration="1000" className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h4 className="text-xl font-semibold text-primaryColor mb-4">Chittagong</h4>
          </div>
          <div data-aos="flip-right" data-aos-duration="1000" className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h4 className="text-xl font-semibold text-primaryColor mb-4">Khulna</h4>
          </div>
          <div data-aos="flip-right" data-aos-duration="1000" className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h4 className="text-xl font-semibold text-primaryColor mb-4">Rajshahi</h4>
          </div>
          <div data-aos="flip-up" data-aos-duration="1000" className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h4 className="text-xl font-semibold text-primaryColor mb-4">Barisal</h4>
          </div>
          <div data-aos="flip-left" data-aos-duration="1000" className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h4 className="text-xl font-semibold text-primaryColor mb-4">Sylhet</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
