import React, { useState, useContext } from 'react';
import { FaMapMarkerAlt, FaDollarSign, FaBed, FaUser, FaInfoCircle, FaCheckCircle, FaEnvelope, FaClipboardList, FaImage } from 'react-icons/fa';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import { toast, Bounce } from 'react-toastify';

const DashboardAddToFindRoommate = () => {

    const { user } = useContext(AuthContext);

    const [formData, setFormData] = useState({
        title: '',
        location: '',
        rent: '',
        roomType: '',
        lifestyle: '',
        description: '',
        contact: '',
        photoURL: '',
        availability: 'Available',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);
        const newProperty = Object.fromEntries(formData.entries());

        fetch("https://dwellmate-server.vercel.app/properties", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newProperty)
        }).then(response => response.json()).then(data => {
            if (data.insertedId) {
                toast.success('Listing added successfully!', {
                    position: "top-right",
                    autoClose: 2000,
                    transition: Bounce,
                });
            }
        })

        // Reset form
        setFormData({
            title: '', location: '', rent: '', roomType: '', lifestyle: '',
            description: '', contact: '', availability: 'Available', photoURL: ''
        });
    };

    return (
        <div>
            <div className="flex flex-col justify-center items-center min-h-screen bg-white rounded-xl">
                <div className='py-10 space-y-5 text-center px-5'>
                    <h2 className="text-2xl font-bold">Post a Roommate Listing</h2>
                    <span className="font-semibold text-gray-500">Connecting Compatible Lifestyles Under One Roof.</span>
                </div>
                <div className="p-8 w-11/12 rounded-2xl border shadow-2xl backdrop-blur-md bg-white/10 border-white/30 mb-10">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
                            {/* Title */}
                            <InputField icon={<FaClipboardList />} name="title" label="Listing Title" value={formData.title} onChange={handleChange} />

                            {/* Location */}
                            <InputField icon={<FaMapMarkerAlt />} name="location" label="Location" value={formData.location} onChange={handleChange} />

                            {/* Rent */}
                            <InputField icon={<FaDollarSign />} name="rent" label="Rent Amount" value={formData.rent} onChange={handleChange} type="number" />

                            {/* Room Type */}
                            <InputField icon={<FaBed />} name="roomType" label="Room Type (Single, Shared)" value={formData.roomType} onChange={handleChange} />

                            {/* Lifestyle */}
                            <InputField icon={<FaInfoCircle />} name="lifestyle" label="Lifestyle Preferences" value={formData.lifestyle} onChange={handleChange} />

                            {/* Description */}
                            <div className="relative">
                                <FaInfoCircle className="absolute left-3 top-4 text-black" />
                                <textarea
                                    name="description"
                                    required
                                    value={formData.description}
                                    onChange={handleChange}
                                    className="pt-6 pb-2 pl-10 w-full placeholder-transparent text-black border-b border-black bg-white/20 focus:outline-none focus:border-primary"
                                />
                                <label className="absolute top-1 left-10 text-xs text-black">Description</label>
                            </div>

                            {/* Contact */}
                            <InputField icon={<FaUser />} name="contact" label="Contact Info" value={formData.contact} onChange={handleChange} />

                            {/* Availability */}
                            <div className="relative">
                                <FaCheckCircle className="absolute left-3 top-4 text-black" />
                                <select
                                    name="availability"
                                    value={formData.availability}
                                    onChange={handleChange}
                                    className="pt-6 pb-2 pl-10 w-full text-black border-b border-black bg-white/20 focus:outline-none focus:border-primary"
                                >
                                    <option>Available</option>
                                    <option>Not Available</option>
                                </select>
                                <label className="absolute top-1 left-10 text-xs text-black">Availability</label>
                            </div>

                            {/* Photot URL */}
                            <InputField icon={<FaImage />} label="PhotoURL" value={formData.photoURL} name="photoURL" onChange={handleChange} />

                            {/* Read-Only Email */}
                            <InputField icon={<FaEnvelope />} label="User Email" value={user?.email} name="email" readOnly />

                            {/* Read-Only Name */}
                            <InputField icon={<FaUser />} label="User Name" value={user?.displayName} name="name" readOnly />
                        </div>

                        {/* Submit */}
                        <div className="mt-10 form-control">
                            <button type='submit' className="w-full rounded-full transition-all duration-300 btn btn-outline btn-primary">
                                Add to List
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

const InputField = ({ icon, name, label, value, onChange, type = 'text' }) => {
    const [focused, setFocused] = useState(false);

    return (
        <div className="relative">
            <div className="absolute left-3 top-4 text-black">{icon}</div>
            <input
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                required
                onFocus={() => setFocused(true)}
                onBlur={(event) => setFocused(event.target.value !== '')}
                className="pt-6 pb-2 pl-10 w-full placeholder-transparent text-black border-b border-black bg-white/20 focus:outline-none focus:border-primary"
            />
            <label
                className={`absolute left-10 text-black transition-all duration-300 ${focused || value ? 'top-1 text-xs' : 'top-4 text-sm'}`}
            >
                {label}
            </label>
        </div>
    );
};

export default DashboardAddToFindRoommate;