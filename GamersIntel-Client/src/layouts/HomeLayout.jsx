import { Outlet } from 'react-router-dom';
import Footer from '../components/Shared/Footer';
import Navbar from '../components/Shared/Navbar';

const HomeLayout = () => {
    return (
        <div>
        <nav>
            <Navbar></Navbar>
        </nav>
        <main><Outlet></Outlet></main>
        <footer>
            <Footer></Footer>
        </footer>
        </div>
    );
};

export default HomeLayout;