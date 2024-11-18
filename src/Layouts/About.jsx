
const About = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl font-bold text-primaryColor mb-6">Our Mission</h2>
        <p className="text-lg text-gray-700 mb-8">
          Our aim is to make a difference by connecting people who have extra winter clothing to those in need across Bangladesh. 
          As the weather grows colder, thousands of vulnerable individuals, especially in rural and low-income areas, struggle to stay warm without access to proper clothing. 
          Our mission is to bridge this gap by making it easy for donors to contribute and for volunteers to assist in distributing warmth to those who need it most.
        </p>
        
        <h3 className="text-2xl font-semibold text-primaryColor mb-6">How You Can Contribute</h3>
        <p className="text-lg text-gray-700 mb-8">
          By participating in this campaign, you can help make a significant impact on the lives of those who are suffering from the cold. Whether you're donating clothing, volunteering, or simply sharing our mission, your efforts are greatly appreciated.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h4 className="text-xl font-semibold text-primaryColor mb-4">Donate Winter Clothing</h4>
            <p className="text-gray-700 mb-4">
              Your clothing donation can help someone stay warm during the coldest months. Whether it's jackets, sweaters, gloves, or scarves, your contribution can make a world of difference.
            </p>
            <button className="btn btn-neutral bg-primaryColor text-white px-6 py-3 rounded-md bg-[#EF4323]">Donate Now</button>
          </div>

          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h4 className="text-xl font-semibold text-primaryColor mb-4">Volunteer</h4>
            <p className="text-gray-700 mb-4">
              Volunteering with Winter Donation gives you the chance to directly help people in need. Assist with sorting, packing, and distributing donated clothes to the rural areas most affected by the cold.
            </p>
            <button className="btn btn-neutral bg-primaryColor text-white px-6 py-3 rounded-md bg-[#EF4323]">Become a Volunteer</button>
          </div>

          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h4 className="text-xl font-semibold text-primaryColor mb-4">Spread the Word</h4>
            <p className="text-gray-700 mb-4">
              Help us expand our reach by sharing this platform with your friends and family. The more people know about it, the more support we can gather to help those who need it most.
            </p>
            <button className="btn btn-neutral bg-primaryColor text-white px-6 py-3 rounded-md bg-[#EF4323]">Share Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
