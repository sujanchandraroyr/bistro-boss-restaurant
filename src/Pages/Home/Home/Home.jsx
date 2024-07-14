import { Helmet } from "react-helmet-async";
import BistroBoss from "../../../components/BistroBoss/BistroBoss";
import OrderOnline from "../../../components/OrderOnline/OrderOnline";
import PopularManu from "../../../components/PopularManu/PopularManu";
import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Fetured from "../Fetured/Fetured";
import Recommends from "../Recommends/Recommends";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Helmet>
            <title>Bistro Boss Home</title>
            </Helmet>
            <Banner></Banner>
            <BistroBoss></BistroBoss>
            <OrderOnline></OrderOnline>
            <PopularManu></PopularManu>
            <CallUs></CallUs>
            <Recommends></Recommends>
            <Fetured></Fetured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;