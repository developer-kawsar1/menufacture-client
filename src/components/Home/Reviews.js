import React, { useEffect, useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import Review from './Review';

const Reviews = () => { 
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch('https://vast-plateau-65170.herokuapp.com/reviews')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div class="review-container p-8   bg-gray-700">
           
           <div className='mt-4'>
        <h1 className="text-center text-3xl md:text-5xl py-3 -mb-4 text-white ">What Our customer says</h1> 
        <div class="divider w-40 md:w-60 mx-auto  "></div> 
        <br />
  </div> 
            
          <div className='grid container mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center justify-center items-center'>
          {
                products.map(review=><Review key={review._id} product={review} />)
            }
          </div>
        </div>
    );
};

export default Reviews;