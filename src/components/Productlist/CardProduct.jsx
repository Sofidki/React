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
        <div className="producto">
            <Link to={`/detalle/${product._id}`}/>
            <img className="producto-imagen" src='' alt="imagen del producto" />
            <div className="producto-detalle">
                <h3 className="producto-tituo">{product.name}</h3>
                <p className="producto-precio">${product.price}</p>
            </div>
                <button className="producto-agregar" id={product._id} onClick={addToCart} ref={button}>Agregar</button>
        </div>
    );
}
export default Cardproducts;