import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout/MainLayout";
import NotFound from "../pages/NotFound/NotFound";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import AddToFindRoommate from "../pages/AddToFindRoommate/AddToFindRoommate";
import BrowseListing from "../pages/BrowseListing/BrowseListing";
import MyListings from "../pages/MyListings/MyListings";
import Register from "../pages/Register/Register";
import PropertyDetails from "../components/PropertyDetails/PropertyDetails";

const router = createBrowserRouter(
    [
        {
            path: "/",
            Component: MainLayout,
            errorElement: <NotFound></NotFound>,
            children: [
                {
                    index: true,
                    Component: Home
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
                    loader: () => fetch("http://localhost:3000/properties")
                },
                {
                    path: "/my-listings",
                    Component: MyListings
                },
                {
                    path: "properties/:id",
                    Component: PropertyDetails,
                    loader: () => fetch("http://localhost:3000/properties")
                },
            ]
        }
    ]
)

export default router;