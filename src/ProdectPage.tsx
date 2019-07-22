import * as React from "react"
import {RouteComponentProps} from "react-router-dom";

import {IProduct, products} from "./productsdata";

// RouteComponentProps 通过定义对应的类型和名称，实现从URL中获取对应的参数值。
// 这个名称一定要与URL地址的参数名称一致，否则传递值失败。
// RouteComponentProps 只能传递string和undefined。
type Props = RouteComponentProps<{id: string}>;

interface IState {
    product?: IProduct;
    added: boolean;
}

class ProductPage extends React.Component<Props, IState> {

    public constructor(props: Props) {
        super(props);
        this.state = {
            added: false
        };
    }

    public componentDidMount() {
        // RouteComponentProps 提供match对象，里面包含params对象。
        if (this.props.match.params.id) {
            const id: number = parseInt(this.props.match.params.id, 10);
            const product = products.filter(p => p.id === id)[0];
            this.setState({product});
        }
    }

    public render() {
        const product = this.state.product;
        return (
            <div className="page-container">
                {product?(
                    // Fragment 组件的使用
                    <React.Fragment>
                        <h1>{product.name}</h1>
                        <p>{product.desc}</p>
                        <p className="product-price">
                            {new Intl.NumberFormat("en-US",{
                                currency:"USD",
                                style:"currency"
                            }).format(product.price)}
                        </p>
                        {/* 下面 && 是一种控制组件的习惯性用法。 */}
                        {!this.state.added && (
                            <button onClick={this.handleAddClick}>加入购物车</button>
                        )}
                    </React.Fragment>
                ):(
                    <p>商品没找到！</p>
                )}
            </div>
        );
    }

    private handleAddClick = () => {
        this.setState({added:true});
    };    
}

export default ProductPage;
