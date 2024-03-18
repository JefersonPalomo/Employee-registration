import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import './index.css'
import HeaderC from "./components/header";
import { ListEmployee } from "./components/ListEmployees";
import EditAlertBox from './components/Edit';
import Cards from './components/Managers';
import Start from './components/Start';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HeaderC />,
    children: [
      {
        path: "/",
        element: <Start/>
      },
      {
        path: "/managers",
        element: <Cards/>
      },
      {
        path: "/employee/page/:id",
        element: <ListEmployee/>,
      },
      {
        path: "/employee/:id",
        element: <EditAlertBox/>,
      }, 
      {
        path: "/save",
        element: <EditAlertBox/>,
      },
    ],
  },
  {
    element: <Cards/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
