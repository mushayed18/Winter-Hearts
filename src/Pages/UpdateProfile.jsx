import React from "react";

const UpdateProfile = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const email = e.target.name.value;
    const password = e.target.photo.value;
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
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
              <button className="btn bg-[#EF4323] text-white">Update Information</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
