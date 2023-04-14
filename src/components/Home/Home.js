import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../../Tshirt/Tshirt';
import './Home.css'
import Cart from '../Cart/Cart';

const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([]);

    const handleAddToCart = tshirt=>{
        const exists = cart.find(ts=>ts._id === tshirt._id);
        if(exists){
            alert('t-shirt already added');
        }
        else{
            const newCart = [...cart, tshirt];
            setCart(newCart);
        }
        
    }

    const removeFromCart = tshirt=>{
        const remaining = cart.filter(ts=> ts._id !== tshirt._id);
        setCart(remaining);
    }

    return (
        <div className='home-container'>
            <div className="t-shirt-container">
                {
                    tshirts.map(tshirt=> <Tshirt
                    key={tshirt._id}
                    tshirt={tshirt}
                    handleAddToCart={handleAddToCart}
                    
                    ></Tshirt>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}
                removeFromCart={removeFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;