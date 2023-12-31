import React from 'react';
import Customer from './Customer';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Navbar from '../../Components/Navbar/Navbar';

const DisplayCustomerInfo = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='menu-container'>
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content grid grid-rows-4 items-center justify-center">
                <Customer></Customer>
                
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <Sidebar></Sidebar>
            </div>
        </div>
    </div>
        </div>
    );
};

export default DisplayCustomerInfo;