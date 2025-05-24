import React from 'react';
import {
    FaMapMarkerAlt, FaBed, FaBath, FaHome, FaEye
} from 'react-icons/fa';
import { Link } from 'react-router';

const PropertyCard = ({ property }) => {

    const {
        _id, title, location, rent, roomType, availability, photoURL, likes, description
    } = property;

    return (
        <>
            {/* Card */}
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
                    <div className="flex gap-2 items-center text-sm text-gray-500">
                        <FaMapMarkerAlt className="mr-1" size={12} />
                        {location}
                    </div>

                    <h3 className="text-lg font-bold text-gray-800 card-title line-clamp-2">{title}</h3>

                    <p className="flex items-center text-sm text-gray-600 line-clamp-2">
                        {description}
                    </p>

                    <div className="flex gap-4 items-center text-sm text-gray-600">
                        <div className="flex gap-1 items-center"><FaBed /><span>Bed</span></div>
                        <div className="flex gap-1 items-center"><FaBath /><span>Bath</span></div>
                        <div className="flex gap-1 items-center"><FaHome /><span>{roomType}</span></div>
                    </div>

                    <div className="card-actions flex justify-between items-center">
                        <p className="text-sm text-gray-500">
                            <strong>{likes || 0}</strong> people interested
                        </p>

                        <Link to={`/properties/${_id}`}>
                            <button className="flex gap-2 items-center btn btn-outline btn-primary btn-sm">
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

export default PropertyCard;
