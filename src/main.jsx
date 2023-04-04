import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@splidejs/react-splide/css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../src/views/Home";
import Us from "../src/views/Us";
import Contact from "./views/Contact";
import Course from "./views/Course";
import TestFirebase from "./views/TestFirebase";
import CourseSelect from "./views/CourseSelect";
import CarCourse from "./views/PayCourse";
import PrivacyPolicies from "./views/PrivacyPolicies";

//Declarar rutas

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/clinica-bovina",
    element: <Us />,
  },
  {
    path: "/contacto",
    element: <Contact />,
  },
  {
    path: "/cursos",
    element: <Course />,
  },
  {
    path: "/firebase",
    element: <TestFirebase />,
  },
  {
    path: "/curso/:cursoId",
    element: <CourseSelect />,
  },
  {
    path: "/pago/curso/:cursoId",
    element: <CarCourse />,
  },
  {
    path: "/politicas-de-privacidad",
    element: <PrivacyPolicies />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
