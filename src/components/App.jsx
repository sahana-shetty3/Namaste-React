import Header from "./Header.jsx"
import Body from "./Body.jsx";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./Contact.jsx";
import Error from "./Error.jsx";
import RestaurantMenu from "./RestaurantMenu.jsx";
import { lazy, Suspense } from "react";

const Grocery = lazy(() => import("./Grocery"));
const About = lazy(() => import("./About"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
  },
]);

export default appRouter;