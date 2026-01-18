import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import NotAvailable from "../components/Shared/NotAvailable";
import RegistrationPage from "../components/Registration/RegistrationPage";
import LoginPage from "../components/Registration/LoginPage";
import Hero from "../components/home/Hero";
import Solution from "../components/home/Solution";
import Features from "../components/home/Features";
import CTA from "../components/home/CTA";
const router = createBrowserRouter([
{
    path:"/",
    element: <HomeLayout></HomeLayout>,
    children:[
        {
            index: true,
            element:<>
            <Hero></Hero>,
            <Solution></Solution>,
            <Features></Features>,
            <CTA></CTA>
            </>
        },
        {
            path:"/login",
            element: <LoginPage></LoginPage>
        },
        {
            path:"/registration",
            element: <RegistrationPage></RegistrationPage>  ,
        },
        {
            path:"/*",
            element:<NotAvailable></NotAvailable>
        },
    ]
}
])
export default router;