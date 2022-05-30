import React from 'react';

const Review = ({product}) => { 
  let {name,review,ratting,img}=product  
  const list = [] 
  for(let i=0; i<ratting; i++){
    list.push(i+1)
  } 
  // console.log(list);
    return (
        <div class="review flex items-center flex-col py-5 p-2 rounded bg-white mb-8  ">
    
        
        <div class="avatar mt-3">
      <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
        <img src={img} />
      </div>
    </div> 
    <h3 className="text-center font-bold mt-3">{name} </h3>
    <div class="mt-3 px-4 text-center">
      <p> {review}.</p>
        
    </div>
    <div>
      <div class="rating"> 
      
   {
    list.map(i=><i className='fa fa-star'></i>)
   }
       
    </div>
    </div>
    
    
    
      </div>
    );
};

export default Review;