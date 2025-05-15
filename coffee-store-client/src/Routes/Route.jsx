import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home";
import Error from "../Pages/Error";
import AddCoffee from "../Components/AddCoffee";
import UpdateCoffee from "../Components/UpdateCoffee";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/addCoffee",
        Component: AddCoffee,
      },
      {
        path: "/updateCoffee",
        Component: UpdateCoffee,
      },
    ],
  },
  {
    path: "/*",
    Component: Error,
  },
]);
