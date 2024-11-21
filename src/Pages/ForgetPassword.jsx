import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Navigate } from "react-router-dom";
import Loading from "./Loading";

const ForgetPassword = () => {
  const { gmailAddress, resetPassword, user, loading } = useContext(AuthContext);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;

    resetPassword(email)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Password reset email sent to your email!",
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Incorrect Credential",
          text: "Please type valid user email or password",
        });
      });
  };

  if(loading) {
    return <Loading></Loading>
  }

  if(user) {
    return <Navigate to='/'></Navigate>
  }

  return (
    <div className="hero bg-base-200 min-h-screen">
      <Helmet>
        <title>Forgot Password | Winter Hearts</title>
      </Helmet>
      <div className="hero-content flex-col pt-9 md:pt-2">
        <div className="text-center">
          <h1 className="text-3xl font-normal pt-10 md:pt-0">
            Reset your password!
          </h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl rounded-none">
          <form onSubmit={handleFormSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text md:w-96">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email address"
                className="input input-bordered"
                defaultValue={gmailAddress}
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#EF4323] text-white">
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
