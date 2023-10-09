import Cardproduct from "./CardProduct";

const Productlist = ({products, title}) => {
    console.log(products, "listado");
    return ( 
        <>
        <h2 className="titulo-principal" id="titulo-principal">{title} </h2>
            <div className="container">
                <div className="row">
                    {products.map((product)=> (
                        <Cardproduct 
                        key={product._id} 
                        product={product}
                        />
                    ))}
                </div>
            </div>
        </>

            );
}


export default Productlist;