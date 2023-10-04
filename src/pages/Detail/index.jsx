import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../Detail/detalle.css';

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
            setProduct(product)
        } catch (error) {
            console.error("Error al obtener el producto:", error.message)
        }
    }
    useEffect(() =>{
        getProduct(id)
        },[id]) 

    return ( 
            <div class="containerdetalle flexdetalle">
                <div className="leftdetalle">
                    <div className="main_imagedetalle">
                        <img src={`http://localhost:3001/images/${product.image}`} className="slidedetalle" alt="product" />
                    </div>
                </div>
                <div className="rightdetalle">
                        <h3>{product.name}</h3>
                        <h4 className="detalle"> <small>$</small>{product.price} </h4>
                        <p className="descripciondetalle">{product.description}</p>
                        <h5>En color: {product.colors}</h5>
                        </div>
                <div className="numerdetalle">
                    <h5>Number</h5>
                        <div className="addflex1detalle">
                            <span>-</span>
                            <label>1</label>
                            <span>+</span>
                        </div>
                        
                </div>
            </div>
            );
}

export default Detail;