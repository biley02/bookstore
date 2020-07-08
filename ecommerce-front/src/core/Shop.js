import React, {
    PureComponent,
    useState,
    useEffect
} from "react";
import Layout from "./Layout";
import Card from "./Card";
import {
    getCategories,
    getFilteredProducts
} from "./apiCore";
import Checkbox from "./Checkbox";

const Shop = () => {
    const [myFilters, setMyFilters] = useState({
        filters: {
            category: [],
        },
    });
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(false);
    const [limit, setLimit] = useState(6);
    const [skip, setSkip] = useState(0);
    const [size, setSize] = useState(0);
    const [filteredResults, setFilteredResults] = useState([]);

    const init = () => {
        getCategories().then((data) => {
            if (data.error) {
                setError(data.error);
            } else {
                setCategories(data);
            }
        });
    };

    const loadFilteredResults = (newFilters) => {
        // console.log(newFilters);
        getFilteredProducts(skip, limit, newFilters).then((data) => {
            if (data.error) {
                setError(data.error);
            } else {
                setFilteredResults(data.data);
                setSize(data.size);
                setSkip(0);
            }
        });
    };

    const loadMore = () => {
        let toSkip = skip + limit;
        // console.log(newFilters);
        getFilteredProducts(toSkip, limit, myFilters.filters).then((data) => {
            if (data.error) {
                setError(data.error);
            } else {
                setFilteredResults([...filteredResults, ...data.data]);
                setSize(data.size);
                setSkip(toSkip);
            }
        });
    };

    const loadMoreButton = () => {
        return (
            size > 0 &&
            size >= limit && ( <
                button onClick = {
                    loadMore
                }
                className = "btn btn-warning mb-5" >
                Load more {
                    " "
                } <
                /button>
            )
        );
    };

    useEffect(() => {
        init();
        loadFilteredResults(skip, limit, myFilters.filters);
    }, []);

    const handleFilters = (filters, filterBy) => {
        const newFilters = {...myFilters
        };
        newFilters.filters[filterBy] = filters;

        loadFilteredResults(myFilters.filters);
        setMyFilters(newFilters);
    };

    return ( <
        Layout title = "Shop Page"
        description = "Search and find clothing of your choice"
        className = "container-fluid" >
        <
        div className = "row" >
        <
        div className = "col-2 " >
        <
        h4 > Filter < /h4>{" "} <
        ul >
        <
        Checkbox categories = {
            categories
        }
        handleFilters = {
            (filters) => handleFilters(filters, "category")
        }
        />{" "} <
        /ul>{" "} <
        /div>{" "} <
        div className = "col-10 " >
        <
        h2 className = "md-4" > Products < /h2>{" "} <
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
            filteredResults.map((product, i) => ( <
                Card key = {
                    i
                }
                product = {
                    product
                }
                style = {
                    {
                        margin: "auto",
                    }
                }
                className = "lg-4 col-md-6 col-sm-12 col-12 col-xl-3" /
                >
            ))
        } {
            " "
        } <
        /div>{" "} <
        hr / > {
            loadMoreButton()
        } {
            " "
        } <
        /div>{" "} <
        /div>{" "} <
        /Layout>
    );
};

export default Shop;