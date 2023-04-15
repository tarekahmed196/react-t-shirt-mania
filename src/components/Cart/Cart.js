import React from 'react';
import './Cart.css'

const Cart = ({cart, removeFromCart}) => {
    console.log(cart);

    //conditional rendering
    let message;
    if(cart.length===0){
        message = <p style={{color:'red'}}>Please buy at least one</p>
    }
    else{
        message= <p style={{color:'green'}}>Thanks for buying</p>
    }
    
    return (
        <div>
            <h2 className={cart.length===1 ? `purple`: `orange`}>Order summary</h2>
            <h4>Order quantity:{cart.length}</h4>
            
            {
                cart.map(tshirt=> <p
                key={tshirt._id}
                >
                    {tshirt.name}
                    <button onClick={()=>removeFromCart(tshirt)}>X</button>

                </p>)
            }
            {
                message
            }
        </div>
    );
};

export default Cart;