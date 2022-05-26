import React from 'react';

const Product = ({product}) => { 
    const {name,price,description,picture,quantity}=product
    return (
        <div class="card bg-base-100 shadow-xl border">
        <figure class="px-4 pt-10">
          <img src={picture} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">{name}</h2>
          <p>{description}</p>
          <p>minimum order quantity : <span class="text-primary font-bold">{quantity}</span></p>
          <p>available quantity :<span class="font-bold text-primary">{quantity}</span></p>
          <p class="text-5xl text-red-700"> {price}<span>$</span></p>
          <div class="card-actions">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default Product;