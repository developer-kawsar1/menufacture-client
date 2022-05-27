import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loader from '../Loader/Loader';

const Header = () => {   
  // const [user]=useAuthState(auth) 
  const [user, loading, error] = useAuthState(auth);
  if(loading){
    return<Loader/>
  }
  const signOutBtn=()=>{
   
      signOut(auth);  
      console.log("sign out succefully ");  
    
    
  }
  
  // console.log(user[0]);
  return (
    <div className="navbar  bg-primary text-primary-content px-5 sm:px-10">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex="0" className="menu menu-compact pb-8 bg-red-800 dropdown-content mt-3 p-2 shadow  rounded-box w-52">
      <li><Link to="/blog">Blog</Link></li>
        
        <li><Link to="/my-portfolio">My Portfolio</Link></li>  
    

        {
          user?.uid ? <>
           <li><Link to="/dashboard">Dashboard</Link></li>
           <li onClick={signOutBtn} className="flex justify-between"  > <span>Sign out</span> <span className='ml-2 text-black'> {user?.displayName } </span></li>
          </> :  
          
          <>  
          <li><Link to="/login">Login</Link></li>
          </>
        }

       
        <br /> 
        <br />
      </ul> 
    </div>
    <Link to="/" className="btn btn-ghost normal-case text-xl">Grab Tools</Link>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      <li><Link to="/blog">Blog</Link></li> 
      <li><Link to="/my-portfolio">My Portfolio</Link></li>  
    
      {
          user?.uid ? <>
           <li><Link to="/dashboard">Dashboard</Link></li>
           <li className="flex justify-between"  > <button  onClick={signOutBtn} > Sign out <span className='ml-2 text-black'> {user?.displayName } </span></button> </li>
          </> :  
          
          <>  
          <li><Link to="/login">Login</Link></li>
          </>
        }


      {/* <button className='btn btn-ghost' onClick={signOutBtn}> Sign Out</button> 
      <button className='btn btn-ghost'> <Link to="/login">Login</Link></button>  */} 
       {/* { user?.uid? <button className="btn btn-ghost"  onClick={signOutBtn} >Sign Out
        <span className='ml-2 text-red-400'> {user?.displayName } </span>
        </button> : <button><Link to="/login">Login</Link></button>}  */}
       {/* {
            user[0]?.uid? <> <button    onClick={()=>signOut(auth)}>sign out </button>  <li></li> </> : 
             <Link to="/login"><button  >Login</button></Link>
          } */}
    </ul>
  </div>
 
</div>
  );
};

export default Header;