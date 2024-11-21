import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const UpdateProfile = () => {
  const { updateUserProfile } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;

    updateUserProfile({ displayName: name, photoURL: photo }).then(() => {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Your profile has been updated!",
      });
      navigate("/dashboard");
    });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <Helmet>
        <title>Update profile | Winter Hearts</title>
      </Helmet>  
      <div className="hero-content flex-col pt-9 md:pt-12">
        <div className="text-center">
          <h1 className="text-3xl font-normal pt-10 md:pt-0">
            Update your profile
          </h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl rounded-none">
          <form onSubmit={handleFormSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text md:w-96">photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="paste your photo URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text md:w-96">name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="type your name here"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#EF4323] text-white">
                Update Information
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
