import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";

const Summery = () => {
  return (
    <div className="py-5 my-5"> 
    <SectionTitle title="Summery " />
       <div class="px-8  grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-4">
     <div class="border items-center flex flex-col p-12 rounded">
       <p class="text-4xl text-info"> <i class="fa fa-users"></i> </p>
       <p class="text-5xl">72</p>
       <p class="text-info">Happy Clients</p>
     </div>
     <div class="border items-center flex flex-col p-12 rounded">
            <p class="text-4xl text-info"> <i class="fa fa-wrench"></i> </p>
            <p class="text-5xl">72</p>
            <p class="text-info">Tools</p>
          </div>
     <div class="border items-center flex flex-col p-12 rounded">
            <p class="text-4xl text-info"> <i class="fa fa-thumbs-up"></i> </p>
            <p class="text-5xl">400+</p>
            <p class="text-info">Feedbacks</p>
          </div>
               <div class="border items-center flex flex-col p-12 rounded">
       <p class="text-4xl text-info"> <i class="fa fa-money"></i> </p>
       <p class="text-5xl">100M+</p>
       <p class="text-info">Annual Revenue</p>
     </div>
   </div>
    </div>
  );
};

export default Summery;
