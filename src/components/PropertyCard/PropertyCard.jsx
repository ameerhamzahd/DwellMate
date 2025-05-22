import React from 'react';
import { FaMapMarkerAlt, FaBed, FaBath, FaHome, FaHeart, FaShare, FaEye, FaPhone } from 'react-icons/fa';

const PropertyCard = ({ property }) => {
    return (
        <div>
            <div className="overflow-hidden shadow-lg transition-shadow duration-300 card bg-base-100 hover:shadow-xl group">
                {/* Image Section */}
                <div className="relative">
                    <figure className="">
                        <img
                            src={property.photoURL}
                            alt={property.title}
                            className="object-cover w-full rounded-t-lg transition-transform duration-300 group-hover:scale-105"
                        />
                    </figure>

                    {/* Action buttons */}
                    <div className="flex absolute top-3 right-3 gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <button className="bg-white border-none shadow-md btn btn-circle btn-sm hover:bg-gray-100">
                            <FaHeart className="text-gray-600" />
                        </button>
                        <button className="bg-white border-none shadow-md btn btn-circle btn-sm hover:bg-gray-100">
                            <FaShare className="text-gray-600" />
                        </button>
                    </div>

                    {/* Price badge */}
                    <div className="flex absolute bottom-3 left-3 gap-3">
                        <div className="px-2 py-1 text-sm font-semibold bg-violet-50 rounded-full text-primary">
                            ${property.rent}/month
                        </div>
                        <div
                            className={`px-2 py-1 text-sm font-semibold rounded-full 
    ${property.availability === 'Available' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                            {property.availability}
                        </div>

                    </div>
                </div>

                {/* Card Content */}
                <div className="p-4 card-body">
                    {/* Property type */}
                    <div className="flex gap-2 items-center mb-2">
                        <div className="flex items-center text-sm text-gray-500">
                            <FaMapMarkerAlt className="mr-1" size={12} />
                            {property.location}
                        </div>
                    </div>

                    {/* Title */}
                    <h3 className="mb-2 text-lg font-bold text-gray-800 card-title line-clamp-2">
                        {property.title}
                    </h3>

                    {/* Contact */}
                    <p className="flex items-center mb-3 text-sm text-gray-600 line-clamp-2">
                        <FaPhone className="mr-1" /> {property.contact}
                    </p>

                    {/* Property details */}
                    <div className="flex gap-4 items-center mb-3 text-sm text-gray-600">
                        <div className="flex gap-1 items-center">
                            <FaBed />
                            <span>Bed</span>
                        </div>
                        <div className="flex gap-1 items-center">
                            <FaBath />
                            <span>Bath</span>
                        </div>
                        <div className="flex gap-1 items-center">
                            <FaHome />
                            <span>{property.roomType}</span>
                        </div>
                    </div>

                    {/* Action buttons */}
                    <div className="justify-end items-center card-actions">
                        <button className="flex gap-2 items-center btn btn-outline btn-primary btn-sm">
                            <FaEye />
                            View Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyCard;