import FoodCard from "../../../components/FoodCard/FoodCard";
import PropTypes from 'prop-types';

const OrderTab = ({items}) => {
    console.log(typeof items)
    return (
        <div>
            <div className="grid md:grid-cols-3 gap-9">
                            {
                                items.map(item => <FoodCard key={item._id} items={item}></FoodCard>)
                            }
                        </div>
        </div>
    );
};

OrderTab.propTypes = {
    items: PropTypes.object
}
export default OrderTab;