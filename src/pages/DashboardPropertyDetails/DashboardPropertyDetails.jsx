import React, { use, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa6';
import { useLoaderData, useParams } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import { toast, Bounce } from 'react-toastify';

const DashboardPropertyDetails = () => {

    const { id } = useParams();
    const data = useLoaderData();
    const { user } = use(AuthContext);
    const targetedProperty = data.find(property => property._id === id);
    const [likeCount, setLikeCount] = useState(targetedProperty?.likes || 0);
    const [showContact, setShowContact] = useState(false);

    const {
        _id, title, location, rent, roomType, lifestyle,
        description, contact, availability, name, email, photoURL
    } = targetedProperty;

    const handleLike = () => {
        if (user?.email === email) {
            toast.error("You cannot like your own post.", {
                position: "top-right",
                autoClose: 2000,
                theme: "light",
                transition: Bounce,
            });
            return;
        }

        fetch(`https://dwellmate-server.vercel.app/properties/likes/${_id}`, {
            method: 'PUT',
        })
            .then(async (response) => {
                const contentType = response.headers.get("content-type");
                if (contentType && contentType.includes("application/json")) {
                    return response.json();
                } else {
                    return { modifiedCount: 1, likes: likeCount + 1 };
                }
            })
            .then((data) => {
                if (data.modifiedCount) {
                    toast.success("You liked this post!", {
                        position: "top-right",
                        autoClose: 2000,
                        theme: "light",
                        transition: Bounce,
                    });

                    setLikeCount(data.likes);
                    setShowContact(true);
                }
            })

    };

    return (
        <div>
            <div className="">
                {/* Header */}
                <div className="space-y-3 text-center rounded-2xl">
                    <h1 className="text-3xl font-bold text-gray-800">Accommodation Insights</h1>
                    <p className="font-medium text-gray-500">Live Where It Feels Right — Know Before You Book.</p>
                </div>

                {/* Main Info Section */}
                <div className='pt-15'>
                    <div className="grid gap-10 p-5 bg-white rounded-2xl shadow-md lg:grid-cols-2">
                        {/* Image */}
                        <div className="flex justify-center items-center">
                            <img src={photoURL} alt={title} className="object-cover w-full rounded-2xl" />
                        </div>


                        {/* Details */}
                        <div className="flex flex-col gap-4 justify-center">
                            <div className='pb-3 border-b-2 border-gray-400 border-dashed flex justify-between items-center'>
                                <h2 className=" text-2xl font-bold text-gray-800 ">{title}</h2>
                                <button
                                    onClick={handleLike}
                                    className="bg-white shadow-md btn btn-circle btn-sm hover:bg-gray-100"
                                    title="Like this listing"
                                >
                                    <FaHeart className="text-gray-600" />
                                </button>
                            </div>
                            <p className="flex gap-2 justify-center items-center pb-3 text-lg text-gray-600 border-b-2 border-gray-400 border-dashed md:justify-start">
                                <FaMapMarkerAlt /> {location}
                            </p>

                            <div className='pb-3 text-center border-b-2 border-gray-400 border-dashed md:text-left'>
                                <p className='flex flex-col text-md'><strong>Description:</strong> {description}</p>
                            </div>

                            <div className='flex flex-col gap-2 pb-3 border-b-2 border-gray-400 border-dashed md:flex-row text-center'>
                                <strong>Availability:</strong>
                                <p className={`px-2 py-1 text-sm font-semibold rounded-full ${availability === 'Available'
                                    ? 'bg-green-50 text-green-600'
                                    : 'bg-red-50 text-red-600'
                                    }`}>
                                    {availability}</p>
                            </div>

                            <div className='flex flex-col gap-4 justify-center pb-3 text-center border-b-2 border-gray-400 border-dashed md:text-left'>
                                <p className="text-gray-700 text-md"><strong>Room Type:</strong><br /> {roomType}</p>
                                <p className="text-gray-700 text-md"><strong>Lifestyle:</strong><br /> {lifestyle}</p>
                                
                                {showContact && (
                                    <p className="text-gray-700 text-md"><strong>Contact:</strong><br /> {contact}</p>
                                )}
                                
                                <p className="text-gray-700 text-md"><strong>Email:</strong><br /> {email}</p>
                                <p className="text-gray-700 text-md"><strong>Posted By:</strong><br /> {name}</p>
                            </div>
                            <div className='space-y-3 text-center md:text-left'>
                                <p className="text-gray-700 text-md"><strong>Rent:</strong><br /> <span className="font-semibold text-primary">${rent}/month</span></p>
                                <p className="font-medium text-primary text-md">
                                    {likeCount} {likeCount === 1 ? 'person is' : 'people are'} interested in this accommodation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPropertyDetails;