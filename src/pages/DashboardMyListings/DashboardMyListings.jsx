import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';

const DashboardMyListings = () => {

    const { user } = useContext(AuthContext);
    const [myListings, setMyListings] = useState([]);

    useEffect(() => {
        if (user?.email) {
            fetch(`https://dwellmate-server.vercel.app/properties/user/${user.email}`)
                .then((response) => response.json())
                .then((data) => setMyListings(data));
        }
    }, [user?.email]);

    return (
        <div className='p-5 bg-white rounded-2xl shadow-md lg:p-10'>
            <div className='mb-6 space-y-2 text-center'>
                <h1 className='text-2xl font-bold text-gray-800'>My Property Listings</h1>
                <p className='font-semibold text-gray-500'>Manage and track all your property posts easily</p>
            </div>

            {/* Table */}
            <div className='overflow-x-auto'>
                <table className='min-w-full text-sm text-left table-auto'>
                    <thead className='text-xs text-gray-600 uppercase bg-gray-100'>
                        <tr>
                            <th className='px-4 py-3'>#</th>
                            <th className='px-4 py-3'>Title</th>
                            <th className='px-4 py-3'>Location</th>
                            <th className='px-4 py-3'>Rent</th>
                            <th className='px-4 py-3'>Room Type</th>
                            <th className='px-4 py-3'>Availability</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myListings.length === 0 ? (
                            <tr>
                                <td colSpan='6' className='py-8 text-center text-gray-500'>
                                    You haven’t listed any properties yet.
                                </td>
                            </tr>
                        ) : (
                            myListings.map((listing, index) => (
                                <tr
                                    key={listing._id}
                                    className='border-b transition duration-300 hover:bg-gray-50'
                                >
                                    <td className='px-4 py-3 font-medium text-gray-700'>{index + 1}</td>
                                    <td className='px-4 py-3 font-semibold text-gray-800'>{listing.title}</td>
                                    <td className='px-4 py-3 text-gray-600'>{listing.location}</td>
                                    <td className='px-4 py-3 font-bold text-primary'>${listing.rent}</td>
                                    <td className='px-4 py-3'>{listing.roomType}</td>
                                    <td className='px-4 py-3'>
                                        <span
                                            className={`px-2 py-1 rounded-full text-xs font-semibold ${listing.availability === 'Available'
                                                ? 'bg-green-100 text-green-600'
                                                : 'bg-red-100 text-red-600'
                                                }`}
                                        >
                                            {listing.availability}
                                        </span>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DashboardMyListings;