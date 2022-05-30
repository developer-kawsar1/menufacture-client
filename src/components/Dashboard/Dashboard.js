import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => { 
    // const isAdmin=true
    return (
        <div className=''>
         <ul class="menu menu-compact lg:menu-normal bg-base-100 w-56 p-2 rounded-box ">
 
  <li><Link to="profile" className='font-bold'>My Profile</Link></li> 
  <li className='font-bold'><Link to="myorders">My orders</Link></li>  
            <li><Link to="add-review">Add a Review </Link></li>  
{/*   
  {
          isAdmin? <> 
         
          <li className='font-bold'><Link to="manage-prder">Manage all orders </Link></li>  
          <li className='font-bold'><Link to="add-product">Add Products </Link></li>  
          
          
          
          </> :  
          
          <>  
         
        
          </>
        } */}
  
  
</ul>  
<h3  className=' mb-8 text-orange-600 font-bold text-3xl md:text-4xl'>Welcome to Dashboard </h3>
<Outlet  />
        </div>
    );
};

export default Dashboard;