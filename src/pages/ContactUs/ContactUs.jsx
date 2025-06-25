import React from 'react';
import { Helmet } from 'react-helmet-async';

const ContactUs = () => {
    return (
        <div>
            <div className="text-gray-800 bg-gradient-to-tr from-white to-violet-200 pt-30 pb-15">
                <Helmet>
                    <title>DwellMate | Contact Us</title>
                </Helmet>

                <div className="space-y-5 pb-15">
                    <h1 className="text-4xl font-bold text-center text-primary">Contact Us</h1>
                    <p className="text-center text-gray-500">Let’s connect — We’re here to help</p>
                </div>

                <div className="p-10 mx-auto space-y-8 rounded-xl border border-gray-300 shadow-xl backdrop-blur-md max-w-11/12 lg:max-w-4xl bg-white/80">
                    <section className="space-y-4 text-center">
                        <h2 className="text-2xl font-semibold">Get in Touch</h2>
                        <p>
                            Have questions, feedback, or need support? Feel free to reach out to us. Our team is always here to listen and respond.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-semibold">Email</h2>
                        <p className="font-medium text-primary">info@dwellmate.org</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-semibold">Location</h2>
                        <p>New York, United States of America</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-semibold">Social Media</h2>
                        <p className="text-gray-600">Coming soon on Instagram, LinkedIn, and YouTube</p>
                    </section>

                    <section className="pt-6 space-y-4 text-center border-t border-gray-300">
                        <p className="text-gray-600">
                            Your satisfaction matters. We aim to respond to all queries within 24–48 hours.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
