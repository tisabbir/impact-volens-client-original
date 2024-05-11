import { Outlet } from "react-router-dom";
import Nav from "../sharedComponents/Nav";
import Footer from "../sharedComponents/Footer";


const Root = () => {
    return (
        <div>
            <Nav />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;