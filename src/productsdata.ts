
export interface IProduct {
    id: number;
    name: string;
    desc: string;
    price: number;
}

export const products: IProduct[] = [
    {
        desc: "商品1",
        id: 1,
        name: "Router",
        price: 8
    },
    {
        id: 2,
        name: "Redux",
        desc: "React 辅助库",
        price: 12
    },
    {
        id: 3,
        name: "Apollo",
        desc: "与GraphQL后台交互的辅助库",
        price: 12
    }
];