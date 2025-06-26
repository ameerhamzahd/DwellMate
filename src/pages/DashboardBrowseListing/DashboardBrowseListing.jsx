import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router';
import DashboardPropertyCard from '../../components/DashboardPropertyCard/DashboardPropertyCard';

const BrowseListing = () => {
    const properties = useLoaderData();

    const [sortOrder, setSortOrder] = useState(null);
    const [sortedProperties, setSortedProperties] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        if (sortOrder === 'Ascending') {
            setSortedProperties([...properties].sort((a, b) => a.rent - b.rent));
        } else if (sortOrder === 'Descending') {
            setSortedProperties([...properties].sort((a, b) => b.rent - a.rent));
        } else {
            setSortedProperties(properties);
        }
    }, [sortOrder, properties]);

    const visibleProperties = showAll ? sortedProperties : sortedProperties.slice(0, 5);

    return (
        <div className='p-5 bg-white rounded-2xl shadow-md lg:p-10'>
            <div className='mb-6 space-y-2 text-center'>
                <h1 className='text-2xl font-bold text-gray-800'>Browse All Properties</h1>
                <p className='font-semibold text-gray-500'>
                    Explore all available listings — filter by rent
                </p>
                <select
                    className="select select-bordered select-sm w-full max-w-xs mt-2"
                    onChange={(e) => setSortOrder(e.target.value)}
                    defaultValue=""
                >
                    <option disabled value="">Sort by rent</option>
                    <option value="Ascending">Low to High</option>
                    <option value="Descending">High to Low</option>
                </select>
            </div>

            <div className='overflow-x-auto'>
                <table className='min-w-full text-sm text-left table-auto'>
                    <thead className='text-xs text-gray-600 uppercase bg-gray-100'>
                        <tr>
                            <th className='px-4 py-3'>#</th>
                            <th className='px-4 py-3'>Image</th>
                            <th className='px-4 py-3'>Title</th>
                            <th className='px-4 py-3'>Location</th>
                            <th className='px-4 py-3'>Rent</th>
                            <th className='px-4 py-3'>Room Type</th>
                            <th className='px-4 py-3'>Availability</th>
                        </tr>
                    </thead>
                    <tbody>
                        {visibleProperties.length === 0 ? (
                            <tr>
                                <td colSpan='7' className='py-8 text-center text-gray-500'>
                                    No properties found.
                                </td>
                            </tr>
                        ) : (
                            visibleProperties.map((property, index) => (
                                <DashboardPropertyCard
                                    key={property._id}
                                    property={property}
                                    index={index}
                                />
                            ))
                        )}
                    </tbody>
                </table>

                {sortedProperties.length > 5 && (
                    <div className='text-center mt-6'>
                        <button
                            onClick={() => setShowAll(prev => !prev)}
                            className='btn btn-primary btn-sm'
                        >
                            {showAll ? 'Show Less' : 'See More'}
                        </button>
                    </div>
                )}

            </div>
        </div>
    );
};

export default BrowseListing;
