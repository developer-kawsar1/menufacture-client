import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className=''>
         <ul class="menu menu-compact lg:menu-normal bg-base-100 w-56 p-2 rounded-box ">
  <li><Link to="myorders">My orders</Link></li> 
  <li><Link to="profile">My Profile</Link></li>
  <li><Link to="add-review">Add a Review </Link></li>
  
  
</ul> 
<Outlet  />
        </div>
    );
};

export default Dashboard;