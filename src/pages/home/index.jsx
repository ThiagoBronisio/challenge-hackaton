import Navbar from './Navbar.jsx';
import Main from './Main.jsx';
import { Outlet, useLocation } from 'react-router-dom';

const Home = () => {

    const location = useLocation();
    return (
        <>
            <Navbar />
            {location.pathname === "/" && <Main />}
            <Outlet />
        </>

    )
}

export default Home;