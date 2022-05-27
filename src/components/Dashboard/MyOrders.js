import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import auth from '../../firebase.init';
import useOrders from '../../Hooks/useOrders';

const MyOrders = () => { 
    const user=useAuthState(auth)  
    
    const email=user[0]?.email 
    const [orders,setOrders]=useOrders()  
    const myOrders=orders.filter(order=>order.email ===email) 
    return (
        <div>
         
            <div class="overflow-x-auto">
  <table class="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th>Product Name</th>
        <th>Product image</th>
        <th>Order Quantity</th>
        <th>Address</th>
        <th>price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* <!-- row 1 --> */} 

      {
          myOrders.map(order=>
            
            <tr> 
        <th>{order.productName}</th>
        <th><img src={order.img} alt="" className='w-16' /></th>
        <td>{order.orderQuantity}</td>
        <td>{order.address}</td>
        <td>{order.price}</td> 
        <td><button className='btn btn-xs'>{order.paymentStatus?'paid':'pay'}</button> <button className='btn btn-xs bg-red-600'>cancel</button></td>
            </tr>
            
            )
      }
     

    </tbody>
  </table>
</div>
            
        </div> 
         
    );
};

export default MyOrders;