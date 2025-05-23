import React from 'react';
import {
    FaMapMarkerAlt, FaBed, FaBath, FaHome,
    FaHeart, FaShare, FaEye, FaPhone, FaTimes
} from 'react-icons/fa';
import { Link } from 'react-router';

const AvailableCard = ({ data }) => {

    const {
        _id, title, location, rent, roomType, contact, availability, photoURL
    } = data;

    return (
        <>
            <div className="overflow-hidden shadow-lg transition-shadow duration-300 card bg-base-100 hover:shadow-xl group">
                {/* Image */}
                <div className="relative">
                    <figure>
                        <img
                            src={photoURL}
                            alt={title}
                            className="object-cover w-full rounded-t-lg transition-transform duration-300 group-hover:scale-105"
                        />
                    </figure>

                    {/* Action buttons */}
                    <div className="flex absolute top-3 right-3 gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <button className="bg-white shadow-md btn btn-circle btn-sm hover:bg-gray-100">
                            <FaHeart className="text-gray-600" />
                        </button>
                        <button className="bg-white shadow-md btn btn-circle btn-sm hover:bg-gray-100">
                            <FaShare className="text-gray-600" />
                        </button>
                    </div>

                    {/* Rent & Availability */}
                    <div className="flex absolute bottom-3 left-3 gap-3">
                        <div className="px-2 py-1 text-sm font-semibold bg-violet-50 rounded-full text-primary">
                            ${rent}/month
                        </div>
                        <div
                            className={`px-2 py-1 text-sm font-semibold rounded-full ${availability === 'Available'
                                ? 'bg-green-50 text-green-600'
                                : 'bg-red-50 text-red-600'
                                }`}>
                            {availability}
                        </div>
                    </div>
                </div>

                {/* Card Body */}
                <div className="p-4 card-body">
                    <div className="flex gap-2 items-center mb-2 text-sm text-gray-500">
                        <FaMapMarkerAlt className="mr-1" size={12} />
                        {location}
                    </div>

                    <h3 className="mb-2 text-lg font-bold text-gray-800 card-title line-clamp-2">{title}</h3>

                    <p className="flex items-center mb-3 text-sm text-gray-600 line-clamp-2">
                        <FaPhone className="mr-1" /> {contact}
                    </p>

                    <div className="flex gap-4 items-center mb-3 text-sm text-gray-600">
                        <div className="flex gap-1 items-center"><FaBed /><span>Bed</span></div>
                        <div className="flex gap-1 items-center"><FaBath /><span>Bath</span></div>
                        <div className="flex gap-1 items-center"><FaHome /><span>{roomType}</span></div>
                    </div>

                    <div className="justify-end items-center card-actions">
                        <Link to={`/properties/${_id}`} >
                            <button
                                className="flex gap-2 items-center btn btn-outline btn-primary btn-sm"
                            >
                                <FaEye />
                                See More
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AvailableCard;