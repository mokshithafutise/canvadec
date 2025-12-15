import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/Layout.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact";
import Table from "./components/Table.jsx";
import Team from "./components/Team.jsx";
import Domain from "./components/Domain.jsx";
import History from "./components/History.jsx";
import Why from "./components/Why.jsx";
import LandingPage from "./components/LendingPage.jsx";
import User from "./components/User.jsx";


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
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/table",
        element: <Table />,
      },
      {
        path: "/doamin",
        element: <Domain />,
      },
      {
        path: "/history",
        element: <History />,
      },
      {
        path: "/lending",
        element: <LandingPage />,
      },
      {
        path: "/why",
        element: <Why />,
      },
       {
        path: "/user",
        element: <User />,
      },

    ],
  },
]);

const App = () => {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
