import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const { photoURL, displayName, email } = user;

  const navigate = useNavigate();

  const handleUpdateProfileBtn = () => {
    navigate("/update-profile");
  };

  return (
    <div>
      {user && (
        <div className="bg-base-300 border-2 rounded-2xl w-11/12 md:w-10/12 mx-auto my-24 flex flex-col justify-center items-center gap-8 py-24">
          <div>
            <h1 className="text-3xl text-center font-bold">
              <span className="font-light">Welcome to Dashboard,</span>{" "}
              {displayName}
            </h1>
          </div>
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div>
              <div className="h-44 w-44 rounded-full">
                <img
                  className="w-full h-full object-cover rounded-full"
                  src={photoURL}
                  alt=""
                />
              </div>
            </div>
            <div className="text-xl flex flex-col justify-center">
              <p>
                <span className="font-medium">Name</span>:{" "}
                <span className="font-extralight">{displayName}</span>
              </p>
              <p>
                <span className="font-medium">Email</span>:{" "}
                <span className="font-extralight">{email}</span>
              </p>
              <div className="form-control mt-6">
                <button
                  onClick={handleUpdateProfileBtn}
                  className="btn bg-[#EF4323] text-white"
                >
                  Update Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
