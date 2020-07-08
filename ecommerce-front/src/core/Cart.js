import React, {
    useState,
    useEffect
} from "react";
import {
    Link
} from "react-router-dom";
import Layout from "./Layout";
import {
    getCart
} from "./cartHelpers";
import Card from "./Card";
import Checkout from "./Checkout";

const Cart = () => {
    const [items, setItems] = useState([]);
    const [run, setRun] = useState(false);

    useEffect(() => {
        setItems(getCart());
    }, [run]);

    const showItems = (items) => {
        return ( <
            div >
            <
            h2 > {
                " "
            }
            Your cart has {
                `${items.length} `
            }
            items {
                " "
            } <
            /h2>{" "} <
            hr / > {
                " "
            } {
                items.map((product, i) => ( <
                    Card key = {
                        i
                    }
                    product = {
                        product
                    }
                    showAddToCartButton = {
                        false
                    }
                    showRemoveProductButton = {
                        true
                    }
                    cartUpdate = {
                        true
                    }
                    setRun = {
                        setRun
                    }
                    run = {
                        run
                    }
                    />
                ))
            } {
                " "
            } <
            /div>
        );
    };

    const noItemsMessage = () => ( <
        h2 >
        Your cart is empty. < br / > < Link to = "/shop" > Continue shopping < /Link>{" "} <
        /h2>
    );

    return ( <
        Layout title = "Shopping Cart"
        description = "Manage your cart items. Add remove checkout or continue shopping."
        className = "container-fluid" >
        <
        div className = "row"
        style = {
            {
                paddingLeft: "50px",
                paddingRight: "50px",
            }
        } >
        <
        div className = "col-lg-6 col-sm-12 col-md-6" > {
            " "
        } {
            items.length > 0 ? showItems(items) : noItemsMessage()
        } {
            " "
        } <
        /div>{" "} <
        div className = "col-lg-6 col-sm-12 col-md-6" >
        <
        h2 className = "mb-4" > Your cart summary < /h2> <hr / >
        <
        Checkout products = {
            items
        }
        /> <
        /div>{" "} <
        /div>{" "} <
        /Layout>
    );
};

export default Cart;