import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import saladimg from '../../../assets/menu/salad-bg.jpg';

const Recommends = () => {
    return (
        <div className="my-14 md:my-28 space-y-9">
            <SectionTitle
                heading={'Should Try'}
                subHeading={'CHEF RECOMMENDS'}
            ></SectionTitle>
            <div className=" md:grid grid-cols-3 gap-5 ">
                <div>
                    <div className="card bg-gray-100 w-96 shadow-xl">
                        <figure className="">
                            <img
                                src={saladimg}
                                alt="salad"
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Caeser Salad</h2>
                            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                            <div className="card-actions border-b-2 border-orange-900 rounded-md">
                                <button className="btn btn-ghost border-none ">add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card bg-gray-100 w-96 shadow-xl">
                        <figure className="">
                            <img
                                src={saladimg}
                                alt="salad"
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Caeser Salad</h2>
                            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                            <div className="card-actions border-b-2 border-orange-900 rounded-md">
                                <button className="btn btn-ghost border-none ">add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card bg-gray-100 w-96 shadow-xl">
                        <figure className="">
                            <img
                                src={saladimg}
                                alt="salad"
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Caeser Salad</h2>
                            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                            <div className="card-actions border-b-2 border-orange-900 rounded-md">
                                <button className="btn btn-ghost border-none ">add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Recommends;