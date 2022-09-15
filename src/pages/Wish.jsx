import { useEffect } from "react";
import { useState } from "react";
import {connect } from "react-redux";
import WishModal from "../components/WishModal";
function Wish({wish,dispatch,wishModal}) {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:1313/products").then(a=>a.json()).then(a=>setProducts(a));
    },[])
  return (
    <>
    <div  className="wish-pages">
        {products.length && wish.map(a=>{
            let product=products.find(t=>t.id===a.id);
            // <div key={a.id}>
            //     <img src={product.image} alt="" />
            // </div>
            return (
                <section key={a.id} className="wish-cart">
                    <div className="container">
                        <div className="wish-item">
                        <div className="wish-image">
                            <img src={product.image} alt="" />
                        </div>
                        <div className="wish-about">
                            <span>{product.title}</span>
                        </div>
                        <div className="wish-price-bag">
                            <div className="wish-remove">
                            <i  onClick={() => {
              dispatch({
                type: "SET_WISH",
                payload:[...wish.filter((t) => t.id !== a.id)],
              });
            }}   className="fa-solid fa-trash"></i>
                            </div>
                            <div className="wish-price">
                                <p>{product.price} Azn</p>
                             
                            </div>
                            <div className="wish-price-button">
                                    <button onClick={()=>dispatch({
                                        type:"SET_WISHMODAL",
                                        payload:true
                                    })}>Səbətə at</button>
                                </div>
                        </div>
                        </div>
                    </div>
                </section>
            )
        })}
    </div>
    </>
  )
}
const t=a=>{
    return{
        wish:a.wish,
    };
};
export default connect(t)(Wish)