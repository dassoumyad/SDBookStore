import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import { Link } from "react-router-dom";
import axios from 'axios';
// import list from "../../public/list.json"

const Course = () => {
    const [book, setBook] = useState([]);
    useEffect(() => {
      const getBook = async () => {
        try {
          const res = await axios.get("http://localhost:4001/book");
          console.log(res.data);
          setBook(res.data);
        } catch (error) {
          console.log(error);
        }
      };
      getBook();
    }, []);
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-8">
      <div className="mt-28 items-center justify-center text-center">
        <h1 className="text-2xl md:text-4xl font-bold">
          We're delighted to have you{" "}
          <span className="text-pink-500"> Here! :)</span>
        </h1>
        <p className="mt-12 text-gray-700 text-lg leading-relaxed max-w-prose mx-auto">
          Welcome to our vibrant community of learners and knowledge seekers. Our courses are designed to empower you with the skills and knowledge you need to succeed in your personal and professional life. Whether you're looking to explore new hobbies, advance your career, or simply learn something new, we have a course for you. Dive in and start your learning journey today!
        </p>
        <Link to="/">
          <button className="mt-6 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 transition duration-300">
            Back
          </button>
        </Link>
      </div>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {book.map((item) => (
          <Cards key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default Course
