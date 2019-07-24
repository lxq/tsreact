import * as React from "react";
import {NavLink, RouteComponentProps, withRouter} from "react-router-dom";

import logo from "./logo.svg";

const Header: React.SFC<RouteComponentProps> = (props) => {
    const [search, setSearch] = React.useState("");
    React.useEffect(() => {
        const prms = new URLSearchParams(props.location.search);
        setSearch(prms.get("search") || "");
    }, []);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.currentTarget.value);
    };
    const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if ("Enter" === e.key) {
            props.history.push(`/products?search=${search}`);
        }
    };

    return (
        <header className="header">
            <div className="search-container">
                <input
                    type="search"
                    placeholder="search"
                    value={search}
                    onChange={handleSearchChange}
                    onKeyDown={handleSearchKeyDown} 
                />
            </div>
            <img src={logo} className="header-logo" alt="logo" />
            <h1 className="header-title">React商铺</h1>
            <nav>
                <NavLink to="/products" className="header-link" activeClassName="header-link-active">商品</NavLink>
                <NavLink to="/admin" className="header-link" activeClassName="header-link-active">管理员</NavLink>
            </nav>
        </header>
    );
};

export default withRouter(Header);
