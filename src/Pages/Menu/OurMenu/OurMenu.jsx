import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import ourMenuimg from "../../../assets/menu/banner3.jpg";
import dessertimg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaimg from "../../../assets/menu/pizza-bg.jpg";
import saladimg from "../../../assets/menu/salad-bg.jpg";
import soupimg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCetagory from "../MenuCetagory/MenuCetagory";

const OurMenu = () => {
    const [menu] = useMenu();
    const deserts = menu.filter(item => item.category === 'dessert')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')


    return (
        <div>
            <Helmet>
                <title>Bistro Boss | OurMenu</title>
            </Helmet>

            <Cover img={ourMenuimg} menutitle={'OUR MENU'} subtitle={"Would you like to try a dish?"}></Cover>
            <SectionTitle heading="Don't miss" subHeading='To days offer'></SectionTitle>
            {/*offered menu items*/}
            <MenuCetagory items={offered}></MenuCetagory>
            {/*dessert menu items*/}
            <MenuCetagory items={deserts} title='DESSERTS' coverimage={dessertimg}></MenuCetagory>
            {/*pizza menu items*/}
            <MenuCetagory items={pizza} title='PIZZA' coverimage={pizzaimg}></MenuCetagory>
            {/*salad menu items*/}
            <MenuCetagory items={salad} title='SALADS' coverimage={saladimg}></MenuCetagory>
            {/*soup menu items*/}
            <MenuCetagory items={soup} title='SOUPS' coverimage={soupimg}></MenuCetagory>


        </div>
    );
};

export default OurMenu;