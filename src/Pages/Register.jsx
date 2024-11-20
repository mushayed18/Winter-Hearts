import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const { createUser, setUser, updateUserProfile, signInWithGoogle } = useContext(AuthContext);

  const navigate = useNavigate();

  const [visibility, setVisibility] = useState(false);

  const handleToggle = () => {
    setVisibility(!visibility);
  }

  const handleGoogleBtn = () => {
    signInWithGoogle().then((result) => {
      setUser(result.user);
      navigate('/');
    })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    createUser(email, password)
      .then((result) => {
        setUser(result.user);
        updateUserProfile({ displayName: name, photoURL: photo }).then(() => {
          navigate('/');
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: 'This email is already taken. Please try with different one.'
        });
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col pt-9 md:pt-24">
        <div className="text-center">
          <h1 className="text-3xl font-normal pt-10 md:pt-0">Register now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl rounded-none">
          <form onSubmit={handleFormSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text md:w-96">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text md:w-96">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email address"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text md:w-96">Photo</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="photo URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="relative form-control">
              <label className="label">
                <span className="label-text md:w-96">Password</span>
              </label>
              <input
                type={visibility ? 'text' : 'password'}
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <button onClick={handleToggle} className="absolute top-12 left-56 md:left-72">
                {
                  visibility ? <IoEyeOutline size={20} /> : <FaRegEyeSlash size={20} />
                }
              </button>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#EF4323] text-white">Register</button>
            </div>
            <div className="form-control mt-1">
              <button onClick={handleGoogleBtn} className="btn border-2">
                Login with Google
                <FcGoogle size={24}/>
              </button>
            </div>
            <div className="pt-5">
              <p className="text-sm text-center">
                Already have an account? Login{" "}
                <Link className="text-[#EF4323]" to="/login">
                  here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
