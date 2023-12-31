import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Home from './Pages/Home/Home.jsx';
import Allitems from './Components/AllItems/Allitems.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import Manageitems from './Components/AllItems/ManageItems/Manageitems.jsx';
import DisplayManageitems from './Components/AllItems/ManageItems/DisplayManageitems.jsx';
import Showaddpage from './Pages/AddItems/Showaddpage.jsx';
import Print from './Pages/Print/Print.jsx';
import DisplayCustomerInfo from './Pages/CustomerInfo/DisplayCustomerInfo.jsx';
import DisplaySupplyPro from './Pages/SupplyProducts/DisplaySupplyPro.jsx';
import Customerinput from './Pages/CustomerInfo/CustomerInput/Customerinput.jsx';
import Displaybtobhistory from './Components/BtoBhistory/Displaybtobhistory.jsx';
import DisplayEmploye from './Pages/Employee/DisplayEmploye.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/dashboard",
    element: <Home></Home>
  },
  {
    path: "/add-product",
    element: <Showaddpage></Showaddpage>
  },
  {
    path: "/all-products",
    element: <Allitems></Allitems>
  },
  {
    path: "/manage-products",
    element: <DisplayManageitems></DisplayManageitems>
  },
  {
    path: "/printpage",
    element: <Print></Print>
  },
  {
    path: "/customer-info",
    element: <DisplayCustomerInfo></DisplayCustomerInfo>
  },
  {
    path: "/supply-products",
    element: <DisplaySupplyPro></DisplaySupplyPro>
  },
  {
    path: "/customerinput",
    element: <Customerinput></Customerinput>
  },
  {
    path: "/b2b-history",
    element: <Displaybtobhistory></Displaybtobhistory>
  },
  {
    path: "/employee",
    element: <DisplayEmploye></DisplayEmploye>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
