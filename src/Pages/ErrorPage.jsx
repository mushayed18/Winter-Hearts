import { useNavigate, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  const navigate = useNavigate();

  const handleBackToHomeBtn = () => {
    navigate('/');
  }

  return (
    <div
      id="error-page"
      className="min-h-screen flex flex-col items-center justify-center border-2 gap-5"
    >
      <h1 className="font-bold text-5xl">Oops!</h1>
      <p className="text-2xl">Sorry, an unexpected error has occurred.</p>
      <p className="font-bold text-2xl">
        <i>{error.statusText || error.message}</i>
      </p>
      <div className="form-control mt-6">
        <button onClick={handleBackToHomeBtn} className="btn bg-[#EF4323] text-white">Back to Home</button>
      </div>
    </div>
  );
}
