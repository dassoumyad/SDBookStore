import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast'

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = async(data) => {
        const userInfo = {
            email: data.email,
            password: data.password
        };
        try {
            const res = await axios.post("https://sdbookstore.onrender.com/user/login", userInfo);
            console.log(res.data);
            toast.success('Login successful!');
            document.getElementById("my_modal_3").close()
            setTimeout(()=>{
              window.location.reload();
              localStorage.setItem("user", JSON.stringify(res.data.user));
          },1000)
            navigate('/'); // Navigate to the home page
        } catch (err) {
            if (err.response) {
                console.log(err);
                toast.error("Error: " + err.response.data.message);
                setTimeout(()=>{},2000)
            }
        }
      }
        
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form  onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* Close button */}
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() =>document.getElementById("my_modal_3").close()}>✕</Link>
            <h3 className="font-bold text-2xl text-center text-gray-700 mb-6">Login</h3>
            {/* Email */}
            <div className="mt-4 space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-purple-500"
                {...register("email", { required: true })}
              />
              <br />
               {errors.email && <span className="text-sm text-red-600">This field is required</span>}
            </div>
            {/* Password */}
            <div className="mt-4 space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-purple-500"
                {...register("password", { required: true })}
              />
              <br />
             {errors.password && <span className="text-sm text-red-600">This field is required</span>}
            </div>
            {/* Buttons */}
            <div className="flex flex-col items-center mt-6 space-y-4">
              <button className="w-full bg-yellow-500 text-white rounded-md px-4 py-2 hover:bg-yellow-700 duration-200">Login</button>
              <p className="text-sm text-gray-700">
                Not Registered? <Link to="/signup" className="text-blue-500 underline cursor-pointer">Signup</Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  )
}

export default Login
