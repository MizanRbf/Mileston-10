import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import ErrorPage from "./Pages/ErrorPage.jsx";
import RootLayout from "./Layouts/RootLayout.jsx";
import Phones from "./Components/Phones.jsx";
import Phone from "./Components/Phone.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        path: "/phones",
        loader: () => fetch("http://localhost:5000/phones"),
        element: <Phones></Phones>,
      },
      {
        path: "/phone/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/phones/${params.id}`),
        element: <Phone></Phone>,
      },
    ],
  },
  {
    path: "/*",
    element: <ErrorPage></ErrorPage>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
