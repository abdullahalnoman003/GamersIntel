import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import NotAvailable from "../components/NotAvailable";
const router = createBrowserRouter([
{
    path:"/",
    element: <HomeLayout></HomeLayout>,
    children:[
        {
            index: true,
            element:<></>
        },
        {
            path:"/*",
            element:<NotAvailable></NotAvailable>
        },
    ]
}
])
export default router;