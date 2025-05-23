import React from 'react';
import BannerSlider from '../../components/BannerSlider/BannerSlider';
import Mission from '../../components/Mission/MIssion';
import TestimonialAndTeamSection from '../../components/TestimonialTeamSection/TestimonialTeamSection';
import { useLoaderData } from 'react-router';
import { Helmet } from 'react-helmet-async';
import AvailableCard from '../../components/AvailableCard/AvailableCard';

const Home = () => {

    const availableData = useLoaderData();

    return (
        <div>
            <Helmet>
                <title>DwellMate | Home</title>
            </Helmet>

            <BannerSlider></BannerSlider>

            <div className='mx-auto max-w-11/12'>
                <div className='py-10 space-y-5 text-center px-5'>
                    <h2 className="text-3xl font-bold">Featured Available Roommates</h2>
                    <span className="text-gray-500">Only listings marked ‘Available’ — no guesswork, just options.</span>
                </div>

                <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        availableData.map(data => <AvailableCard key={data._id} data={data}></AvailableCard>)
                    }
                </div>
            </div>

            <Mission></Mission>

            <TestimonialAndTeamSection></TestimonialAndTeamSection>
        </div>
    );
};

export default Home;