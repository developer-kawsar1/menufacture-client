import React from "react";

const MyPortfilio = () => {
  return (
    <div className="w-11/12 md:w-1/2 mx-auto py-12">
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Kawsar ahmed</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Email:</td>
              <td>zislam229@gmail.com</td>
            </tr>

            <tr class="active">
              <td>Educattional background:</td>
              <td>Government titumir College</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3 className="text-center text-3xl mt-10 mb-5">My Skills</h3>
      <div>
        <div> 
          <span className="mr-2 font-bold uppercase">  HTML </span>
          <progress
            class="progress progress-secondary w-56"
            value="97"
            max="100"
          ></progress>
        </div>
        <div>
        <span className="mr-2 font-bold uppercase">  css </span>
          <progress
            class="progress progress-secondary w-56"
            value="94"
            max="100"
          ></progress>
        </div>
        <div>
        <span className="mr-2 font-bold uppercase">  Bootstrap </span>
          <progress
            class="progress progress-secondary w-56"
            value="99"
            max="100"
          ></progress>
        </div>
        <div>
        <span className="mr-2 font-bold uppercase">  Javascript </span>
          <progress
            class="progress progress-secondary w-56"
            value="90"
            max="100"
          ></progress>
        </div>
        <div>
        <span className="mr-2 font-bold">  git </span>
          <progress
            class="progress progress-secondary w-56"
            value="77"
            max="100"
          ></progress>
        </div>
        <div>
        <span className="mr-2 font-bold"> tailwind</span>
          <progress
            class="progress progress-secondary w-56"
            value="94"
            max="100"
          ></progress>
        </div>
        <div>
        <span className="mr-2 font-bold"> react</span>
          <progress
            class="progress progress-secondary w-56"
            value="80"
            max="100"
          ></progress>
        </div>
        <div>
        <span className="mr-2 font-bold"> node</span>
          <progress
            class="progress progress-secondary w-56"
            value="50"
            max="100"
          ></progress>
        </div>
        <div>
        <span className="mr-2 font-bold"> express</span>
          <progress
            class="progress progress-secondary w-56"
            value="60"
            max="100"
          ></progress>
        </div>
        <div>
        <span className="mr-2 font-bold"> mongodb</span>
          <progress
            class="progress progress-secondary w-56"
            value="40"
            max="100"
          ></progress>
        </div>
     
     
       
      </div> 
      <h3 className="text-center text-3xl mt-10 mb-5">My Projects</h3>
      <div className="grid my-10 grid-cols-1 md:grid-cols-2 gap-5">
      <div class="card card-compact  bg-base-100 shadow-xl">
  <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">Learn with kawsar</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary"><a href="https://english-with-kawsar.web.app/">Visit</a></button>
    </div>
  </div>
</div> 
<div class="card card-compact  bg-base-100 shadow-xl">
  <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">Grab Tools</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary"><a href="https://assignment-final-ad2ba.web.app/">Visit</a></button>
    </div>
  </div>
</div><div class="card card-compact  bg-base-100 shadow-xl">
  <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div><div class="card card-compact  bg-base-100 shadow-xl">
  <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default MyPortfilio;
