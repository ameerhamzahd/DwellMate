import { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import { PiBuildingApartmentFill } from "react-icons/pi";
import { SiZillow } from "react-icons/si";
import { RiGraduationCapFill } from "react-icons/ri";
import { FaUserFriends } from "react-icons/fa";
import { IoHomeSharp, IoKeySharp } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";
import img1 from "../../assets/ceo.png"
import img2 from "../../assets/head-of-matching-algo.png"
import img3 from "../../assets/user-experience-director.png"

const TestimonialAndTeamSection = () => {
    
    const [testimonialMembers, setTestimonialMembers] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        fetch('/testimonialMembers.json')
            .then((response) => response.json())
            .then((data) => setTestimonialMembers(data))
            .catch((error) => console.error('Error fetching testimonial data:', error));
    }, []);

    const partnerLogos = [
        {
            name: "apartments.com",
            icon: <PiBuildingApartmentFill />
        },
        {
            name: "Zillow",
            icon: <SiZillow />
        },
        {
            name: "CampusHousing",
            icon: <RiGraduationCapFill />
        },
        {
            name: "RoomBuddy",
            icon: <FaUserFriends />
        },
        {
            name: "RentalHub",
            icon: <IoKeySharp />
        },
        {
            name: "HomeShare",
            icon: <IoHomeSharp />
        }
    ];

    const teamMembers = [
        {
            id: 1,
            name: "Hamza Farooq",
            position: "Co-Founder & CEO",
            image: img1
        },
        {
            id: 2,
            name: "Idris Malik",
            position: "Head of Matching Algorithm",
            image: img2
        },
        {
            id: 3,
            name: "Fahad Qureshi",
            position: "User Experience Director",
            image: img3
        }
    ];

    return (
        <div className="py-16 w-full bg-white">
            {/* Testimonials */}
            <div className="container px-4 mx-auto mb-16 max-w-5xl text-center">
                <div className="flex justify-center mb-1 text-lg font-medium md:text-xl">
                    <span className="text-3xl font-bold">TESTIMONIALS</span>
                </div>

                {testimonialMembers.length > 0 && (
                    <div className="py-8">
                        <div className="w-full carousel">
                            <div className="relative w-full carousel-item">
                                <div className="flex flex-col justify-center items-center px-4 w-full md:px-16">
                                    <blockquote className="px-8 mb-6 text-2xl font-medium text-center md:text-3xl text-primary">
                                        "{testimonialMembers[activeIndex].quote}"
                                    </blockquote>

                                    <div className="flex flex-col items-center">
                                        <p className="font-semibold text-gray-800">{testimonialMembers[activeIndex].name}</p>
                                        <p className="text-sm tracking-wider text-gray-500 uppercase">
                                            {testimonialMembers[activeIndex].position}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex absolute right-0 left-0 top-1/2 justify-between transform -translate-y-1/2">
                                    <button
                                        onClick={() =>
                                            setActiveIndex(prev => (prev === 0 ? testimonialMembers.length - 1 : prev - 1))
                                        }
                                        className="ml-2 bg-white border-none shadow-md btn btn-circle btn-sm hover:bg-gray-100"
                                    >
                                        ❮
                                    </button>
                                    <button
                                        onClick={() =>
                                            setActiveIndex(prev => (prev === testimonialMembers.length - 1 ? 0 : prev + 1))
                                        }
                                        className="mr-2 bg-white border-none shadow-md btn btn-circle btn-sm hover:bg-gray-100"
                                    >
                                        ❯
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Partner Logos Marquee */}
            <div className="overflow-hidden mx-auto mb-24 w-2/3">
                <div className="mb-8 text-xs tracking-wider text-center text-gray-500 uppercase">
                    WE'RE PROUD TO PARTNER WITH MORE THAN 100 TOP HOUSING PLATFORMS
                </div>
                <Marquee speed={40} gradientWidth={0} pauseOnHover={true} className="py-4">
                    {partnerLogos.map((logo, index) => (
                        <div key={index} className="flex flex-col justify-center items-center mx-8">
                            <div className="mb-2 text-3xl text-primary">{logo.icon}</div>
                            <span className="text-xs font-semibold text-gray-800">{logo.name}</span>
                        </div>
                    ))}
                </Marquee>
            </div>

            {/* Team Section */}
            <div className="container px-4 mx-auto max-w-5xl">
                <div className="flex justify-center items-center mb-8">
                    <div className="mr-3 w-12 h-1 bg-primary"></div>
                    <p className="text-sm font-semibold uppercase">TEAM</p>
                </div>

                <h2 className="mb-16 text-3xl font-bold text-center">
                    Global executive<br />leadership
                </h2>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {teamMembers.map((member) => (
                        <div key={member.id} className="relative group">
                            <div className="overflow-hidden relative rounded-lg shadow-lg hover:cursor-pointer">
                                <div className="flex absolute top-0 right-0 z-10 justify-center items-center w-8 h-8 bg-white rounded-bl-lg">
                                    <span className="text-xs hover:scale-110"><MdArrowOutward size={25} /></span>
                                </div>
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="object-cover w-full h-96 transition duration-300 hover:scale-105"
                                />
                                <div className="absolute right-0 bottom-0 left-0 p-4 bg-white bg-opacity-80">
                                    <div className="mb-1 text-xs tracking-wider text-gray-500 uppercase">
                                        {member.position}
                                    </div>
                                    <div className="font-bold text-gray-900">{member.name}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TestimonialAndTeamSection;
