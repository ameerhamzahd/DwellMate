import React from 'react';
import { Link, NavLink } from 'react-router';
import { FaEnvelope, FaFacebook, FaPhone } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { GrInstagram } from "react-icons/gr";
import { FaMapMarkerAlt } from 'react-icons/fa';
import logo from "../../assets/logo.png"

const Footer = () => {

    const navLinkStyle = ({ isActive }) =>
        `relative inline-block after:block after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full ${isActive ? 'text-primary font-bold' : ''
        }`;

    return (
        <div className='bg-violet-100'>
            <footer className="p-10 rounded footer footer-horizontal footer-center text-base-content">
                <nav className="">
                    <Link to="/" className="flex gap-1 items-center text-xl font-bold">
                        <img className="scale-125 w-15" src={logo} alt="Logo" /> DwellMate
                    </Link>
                    <span className="footer-title">Legal</span>
                    <NavLink to="/terms-condition" className={navLinkStyle}>Terms & Condition</NavLink>
                </nav>

                <div className="flex flex-col gap-2 items-center text-center lg:items-start lg:text-start">
                    <span className="footer-title">Contact</span>
                    <a className="flex items-center">
                        <FaMapMarkerAlt className="mr-3 text-primary" /> 123 Main St, New York, NY 10001
                    </a>
                    <a className="flex items-center">
                        <FaPhone className="mr-3 text-primary" /> +1 (800) 123-4567
                    </a>
                    <a className="flex items-center">
                        <FaEnvelope className="mr-3 text-primary" /> info@dwellmate.org
                    </a>
                </div>

                <nav>
                    <span className="footer-title">Social</span>
                    <div className="flex gap-3 text-primary">
                        <a href="https://www.facebook.com/ameerhamzah.daiyan/" target='_blank'><FaFacebook size={25} className='duration-300 hover:scale-110 hover:cursor-pointer' /></a>
                        <a href="https://www.instagram.com/ameerhamzah.d/" target='_blank'><GrInstagram size={25} className='duration-300 hover:scale-110 hover:cursor-pointer' /></a>
                        <a href="https://x.com/ameerhamzahd" target='_blank'><FaXTwitter size={25} className='duration-300 hover:scale-110 hover:cursor-pointer' /></a>
                        <a href="https://www.linkedin.com/in/ameerhamzahd/" target='_blank'><IoLogoLinkedin size={25} className='duration-300 hover:scale-110 hover:cursor-pointer' /></a>
                    </div>
                </nav>

                <aside>
                    <p className="font-semibold">© 2023 <strong className="text-primary">DwellMate</strong> - All rights reserved</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;