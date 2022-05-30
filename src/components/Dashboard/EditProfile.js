import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditProfile = () => {
  const { id } = useParams();
  const navigate=useNavigate()

  const [editUser, setEditUser] = useState({});
  useEffect(() => {
    const url = `https://vast-plateau-65170.herokuapp.com/user/${id}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setEditUser(data);
        //    setCount(product.quantity)
      });
  }, {});
  const submitProfile = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value; 
    const phone = e.target.phone.value; 
    const address= e.target.address.value; 
    const currentUser={name,email,phone,address}
    // alert(id);  
    fetch(`https://vast-plateau-65170.herokuapp.com/user/${email}`, {
                method:'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body:JSON.stringify(currentUser)
            })
            .then(res=>res.json()) 
            .then(data => {
                console.log("data updated succefully"); 
                navigate('/dashboard/profile')
            })
  };
  return (
    <div>
      <div class=" pt-10 pb-10  bg-base-200 basis-5/12">
        <div class="flex justify-center">
          <div class="card  w-full max-w-sm shadow-2xl bg-base-100 bg-white">
            <h1 className="mt-5 text-gray-600 text-3xl md:text-4xl">
              Purchase page
            </h1>
            <div class="card-body flex  items-center justify-center">
              <h3>
                You are goung to edit {editUser.name || ""}
                <span className="text-primary  font-bold"></span>{" "}
              </h3>
              <form onSubmit={submitProfile} className=" w-full">
                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    class="input input-bordered"
                    defaultValue={editUser?.name || ""}
                  />
                </div>

                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    name="email"
                    class="input input-bordered"
                    defaultValue={editUser?.email || ""}
                  />
                </div>

                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text">Phone</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Phone"
                    name="phone"
                    class="input input-bordered" 
                    defaultValue={editUser?.phone || ""}
                  />
                </div>

                <div class="form-control w-full">
                  <label class="label">
                    <span class="label-text">Address</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Address"
                    name="address"
                    class="input input-bordered" 
                    defaultValue={editUser?.address || ""}
                  />
                </div>
               

                <div class="form-control mt-6 w-full">
                  <button className="btn btn-primary">save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
