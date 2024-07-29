import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import ourShopimg from "../../assets/shop/banner2.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../hooks/useMenu";
import { useState } from "react";
import OrderTab from "./OrderTab/OrderTab";

const OurShoap = () => {
    const [menu] = useMenu();
    const deserts = menu.filter(item => item.category === 'dessert')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    const pizza = menu.filter(item => item.category === 'pizza')
    const drinks = menu.filter(item => item.category === 'drinks')

    const [tabIndex, setTabIndex] = useState(0);

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | OurShoap</title>
            </Helmet>
            <div>
                <Cover img={ourShopimg} menutitle={'OUR SHOP'} subtitle={'Would you like to try a dish?'}></Cover>
            </div>
            <div className="text-center my-8">
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>SALADS</Tab>
                        <Tab>PIZZA</Tab>
                        <Tab>SOUPS</Tab>
                        <Tab>DESERTS</Tab>
                        <Tab>DRINKS</Tab>
                    </TabList>
                    <TabPanel>
                        <OrderTab items={salad}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={pizza}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={soup}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={deserts}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={drinks}></OrderTab>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default OurShoap;