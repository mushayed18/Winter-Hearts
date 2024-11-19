import { Link } from "react-router-dom";

const Login = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
  }

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col ">
        <div className="text-center">
          <h1 className="text-3xl font-normal pt-10 md:pt-0">Login now!</h1>
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
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text md:w-96">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <Link className="text-sm font-normal">Forgot password?</Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#EF4323] text-white">Login</button>
            </div>
            <div className="pt-5">
                <p className="text-sm text-center">New to this website? Register <Link className="text-[#EF4323]" to="/register">here</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
