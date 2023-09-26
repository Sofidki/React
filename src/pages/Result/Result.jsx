import { useEffect, useState } from "react";
import{ useLocation } from "react-router-dom";
import ProductList from "../../components/Productlist"



const Result = () => {
    const [products, setProducts] = useState([]);
    const location = useLocation();
    console.log(location);
    //const query = new URLSearchParams(location.search);
    //const word = query.get ('word');

    const getProducts = () => {
        fetch(`localhost:3001/products/buscar?name=${word}`)
            .then(res => res.json())
            .then (data => console.log(data))
            .catch((error) => console.log(error));
    }

    useEffect(getProducts, []);

    return (  
        <>
        
        {
            products.length > 0 ?
            <ProductList
            title={`Resultados de la busqueda de: ${word}`}
            products={products}
        />
        :
        <h2>No hay productos que coinciden con esa busqueda</h2>
        }
        </>
    );
}

export default Result;