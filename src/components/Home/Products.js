import React, { useEffect, useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import Product from './Product';

const Products = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch('https://enigmatic-lowlands-82160.herokuapp.com/product')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div>   
            <SectionTitle title="Our Tools"/>
            
             <div class="service-container px-8 grid grid-cols-1 sm:grid-cols-3 md-grid-cols-3 gap-8">
          
              {
                products.slice(0, 6).map(product=><Product key={product._id} product={product} />)
            }
              </div> 
        </div>
    );
};

export default Products;