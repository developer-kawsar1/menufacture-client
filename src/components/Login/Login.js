import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'; 
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loader from '../Loader/Loader'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTokem from '../../Hooks/useToken';

const Login = () => { 
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);  
//  eemil password sign ing  
const [
    signInWithEmailAndPassword,
    emailuser,
    emailloading,
    emailerror,
  ] = useSignInWithEmailAndPassword(auth);
    const googleSignIn=()=>{
        signInWithGoogle() 
    }  
    
    const submitForm=(e)=>{ 
        e.preventDefault()
        const email=e.target.loginemail.value 
        const password=e.target.loginpass.value 
        // console.log(email,password);
        signInWithEmailAndPassword(email,password) 
        if(emailerror){
          toast(emailerror.message);
          }
    } 
    const [token]=useTokem(user||emailuser)
    const navigate=useNavigate() 
    const location=useLocation() 
    const from=location.state?.from?.pathname || '/' 
    if(token){
        // alert("user") 
        toast("succefully loged");
        navigate(from,{replace:true}) 
    }
    if (loading ) {
        return <Loader/>
      } 
      
    return (
        <div className="px-0   bg-base-200 px-5 sm:px-48 py-8 ">
        <div className="">
          
          <div className=" px-0 w-full  shadow-2xl bg-base-100 rounded-lg">
            <div className="card-body min-h-screen">
                      
      <h3 className="text-center text-3xl font-bold text-gray-600">Login Here</h3>
              <form action="" onSubmit={submitForm}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" className="input input-bordered" name='loginemail' />
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered"  name='loginpass'/>
                      <p className="mt-5">New User?? <Link className="text-info font-bold ml-2" to="/registration">Registration here</Link></p>
              
              </div>
      
              
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div> 
              </form>
               <div className="form-control mt-6">
                 <button className="btn text-black btn-outline flex justify-center px-8 "  onClick={googleSignIn}>
                   <img src="https://upload.wikimedia.org/wikipedia/commons/archive/5/53/20210313114223%21Google_%22G%22_Logo.svg" alt="" width="30" />
                   <span className='ml-3'>SignIn With Google</span></button> 
                   <ToastContainer />
               </div>
            </div>
          </div>
        </div>
      </div>
      
    );
};

export default Login;