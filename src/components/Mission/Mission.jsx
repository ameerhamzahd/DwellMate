import React from 'react';
import { useState, useEffect } from "react";
import CountUp from "react-countup";
import { FaPlus } from 'react-icons/fa6';
import { MdOutlineDiamond, MdOutlineRocketLaunch } from 'react-icons/md';
import img1 from "../../assets/elevated-view-two-man-reading-books-holding-juice-jar.png";
import img2 from "../../assets/roommates-enjoying-shared-space.png"

const Mission = () => {

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Show elements when component mounts
        setVisible(true);
    }, []);

    return (
        <div>
            <div className="container mx-auto px-4 py-12 max-w-6xl">
                {/* Main Heading */}
                <h1 className="text-5xl md:text-6xl font-bold mb-16 text-center md:text-left leading-tight">
                    The most trusted platform
                    <br /> for finding compatible
                    <br /> roommates worldwide
                </h1>

                {/* Vision and Mission */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <div>
                        <div className="flex items-center mb-4">
                            <div className="text-2xl mr-2"><MdOutlineDiamond /></div>
                            <h2 className="text-xl font-bold">Our vision</h2>
                        </div>
                        <p className="text-gray-700 font-medium">
                            To connect people with ideal roommates through a secure, reliable platform that makes shared living more accessible and enjoyable.
                        </p>
                    </div>

                    <div>
                        <div className="flex items-center mb-4">
                            <div className="text-2xl mr-2"><MdOutlineRocketLaunch /></div>
                            <h2 className="text-xl font-bold">Our mission</h2>
                        </div>
                        <p className="text-gray-700 font-medium">
                            Our matching system is designed to bring together compatible roommates based on lifestyle, preferences, and habits, ensuring harmonious shared living experiences.
                        </p>
                    </div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Building Image */}
                    <div className="md:col-span-1 rounded-xl overflow-hidden shadow-lg h-96 md:h-auto">
                        <img
                            src={img1}
                            alt="Modern shared apartment"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Stats Grid */}
                    <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Global Reach */}
                        <div className="bg-gray-50 p-8 rounded-xl">
                            <div className="text-xs font-bold tracking-widest mb-6 text-gray-900">
                                CITIES COVERED
                            </div>
                            <div className="flex items-baseline">
                                <span className="text-6xl font-bold">
                                    {visible && (
                                        <CountUp
                                            end={85}
                                            duration={2.5}
                                            enableScrollSpy
                                        />
                                    )}
                                </span>
                                <span className="text-5xl text-primary font-bold ml-1"><FaPlus size={30} /></span>
                            </div>
                            <div className="mt-2 text-primary">major cities worldwide</div>
                        </div>

                        {/* Local Expertise */}
                        <div className="bg-gray-50 p-8 rounded-xl">
                            <div className="text-xs font-bold tracking-widest mb-6 text-gray-900">
                                ACTIVE USERS
                            </div>
                            <div className="flex items-baseline">
                                <span className="text-6xl font-bold">
                                    {visible && (
                                        <CountUp
                                            end={1500}
                                            duration={2.5}
                                            enableScrollSpy
                                        />
                                    )}
                                </span>
                                <span className="text-5xl font-bold ml-1 text-primary"><FaPlus size={30} /></span>
                            </div>
                            <div className="mt-2 text-primary">active monthly users</div>
                        </div>

                        {/* Our Impact */}
                        <div className="bg-gray-50 p-8 rounded-xl">
                            <div className="text-xs font-bold tracking-widest mb-6 text-gray-900">
                                SUCCESSFUL MATCHES
                            </div>
                            <div className="flex items-baseline">
                                <span className="text-6xl font-bold">
                                    {visible && (
                                        <CountUp
                                            end={248}
                                            duration={2.5}
                                            enableScrollSpy
                                        />
                                    )}
                                </span>
                                <span className="text-5xl text-primary font-bold ml-1"><FaPlus size={30} /></span>
                            </div>
                            <div className="mt-2 text-primary">roommate matches made</div>
                        </div>

                        {/* Building Model Image */}
                        <div className="bg-gray-50 rounded-xl overflow-hidden">
                            <img
                                src={img2}
                                alt="Roommates enjoying shared space"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mission;