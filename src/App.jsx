import React from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// LAYOUTS
import Layout from "./layoutss/layout";
import HelpLayout from "./layoutss/HelpLayout";

// PAGES
import Login from "./components/Login";
import Home from "./components/Home";
import Faq from "./components/help/faq";
import Contact, { contactAction } from "./components/help/Contact";
import NotFound from "./components/NotFOund";
import CareerLayout from "./layoutss/CareerLayout";
import Careers, { CareerLoader } from "./components/careers/Careers";
import CareerDetails, {
  CareerDetailsLoader,
} from "./components/careers/CareerDetails";
import Postjob from "./layoutss/Postjob";
import CareersError from "./components/careers/CareersError";
import EditCareer from "./components/careers/EditCareer";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="login" element={<Login />} />
        {/* //help nested routes */}
        <Route path="help" element={<HelpLayout />}>
          <Route path="faq" element={<Faq />}></Route>
          <Route
            path="contact"
            element={<Contact />}
            action={contactAction}
          ></Route>
        </Route>

        {/* Career layout routes */}
        <Route
          path="careers"
          element={<CareerLayout />}
          errorElement={<CareersError />}
        >
          <Route index element={<Careers />} loader={CareerLoader} />
          <Route
            loader={CareerDetailsLoader}
            path=":id"
            element={<CareerDetails />}
          />
          <Route path="editjob/:id" element={<EditCareer />} />
        </Route>
        <Route path="postjob" element={<Postjob />} />
        {/* 404 route */}
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
