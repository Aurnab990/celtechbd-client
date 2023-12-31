import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { RxHome, RxBorderAll, RxComponent1, RxDimensions, RxTable, RxSquare, RxZoomIn } from 'react-icons/rx';

import '../Menu/Menu.css'
import Dashboard from '../Dashboard/Dashboard';
import Allitems from '../AllItems/Allitems';
import Sidebar from '../Sidebar/Sidebar';
import Displaydashboard from '../Dashboard/Displaydashboard';

const Menu = () => {
   
    return (
        <div className='menu-container'>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content grid grid-rows-4 items-center justify-center">
                    <Dashboard></Dashboard>
                    
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <Sidebar></Sidebar>
                </div>
            </div>
        </div>
    );
};

export default Menu;
