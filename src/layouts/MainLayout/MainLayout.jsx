import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../../components/Header/Navbar';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import Loader from '../../components/Loader/Loader';

const MainLayout = () => {

    const { state } = useNavigation();

    return (
        <div>
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
                
            </footer>

        </div>
    );
};

export default MainLayout;