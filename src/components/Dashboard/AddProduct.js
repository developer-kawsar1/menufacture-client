import React from 'react';

const AddProduct = () => { 
    const submitProduct=(e)=>{
        e.preventDefault()
        const name=e.target.name.value 
        const price=e.target.price.value 
        const description=e.target.description.value
        const picture=e.target.picture.value 
        const minimumOrder=e.target.orderquantity.value
        const avilable=e.target.quantity.value  
        
        const product={name,price,description,picture,minimumOrder,avilable,}
        console.log(product);   
        e.target.reset() 

        fetch('https://vast-plateau-65170.herokuapp.com/product', {
  method: 'POST',
  body: JSON.stringify(product),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data));

    }
    return (
        <div>
            <h3>Add product page </h3> 
            <div class="px-8 pt-10 pb-10 min-h-screen bg-base-200">
        <div class="flex justify-center">
          <div class="card  w-full max-w-sm shadow-2xl bg-base-100 bg-white">
            <h1 className="mt-5 text-gray-600 text-3xl md:text-4xl">
              Purchase page
            </h1>
            <div class="card-body flex  items-center justify-center">
              <h3>
               
                <span className="text-primary  font-bold"> </span>
              </h3>
              <form onSubmit={submitProduct} className=" w-full">
                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text">Product  Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    class="input input-bordered"
                   
                  />
                </div>

                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text">Price</span>
                  </label>
                  <input
                    type="text"
                    placeholder="price"
                    name="price"
                    class="input input-bordered"
                   
                    // value={user?.email || ""}
                  />
                </div>

                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text">Description</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Description"
                    name="description"
                    class="input input-bordered"
                  />
                </div>

                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text">Menium Order quantity </span>
                  </label>
                  <input
                    type="text"
                    placeholder="orderquantity"
                    name="orderquantity"
                    class="input input-bordered"
                  />
                </div>
                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text">Order quantity</span>
                  </label>
                  <input
                    type="number"
                    name="quantity"
                    placeholder="Products quantity"
                    // defaultValue={product.minimumOrder || ""}
                    class="input input-bordered"
                  />
                </div>
                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text">Image link</span>
                  </label>
                  <input
                    type="text"
                    name="picture"
                    placeholder="Products Image link"
                    // defaultValue={product.minimumOrder || ""}
                    class="input input-bordered"
                  />
                </div>

                <div class="form-control mt-6 w-full">
                  <button class="btn btn-primary">Add a Product</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default AddProduct;