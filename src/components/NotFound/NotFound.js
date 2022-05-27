import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
  <div class="hero-content bg-white flex-col md:flex-row-reverse">
    <img src="https://webdeasy.de/wp-content/uploads/2020/06/404-pages-980x420.jpg" class="max-w-sm rounded-lg " />
    <div class="text-center ">
      <h1 class="text-3xl font-bold">Page Not found</h1>
      <p class="py-6">the page you are looking for doesn't exist or any other error occured. go back or head over to home page to choose a new direction</p>
      <button class="btn btn-primary"><Link to="/">Home</Link></button>
    </div>
  </div>
</div>
    );
};

export default NotFound;