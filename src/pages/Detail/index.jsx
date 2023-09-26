import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
    const [product, setProduct] = useState({});
    const {id} = useParams();

    const getProduct = () => {
        fetch(`http://localhost:3001/products/${id}`)
            .then(res => res.json())
            .then(product => {
                setProduct(product);
            })
            .catch(error => console.log(error))
    }

    useEffect(getProduct, [id]);

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