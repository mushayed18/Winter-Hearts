import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { createContext, useEffect, useState } from "react";

export const DonationContext = createContext();

const Root = () => {
  const [donationData, setDonationData] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((json) => setDonationData(json));
  }, []);

  return (
    <DonationContext.Provider value={donationData}>
      <div className="font-poppins">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </DonationContext.Provider>
  );
};

export default Root;
