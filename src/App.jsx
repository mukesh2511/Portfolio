import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./pages/Home/Home.jsx";
import Portfolio from "./pages/Portfolio/Portfolio.jsx";
import Resume from "./pages/Resume/Resume.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import "./App.css";
import SideBar from "./components/SIdeBar/SideBar.jsx";

const App = () => {
  const Layout = () => {
    return (
      <div className="app">
        <div className="sidebar">
          <SideBar />
        </div>
        <div className="others">
          <Navbar />
          <Outlet />
        </div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/portfolio",
          element: <Portfolio />,
        },
        {
          path: "/resume",
          element: <Resume />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
