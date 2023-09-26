/*import {Link} from 'react-reoter-dom'; */

import { useRef } from "react";
import { Link } from "react-router-dom";


const Cardproducts = ({product, cart, setCart}) => {
    const button = useRef();
    
    const addToCart = () => {
        const cartNew = [...cart, button.current.id]
        setCart(cartNew);
    };
    
    
    return (
            <Link to={`/detalle/${product._id}`}>
        <div className="producto">
            <div className="producto-detalle">
            <img className="producto-imagen" src= {`http://localhost:3001/images/${product.image}`} alt="imagen del producto" />
                <h3 className="producto-tituo">{product.name}</h3>
                <p className="producto-precio">${product.price}</p>
            </div>
                <button className="producto-agregar" id={product._id} onClick={addToCart} ref={button}>Agregar</button>
        </div>
        </Link>
    );
}
export default Cardproducts;