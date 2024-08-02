import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Login from "./Login";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';

function Signup() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password
    };
    try {
      const res = await axios.post('http://localhost:4001/user/signup', userInfo);
      console.log(res.data);
      toast.success('Signup successful!');
      localStorage.setItem('user', JSON.stringify(res.data.user));
      navigate('/'); // Navigate to the home page
    } catch (err) {
      if (err.response) {
        console.log(err);
        toast.error('Error: ' + err.response.data.message);
      }
    }
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500">
        <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg relative">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Close button */}
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
            <h3 className="font-bold text-2xl text-center text-gray-700 mb-6">Signup</h3>
            {/* Fullname */}
            <div className="mt-4 space-y-2">
              <label htmlFor="signup-fullname" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                id="signup-fullname"
                type="text"
                placeholder="Enter your fullname"
                className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-purple-500"
                {...register('fullname', { required: true })}
              />
              <br />
              {errors.fullname && <span className="text-sm text-red-600">This field is required</span>}
            </div>
            {/* Email */}
            <div className="mt-4 space-y-2">
              <label htmlFor="signup-email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="signup-email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-purple-500"
                {...register('email', { required: true })}
              />
              <br />
              {errors.email && <span className="text-sm text-red-600">This field is required</span>}
            </div>
            {/* Password */}
            <div className="mt-4 space-y-2">
              <label htmlFor="signup-password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="signup-password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-purple-500"
                {...register('password', { required: true })}
              />
              <br />
              {errors.password && <span className="text-sm text-red-600">This field is required</span>}
            </div>
            {/* Buttons */}
            <div className="flex flex-col items-center mt-6 space-y-4">
              <button className="w-full bg-yellow-500 text-white rounded-md px-4 py-2 hover:bg-yellow-700 duration-200">Signup</button>
              <p className="text-sm text-gray-700">
                Have an account? <span className="text-blue-500 underline cursor-pointer" onClick={() => document.getElementById('my_modal_3').showModal()}>Login</span>
                <Login />
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
