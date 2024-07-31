import React from 'react';
import { useAuth } from '../Context/AuthProvider';
import toast from 'react-hot-toast';

export default function Logout() {
    const [authUser, setAuthUser] = useAuth();

    const handleLogout = () => {
        try {
            setAuthUser(null); // Directly setting authUser to null
            localStorage.removeItem("user");
            toast.success("Logout Successfully");
            setTimeout(()=>{
                window.location.reload();
            },1000)
        } catch (error) {
            toast.error("Error: " + error.message);
            setTimeout(()=>{},2000)
        }
    };

    return (
        <button 
            className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer hover:bg-red-600 transition duration-300"
            onClick={handleLogout}
        >
            Logout
        </button>
    );
}
