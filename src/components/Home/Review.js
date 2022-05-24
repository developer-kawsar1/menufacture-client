import React from 'react';

const Review = () => {
    return (
        <div class="review flex items-center flex-col py-5 p-2 rounded bg-white mb-8  ">
    
        
        <div class="avatar mt-3">
      <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
        <img src="https://api.lorem.space/image/face?hash=3174" />
      </div>
    </div> 
    <h3 className="text-center font-bold mt-3">Kawsar ahmed </h3>
    <div class="mt-3 px-4 text-center">
      <p> Welcome to Gboard clipboard, any text that you copy will be saved here.Welcome to Gboard clipboard, any text that you copy will be saved here.</p>
      
    </div>
    <div>
      <div class="rating">
      <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
      <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
      <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
      <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
      <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
    </div>
    </div>
    
    
    
      </div>
    );
};

export default Review;