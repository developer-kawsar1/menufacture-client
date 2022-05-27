import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";

const Contact = () => {
  return (

    <div> 
          <SectionTitle title="contact us"/>
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="text-center lg:text-left bg-primary text-white p-10 rounded-lg shadow ">
          <h1 class="text-2xl font-bold">Reach Us </h1>
          <p class="py-6">
            <div className="flex mt-1 ">
                <p><b>Email:</b></p>
                <p className="ml-4">zislam229@gmail.com</p>
            </div>
            <div className="flex mt-1">
                <p><b>Phone :</b></p>
                <p className="ml-4">01762772008</p>
            </div>
            <div className="flex items-center mt-1">
                <p><b>Address :</b></p>
                <p className="ml-4">
                 <p>Lohadi ,Kapasia ,Gazipur</p>
                 <p><b>Dhaka ,Bangladesh </b></p>

                </p>
            </div>
          </p>
        </div>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="Email"
                class="input input-bordered"
              />
             
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Message </span>
              </label>
              <textarea class="textarea textarea-bordered resize-none" placeholder="Your MEssage" ></textarea>
             
            </div>
            <div class="form-control mt-6">
              <button class="btn btn-primary"> <i className="text-xl fa fa-paper-plane"></i> <span className="ml-2">Send</span> </button>
            </div>
          </div>
        </div>
      </div>
    </div> 
    </div>
  );
};

export default Contact;
