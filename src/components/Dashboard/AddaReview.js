import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const AddaReview = () => {   
    
    const [user, loading, error] = useAuthState(auth); 
   
    const SubmitReview=(e)=>{ 
        e.preventDefault()
        const name=e.target.name.value
        const ratting=Number(e.target.ratting.value)

        const review=e.target.review.value 
        const img=user.photoURL;
        console.log(name,review,ratting);
        const newReview={name,ratting,review,img}

        fetch('https://vast-plateau-65170.herokuapp.com/reviews', {
            method: 'POST',
            body: JSON.stringify(newReview),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json())
            .then((data) => console.log(data));

    }
  return (
    <div className="flex items-center justify-center">
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div class="card-body">  
        <h3 className="font-bold text-center text-orange-500">Add your review</h3>
        <form action="" onSubmit={SubmitReview}>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              class="input input-bordered"
              name="name"
              value={user?.displayName || ''} 
              disabled
            />
          </div>
          <div class="form-control mt-5">
          <input
              type="number" 
              min="1" max="5"
              placeholder="ratting 1~5"
              class="input input-bordered"
              name="ratting"
             
             
            />
            
     
          
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Message </span>
            </label>
            <textarea
              class="textarea textarea-bordered resize-none"
              placeholder="Your Review"  
              name="review"
            ></textarea>
          </div>
          <div class="form-control mt-6">
            <button class="btn btn-primary">
              {" "}
            
              <i className="text-xl fa fa-paper-plane"></i>{" "}
              <span className="ml-2">Submit </span>{" "}
            </button>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddaReview;
