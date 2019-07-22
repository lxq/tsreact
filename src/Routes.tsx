import * as React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

import AdminPage from "./adminpage";
import ProductPage from "./productspage";

const Routes: React.SFC = () => {
    return (
        <Router>
            <div>
                {/* path属性对应URL，如果URL没有对应path路径则渲染的是空页面。 */}
                <Route path="/products" component={ProductPage} />
                <Route path="/admin" component={AdminPage} />
            </div>
        </Router>
    );
};

export default Routes;
