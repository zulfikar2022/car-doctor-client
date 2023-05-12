
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import NabBar from '../pages/Shared/NavBar/NavBar';

const Main = () => {
    return (
        <div>
            <NabBar></NabBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;