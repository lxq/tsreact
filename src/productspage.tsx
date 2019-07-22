import * as React from "react";
import {IProduct, products} from "./productsdata";

interface IState {
    products: IProduct[];
}

class ProductsPage extends React.Component<{}, IState> {

    public constructor(props: {}) {
        super(props);

        this.state = {
            products: []
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
                    {this.state.products.map(product => (
                        <li key={product.id} className="product-list-item">
                            {product.name}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}


export default ProductsPage;
