import React from 'react';

const Purchase = () => {
    return (
        <div>
        <div class="px-8 pt-10 min-h-screen bg-base-200">
  <div class="flex justify-center">
    
    <div class="card  w-full max-w-sm shadow-2xl bg-base-100 bg-white">
      <div class="card-body flex  items-center justify-center">
                
        <div class="form-control w-full">
          <label class="label">
            <span class="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" class="input input-bordered" />

        </div>
        
        <div class="form-control w-full">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" class="input input-bordered" />
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