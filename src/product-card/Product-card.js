import { React,useState } from "react";
import "./Product-card.css";


const ProductCard = ({image,prize,name}) => {

    const [buttonCart, setButtonCart] = useState(false);
    const [buttonWish, setButtonWish] = useState(false);

    const toogleCart = () => {
        setButtonCart(!buttonCart);
    }
    const toogleWish = () => {
        setButtonWish(!buttonWish);
    }

    return(
        <div className="card-container">
            <div className="image-box">
                <img className="image" src= {image} alt="pic"/>
            </div>

            <div className="product-details">
                <div className="prize">
                    <h4>&#8377;{prize}</h4>
                </div>
                <div className="name">
                    <p>{name}</p>
                </div>
            </div>

            <button onClick={toogleWish}
             className={ ( buttonWish ? "wishlist-update" : "wishlist")}
            >
            {buttonWish ? "Added to WishList" : "Add to WishList"}
            </button>

            <button className="cart" 
            onClick={toogleCart}>
                {buttonCart ? "Added to Cart" : "Add to Cart"}
            </button>

        </div>
    )
}
export default ProductCard;