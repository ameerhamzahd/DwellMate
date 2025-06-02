import React, { use, useEffect } from 'react';
import { toast, Bounce } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import logo from "../../assets/logo.png"
import { Link, NavLink } from 'react-router';
import { TbLogin2, TbLogout2 } from 'react-icons/tb';
import { MdSpaceDashboard } from 'react-icons/md';
import { Tooltip } from 'react-tooltip';
import userAvatarDefault from '../../assets/user.png'

const Navbar = () => {

    const navLinkStyle = ({ isActive }) =>
        `relative inline-block after:block after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full ${isActive ? 'text-primary font-bold' : ''
        }`;

    const { user, logoutUser } = use(AuthContext);
    // const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

    useEffect(() => {
        const tooltipElement = document.getElementById("user-tooltip");
        const content = document.getElementById("user-tooltip-content");
        if (tooltipElement && content) {
            tooltipElement.setAttribute("data-html", content.innerHTML);
        }
    }, [user]);


    // useEffect(() => {
    //     localStorage.setItem("theme", theme);
    //     const localTheme = localStorage.getItem("theme");
    //     document.querySelector("html").setAttribute("data-theme", localTheme);
    // }, [theme]);


    // const handleToggleTheme = (event) => {
    //     setTheme(event.target.checked ? "dark" : "light");
    // };


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
        <div className='flex fixed top-0 z-50 justify-center w-full'>
            <Tooltip
                anchorSelect="#user-avatar-tooltip"
                place="bottom"
                className="!p-3 !rounded-xl !shadow-xl !text-left !text-gray-800 !bg-white !min-w-[200px]"
            >
                <div className="space-y-1">
                    <div className="font-semibold">{user?.displayName || "Unknown User"}</div>
                    <div className="text-sm text-gray-500">{user?.email || "No email"}</div>
                </div>
            </Tooltip>

            <nav className="px-4 mx-auto my-5 w-full bg-white rounded-full shadow-sm navbar max-w-11/12">
                <div className="navbar-start">
                    <div className="relative dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>
                        <ul tabIndex={0} className="p-2 mt-3 space-y-1 w-52 text-gray-800 bg-white shadow menu menu-sm dropdown-content rounded-box">
                            <li><NavLink to="/" className={navLinkStyle}>Home</NavLink></li>
                            <li><NavLink to="/add-to-find-roommate" className={navLinkStyle}>Add to Find Roommate</NavLink></li>
                            <li><NavLink to="/browse-listing" className={navLinkStyle}>Browse Listing</NavLink></li>
                            {
                                user && <li><NavLink to="/my-listings" className={navLinkStyle}>My Listings</NavLink></li>
                            }

                            <div className='pt-3 space-y-3 md:hidden'>
                                {
                                    !user && (<>
                                        <Link to="/login" className="flex gap-2 items-center px-6 ml-2 bg-transparent btn border-primary">
                                            <TbLogin2 size={20} /> Login
                                        </Link>
                                        <Link to="/register" className="flex gap-2 items-center px-6 ml-2 bg-transparent btn border-primary">
                                            <MdSpaceDashboard size={20} /> Register
                                        </Link></>
                                    )
                                }
                            </div>
                        </ul>
                    </div>

                    <Link to="/" className="flex gap-1 items-center text-xl font-bold">
                        <img className="scale-125 w-15" src={logo} alt="Logo" /> DwellMate
                    </Link>
                </div>


                <div className="hidden navbar-center lg:flex">
                    <ul className="gap-5 px-1 font-medium menu-horizontal">
                        <li><NavLink to="/" className={navLinkStyle}>Home</NavLink></li>
                        <li><NavLink to="/add-to-find-roommate" className={navLinkStyle}>Add to Find Roommate</NavLink></li>
                        <li><NavLink to="/browse-listing" className={navLinkStyle}>Browse Listing</NavLink></li>
                        {
                            user && <li><NavLink to="/my-listings" className={navLinkStyle}>My Listings</NavLink></li>
                        }
                    </ul>
                </div>


                <div className="flex gap-3 items-center navbar-end">
                    {/* Original desktop user section (visible only on md and above) */}
                    <div>
                        {
                            user ? (<>
                                {/* {
                                    location.pathname === "/" && (<input type="checkbox"
                                        onChange={handleToggleTheme}
                                        checked={theme === "dark"}
                                        className="mr-3 toggle theme-controller" />)
                                } */}

                                <div className="dropdown dropdown-end">
                                    <div
                                        id="user-avatar-tooltip"
                                        tabIndex={0}
                                        className="cursor-pointer btn btn-ghost btn-circle avatar"
                                        data-tooltip-id="user-tooltip"
                                    >
                                        <div className="w-10 rounded-full ring ring-offset-2 ring-primary ring-offset-base-100">
                                            {user?.photoURL ? (
                                                <img src={user.photoURL} alt="User Avatar" />
                                            ) : (
                                                <img src={userAvatarDefault} alt="User Avatar" />
                                            )}
                                        </div>
                                    </div>

                                    {/* Dropdown Menu (on click) */}
                                    <ul
                                        tabIndex={0}
                                        className="menu menu-sm dropdown-content mt-3 z-[60] p-2 shadow bg-white rounded-box w-52 text-gray-800 gap-2"
                                    >
                                        <li className='flex justify-center items-center italic font-bold'>
                                            <Link to="/my-listings">{user.displayName}</Link>
                                        </li>
                                        <li>
                                            <Link onClick={handleLogout} className='flex gap-1 justify-center items-center'>
                                                <TbLogout2 size={20} />Logout
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </>
                            ) : (<>
                                <div className='flex justify-center items-center'>
                                    {/* {
                                        location.pathname === "/" && (<input type="checkbox" value="synthwave"
                                            onChange={handleToggleTheme}
                                            checked={theme === "dark"}
                                            className="toggle theme-controller" />)
                                    } */}
                                    <div className='hidden gap-3 justify-center items-center px-3 md:flex'>
                                        <Link to="/login" className="flex gap-2 items-center px-6 bg-transparent btn hover:border-primary">
                                            <TbLogin2 size={20} /> Login
                                        </Link>
                                        <Link to="/register" className="flex gap-2 items-center px-6 bg-transparent btn hover:border-primary">
                                            <MdSpaceDashboard size={20} /> Register
                                        </Link>
                                    </div>
                                </div>
                            </>
                            )
                        }
                    </div>
                </div>

            </nav>
        </div>
    );
};

export default Navbar;