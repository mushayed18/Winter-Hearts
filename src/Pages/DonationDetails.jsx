import { useParams } from "react-router-dom";
import { useContext } from "react";
import { DonationContext } from "../Root/Root";
import Swal from "sweetalert2";

const DonationDetails = () => {
  const { detailId } = useParams();

  const donationData = useContext(DonationContext);

  const campaign = donationData.find((item) => item.id === parseInt(detailId));

  const handleFormClick = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Thank you!",
      text: "We will reach your destination soon",
      icon: "success",
    });
  };

  return (
    <div className="container md:w-[80%] lg:w-[70%] mx-auto my-24 px-4 md:px-8">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4 text-center">
          {campaign.title}
        </h1>
        <div className="h-72 md:h-96">
          <img
            className="h-full w-full object-cover rounded-lg"
            src={campaign.image}
            alt={campaign.title}
          />
        </div>
        <p className="text-gray-700 text-lg my-4">{campaign.description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <p className="text-gray-600">
            <span className="font-bold">Status:</span> {campaign.status}
          </p>
          <p className="text-gray-600">
            <span className="font-bold">Division:</span> {campaign.division}
          </p>
          <p className="text-gray-600">
            <span className="font-bold">Contact:</span> {campaign.contactInfo}
          </p>
        </div>
      </div>

      <div className="bg-gray-100 shadow-md rounded-lg p-6 mt-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Donate to this Campaign
        </h2>
        <form onSubmit={handleFormClick} className="space-y-6">
          <div>
            <label
              htmlFor="quantity"
              className="block text-gray-700 font-medium mb-2"
            >
              Quantity of Items
            </label>
            <input
              id="quantity"
              type="text"
              placeholder="e.g., 2 jackets, 3 blankets"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              required
            />
          </div>

          <div>
            <label
              htmlFor="itemType"
              className="block text-gray-700 font-medium mb-2"
            >
              Item Type
            </label>
            <select
              id="itemType"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              required
            >
              <option value="">Select Item Type</option>
              <option value="blanket">Blanket</option>
              <option value="jacket">Jacket</option>
              <option value="sweater">Sweater</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="pickupLocation"
              className="block text-gray-700 font-medium mb-2"
            >
              Pickup Location
            </label>
            <input
              id="pickupLocation"
              type="text"
              placeholder="e.g., House 12, Road 5, Dhanmondi, Dhaka"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              required
            />
          </div>

          <div>
            <label
              htmlFor="notes"
              className="block text-gray-700 font-medium mb-2"
            >
              Additional Notes (Optional)
            </label>
            <textarea
              id="notes"
              rows="4"
              placeholder="Add any additional details..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-primaryColor"
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="btn w-full bg-[#EF4323] text-white font-semibold py-3 rounded-lg transition"
            >
              Submit Donation
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DonationDetails;
