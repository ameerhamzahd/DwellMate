import React, { useState, useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaMapMarkerAlt, FaDollarSign, FaBed, FaUser, FaInfoCircle, FaCheckCircle, FaEnvelope, FaClipboardList } from 'react-icons/fa';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import { toast, Bounce } from 'react-toastify';

const AddToFindRoommate = () => {

    const { user } = useContext(AuthContext);

    const [formData, setFormData] = useState({
        title: '',
        location: '',
        rent: '',
        roomType: '',
        lifestyle: '',
        description: '',
        contact: '',
        availability: 'Available',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Add logic to send formData + user info to backend/database
        const form = event.target;
        const formData = new FormData(form);
        const newProperty = Object.fromEntries(formData.entries());

        fetch("http://localhost:3000/properties", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newProperty)
        }).then(response => response.json()).then(data => {
            if(data.insertedId){
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
            description: '', contact: '', availability: 'Available'
        });
    };

    return (
        <div>
            <Helmet>
                <title>DwellMate | Add Roommate</title>
            </Helmet>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-white to-violet-100 py-30">
                <div className='text-center space-y-5 py-10'>
                    <h2 className="text-3xl font-bold">Post a Roommate Listing</h2>
                    <span className="text-gray-500">Connecting Compatible Lifestyles Under One Roof.</span>
                    <p></p>
                </div>
                <div className="w-11/12 bg-white/10 border border-white/30 p-8 rounded-2xl shadow-2xl backdrop-blur-md">
                    <form onSubmit={handleSubmit} className="space-y-6">

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
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
                                    className="w-full pl-10 pt-6 pb-2 bg-white/20 text-black placeholder-transparent focus:outline-none border-b border-black focus:border-primary"
                                />
                                <label className="absolute left-10 top-1 text-xs text-black">Description</label>
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
                                    className="w-full pl-10 pt-6 pb-2 bg-white/20 text-black focus:outline-none border-b border-black focus:border-primary"
                                >
                                    <option>Available</option>
                                    <option>Not Available</option>
                                </select>
                                <label className="absolute left-10 top-1 text-xs text-black">Availability</label>
                            </div>

                            {/* Read-Only Email */}
                            <ReadOnlyField icon={<FaEnvelope />} label="User Email" value={user?.email} />

                            {/* Read-Only Name */}
                            <ReadOnlyField icon={<FaUser />} label="User Name" value={user?.displayName} />
                        </div>

                        {/* Submit */}
                        <div className="form-control mt-10">
                            <button type='submit' className="btn btn-outline btn-primary w-full rounded-full transition-all duration-300">
                                Add to List
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

// Reusable floating input
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
                onBlur={(e) => setFocused(e.target.value !== '')}
                className="w-full pl-10 pt-6 pb-2 bg-white/20 text-black placeholder-transparent focus:outline-none border-b border-black focus:border-primary"
            />
            <label
                className={`absolute left-10 text-black transition-all duration-300 ${focused || value ? 'top-1 text-xs' : 'top-4 text-sm'}`}
            >
                {label}
            </label>
        </div>
    );
};

// ReadOnly field component
const ReadOnlyField = ({ icon, label, value }) => (
    <div className="relative">
        <div className="absolute left-3 top-4 text-black">{icon}</div>
        <input
            type="text"
            readOnly
            value={value || ''}
            className="w-full pl-10 pt-6 pb-2 bg-white/20 text-black border-b border-black focus:outline-none"
        />
        <label className="absolute left-10 top-1 text-xs text-black">{label}</label>
    </div>
);

export default AddToFindRoommate;
