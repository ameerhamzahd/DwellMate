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
                    loader: () => fetch("https://dwellmate-server.vercel.app/properties/listings/availability")
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
                    Component: AddToFindRoommate
                },
                {
                    path: "/browse-listing",
                    Component: BrowseListing,
                    loader: () => fetch("https://dwellmate-server.vercel.app/properties")
                },
                {
                    path: "/my-listings",
                    Component: MyListings
                },
                {
                    path: "/properties/:id",
                    Component: PropertyDetails,
                    loader: () => fetch("https://dwellmate-server.vercel.app/properties")
                },
                {
                    path: "/terms-condition",
                    Component: TermsConditon,
                    
                },
            ]
        }
    ]
)

export default router;