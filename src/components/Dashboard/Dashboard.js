import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';


const Dashboard = () => {  
    
    const [users,setUsers]=useState([])
    useEffect(()=>{
        fetch('https://vast-plateau-65170.herokuapp.com/user')
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[])  
  const admins=users.filter(user=>user.isAdmin) 
  console.log(admins.length);
  const [user, loading, error] = useAuthState(auth);   
  const nowAdmin= admins.filter(admin=>admin.email===user?.email) 

    return (
        <div className=''>
         <ul class="menu menu-compact lg:menu-normal bg-base-100 w-56 p-2 rounded-box ">
   {/* <li>{users.length}</li> */}
  <li><Link to="profile" className='font-bold'>My Profile</Link></li> 
  
  
  {
         nowAdmin[0]?.isAdmin? <> 
         
          {/* <li className='font-bold'><Link to="manage-order">Manage all orders </Link></li>   */}
          <li className='font-bold'><Link to="add-product">Add Products </Link></li>  
          
          
          
          </> :  
          
          <>  
            <li className='font-bold'><Link to="myorders">My orders</Link></li>  
            <li className='font-bold'><Link to="add-review">Add a Review </Link></li> 
        
          </>
        }
  
  
</ul>  
<h3  className=' mb-8 text-orange-600 font-bold text-3xl md:text-4xl'>Welcome to {nowAdmin[0]?.isAdmin? "Admin": "User "} Dashboard </h3>
<Outlet  />
        </div>
    );
};

export default Dashboard;