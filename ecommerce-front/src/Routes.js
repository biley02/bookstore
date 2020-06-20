import React, {
    PureComponent
} from "react";
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import Home from "./core/Home";
import Menu from "./core/Menu";
import PrivateRoute from "./auth/PrivateRoutes";
import DashBoard from "./user/UserDashboard";
import AdminRoute from "./auth/AdminRoute";
import AdminDashBoard from "./user/AdminDashboard";
import AddCategory from "./admin/AddCategory";

const Routes = () => {
    return ( <
        BrowserRouter >
        <
        Menu / >
        <
        Switch >
        <
        Route path = "/"
        exact component = {
            Home
        }
        />{" "} <
        Route path = "/signin"
        exact component = {
            Signin
        }
        />{" "} <
        Route path = "/signup"
        exact component = {
            Signup
        }
        />{" "} <
        PrivateRoute path = "/user/dashboard"
        exact component = {
            DashBoard
        }
        />{" "} <
        AdminRoute path = "/admin/dashboard"
        exact component = {
            AdminDashBoard
        }
        />{" "} <
        AdminRoute path = "/create/category"
        exact component = {
            AddCategory
        }
        />{" "} <
        /Switch>{" "} <
        /BrowserRouter>
    );
};

export default Routes;