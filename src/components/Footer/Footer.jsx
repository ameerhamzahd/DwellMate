import { Link, NavLink } from "react-router"
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa"
import logo from "../../assets/logo.png"
import { FaFacebook, FaXTwitter } from "react-icons/fa6"
import { GrInstagram } from "react-icons/gr"
import { IoLogoLinkedin } from "react-icons/io"
import { use } from "react"
import { AuthContext } from "../../contexts/AuthContext/AuthContext"

const Footer = () => {

    const { user } = use(AuthContext);

    const navLinkStyle = ({ isActive }) =>
        `relative inline-block after:block after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full ${isActive ? 'text-primary font-bold' : ''
        }`;

    return (
        <footer className="bg-violet-100">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between gap-5 p-10 flex-col lg:flex-row">
                    <div className="flex justify-between flex-col gap-8 items-center text-center lg:items-start lg:text-start">
                        <div className="flex flex-col">
                            <Link to="/" className="flex justify-center items-center lg:justify-start">
                                <img src={logo} alt="DwellMate" className="w-15 scale-125" />
                                <span className="text-2xl font-bold">DwellMate</span>
                            </Link>
                            <p className="max-w-xs mt-2">
                                Connecting like-minded roommates and cozy spaces — better living starts together.
                            </p>
                        </div>

                        <div className="flex gap-5 text-primary mt-4">
                            <a href="https://www.facebook.com/ameerhamzah.daiyan/" target='_blank'><FaFacebook size={25} className='hover:scale-110 hover:cursor-pointer duration-300' /></a>
                            <a href="https://www.instagram.com/ameerhamzah.d/" target='_blank'><GrInstagram size={25} className='hover:scale-110 hover:cursor-pointer duration-300' /></a>
                            <a href="https://x.com/ameerhamzahd" target='_blank'><FaXTwitter size={25} className='hover:scale-110 hover:cursor-pointer duration-300' /></a>
                            <a href="https://www.linkedin.com/in/ameerhamzahd/" target='_blank'><IoLogoLinkedin size={25} className='hover:scale-110 hover:cursor-pointer duration-300' /></a>

                        </div>
                    </div>

                    <div className="flex flex-col gap-2 md:pt-7 text-center lg:text-start">
                        <span className="footer-title">Quick Links</span>
                        <NavLink to="/" className={navLinkStyle}>
                            Home
                        </NavLink>
                        <NavLink to="/add-to-find-roommate" className={navLinkStyle}>
                            Add to Find Roommate
                        </NavLink>
                        <NavLink to="/browse-listing" className={navLinkStyle}>
                            Browse Listing
                        </NavLink>
                        {
                            user && <li><NavLink to="/my-listings" className={navLinkStyle}>My Listings</NavLink></li>
                        }
                    </div>

                    <div className="flex flex-col gap-2 md:pt-7 text-center lg:text-start">
                        <span className="footer-title">Legal</span>
                        <NavLink to="/terms" className={navLinkStyle}>
                            Terms & Condition
                        </NavLink>
                    </div>

                    <div className="flex flex-col gap-2 md:pt-7 text-center items-center lg:items-start lg:text-start">
                        <span className="footer-title">Contact</span>
                        <a className="flex items-center">
                            <FaMapMarkerAlt className="mr-3 text-primary" /> 123 Main St, New York, NY 10001
                        </a>
                        <a className="flex items-center">
                            <FaPhone className="mr-3 text-primary" /> +1 (800) 123-4567
                        </a>
                        <a className="flex items-center">
                            <FaEnvelope className="mr-3 text-primary" /> info@dwellmate.com
                        </a>
                    </div>
                </div>

                <div className="footer footer-center p-4 border-t border-base-300">
                    <div>
                        <p className="font-semibold">© 2023 <strong className="text-primary">DwellMate</strong> - All rights reserved</p>
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer
