import { createBrowserRouter } from "react-router-dom"; 
import Layout from "../Layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/contacts",
        element: <div>Hi</div>,
      },
    ],
  }
]);

export default router
