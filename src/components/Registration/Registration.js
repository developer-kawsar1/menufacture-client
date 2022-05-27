import { updateProfile } from 'firebase/auth';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loader from '../Loader/Loader';

const Registration = () => {   
    const navigate=useNavigate() 
    const location=useLocation()  
    const from=location.state?.from?.pathname || '/' 
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification: true}); 
      const [updateProfile, updating, error3] = useUpdateProfile(auth);

      if(loading){
        return <Loader/>
    } 
    if(error){
        console.log(error.message);
    }  
    if(user  ){
        // alert("user")
        navigate('/') 
        console.log();
    }

    const subRegForm=async (e)=>{  
        const email= e.target.email.value
         const name=e.target.name.value 
        const password=e.target.password.value 
       console.log(email,password,name);
        e.preventDefault() 
        await   createUserWithEmailAndPassword(email,password) 
        await updateProfile({ displayName:name }); 
     
    } 
    return (
        <div class="px-0   bg-base-200 px-5 sm:px-48 py-8 ">
        <div class="">
          
          <div class=" px-0 w-full  shadow-2xl bg-base-100 rounded-lg">
            <div class="card-body min-h-screen">
                      
      <h3 class="text-center text-3xl font-bold text-gray-600">Registration Here</h3> 
      <form action="" onSubmit={subRegForm}>
                <div class="form-control"> 
                
                <label class="label">
                  <span class="label-text">Name</span>
                </label>
                <input type="text" placeholder="Name" class="input input-bordered" name='name' />
              </div>
              
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" class="input input-bordered" name='email' />
              </div>
              
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" class="input input-bordered"  name='password'/>
                      <p class="mt-5">Already User?? <Link class="text-info font-bold ml-2" to="/login">Login</Link></p>
              
              </div>
      
              
              <div class="form-control mt-6">
                <button class="btn btn-primary">Registration</button>
              </div> 
              </form>
               <div class="form-control mt-6">
                 <button class="btn text-black btn-outline flex justify-center px-8 ">
                   <img src="https://upload.wikimedia.org/wikipedia/commons/archive/5/53/20210313114223%21Google_%22G%22_Logo.svg" alt="" width="30" />
                   <span className='ml-2'>Sign In With Google</span></button>
               </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Registration;