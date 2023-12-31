import React from 'react';
import { Link } from 'react-router-dom';
import { RxHome, RxBorderAll, RxComponent1, RxDimensions, RxTable, RxSquare, RxZoomIn } from 'react-icons/rx';
import Navbar from '../Navbar/Navbar';
import FetchItems from './FetchItems/FetchItems';
import AllProudcts from '../../Hooks/Fetching/AllProudcts';
import Sidebar from '../Sidebar/Sidebar';
const Allitems = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='menu-container'>
           
           <div className="drawer lg:drawer-open">
               <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
               <div className="drawer-content grid grid-rows-4 items-center justify-center">
                   <AllProudcts></AllProudcts>
                   
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

export default Allitems;