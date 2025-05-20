import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../../components/Header/Navbar';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import Loader from '../../components/Loader/Loader';
import Footer from '../../components/Footer/Footer';

const MainLayout = () => {

    const { state } = useNavigation();

    return (
        <div className='bg-gradient-to-tr from white to via-violet-300'>
            <ScrollToTop></ScrollToTop>

            <header>
                <Navbar></Navbar>
            </header>

            <main>
                {
                    state == "loading" ? <Loader></Loader> : <Outlet></Outlet>
                }
            </main>

            <footer>
                <Footer></Footer>
            </footer>

        </div>
    );
};

export default MainLayout;