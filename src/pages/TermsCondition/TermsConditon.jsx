import React from 'react';
import { Helmet } from 'react-helmet-async';

const TermsConditon = () => {
    return (
        <div>
            <div className="bg-gradient-to-tr from white to via-violet-300 text-gray-800 pt-30 pb-15">
                <Helmet>
                    <title>DwellMate | Terms & Conditions</title>
                </Helmet>

                <div className='pb-15 space-y-5'>
                    <h1 className="text-4xl font-bold text-center text-primary">Terms & Conditions</h1>
                    <p className="text-center text-gray-500">Effective Date: May 23, 2025</p>
                </div>

                <div className="max-w-11/12 lg:max-w-5xl mx-auto bg-white/80 backdrop-blur-md border border-gray-300 rounded-xl shadow-xl p-10 space-y-8">
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold">1. Eligibility</h2>
                        <p>
                            You must be 18 years or older to use DwellMate. You agree to provide truthful, current, and complete information
                            in all listings and not impersonate any other person or entity.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold">2. Community Standards</h2>
                        <p>
                            DwellMate promotes respectful and culturally modest housing environments. All users must:
                        </p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Refrain from posting inappropriate, vulgar, or suggestive content.</li>
                            <li>Respect ethical living standards — no LGBTQ+, alcohol, party, or free-mixing promotions.</li>
                            <li>Honor cultural, religious, and personal boundaries of potential roommates.</li>
                            <li>Avoid harassment, hate speech, or discriminatory behavior.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold">3. User Responsibilities</h2>
                        <p>
                            Users are solely responsible for their listings and any interactions that result from them. Always verify property
                            and identity before any meeting or agreement.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold">4. Listings & Content</h2>
                        <p>
                            All content posted must be truthful and appropriate. DwellMate reserves the right to remove listings that violate
                            our community values or appear unsafe.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold">5. Prohibited Activities</h2>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Scams, impersonation, or false listings.</li>
                            <li>Promotion of offensive or culturally insensitive material.</li>
                            <li>Unsolicited commercial ads or spam.</li>
                            <li>Misuse of other users' personal information.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold">6. Privacy</h2>
                        <p>
                            We respect your privacy and only use your data to enhance your experience on the platform. We never sell user data
                            to third parties. Read our Privacy Policy for more.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold">7. Limitation of Liability</h2>
                        <p>
                            DwellMate is a listing service, not a housing agent or landlord. We are not responsible for disputes, damages,
                            or issues arising between roommates. Use caution and discretion.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold">8. Modifications to Terms</h2>
                        <p>
                            We reserve the right to update these terms periodically. Continued use of DwellMate indicates agreement with the
                            most recent version.
                        </p>
                    </section>

                    <section className="space-y-4 pt-6 border-t border-gray-300">
                        <p className="text-center font-medium text-gray-600">
                            DwellMate is built for trust, modesty, and community. Thank you for respecting our values.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TermsConditon;