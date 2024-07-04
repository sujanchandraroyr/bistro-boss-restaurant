import BistroBoss from "../../../components/BistroBoss/BistroBoss";
import OrderOnline from "../../../components/OrderOnline/OrderOnline";
import PopularManu from "../../../components/PopularManu/PopularManu";
import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Fetured from "../Fetured/Fetured";
import Recommends from "../Recommends/Recommends";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BistroBoss></BistroBoss>
            <OrderOnline></OrderOnline>
            <PopularManu></PopularManu>
            <CallUs></CallUs>
            <Recommends></Recommends>
            <Fetured></Fetured>
        </div>
    );
};

export default Home;