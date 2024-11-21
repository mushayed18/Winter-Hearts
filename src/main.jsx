import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";
import "animate.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root/Root";
import ErrorPage from "./Pages/ErrorPage";
import Home from "./Pages/Home";
import AuthProvider from "./Provider/AuthProvider";
import DonationCampaign from "./Pages/DonationCampaign";
import DonationDetails from "./Pages/DonationDetails";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import HowToHelp from "./Pages/HowToHelp";
import Dashboard from "./Pages/Dashboard";
import UpdateProfile from "./Pages/UpdateProfile";
import { HelmetProvider } from "react-helmet-async";
import ForgetPassword from "./Pages/ForgetPassword";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/donation-campaigns",
        element: <DonationCampaign></DonationCampaign>,
      },
      {
        path: "/donation-details/:detailId",
        element: <PrivateRoute><DonationDetails></DonationDetails></PrivateRoute>,
      },
      {
        path: "/how-to-help",
        element: <HowToHelp></HowToHelp>,
      },
      {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/update-profile",
        element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>,
      },
      {
        path: "/forget-password",
        element: <ForgetPassword></ForgetPassword>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </HelmetProvider>
  </StrictMode>
);
