import React, { useState } from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { Box, Switch, ThemeProvider, createMuiTheme } from "@mui/material";

//LAYOUT
import Layout from "./LAYOUT/RootLayout";
import Auth from "./Pages/auth";
import ExpenseTracker from "./Pages/expemseTracker";

//PAGES

// LAYOUTS

// PAGES

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" exact element={<Layout />}>
        <Route index element={<Auth />} />
        <Route path="/expensetracker" element={<ExpenseTracker />} />
        {/* <Route path="/channel/:id" element={<ChannelDetails />} /> */}
        {/* <Route path="/search/:searchTerm" element={<SearchFeed />} /> */}
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
