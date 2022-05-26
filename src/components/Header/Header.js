import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {   
  const user =useAuthState(auth)
  const signOutBtn=()=>{
   
      signOut(auth);  
      console.log("sign out succefully ");  
    
    
  }
  
  console.log(user[0]?.uid);
  return (
    <div className="navbar  bg-primary text-primary-content px-5 sm:px-10">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabindex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" className="menu menu-compact bg-red-800 dropdown-content mt-3 p-2 shadow  rounded-box w-52">
      <li><Link to="/blog">Blog</Link></li>
        
        <li><a>Item 3</a></li> 
        {/* <button className='btn btn-ghost'> <Link to="/login">Login</Link></button> 
        <button className='btn btn-ghost' onClick={signOutBtn}> Sign Out</button>  */}
        {user[0]?.uid ? <li><button className="btn btn-ghost"  onClick={signOutBtn} >Sign Out</button></li> : <li><Link to="/login">Login</Link></li>} 
      </ul> 
    </div>
    <Link to="/" className="btn btn-ghost normal-case text-xl">daisyUI</Link>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      <li><Link to="/blog">Blog</Link></li>
    
      <li><a>Item 3</a></li>  
      {/* <button className='btn btn-ghost' onClick={signOutBtn}> Sign Out</button> 
      <button className='btn btn-ghost'> <Link to="/login">Login</Link></button>  */} 
       {user[0]?.uid ? <button className="btn btn-ghost"  onClick={signOutBtn} >Sign Out</button> : <button><Link to="/login">Login</Link></button>}
    </ul>
  </div>
 
</div>
  );
};

export default Header;