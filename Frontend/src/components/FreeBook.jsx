import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios"
import list from "../../public/list.json";
import Cards from './Cards'; // Ensure Cards component is correctly implemented

const FreeBook = () => {
    // Adjust the filter to match case sensitivity
    const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log( res.data);
        const data = res.data.filter((data) => data.category === "Free");
        console.log(data);
        setBook(data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-8">
            <div className="mb-8 text-center">
                <h1 className="font-semibold text-2xl pb-2">Free Offered Courses</h1>
                <p className="text-gray-700 text-lg leading-relaxed max-w-prose mx-auto">
                    Discover a variety of free courses to enhance your skills and knowledge. Whether you're looking to learn a new language, improve your coding abilities, or explore creative arts, our selection of free courses has something for everyone. Start your learning journey today and unlock new opportunities!
                </p>
            </div>

            <div>
                <Slider {...settings}>
                    {book.map((item) => (
                        <div key={item.id} className="p-2">
                            <Cards item={item} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default FreeBook;
