import React from "react";

const MyPortfilio = () => {
  return (
    <div className="w-4/5 md:w-1/2 mx-auto py-12">
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
    </div>
  );
};

export default MyPortfilio;
