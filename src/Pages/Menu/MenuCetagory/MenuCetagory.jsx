import Cover from "../../Shared/Cover/Cover";
import MenuItems from "../../Shared/MenuItems/MenuItems";
import PropTypes from 'prop-types';

const MenuCetagory = ({ items, title, coverimage }) => {
    return (
        <div className="mt-8">
            {title && <Cover img={coverimage} menutitle={title} subtitle={"From easy chocolate self-saucing pudding to kid-friendly jelly slice, these are the top 50 best dessert recipes as determined by you."}></Cover>}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-8">
                {
                    items.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
                }
            </div>
        </div>
    );
};

MenuCetagory.propTypes = {
    items: PropTypes.array
}
export default MenuCetagory;