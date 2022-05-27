import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({product}) => {   
  const navigate=useNavigate()

    const {_id,name,price,description,picture,avilable,minimumOrder}=product
    return (
        <div class="card bg-base-100 shadow-xl border">
        <figure class="px-4 pt-5">
          <img src={picture} alt="Shoes" class="rounded-xl w-28 " />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">{name}</h2>
          <p>{description}</p>
          <p>minimum order quantity : <span class="text-primary font-bold">{minimumOrder}</span></p>
          <p>available quantity :<span class="font-bold text-primary">{avilable}</span></p>
          <p class="text-3xl text-red-700"> {price}<span>$</span></p>
          <div class="card-actions">
            <button class="btn btn-primary" onClick={()=>navigate('./purchase/'+_id)}>Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default Product;