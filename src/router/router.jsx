import { createBrowserRouter, Link } from "react-router-dom";
import PhonePage from "../pages/PhonePage";
import AboutPage from "../pages/AboutPage";
import Layout from "../layout/Layout";
import ProfilePage from "../pages/ProfilePage";
import MainPage from "../layout/MainPage";
import Cart from "../pages/Cart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/cart/:cartId",
        element: <Cart />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
    ],
  },

  {
    path: "*",
    element: (
      <div>
        <h1>404 Not Found</h1>
        <button>
          <Link to="/">Go to home page</Link>
        </button>
      </div>
    ),
  },
]);
