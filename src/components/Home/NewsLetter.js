import React from 'react';

const NewsLetter = () => {
    return (
        <div className=' bg-cyan-900 py-40'>
           <div className="bg-white rounded w-4/5 container mx-auto py-20">
               <h3 className='uppercase text-cyan-900 font-bold text-2xl md:text-5xl mb-8'>newsletter</h3> 
               <p className='text-cyan-800'>keep up our laters news and event .Subscribe our newsletter </p>
               <div className='mt-2 flex justify-center flex-col md:flex-row px-5 '>
                   <input type="text" className='border bg-gray-100 mb-5 rounded px-4 py-2 outline-none mr-3' placeholder='Email address...' /> 
                   <button className='btn bg-cyan-900'>subscribe</button>
               </div>
               </div> 
        
        </div>
    );
};

export default NewsLetter;