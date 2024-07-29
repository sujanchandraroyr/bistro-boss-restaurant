import PropTypes from 'prop-types';

const FoodCard = ({ items }) => {
    console.log( items)
    const {image, name, recipe, price} = items;
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure className="px-10 pt-10 relative">
                    <img
                        src={image}
                        alt="salad"
                        className="rounded-xl" />
                        <p className='absolute top-12 right-14 bg-black text-white font-semibold px-2 py-1 rounded'>{price}</p>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Add to Card</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

FoodCard.propTypes = {
    items: PropTypes.object
}

export default FoodCard;