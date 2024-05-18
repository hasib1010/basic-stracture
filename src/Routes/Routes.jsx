import { createBrowserRouter } from "react-router-dom"; 
import Layout from "../Layout/Layout";
import Home from "../Home";
import HomePage from "../Pages/HomePage/HomePage";
import About from "../Pages/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element:<HomePage></HomePage> ,
      },
      {
        path: "/about",
        element:<About></About> ,
      },
    ],
  }
]);

export default router
