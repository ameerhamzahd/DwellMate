import React, { use } from 'react';
import { toast, Bounce } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import { FaCircleUser } from "react-icons/fa6";
import logo from "../../assets/logo.png"
import { Link, NavLink } from 'react-router';
import { TbLogin2, TbLogout2 } from 'react-icons/tb';
import { MdSpaceDashboard } from 'react-icons/md';

const Navbar = () => {

    const navLinkStyle = ({ isActive }) =>
        `relative inline-block after:block after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full ${isActive ? 'text-primary font-bold' : ''
        }`;

    const { user, logoutUser } = use(AuthContext);

    const handleLogout = () => {
        logoutUser()
            .then(() => {
                toast.error(`Logged Out Successfully.`, {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
            })
            .catch((error) => {
                alert(error.message)
            });
    };

    return (
        <nav className="fixed top-0 z-50 navbar bg-white/30 backdrop-blur-lg shadow-sm lg:px-24 px-5">
            <div className="navbar-start">
                <div className="dropdown relative">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[60] p-2 shadow bg-white rounded-box w-52 space-y-1 text-gray-800">
                        <li><NavLink to="/" className={navLinkStyle}>Home</NavLink></li>
                        <li><NavLink to="/add-to-find-roommate" className={navLinkStyle}>Add to Find Roommate</NavLink></li>
                        <li><NavLink to="/browse-listing" className={navLinkStyle}>Browse Listing</NavLink></li>
                        {
                            user && <li><NavLink to="/my-listings" className={navLinkStyle}>My Listings</NavLink></li>
                        }

                        <div className='md:hidden space-y-3 pt-3'>
                            {
                                user ? (
                                    <div className="dropdown dropdown-end relative">
                                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                <img src={user?.photoURL || <FaCircleUser />} alt="User Avatar" />
                                            </div>
                                        </label>
                                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[60] p-2 shadow bg-white rounded-box w-52 text-gray-800 gap-2">
                                            <li className='flex justify-center items-center italic font-bold'><Link to="/my-listings">{user.displayName}</Link></li>
                                            <li><Link onClick={handleLogout} className='flex items-center justify-center gap-1'><TbLogout2 size={20} />Logout</Link></li>
                                        </ul>
                                    </div>
                                ) : (<>
                                    <Link to="/login" className="btn bg-transparent px-6 ml-2 flex items-center gap-2">
                                        <TbLogin2 size={20} /> Login
                                    </Link>
                                    <Link to="/register" className="btn bg-transparent px-6 ml-2 flex items-center gap-2">
                                        <MdSpaceDashboard size={20} /> Register
                                    </Link></>
                                )
                            }
                        </div>
                    </ul>
                </div>

                <Link to="/" className="text-xl font-bold flex items-center gap-1">
                    <img className="w-15 scale-125" src={logo} alt="Logo" /> DwellMate
                </Link>
            </div>


            <div className="navbar-center hidden lg:flex">
                <ul className="menu-horizontal px-1 gap-5">
                    <li><NavLink to="/" className={navLinkStyle}>Home</NavLink></li>
                    <li><NavLink to="/add-to-find-roommate" className={navLinkStyle}>Add to Find Roommate</NavLink></li>
                    <li><NavLink to="/browse-listing" className={navLinkStyle}>Browse Listing</NavLink></li>
                    {
                        user && <li><NavLink to="/my-listings" className={navLinkStyle}>My Listings</NavLink></li>
                    }
                </ul>
            </div>


            <div className="navbar-end hidden md:flex">
                {
                    user ? (
                        <div className="dropdown dropdown-end relative">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={user?.photoURL || <FaCircleUser />} alt="User Avatar" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[60] p-2 shadow bg-white rounded-box w-52 text-gray-800 gap-2">
                                <li className='flex justify-center items-center italic font-bold'><Link to="/profile">{user.displayName}</Link></li>
                                <li><Link onClick={handleLogout} className='flex items-center justify-center gap-1'><TbLogout2 size={20} />Logout</Link></li>
                            </ul>
                        </div>
                    ) : (<>
                        <Link to="/login" className="btn bg-transparent px-6 ml-2 flex items-center gap-2">
                            <TbLogin2 size={20} /> Login
                        </Link>
                        <Link to="/register" className="btn bg-transparent px-6 ml-2 flex items-center gap-2">
                            <MdSpaceDashboard size={20} /> Register
                        </Link></>
                    )
                }
            </div>
        </nav>
    );
};

export default Navbar;