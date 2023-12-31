import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Menu from '../../Components/Menu/Menu';
import Dashboard from '../../Components/Dashboard/Dashboard';
import Manageitems from '../../Components/AllItems/ManageItems/Manageitems';
import '../Home/Home.css'

const Home = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <Menu></Menu>
            {/* <Manageitems></Manageitems> */}
            
            
        </div>
    );
};

export default Home;