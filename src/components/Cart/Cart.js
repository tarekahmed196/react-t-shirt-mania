import React from 'react';

const Cart = ({cart, removeFromCart}) => {
    console.log(cart);
    
    return (
        <div>
            <h2>Order summary</h2>
            <h4>Order quantity:{cart.length}</h4>
            
            {
                cart.map(tshirt=> <p
                key={tshirt._id}
                >
                    {tshirt.name}
                    <button onClick={()=>removeFromCart(tshirt)}>X</button>

                </p>)
            }
        </div>
    );
};

export default Cart;