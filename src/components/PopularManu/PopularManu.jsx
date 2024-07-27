
import SectionTitle from "../SectionTitle/SectionTitle";
import MenuItems from "../../Pages/Shared/MenuItems/MenuItems";
import useMenu from "../../hooks/useMenu";

const PopularManu = () => {
    // const [menu, setManu] = useState([]);
    // useEffect(() => {
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         const popularItems = data.filter(item => item.category === 'popular');
    //         setManu(popularItems);
    //     })
    // },[])
    const [menu, ] = useMenu();
    const popularMenu = menu.filter(item => item.category === 'popular')
    return (
        <section className="mb-12">
            <SectionTitle
            heading={'Check it out'}
            subHeading={'FROM OUR MENU'}
            ></SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {
                    popularMenu.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
                }
            </div>

        </section>
    );
};

export default PopularManu;