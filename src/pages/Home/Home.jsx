import React from 'react';
import BannerSlider from '../../components/BannerSlider/BannerSlider';
import Mission from '../../components/Mission/MIssion';
import TestimonialAndTeamSection from '../../components/TestimonialTeamSection/TestimonialTeamSection';

const Home = () => {
    return (
        <div>
            <BannerSlider></BannerSlider>

            <Mission></Mission>

            <TestimonialAndTeamSection></TestimonialAndTeamSection>
        </div>
    );
};

export default Home;