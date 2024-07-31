import React from 'react';
import BannerImage from '../../public/banner.jpg'; // Renamed the import to avoid conflict

const Banner = () => {
  return (
    <div className='max-w-screen-2xl container mx-auto px-4 flex flex-col md:flex-row items-center my-10'>
      <div className='order-2 md:order-1 w-full md:w-1/2 mt-8 md:mt-0'>
        <div className='space-y-6 md:space-y-8'>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Discover Your Next Favorite Book{" "}
            <span className="text-yellow-500">with Us!</span>
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-gray-700">
            Dive into our extensive collection of books across all genres. From 
            thrilling mysteries to heartwarming romances, we have something for 
            every book lover.
          </p>
          <label className="input input-bordered flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 text-gray-500">
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" className="grow bg-transparent border-none outline-none" placeholder="Enter your email" />
          </label>
          <button className="btn mt-2 btn-primary bg-yellow-500 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300">
            Get Started
          </button>
        </div>
      </div>
      <div className='order-1 w-full md:w-1/2 flex justify-center'>
        <img src={BannerImage} className="object-cover object-center w-full h-64 md:h-auto rounded-lg" alt="Bookstore Banner" />
      </div>
    </div>
  );
};

export default Banner;
