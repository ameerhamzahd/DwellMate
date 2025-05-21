import React from 'react';
import error from "../../assets/error.png"
import { Link } from 'react-router';
import { IoChevronBackOutline } from "react-icons/io5";
import { Helmet } from 'react-helmet-async';

const NotFound = () => {
    return (
        <div>
            <Helmet>
                <title>AthletiQal | Not Found</title>
            </Helmet>
            <div className='bg-linear-to-r from-white to-violet-100 min-h-screen flex flex-col items-center justify-center text-center gap-3 lg:gap-6 '>
                <div className="card bg-white w-72 md:w-96 shadow-sm">
                    <figure className="px-10 pt-10">
                        <img
                            src={error}
                            alt={error}
                            className="rounded-xl" />
                    </figure>
                </div>

                <div className='space-y-3'>
                    <h1 className='text-3xl text-primary lg:text-5xl font-extrabold'>404 - Page Not Found</h1>
                    <p className='font-medium'>Oops! The page you're looking for doesn't exist.</p>

                    <Link to="/"><button className="btn btn-primary btn-outline transition-all duration-300 rounded-full"><IoChevronBackOutline size={20} />Go Back Home</button></Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;