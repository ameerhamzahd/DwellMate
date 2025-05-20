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
            name: "Derek Daniels",
            position: "Co-Founder & CEO",
            image: img1
        },
        {
            id: 2,
            name: "Andrew Sanders",
            position: "Head of Matching Algorithm",
            image: img2
        },
        {
            id: 3,
            name: "Floyd Miller",
            position: "User Experience Director",
            image: img3
        }
    ];

    return (
        <div className="w-full bg-white py-16">
            {/* Testimonials */}
            <div className="container mx-auto px-4 max-w-5xl text-center mb-16">
                <div className="text-lg md:text-xl font-medium mb-1 flex justify-center">
                    <span className="inline-block w-1 h-1 rounded-full bg-gray-500 self-center mr-2"></span>
                    <span className="text-gray-500">TESTIMONIALS</span>
                </div>

                {testimonialMembers.length > 0 && (
                    <div className="py-8">
                        <div className="carousel w-full">
                            <div className="carousel-item relative w-full">
                                <div className="flex flex-col items-center justify-center w-full px-4 md:px-16">
                                    <blockquote className="text-2xl md:text-3xl font-medium text-center mb-6 text-primary">
                                        "{testimonialMembers[activeIndex].quote}"
                                    </blockquote>

                                    <div className="flex flex-col items-center">
                                        <p className="font-semibold text-gray-800">{testimonialMembers[activeIndex].name}</p>
                                        <p className="text-sm text-gray-500 uppercase tracking-wider">
                                            {testimonialMembers[activeIndex].position}
                                        </p>
                                    </div>
                                </div>

                                <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2">
                                    <button
                                        onClick={() =>
                                            setActiveIndex(prev => (prev === 0 ? testimonialMembers.length - 1 : prev - 1))
                                        }
                                        className="btn btn-circle btn-sm bg-white border-none shadow-md hover:bg-gray-100 ml-2"
                                    >
                                        ❮
                                    </button>
                                    <button
                                        onClick={() =>
                                            setActiveIndex(prev => (prev === testimonialMembers.length - 1 ? 0 : prev + 1))
                                        }
                                        className="btn btn-circle btn-sm bg-white border-none shadow-md hover:bg-gray-100 mr-2"
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
            <div className="w-2/3 mx-auto overflow-hidden mb-24">
                <div className="text-xs text-center text-gray-500 uppercase tracking-wider mb-8">
                    WE'RE PROUD TO PARTNER WITH MORE THAN 100 TOP HOUSING PLATFORMS
                </div>
                <Marquee speed={40} gradientWidth={0} pauseOnHover={true} className="py-4">
                    {partnerLogos.map((logo, index) => (
                        <div key={index} className="flex flex-col items-center justify-center mx-8">
                            <div className="text-3xl mb-2 text-primary">{logo.icon}</div>
                            <span className="text-xs font-semibold text-gray-800">{logo.name}</span>
                        </div>
                    ))}
                </Marquee>
            </div>

            {/* Team Section */}
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="flex items-center justify-center mb-8">
                    <div className="w-12 h-1 bg-primary mr-3"></div>
                    <p className="text-sm font-semibold uppercase">TEAM</p>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                    Global executive<br />leadership
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {teamMembers.map((member) => (
                        <div key={member.id} className="relative group">
                            <div className="relative overflow-hidden rounded-lg shadow-lg hover:cursor-pointer">
                                <div className="absolute top-0 right-0 w-8 h-8 bg-white rounded-bl-lg z-10 flex items-center justify-center">
                                    <span className="text-xs"><MdArrowOutward size={25} /></span>
                                </div>
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-96 object-cover hover:scale-105 transition duration-300"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-80 p-4">
                                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
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
