import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaBed, FaClipboardList, FaDollarSign, FaEnvelope, FaImage, FaUser } from 'react-icons/fa6';
import { FaCheckCircle, FaInfoCircle, FaMapMarkerAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import Loader from '../../components/Loader/Loader';

const MyListings = () => {

    const { user } = useContext(AuthContext);
    const [myListings, setMyListings] = useState([]);
    const [selectedListing, setSelectedListing] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (user?.email) {
            fetch(`https://dwellmate-server.vercel.app/properties/user/${user.email}`)
                .then((response) => response.json())
                .then((data) => setMyListings(data));
        }
    }, [user?.email]);

    const handleUpdate = event => {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);
        const updatedProperty = Object.fromEntries(formData.entries());

        fetch(`https://dwellmate-server.vercel.app/properties/${selectedListing._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedProperty),
        }).then(response => response.json()).then(data => {
            if (data.modifiedCount) {
                Swal.fire({
                    title: "Updated!",
                    icon: "success",
                    timer: 1500,
                    showConfirmButton: false,
                });

                fetch(`https://dwellmate-server.vercel.app/properties/user/${user.email}`)
                    .then(response => response.json())
                    .then(data => setMyListings(data));

                setShowModal(false);
            }
        });
    };

    const handleDeletion = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://dwellmate-server.vercel.app/properties/${_id}`, {
                    method: "DELETE",
                })
                    .then((response) => response.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            Swal.fire("Deleted!", "List has been removed.", "success");

                            // Filter out deleted item from UI
                            const updatedListings = myListings.filter((item) => item._id !== _id);
                            setMyListings(updatedListings);
                        }
                    })
            }
        });
    };

    return (
        <div>
            <Helmet>
                <title>DwellMate | My Listings</title>
            </Helmet>
            <div className='mx-auto min-h-screen max-w-11/12 pt-30 pb-15'>
                <div className='p-5 bg-white rounded-2xl shadow-md lg:p-10'>
                    <div className='mb-6 space-y-2 text-center'>
                        <h1 className='text-3xl font-bold text-gray-800'>My Property Listings</h1>
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
                                    <th className='px-4 py-3'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {myListings.length === 0 ? (
                                    <tr>
                                        <td colSpan='7' className='py-8 text-center text-gray-500'>
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
                                            <td className='px-4 py-3 space-y-3'>
                                                <button
                                                    onClick={() => {
                                                        setSelectedListing(listing);
                                                        setShowModal(true);
                                                    }}
                                                    className="flex gap-2 items-center text-sm transition cursor-pointer text-primary hover:underline hover:text-violet-800"
                                                >
                                                    <MdEdit />
                                                    Update
                                                </button>

                                                <button
                                                    type="button"
                                                    onClick={() => handleDeletion(listing._id)}
                                                    className='flex gap-2 items-center text-sm text-red-600 transition cursor-pointer hover:underline hover:text-red-800'
                                                >
                                                    <MdDelete />
                                                    Remove
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>

                    {showModal && selectedListing && (
                        <div className="flex fixed inset-0 z-50 justify-center items-center p-4 backdrop-blur-sm bg-black/40">
                            <div className="relative p-8 w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl border shadow-2xl border-white/30 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">

                                {/* Close Button */}
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="absolute top-4 right-4 text-2xl text-gray-500 cursor-pointer hover:text-red-600"
                                >
                                    &times;
                                </button>

                                <h2 className="mb-6 text-2xl font-bold text-center">Update Roommate Listing</h2>

                                <form
                                    onSubmit={handleUpdate}
                                    className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
                                >
                                    <InputField icon={<FaClipboardList />} name="title" label="Listing Title" defaultValue={selectedListing.title} />
                                    <InputField icon={<FaMapMarkerAlt />} name="location" label="Location" defaultValue={selectedListing.location} />
                                    <InputField icon={<FaDollarSign />} name="rent" label="Rent" defaultValue={selectedListing.rent} type="number" />
                                    <InputField icon={<FaBed />} name="roomType" label="Room Type" defaultValue={selectedListing.roomType} />
                                    <InputField icon={<FaInfoCircle />} name="lifestyle" label="Lifestyle Preferences" defaultValue={selectedListing.lifestyle} />
                                    <InputField icon={<FaUser />} name="contact" label="Contact Info" defaultValue={selectedListing.contact} />

                                    {/* Select - Availability */}
                                    <div className="relative">
                                        <FaCheckCircle className="absolute left-3 top-4 text-black" />
                                        <select
                                            name="availability"
                                            defaultValue={selectedListing.availability}
                                            className="pt-6 pb-2 pl-10 w-full text-black border-b border-black bg-white/20 focus:outline-none focus:border-primary"
                                        >
                                            <option>Available</option>
                                            <option>Not Available</option>
                                        </select>
                                        <label className="absolute top-1 left-10 text-xs text-black">Availability</label>
                                    </div>

                                    {/* Description (full width) */}
                                    <div className="relative md:col-span-2 lg:col-span-3">
                                        <FaInfoCircle className="absolute left-3 top-4 text-black" />
                                        <textarea
                                            name="description"
                                            required
                                            defaultValue={selectedListing.description}
                                            className="pt-6 pb-2 pl-10 w-full placeholder-transparent text-black border-b border-black bg-white/20 focus:outline-none focus:border-primary"
                                        />
                                        <label className="absolute top-1 left-10 text-xs text-black">Description</label>
                                    </div>

                                    {/* Read-only Fields */}
                                    <InputField icon={<FaImage />} name="photoURL" label="Photo URL" defaultValue={selectedListing.photoURL} />
                                    <InputField icon={<FaEnvelope />} name="email" label="User Email" defaultValue={selectedListing.email} readOnly />
                                    <InputField icon={<FaUser />} name="name" label="User Name" defaultValue={selectedListing.name} readOnly />

                                    {/* Buttons (full width) */}
                                    <div className="flex flex-wrap gap-4 justify-end items-center mt-6 md:col-span-2 lg:col-span-3">
                                        <button
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                            className="px-6 py-2 text-gray-700 rounded-full border border-gray-400 transition hover:bg-gray-300"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            className="px-6 py-2 text-white rounded-full transition bg-primary hover:bg-violet-800"
                                        >
                                            Update
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const InputField = ({ icon, name, label, defaultValue = '', type = 'text', readOnly = false }) => {
    const [focused, setFocused] = useState(false);

    return (
        <div className="relative">
            <div className="absolute left-3 top-4 text-black">{icon}</div>
            <input
                name={name}
                type={type}
                defaultValue={defaultValue}
                readOnly={readOnly}
                required={!readOnly}
                onFocus={() => setFocused(true)}
                onBlur={(event) => setFocused(event.target.value !== '')}
                className={`pt-6 pb-2 pl-10 w-full placeholder-transparent text-black border-b border-black bg-white/20 focus:outline-none focus:border-primary ${readOnly ? 'bg-gray-100 cursor-not-allowed' : ''}`}
            />
            <label className={`absolute left-10 text-black transition-all duration-300 ${focused || defaultValue ? 'top-1 text-xs' : 'top-4 text-sm'}`}>
                {label}
            </label>
        </div>
    );
};

export default MyListings;