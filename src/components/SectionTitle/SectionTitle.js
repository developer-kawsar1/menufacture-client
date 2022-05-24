import React from 'react';

const SectionTitle = ({title}) => {
    return (
        <div className='mt-4'>
        <h1 className="text-center text-3xl md:text-5xl py-3 -mb-4 text-gray-700 ">{title}</h1> 
        <div class="divider w-40 md:w-52 mx-auto  "></div> 
        <br />
  </div>
    );
};

export default SectionTitle;