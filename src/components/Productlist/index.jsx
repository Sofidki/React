import Cardproduct from "./CardProduct";

const Productlist = ({products, title}) => {
    console.log(products, "listado");
    return ( 
        <div>
            <h2 className="titulo-principal" id="titulo-principal">{title} </h2>
            <div id="contenedor-productos" className="contenedor-productos">
                <div className="producto">
                    {products.map((product)=> (
                        <Cardproduct 
                        key={product._id} 
                        product={product}
                        />
                    ))}
                </div>
            </div>
        </div>
            );
}


export default Productlist;