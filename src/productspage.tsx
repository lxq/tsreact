import * as React from "react";
import {Link, RouteComponentProps} from "react-router-dom";

import {IProduct, products} from "./productsdata";

interface IState {
    products: IProduct[];
    search: string;
}

class ProductsPage extends React.Component<RouteComponentProps, IState> {
    public static getDerivedStateFromProps(props:RouteComponentProps, state: IState) {
        const prms = new URLSearchParams(props.location.search);
        const search = prms.get("search") || "";
        return {products: state.products, search};
    }

    public constructor(props: RouteComponentProps) {
        super(props);

        this.state = {
            products: [],
            search: ""
        };
    }

    public componentDidMount() {
        this.setState({products});
    }

    public render() {
        return (
            <div className="page-container">
                <p>欢迎来到我的React商铺！</p>
                <ul className="product-list">
                    {/* 这里使用map函数进行迭代。 */}
                    {this.state.products.map(product => {
                        if (!this.state.search ||
                             (this.state.search && product.name.toLowerCase().indexOf(this.state.search.toLowerCase())> -1)) {
                                 return (
                                    <li key={product.id} className="product-list-item">
                                        <Link to={`/products/${product.id}`}>
                                        {product.name}
                                        </Link>
                                    </li>        
                                 );
                        } else {
                            return null;
                        }
                    })}
                </ul>
            </div>
        );
    }
}


export default ProductsPage;
