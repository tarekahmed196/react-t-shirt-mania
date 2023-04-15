import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Friend = () => {
    const ring = useContext(RingContext)
    return (
        
        <div>
            <h2>Friend</h2>
            <h4><small>Gift: {ring}</small></h4>
        </div>
    );
};

export default Friend;