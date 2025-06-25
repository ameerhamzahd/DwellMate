import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router';
import { FaHome } from 'react-icons/fa';
import PropertyCard from '../../components/PropertyCard/PropertyCard';


const BrowseListing = () => {

    const properties = useLoaderData();

    const [sortOrder, setSortOrder] = useState(null);
    const [sortedProperties, setSortedProperties] = useState([]);

    useEffect(() => {
        if (sortOrder === 'Ascending') {
            const sorted = [...properties].sort((a, b) => a.rent - b.rent);
            setSortedProperties(sorted);
        } else if (sortOrder === 'Descending') {
            const sorted = [...properties].sort((a, b) => b.rent - a.rent);
            setSortedProperties(sorted);
        } else {
            setSortedProperties(properties)
        }
    }, [sortOrder, properties])

    return (
        <div>
            <Helmet>
                <title>DwellMate | Browse Listing</title>
            </Helmet>

            <div className="flex flex-col justify-center items-center pt-30">
                {/* Header Section */}
                <div className="">
                    <div className="container mx-auto">
                        <div className="space-y-4 text-center">
                            <div className="flex justify-center items-center mb-4">
                                <div className="mr-3 w-12 h-1 bg-primary"></div>
                                <span className="text-sm font-semibold text-gray-500 uppercase">PROPERTIES</span>
                            </div>
                            <h1 className="text-3xl font-bold text-gray-800">
                                Discover Listings
                            </h1>
                            <p className="mx-auto max-w-2xl text-xl text-gray-600">
                                Scroll. Select. Settle In.
                            </p>
                            <div className="flex gap-2 justify-center items-center mt-4 text-sm text-gray-500">
                                <span>{properties.length} properties available</span>
                                <span>•</span>
                                <span>Updated daily</span>
                            </div>

                            <div>
                                <select
                                    className="select select-primary"
                                    onChange={(event) => setSortOrder(event.target.value)}
                                    defaultValue=""
                                >
                                    <option disabled value="">Sort by price</option>
                                    <option value="Ascending">Ascending</option>
                                    <option value="Descending">Descending</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mx-auto w-11/12'>
                    {/* Properties Grid */}
                    <div className="container px-4 py-8 mx-auto">
                        {properties.length === 0 ? (
                            <div className="py-16 text-center">
                                <div className="flex justify-center mb-4 text-6xl"><FaHome /></div>
                                <h3 className="mb-2 text-xl font-semibold text-gray-600">No properties found</h3>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                                {
                                    sortedProperties.map((property) => (
                                        <PropertyCard key={property._id} property={property} />
                                    ))
                                }
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrowseListing;