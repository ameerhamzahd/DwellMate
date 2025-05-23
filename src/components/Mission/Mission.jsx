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
            <div className="container px-4 py-12 mx-auto max-w-6xl">
                {/* Main Heading */}
                <h1 className="mb-16 text-5xl font-bold leading-tight text-center">
                    The most trusted platform
                    <br /> for finding compatible
                    <br /> roommates worldwide
                </h1>

                {/* Vision and Mission */}
                <div className="grid grid-cols-1 gap-8 mb-16 md:grid-cols-2">
                    <div className='px-5 md:px-0'>
                        <div className="flex items-center mb-4">
                            <div className="mr-2 text-2xl"><MdOutlineDiamond /></div>
                            <h2 className="text-xl font-bold">Our vision</h2>
                        </div>
                        <p className="font-medium text-gray-700">
                            To connect people with ideal roommates through a secure, reliable platform that makes shared living more accessible and enjoyable.
                        </p>
                    </div>

                    <div className='px-5 md:px-0'>
                        <div className="flex items-center mb-4">
                            <div className="mr-2 text-2xl"><MdOutlineRocketLaunch /></div>
                            <h2 className="text-xl font-bold">Our mission</h2>
                        </div>
                        <p className="font-medium text-gray-700">
                            Our matching system is designed to bring together compatible roommates based on lifestyle, preferences, and habits, ensuring harmonious shared living experiences.
                        </p>
                    </div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {/* Building Image */}
                    <div className="overflow-hidden h-96 rounded-xl shadow-lg md:col-span-1 md:h-auto">
                        <img
                            src={img1}
                            alt="Modern shared apartment"
                            className="object-cover w-full h-full"
                        />
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 gap-6 md:col-span-2 sm:grid-cols-2">
                        {/* Global Reach */}
                        <div className="p-8 bg-gray-50 rounded-xl">
                            <div className="mb-6 text-xs font-bold tracking-widest text-gray-900">
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
                                <span className="ml-1 text-5xl font-bold text-primary"><FaPlus size={30} /></span>
                            </div>
                            <div className="mt-2 text-primary">major cities worldwide</div>
                        </div>

                        {/* Local Expertise */}
                        <div className="p-8 bg-gray-50 rounded-xl">
                            <div className="mb-6 text-xs font-bold tracking-widest text-gray-900">
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
                                <span className="ml-1 text-5xl font-bold text-primary"><FaPlus size={30} /></span>
                            </div>
                            <div className="mt-2 text-primary">active monthly users</div>
                        </div>

                        {/* Our Impact */}
                        <div className="p-8 bg-gray-50 rounded-xl">
                            <div className="mb-6 text-xs font-bold tracking-widest text-gray-900">
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
                                <span className="ml-1 text-5xl font-bold text-primary"><FaPlus size={30} /></span>
                            </div>
                            <div className="mt-2 text-primary">roommate matches made</div>
                        </div>

                        {/* Building Model Image */}
                        <div className="overflow-hidden bg-gray-50 rounded-xl">
                            <img
                                src={img2}
                                alt="Roommates enjoying shared space"
                                className="object-cover w-full h-full rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mission;