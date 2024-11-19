import React from "react";

const ImpactSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl font-bold mb-6">The Impact of Your Donation</h2>
        <p className="text-xl mb-8">
          Every piece of clothing you donate brings warmth and hope to those who need it the most. Here's how your contributions make a real difference:
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 justify-center gap-8">
          <div data-aos="fade-up" data-aos-duration="1000" className="bg-white text-gray-800 rounded-xl p-6 shadow-xl hover:shadow-2xl transform transition-all duration-300">
            <h4 className="text-2xl font-semibold mb-4"><span className="text-[#EF4323]">1,000+</span> People Warmed</h4>
            <p className="text-lg">
              Over 1,000 individuals in rural Bangladesh have received clothing donations through Winter Donation, helping them stay warm through harsh winters.
            </p>
          </div>

          <div data-aos="fade-up" data-aos-duration="1000" className="bg-white text-gray-800 rounded-xl p-6 shadow-xl hover:shadow-2xl transform transition-all duration-300">
            <h4 className="text-2xl font-semibold mb-4"><span  className="text-[#EF4323]">500+</span> Volunteers Involved</h4>
            <p className="text-lg">
              Our dedicated volunteers have been instrumental in distributing your donations to those in need, ensuring your gifts reach the right hands.
            </p>
          </div>

          <div data-aos="fade-up" data-aos-duration="1000" className="bg-white text-gray-800 rounded-xl p-6 shadow-xl hover:shadow-2xl transform transition-all duration-300">
            <h4 className="text-2xl font-semibold mb-4"><span  className="text-[#EF4323]">100+</span> Collection Points</h4>
            <p className="text-lg">
              With over 100 collection points across Bangladesh, it's easier than ever to donate clothes and make an impact in your community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
