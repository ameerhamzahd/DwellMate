import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../../components/Header/Navbar';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import Loader from '../../components/Loader/Loader';
import Footer from '../../components/Footer/Footer';

const MainLayout = () => {

    const { state } = useNavigation();

    return (
        <div className='bg-gradient-to-tr via-violet-300 from white to'>
            <ScrollToTop></ScrollToTop>

            <header>
                <Navbar />
            </header>

            <main>
                {state === "loading" ? <Loader /> : <Outlet />}
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default MainLayout;