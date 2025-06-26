import React, { use } from 'react';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import { NavLink } from 'react-router';

const DashboardAside = () => {

    const { user } = use(AuthContext);

    const navLinkStyle = ({ isActive }) =>
        `${isActive ? 'text-primary font-bold' : ''
        }`;

    const links = <>
        <li><NavLink to="/" className={navLinkStyle}>Home</NavLink></li>
        <li><NavLink to="/browse-listing" className={navLinkStyle}>Browse Listing</NavLink></li>
        {
            user && <li><NavLink to="/add-to-find-roommate" className={navLinkStyle}>Add to Find Roommate</NavLink></li>
        }
        {
            user && <li><NavLink to="/my-listings" className={navLinkStyle}>My Listings</NavLink></li>
        }
        {
            user && <li><NavLink to="/dashboard" className={navLinkStyle}>Dashboard</NavLink></li>
        }
        <li><NavLink to="/about-us" className={navLinkStyle}>About Us</NavLink></li>
        <li><NavLink to="/contact-us" className={navLinkStyle}>Contact Us</NavLink></li>
    </>

    return (
        <div>
            <div className="">
                    <ul className="menu bg-base-200 text-base-content min-h-full w-full p-4 rounded-xl lg-sticky ">
                        {/* Sidebar content here */}
                        {links}
                    </ul>
                </div>
        </div>
    );
};

export default DashboardAside;