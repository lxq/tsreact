import * as React from "react";
import {Link} from "react-router-dom";

import logo from "./logo.svg";

const Header: React.SFC = () => {
    return (
        <header className="header">
            <img src={logo} className="header-logo" alt="logo" />
            <h1 className="header-title">React商铺</h1>
            <nav>
                <Link to="/products" className="header-link">商品</Link>
                <Link to="/admin" className="header-link">管理员</Link>
            </nav>
        </header>
    );
};

export default Header;
