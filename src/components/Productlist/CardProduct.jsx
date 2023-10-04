
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

const Cardproducts = ({product}) => {

    
    return (
            <Link to={`/detalle/${product._id}`}>
                
                <div className="producto row">
                <div className="producto-detalle col-sm-4">
                <img className="producto-imagen" src= {`http://localhost:3001/images/${product.image}`} alt="imagen del producto" />
                    <h3 className="producto-tituo">{product.name}</h3>
                    <p className="producto-precio">${product.price}</p>
                </div>
                </div>
                
            </Link>
    );
}
export default Cardproducts;