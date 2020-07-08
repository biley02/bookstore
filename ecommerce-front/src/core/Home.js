import React, {
    useState,
    useEffect
} from "react";
import Layout from "./Layout";
import {
    getProducts
} from "./apiCore";
import Card from "./Card";
import Search from "./Search";

const Home = () => {
    const [productsBySell, setProductsBySell] = useState([]);
    const [productsByArrival, setProductsByArrival] = useState([]);
    const [error, setError] = useState(false);

    const loadProductsBySell = () => {
        getProducts("sold").then((data) => {
            if (data.error) {
                setError(data.error);
            } else {
                setProductsBySell(data);
            }
        });
    };

    const loadProductsByArrival = () => {
        getProducts("createdAt").then((data) => {
            console.log(data);
            if (data.error) {
                setError(data.error);
            } else {
                setProductsByArrival(data);
            }
        });
    };

    useEffect(() => {
        loadProductsByArrival();
        loadProductsBySell();
    }, []);

    return ( <
        Layout title = "FullStack React Node MongoDB Ecommerce App"
        description = "Node React E-commerce App"
        className = "container-fluid" >
        <
        Search / >
        <
        h2 className = "mb-4" > New Arrivals < /h2>{" "} <
        div className = "row"
        style = {
            {
                margin: "auto",
                display: "flex",
                flexWrap: "wrap",
            }
        } >
        {
            " "
        } {
            productsByArrival.map((product, i) => ( <
                div key = {
                    i
                }
                className = "lg-4 col-md-4 col-sm-6 col-12 col-xl-3" >
                <
                Card product = {
                    product
                }
                />{" "} <
                /div>
            ))
        } {
            " "
        } <
        /div>{" "} <
        h2 className = "mb-4" > Best Sellers < /h2>{" "} <
        div className = "row"
        style = {
            {
                margin: "auto",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "baseline",
            }
        } >
        {
            " "
        } {
            productsBySell.map((product, i) => ( <
                div key = {
                    i
                }
                className = "lg-4 col-md-4 col-sm-6 col-12 col-xl-3" >
                <
                Card product = {
                    product
                }
                />{" "} <
                /div>
            ))
        } {
            " "
        } <
        /div>{" "} <
        /Layout>
    );
};

export default Home;