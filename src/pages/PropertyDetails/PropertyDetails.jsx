import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useLoaderData, useParams } from 'react-router';

const PropertyDetails = () => {

    const { id } = useParams();
    const data = useLoaderData();

    const targetedProperty = data.find(property => property._id === id);

    const {
        title, location, rent, roomType, lifestyle,
        description, contact, availability, name, email, photoURL
    } = targetedProperty;

    return (
        <div>
            <Helmet>
                <title>DwellMate | Accommodation Insights</title>
            </Helmet>
            
            <div className="">
                {/* Header */}
                <div className="space-y-3 text-center rounded-2xl pt-30 px-5">
                    <h1 className="text-3xl font-bold text-gray-800">Accommodation Insights</h1>
                    <p className="font-medium text-gray-500">Live Where It Feels Right — Know Before You Book.</p>
                </div>

                {/* Main Info Section */}
                <div className='py-10 mx-auto max-w-11/12'>
                    <div className="grid gap-10 p-5 bg-white rounded-2xl shadow-md md:grid-cols-2">
                        {/* Image */}
                        <div className="flex justify-center items-center">
                            <img src={photoURL} alt={title} className="object-cover w-full rounded-2xl" />
                        </div>

                        {/* Details */}
                        <div className="flex flex-col gap-4 justify-center text-center md:text-left">
                            <h2 className="pb-3 text-2xl font-bold text-gray-800 border-b-2 border-gray-400 border-dashed">{title}</h2>
                            <p className="flex gap-2 justify-center items-center pb-3 text-lg text-gray-600 border-b-2 border-gray-400 border-dashed md:justify-start">
                                <FaMapMarkerAlt /> {location}
                            </p>

                            <div className='pb-3 text-center border-b-2 border-gray-400 border-dashed md:text-left'>
                                <p className='flex flex-col gap-2 text-md'><strong>Description:</strong> {description}</p>
                            </div>

                            <div className='flex flex-col gap-2 pb-3 border-b-2 border-gray-400 border-dashed md:flex-row'>
                            <strong>Availability:</strong> 
                            <p className={`px-2 py-1 text-sm font-semibold rounded-full ${availability === 'Available'
                                ? 'bg-green-50 text-green-600'
                                : 'bg-red-50 text-red-600'
                                }`}>
                            {availability}</p>
                            </div>
                            
                            <div className='flex flex-col gap-4 justify-center pb-3 text-center border-b-2 border-gray-400 border-dashed md:text-left'>
                                <p className="text-gray-700 text-md"><strong>Room Type:</strong> {roomType}</p>
                                <p className="text-gray-700 text-md"><strong>Lifestyle:</strong> {lifestyle}</p>
                                <p className="text-gray-700 text-md"><strong>Contact:</strong> {contact}</p>
                                <p className="text-gray-700 text-md"><strong>Email:</strong> {email}</p>
                                <p className="text-gray-700 text-md"><strong>Posted By:</strong> {name}</p>
                            </div>
                            <p className="text-gray-700 text-md"><strong>Rent:</strong> <span className="font-semibold text-primary">${rent}/month</span></p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default PropertyDetails;