import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root/Root";
import ErrorPage from "./Pages/ErrorPage";
import Home from "./Pages/Home";
import AuthProvider from "./Provider/AuthProvider";
import DonationCampaign from "./Pages/DonationCampaign";
import DonationDetails from "./Pages/DonationDetails";

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
        element: <DonationDetails></DonationDetails>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
