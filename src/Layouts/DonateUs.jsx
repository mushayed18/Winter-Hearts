
const DonateUs = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center px-6 md:px-12">
        <h2 className="text-3xl font-bold text-primaryColor mb-4">
          Donate Us
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Your contributions help us bring warmth and comfort to those in need. Together, we can make a difference this winter.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          <button className="btn bg-[#EF4323] text-white py-4 px-8 rounded-lg shadow-lg transition duration-300">
            Donate Online
          </button>
          <button className="btn bg-gray-200 text-gray-800 py-4 px-8 rounded-lg shadow-lg hover:bg-gray-300 transition duration-300">
            Bank Transfer Details
          </button>
        </div>

        <div className="mt-12 mb-8 w-10/12 md:w-6/12 mx-auto border-t border-gray-300"></div>

        <p className="text-lg text-gray-700 mb-4">
          Spread the word! Share your contributions and inspire others to join.
        </p>
      </div>
    </section>
  );
};

export default DonateUs;
