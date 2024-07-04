
const MenuItems = ({item}) => {
const {image, name, price, recipe} = item;

    return (
        <div className="flex gap-4">
            <img className=" w-24 md:w-28 h-24 md:h-28 rounded-tr-full rounded-b-full" src={image} alt="recepe" />
            <div>
                <h2 className="text-gray-500 text-3xl">{name}</h2>
                <p className="text-gray-500">{recipe}</p>
            </div>
            <p>{price}</p>
        </div>
    );
};

export default MenuItems;