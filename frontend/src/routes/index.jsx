import { createBrowserRouter } from "react-router-dom";
// Rutas del front
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ChatBot from "../pages/ChatBot";
import Layout from "../components/Layout";
import NotFound from "../pages/NotFound";
import Recipe from "../pages/Recipe";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signin",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Register />,
      },
      {
        path: "/chat",
        element: <ChatBot />,
      },
      {
        path: "/recipe",
        element: <Recipe />
      }
    ],
  },
]);
