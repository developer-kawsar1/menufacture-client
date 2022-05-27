import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import auth from '../../firebase.init';

const MyProfile = () => {
    const [user, loading, error] = useAuthState(auth); 
    console.log(user);
    return (
        <div className='py-10'>
            <h3  className=' text-orange-600 font-bold text-4xl md:text-5xl'>Welcome {user?.displayName || ''} to your Profile  </h3>
            <p className='font-bold mt-5'>You Email is : {user?.email || ''}</p> 
            <div className="flex items-center justify-center mt-10 ">
        <img className="object-contain h-48 w-96 ..." src={user?.photoURL}/>
</div>
        </div>
    );
};

export default MyProfile;