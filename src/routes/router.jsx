import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout/MainLayout";
import NotFound from "../pages/NotFound/NotFound";
import Home from "../pages/Home/Home";

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
                }
            ]
        }
    ]
)

export default router;