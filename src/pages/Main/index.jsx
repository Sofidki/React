import { useEffect, useState } from "react";
import ProductList from "../../components/Productlist";

const Main = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const getProducts = () => {
        fetch(`http://localhost:3001/products`)
            .then(res => res.json())
            .then(products => {
                setProducts(products);
                console.log(products);
            })
    }
    useEffect(getProducts, [])

    return (
        <>
        <ProductList 
        products={products}
        cart={cart} 
        setCart={setCart}
        />
        </>
    );
};


export default Main;