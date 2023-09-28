import { useEffect, useState } from "react";
import{ useLocation, useParams } from "react-router-dom";
import ProductList from "../../components/Productlist"



const Result = () => {
    const [products, setProducts] = useState([]);
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const name = query.get("name");

    const getProducts = () => {
        fetch(`http://localhost:3001/products/buscar?name=${name}`)
            .then(res => res.json())
            .then (data => setProducts(data))
            .catch((error) => console.log(error));
    }

    useEffect(getProducts, [name]);
    
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