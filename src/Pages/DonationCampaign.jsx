import { useContext } from "react";
import { DonationContext } from "../Root/Root";
import DonationCard from "../Layouts/DonationCard";
import { Helmet } from "react-helmet-async";

const DonationCampaign = () => {
  const donationData = useContext(DonationContext);

  return (
    <div className="w-[95%] mx-auto my-28 grid md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6">
      <Helmet>
        <title>Donation Campaign | Winter Hearts</title>
      </Helmet>
      {donationData.map((data) => {
        return <DonationCard data={data}></DonationCard>;
      })}
    </div>
  );
};

export default DonationCampaign;
