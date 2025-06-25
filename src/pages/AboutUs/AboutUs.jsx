import React from 'react';
import { Helmet } from 'react-helmet-async';

const AboutUs = () => {
    return (
        <div>
            <div className="text-gray-800 bg-gradient-to-tr from-white to-violet-200 pt-30 pb-15">
                <Helmet>
                    <title>DwellMate | About Us</title>
                </Helmet>

                <div className="space-y-5 pb-15">
                    <h1 className="text-4xl font-bold text-center text-primary">About Us</h1>
                    <p className="text-center text-gray-500">Creating a community where modesty meets comfort</p>
                </div>

                <div className="p-10 mx-auto space-y-8 rounded-xl border border-gray-300 shadow-xl backdrop-blur-md max-w-11/12 lg:max-w-5xl bg-white/80">
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold">Our Mission</h2>
                        <p>
                            At DwellMate, our mission is simple: to help you find respectful, culturally conscious roommates and
                            modest living spaces that feel like home. We believe that everyone deserves to live in an environment
                            that reflects their values.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold">What We Offer</h2>
                        <ul className="pl-6 space-y-1 list-disc">
                            <li>A halal platform for finding roommates and listings</li>
                            <li>Filtered properties based on availability and rent</li>
                            <li>Real-time communication and interaction tools</li>
                            <li>A secure and respectful environment for all users</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold">Why Choose DwellMate?</h2>
                        <p>
                            Unlike general roommate finders, DwellMate focuses on building a values-based community.
                            We don’t allow free-mixing or promotion of unethical lifestyles. We prioritize trust,
                            modesty, and safe connections for students, professionals, and families alike.
                        </p>
                    </section>

                    <section className="pt-6 space-y-4 border-t border-gray-300">
                        <p className="font-medium text-center text-gray-600">
                            DwellMate is more than an app — it’s a safe space for mindful living. Join us today.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
