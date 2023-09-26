import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
    const [product, setProduct] = useState({});
    const {id} = useParams();

    const getProduct = async (id) => {
        try {
            const response = await fetch(`http://localhost:3001/products/detalle/${id}`)
            
            if (!response.ok) {
                throw new Error(`Error al obtener el producto (código de estado: ${response.status})`)
            }
    
            const product = await response.json()
            console.log(product)
            setProduct(product)
        } catch (error) {
            console.error("Error al obtener el producto:", error.message)
        }
    }
    useEffect(() =>{
        getProduct(id)
        },[id]) 

    return ( 
            <div class="container flex">
                <div className="left">
                    <div className="main_image">
                        <img src={`http://localhost:3001/images/${product.image}`} className="slide" alt="product" />
                    </div>
                    <div className="right">
                        <h3>{product.name}</h3>
                        <h4> <small>$</small>{product.price} </h4>
                        <p>{product.description}</p>
                        <h5>{product.colors}</h5>
                        <div className="color flex1">
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                    </div>
                        <h5>Number</h5>
                        <div className="add flex1">
                        <span>-</span>
                        <label>1</label>
                        <span>+</span>
                    </div>
                    </div></div></div>
            );
}

export default Detail;