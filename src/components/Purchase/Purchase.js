import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const Purchase = () => {  
    const [product,setProduct]=useState({}) 
    const {id}=useParams() 
    useEffect(()=>{
        const url=`https://vast-plateau-65170.herokuapp.com/product/${id}`  ; 
        
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setProduct(data)  
            console.log();
          
       
            
        })
    },[]) 
    const [user, loading, error] = useAuthState(auth);
    return (
        <div>
        <div class="px-8 pt-10 pb-10 min-h-screen bg-base-200">
  <div class="flex justify-center">
    
    <div class="card  w-full max-w-sm shadow-2xl bg-base-100 bg-white"> 
    <h1 className='mt-5 text-gray-600 text-3xl md:text-4xl'>Purchase page</h1>
      <div class="card-body flex  items-center justify-center">
                <h3>You are goung to buy  <span className='text-primary  font-bold'>{product.name}</span> </h3>
        <div class="form-control w-full">
          <label class="label">
            <span class="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" class="input input-bordered" disabled  value={user?.displayName || ''} />

        </div>
        
        <div class="form-control w-full">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" class="input input-bordered" disabled value={user?.email || ''} />
        </div>
        
        <div class="form-control w-full">
          <label class="label">
            <span class="label-text">Phone</span>
          </label>
          <input type="text" placeholder="Phone" class="input input-bordered" />

        </div>
                
        <div class="form-control w-full">
          <label class="label">
            <span class="label-text">Address</span>
          </label>
          <input type="text" placeholder="Address" class="input input-bordered" />

        </div>
        <div class="form-control w-full">
          <label class="label">
            <span class="label-text">Order quantity</span>
          </label>
          <input type="text" placeholder="order quantity" value={product.minimumOrder} class="input input-bordered" />

        </div>
        
        <div class="form-control mt-6 w-full">
          <button class="btn btn-primary">Place Order</button>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
    );
};

export default Purchase;