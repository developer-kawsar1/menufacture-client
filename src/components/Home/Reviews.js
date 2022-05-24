import React, { useEffect, useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import Review from './Review';

const Reviews = () => { 
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch('https://enigmatic-lowlands-82160.herokuapp.com/product')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div class="review-container p-8 bg-black bg-opacity-60">
           
           <div className='mt-4'>
        <h1 className="text-center text-3xl md:text-5xl py-3 -mb-4 text-white ">What Our customer says</h1> 
        <div class="divider w-40 md:w-60 mx-auto  "></div> 
        <br />
  </div> 
            
          <div className='grid container mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center justify-center items-center'>
          {
                products.slice(0, 6).map(product=><Review key={product._id} product={product} />)
            }
          </div>
        </div>
    );
};

export default Reviews;