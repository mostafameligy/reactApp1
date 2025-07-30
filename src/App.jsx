import { useState } from "react";
import Navbar from "./componants/navbar/Navbar";
import Home from "./Home/Home";
import About from "./about/About";
import Protofile from "./protofile/Protofile";
import Conatct from "./contect/Conatct";
import Footer from "./footer/Footer";
import {
  createBrowserRouter,
  createHashRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Defoult from "./defoult/Defoult";
import Erorr from "./Erorr/Erorr";

export default function App() {
  const ro = createHashRouter([
    {
      path: "",
      element: <Defoult />,
      children: [
        { path: "", element: <Home /> },
        { path: "home", element: <Navigate to={"/"} /> },
        { path: "about", element: <About /> },
        { path: "protofile", element: <Protofile /> },
        { path: "Conection", element: <Conatct /> },
        { path: "*", element: <Erorr /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={ro}></RouterProvider>
    </>
  );
}
