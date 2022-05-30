import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';

import auth from '../../firebase.init';

const MyProfile = () => {  
  const [siteMember,setSiteMember]=useState([]) 
  useEffect(()=>{
   fetch('https://vast-plateau-65170.herokuapp.com/user')
   .then(res=>res.json())
   .then(data=>setSiteMember(data))
  },[])
  
    const navigate=useNavigate()
    const [user, loading, error] = useAuthState(auth);   
    const myData= siteMember.filter(member=>member.email===user?.email) 
    console.log(myData[0]?.email);

    console.log(user);
    return (
        <div className='py-10 relative'> 
          <button class="btn text-right absolute right-16 top-0"  onClick={()=>navigate('/edit-profile/'+myData[0]?._id)}><i className="fa fa-edit text-2xl mr-1"></i> Edit Profile</button>
            <h3  className=' text-orange-600 font-bold text-3xl md:text-4xl'>Welcome  {myData[0]?.name || ''} to your Profile </h3> 
             {/* {
                myData.length
             } */}
            {/* <p className='font-bold mt-5'>You Email is : {user?.email || ''}</p>  */}
            {/* <p className='font-bold mt-5'>You Email is : {myData[0]?.email || ''}</p> 
            <p className='font-bold mt-5'>You Email is : {myData[0]?._id || ''}</p>  */}
            <div className="flex items-center justify-center mt-10 mb-5 ">
        <img className="object-contain h-48 w-96 ..." src={user?.photoURL}/>
</div> 
<div class="overflow-x-auto px-8">
  <table class="table w-full">
  
    <thead>
      <tr>
    
        <th>Name</th>
        <th>{myData[0]?.name || ''}</th>
        
      </tr>
    </thead>
    <tbody>
     
      <tr>
        
        <td>Email </td>
        <td> <i class="fa fa-envelope" aria-hidden="true"></i> {myData[0]?.email || ''}</td>
        
      </tr>
   
      <tr class="active">
        
      <td>Phone</td>
        <td><i class="fa fa-phone" aria-hidden="true"></i> {myData[0]?.phone || ''}</td>
        
      </tr>
    
      <tr>
        
      <td>Address</td>
        <td> <i class="fa fa-map-marker" aria-hidden="true"></i> {myData[0]?.address || ''}</td>
        
      </tr>
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyProfile;