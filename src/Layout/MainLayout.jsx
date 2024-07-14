import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navber from "../Pages/Shared/Navber/Navber";


const MainLayout = () => {
    return (
        <div >
            <div className="relative">
               <div className="absolute z-50 w-full">
               <Navber></Navber>
               </div>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default MainLayout;