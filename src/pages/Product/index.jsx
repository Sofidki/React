import { useEffect, useState } from "react";
import ProductList from "../../components/Productlist";

const Product = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetch("http://localhost:3001/products");
            if (!response.ok) {
                throw new Error("Error fetching products");
            }
            const productsData = await response.json();
            setProducts(productsData);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };
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


export default Product;