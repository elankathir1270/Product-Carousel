import {React, useRef} from "react";
import ProductCard from "../product-card/Product-card";
import "./Carousel.css"



const Carousel_component = ({data}) =>{

    const cardBoxRef1 = useRef(null);

    
    const handlePrebtn = () => {
        let width = cardBoxRef1?.current?.clientWidth;
        console.log(width);
        cardBoxRef1.current.scrollLeft = cardBoxRef1?.current?.scrollLeft - 200; //width
    }
        //can move it with full width of carousel
    const handleNextbtn = () => {
        let width = cardBoxRef1?.current?.clientWidth;
        cardBoxRef1.current.scrollLeft = cardBoxRef1?.current?.scrollLeft + 200; //width
    }

    

    const Pc1 = data.map((item) => {
        return <ProductCard image = {item.image} name= {item.name} prize= {item.prize} />
    })

    return(
        <div>

            <div className="container">

            <button className="pre-btn" onClick={handlePrebtn}><p>L</p></button>
            <button className="next-btn" onClick={handleNextbtn}><p>R</p></button>

            <div ref={cardBoxRef1} className="card_container">
                {Pc1}
            </div>

            </div>

        </div>
      
    )
}
export default Carousel_component;

