import "./CSS/hero.css";
import shoe from "./assets/shoe.png";
import shopify from "./assets/shopify.png";
import amazon from "./assets/amazon.webp";
import alibaba from "./assets/alibaba.png";
import { useState } from "react";
// let btncolor="blue-btn";

// const shopnowbtn= document.querySelector(".shopnow");
// const categorybtn =document.querySelector(".category");


let categoryBtn="white-btn";
const hero =() =>{
    const toggle =()=>{
       setbtncolor((btncolor === "blue-btn") ?btncolor ="white-btn": btncolor ="blue-btn");

       (btncolor === "blue-btn") ?categoryBtn="white-btn": categoryBtn="blue-btn";
    }
    
    let [btncolor,setbtncolor] = useState("blue-btn");
    return(
        <body className="hero">
            <div className="description">
            <h1>Your feet deserve the best</h1>
            <p className="details">
            Step into style and comfort with our exquisite collection of shoes. From timeless classics to the latest trends, discover footwear that effortlessly combines fashion and functionality. Elevate your every step with our curated selection, where quality craftsmanship meets contemporary design.
            </p>
            <div className="button-container">
                <button className={`shopnow ${btncolor}`} onMouseEnter={toggle} onMouseLeave={toggle}>Shop Now</button>
                <button className={`category ${categoryBtn}`}>Category</button>
            </div>
            <p className="icons-desc">Also available on</p>
            <div className="shopping-website">
                <img src={shopify}/>
                <img src={amazon}/>
                <img className="alibaba" src={alibaba}/>
            </div>
            </div>
            <div className="display-pic">
                <img src={shoe}/>
            </div>
                
        </body>
    )
}

export default hero;