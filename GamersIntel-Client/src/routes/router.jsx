import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import NotAvailable from "../components/Shared/NotAvailable";
import RegistrationPage from "../components/Registration/RegistrationPage";
import LoginPage from "../components/Registration/LoginPage";
import Hero from "../components/home/Hero";
import Solution from "../components/home/Solution";
import Features from "../components/home/Features";
import CTA from "../components/home/CTA";
import PublicRoute from "../Authentication/PublicRoute";
import Dashboard from "../components/user/Dashboard";
import Profile from "../components/user/Profile";
import Messages from "../components/user/Messages";
import ForgotPassword from "../components/Registration/ForgotPassword";
import About from "../components/Static/About";
import Privacy from "../components/Static/Privacy";
import Terms from "../components/Static/Terms";
import Contact from "../components/Static/Contact";
import FAQ from "../components/Static/FAQ";
import Games from "../components/user/Games";
import PrivateRoute from "../Authentication/PrivateRoute";
import GamesDetails from "../components/user/GamesDetails";
const router = createBrowserRouter([
{
    path:"/",
    element: <HomeLayout></HomeLayout>,
    children:[
        {
            index: true,
            element:<>
            <Hero></Hero>
            <Solution></Solution>
            <Features></Features>
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
            element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>  ,
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
            path:"/forgot-password",
            element: <ForgotPassword></ForgotPassword> ,
        },
        {
            path:"/privacy",
            element: <Privacy></Privacy> ,
        },
        {
            path:"/about",
            element: <About></About> ,
        },
        {
            path:"/terms",
            element: <Terms></Terms> ,
        },
        {
            path:"/contact",
            element: <Contact></Contact> ,
        },
        {
            path:"/faq",
            element: <FAQ></FAQ> ,
        },
        {
            path:"/games",
            element: <Games></Games> ,
        },
        {
            path:"/games/:id",
            element: <GamesDetails></GamesDetails>,
        },
        {
            path:"/*",
            element:<NotAvailable></NotAvailable>
        },
    ]
}
])
export default router;