import React from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('https://sdbookstore.onrender.com/message', data); // Update URL as needed
            console.log(response.data);
            toast.success('Message sent successfully!');
        } catch (error) {
            console.error('Error sending message:', error);
            toast.error('Failed to send message.');
        }
    };

    return (
        <div className="flex h-screen items-center justify-center">
            <div className="w-[600px]">
                <div className='modal-box'>
                    <form onSubmit={handleSubmit(onSubmit)} method="post">
                        <h3 className="font-bold text-lg">Contact Us</h3>
                        
                        {/* Name */}
                        <div className='mt-4 space-y-2'>
                            <span>Name</span>
                            <br />
                            <input
                                type="text"
                                name="name"
                                placeholder='Enter your full name'
                                className="w-80 px-4 py-2 border rounded-md outline-none"
                                {...register("name", { required: "This field is required" })}
                            />
                            <br />
                            {errors.name && <span className="text-sm text-red-600">{errors.name.message}</span>}
                        </div>

                        {/* Email */}
                        <div className='mt-4 space-y-2'>
                            <span>Email</span>
                            <br />
                            <input
                                type="email"
                                name="email"
                                placeholder='Enter your email'
                                className="w-80 px-4 py-2 border rounded-md outline-none"
                                {...register("email", { required: "This field is required" })}
                            />
                            <br />
                            {errors.email && <span className="text-sm text-red-600">{errors.email.message}</span>}
                        </div>

                        {/* Message */}
                        <div className='mt-4 space-y-2'>
                            <span>Message</span>
                            <br />
                            <textarea
                                name="message"
                                placeholder='Enter your message'
                                className="w-80 px-4 py-2 border rounded-md outline-none h-32"
                                {...register("message", { required: "This field is required" })}
                            />
                            <br />
                            {errors.message && <span className="text-sm text-red-600">{errors.message.message}</span>}
                        </div>

                        {/* Submit button */}
                        <div className="flex justify-around mt-4">
                            <button type="submit" className="bg-yellow-500 text-white rounded-md px-3 py-1 hover:bg-yellow-700 duration-200">
                                Send Message
                            </button>
                        </div>
                    </form>
                    
                </div>
            </div>
        </div>
    );
};

export default Contact;
