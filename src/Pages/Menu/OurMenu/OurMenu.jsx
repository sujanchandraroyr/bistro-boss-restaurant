import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import ourMenuimg from "../../../assets/menu/banner3.jpg";
import PopularManu from "../../../components/PopularManu/PopularManu";

const OurMenu = () => {
    
       return (
        <div>
            <Helmet>
                <title>Bistro Boss | OurMenu</title>
            </Helmet>
            
            <Cover img={ourMenuimg} menutitle={'OUR MENU'} subtitle={"Would you like to try a dish?"}></Cover>
            <PopularManu></PopularManu>
            <Cover img={ourMenuimg} menutitle={'OUR MENU'} subtitle={"Would you like to try a dish?"}></Cover>
            <PopularManu></PopularManu>
            <Cover img={ourMenuimg} menutitle={'OUR MENU'} subtitle={"Would you like to try a dish?"}></Cover>
            <PopularManu></PopularManu>
            <Cover img={ourMenuimg} menutitle={'OUR MENU'} subtitle={"Would you like to try a dish?"}></Cover>
            <PopularManu></PopularManu>
            <Cover img={ourMenuimg} menutitle={'OUR MENU'} subtitle={"Would you like to try a dish?"}></Cover>
            <PopularManu></PopularManu>
        </div>
    );
};

export default OurMenu;