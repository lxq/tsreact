import * as React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

import AdminPage from "./adminpage";
import ProductsPage from "./productspage";
import Header from "./header";
import ProductPage from "./ProdectPage";

const Routes: React.SFC = () => {
    return (
        <Router>
            <div>
                <Header />
                {/* path属性对应URL，如果URL没有对应path路径则渲染的是空页面。 */}
                {/* exact 属性控制组件是否呈现。 */}
                <Route exact={true} path="/products" component={ProductsPage} />
                <Route path="/products/:id" component={ProductPage} />
                <Route path="/admin" component={AdminPage} />
            </div>
        </Router>
    );
};

export default Routes;
