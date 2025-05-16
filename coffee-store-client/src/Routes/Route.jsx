import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home";
import Error from "../Pages/Error";
import AddCoffee from "../Components/AddCoffee";
import UpdateCoffee from "../Components/UpdateCoffee";
import CoffeeDetails from "../Components/CoffeeDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        loader: () => fetch("http://localhost:3000/coffees"),
        Component: Home,
      },
      {
        path: "/coffees/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/coffees/${params.id}`),
        Component: CoffeeDetails,
      },
    ],
  },
  {
    path: "/updateCoffee/:id",
    loader: ({ params }) => fetch(`http://localhost:3000/coffees/${params.id}`),
    Component: UpdateCoffee,
  },
  {
    path: "/addCoffee",
    Component: AddCoffee,
  },
  {
    path: "/*",
    Component: Error,
  },
]);
