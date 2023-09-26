import Cardproduct from "./CardProduct";

const Productlist = ({products, cart, setCart}) => {
    return ( 
        <div>
            <h2 className="titulo-principal" id="titulo-principal">Todos los productos - {cart.length}</h2>
            <div id="contenedor-productos" className="contenedor-productos">
                <div className="producto">
                    {products.map((product)=> (
                        <Cardproduct 
                        key={product._id} 
                        product={product}
                        setCart={setCart}
                        />
                    ))}
                </div>
            </div>
        </div>
            );
}


export default Productlist;