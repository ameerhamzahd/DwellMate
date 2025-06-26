import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout/MainLayout";
import NotFound from "../pages/NotFound/NotFound";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import AddToFindRoommate from "../pages/AddToFindRoommate/AddToFindRoommate";
import BrowseListing from "../pages/BrowseListing/BrowseListing";
import MyListings from "../pages/MyListings/MyListings";
import Register from "../pages/Register/Register";
import PropertyDetails from "../pages/PropertyDetails/PropertyDetails";
import TermsConditon from "../pages/TermsCondition/TermsConditon";
import Loader from "../components/Loader/Loader";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import AboutUs from "../pages/AboutUs/AboutUs";
import ContactUs from "../pages/ContactUs/ContactUs";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import DashboardOverview from "../pages/DashboardOverview/DashboardOverview";

const router = createBrowserRouter(
    [
        {
            path: "/",
            Component: MainLayout,
            errorElement: <NotFound></NotFound>,
            children: [
                {
                    index: true,
                    Component: Home,
                    loader: () => fetch("https://dwellmate-server.vercel.app/properties/listings/availability"),
                    hydrateFallbackElement: Loader
                },
                {
                    path: "/login",
                    Component: Login
                },
                {
                    path: "/register",
                    Component: Register
                },
                {
                    path: "/add-to-find-roommate",
                    element:
                        <PrivateRoute>
                            <AddToFindRoommate></AddToFindRoommate>
                        </PrivateRoute>
                },
                {
                    path: "/browse-listing",
                    Component: BrowseListing,
                    loader: () => fetch("https://dwellmate-server.vercel.app/properties"),
                    hydrateFallbackElement: Loader
                },
                {
                    path: "/my-listings",
                    element:
                        <PrivateRoute>
                            <MyListings></MyListings>
                        </PrivateRoute>,
                    loader: () => fetch("https://dwellmate-server.vercel.app/properties/user/:email"),
                    hydrateFallbackElement: Loader
                },
                {
                    path: "/properties/:id",
                    element:
                        <PrivateRoute>
                            <PropertyDetails></PropertyDetails>
                        </PrivateRoute>,
                    loader: () => fetch("https://dwellmate-server.vercel.app/properties"),
                    hydrateFallbackElement: Loader
                },
                {
                    path: "/terms-condition",
                    Component: TermsConditon,
                },
                {
                    path: "/about-us",
                    Component: AboutUs,
                },
                {
                    path: "/contact-us",
                    Component: ContactUs,
                },
            ]
        },
        {
            path: "/dashboard",
            element:
                <PrivateRoute>
                    <DashboardLayout></DashboardLayout>
                </PrivateRoute>,
            errorElement: <NotFound></NotFound>,
            children: [
                {
                    index: true,
                    Component: DashboardOverview,
                    // loader: () => fetch("https://dwellmate-server.vercel.app/properties/listings/availability"),
                    // hydrateFallbackElement: Loader
                },
            ]
        }
    ]
)

export default router;