import * as React from "react";
import {NavLink} from "react-router-dom";

import logo from "./logo.svg";

const Header: React.SFC = () => {
    return (
        <header className="header">
            <img src={logo} className="header-logo" alt="logo" />
            <h1 className="header-title">React商铺</h1>
            <nav>
                <NavLink to="/products" className="header-link" activeClassName="header-link-active">商品</NavLink>
                <NavLink to="/admin" className="header-link" activeClassName="header-link-active">管理员</NavLink>
            </nav>
        </header>
    );
};

export default Header;
