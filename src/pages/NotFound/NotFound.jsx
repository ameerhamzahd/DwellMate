import React from 'react';
import error from "../../assets/error.png"
import { Link } from 'react-router';
import { IoChevronBackOutline } from "react-icons/io5";
import { Helmet } from 'react-helmet-async';

const NotFound = () => {
    return (
        <div>
            <Helmet>
                <title>DwellMate | Not Found</title>
            </Helmet>
            <div className='flex flex-col gap-3 justify-center items-center min-h-screen text-center from-white to-violet-100 bg-linear-to-r lg:gap-6'>
                <div className="w-72 bg-white shadow-sm card md:w-96">
                    <figure className="px-10 pt-10">
                        <img
                            src={error}
                            alt={error}
                            className="rounded-xl" />
                    </figure>
                </div>

                <div className='space-y-3'>
                    <h1 className='text-3xl font-extrabold text-primary lg:text-5xl'>404 - Page Not Found</h1>
                    <p className='font-medium'>Oops! The page you're looking for doesn't exist.</p>

                    <Link to="/"><button className="rounded-full transition-all duration-300 btn btn-primary btn-outline"><IoChevronBackOutline size={20} />Go Back Home</button></Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;