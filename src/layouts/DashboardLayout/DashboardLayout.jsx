import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import Loader from '../../components/Loader/Loader';
import Footer from '../../components/Footer/Footer';
import DashboardAside from '../../components/DashboardAside/DashboardAside';
import { Helmet } from 'react-helmet-async';

const DashboardLayout = () => {

    const { state } = useNavigation();

    return (
        <div className='bg-gradient-to-tr via-violet-300 from white to'>
            <Helmet>
                <title>DwellMate | Dashboard</title>
            </Helmet>

            <ScrollToTop></ScrollToTop>

            <main className='w-full max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-5 flex-grow py-15 px-5 lg:px-0'>
                <div className='lg:col-span-1'>
                    <div className='bg-base-200 p-4 lg:sticky lg:top-15 lg:h-fit overflow-y-auto rounded-xl'>
                        <DashboardAside></DashboardAside>
                    </div>
                </div>
                <div className='lg:col-span-3'>
                    <div className='bg-transparent rounded-xl'>
                        {state === "loading" ? <Loader /> : <Outlet />}
                    </div>
                </div>
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default DashboardLayout;