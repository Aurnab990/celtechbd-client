import React from 'react';
import '../Sidebar/Sidebar.css'
import { Link } from 'react-router-dom';
import { RxHome, RxBorderAll, RxComponent1, RxDimensions, RxTable, RxSquare, RxZoomIn } from 'react-icons/rx';

const Sidebar = () => {
    return (
        <ul className="menu p-4 w-64 rounded min-h-full bg-green-700 text-base-content">
                        <Link to="/dashboard"><RxHome />Dashboard</Link>
                        <Link to="/add-product"><RxBorderAll />Add Product</Link>
                        <Link to="/all-products"><RxComponent1 />Stocks</Link>
                        <Link to="/manage-products"><RxComponent1 />Manage Products</Link>
                        <Link to="/customerinput"><RxComponent1 />New Customer</Link>
                        <Link to="/supply-products"><RxDimensions />Supply Products</Link>
                        <Link to="/printpage"><RxSquare />Print Invoice</Link>
                        <Link to="/customer-info"><RxZoomIn />Customer info</Link>
                        <Link to="/b2b-history"><RxTable />B2B History</Link>
                        <Link to="/employee"><RxTable />Employee</Link>
                    </ul>
    );
};

export default Sidebar;