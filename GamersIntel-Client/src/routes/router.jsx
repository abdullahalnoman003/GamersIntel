import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import NotAvailable from "../components/Shared/NotAvailable";
import RegistrationPage from "../components/Registration/RegistrationPage";
import LoginPage from "../components/Registration/LoginPage";
import Hero from "../components/home/Hero";
import Solution from "../components/home/Solution";
import Features from "../components/home/Features";
import CTA from "../components/home/CTA";
import PublicRoute from "../Authentication/publicRoute";
import Dashboard from "../components/user/Dashboard";
import Profile from "../components/user/profile";
import Messages from "../components/user/Messages";
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
            element: <PublicRoute><LoginPage></LoginPage></PublicRoute>, 
        },
        {
            path:"/registration",
            element: <PublicRoute><RegistrationPage></RegistrationPage></PublicRoute>   ,
        },
        {
            path:"/dashboard",
            element: <Dashboard></Dashboard>  ,
        },
        {
            path:"/profile",
            element: <Profile></Profile>  ,
        },
        {
            path:"/messages",
            element: <Messages></Messages>  ,
        },
        {
            path:"/*",
            element:<NotAvailable></NotAvailable>
        },
    ]
}
])
export default router;