import BistroBoss from "../../../components/BistroBoss/BistroBoss";
import OrderOnline from "../../../components/OrderOnline/OrderOnline";
import PopularManu from "../../../components/PopularManu/PopularManu";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BistroBoss></BistroBoss>
            <OrderOnline></OrderOnline>
            <PopularManu></PopularManu>
        </div>
    );
};

export default Home;