import { useEffect, useState } from "react";
import{ useLocation, useParams } from "react-router-dom";
import ProductList from "../../components/Productlist"



const Result = () => {
    const [products, setProducts] = useState([]);
    const location = useLocation();
    const {name} = useParams();

    const getProducts = () => {
        fetch(`localhost:3001/products/buscar?name=${name}`)
            .then(res => res.json())
            .then (data => console.log(data, "result"))
            .catch((error) => console.log(error));
    }

    useEffect(getProducts, []);

    return (  
        <>
        
        {
            products.length > 0 ?
            <ProductList
            title={`Resultados de la busqueda de: ${name}`}
            products={products}
        />
        :
        <h2>No hay productos que coinciden con esa busqueda</h2>
        }
        </>
    );
}

export default Result;