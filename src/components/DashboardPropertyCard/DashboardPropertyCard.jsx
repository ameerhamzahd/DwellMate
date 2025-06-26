import React from 'react';
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router';

const PropertyRow = ({ property, index }) => {
    const {
        _id, title, location, rent, roomType, availability, photoURL
    } = property;

    return (
        <tr className='border-b transition duration-300 hover:bg-gray-50'>
            <td className='px-4 py-3 text-gray-700 font-medium'>{index + 1}</td>
            <td className='px-4 py-3'>
                <div className='w-14 h-14 rounded-xl overflow-hidden'>
                    <img src={photoURL} alt={title} className='object-cover w-full h-full' />
                </div>
            </td>
            <td className='px-4 py-3 font-semibold text-gray-800'>{title}</td>
            <td className='px-4 py-3 text-gray-600'>{location}</td>
            <td className='px-4 py-3 font-bold text-primary'>${rent}</td>
            <td className='px-4 py-3'>{roomType}</td>
            <td className='px-4 py-3'>
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${availability === 'Available'
                    ? 'bg-green-100 text-green-600'
                    : 'bg-red-100 text-red-600'
                    }`}>
                    {availability}
                </span>
            </td>
            <td className='px-4 py-3'>
                <Link to={`/properties/${_id}`}>
                    <button className="btn btn-xs btn-outline btn-primary">
                        <FaEye className="mr-1" /> View
                    </button>
                </Link>
            </td>
        </tr>
    );
};

export default PropertyRow;
