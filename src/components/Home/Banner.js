import React from 'react';

const Banner = () => {
    return (
      <div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row">
    <img src="https://cdn.britannica.com/82/155682-050-8E720FFA/Robots-automobile-assembly-line-Russia.jpg" class="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-5xl font-bold">Grab Your car tools !</h1>
      <p class="py-6"> we provide car tool with reseanoable price.</p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;