import React from 'react';
import Cousin from '../Cousin/Cousin';

const Aunty = ({house}) => {
    return (
        <div>
            <h2>Aunty</h2>
            <p>house: {house}</p>
            <section className='flex'>
                <Cousin/>
                <Cousin/>
            </section>
        </div>
    );
};

export default Aunty;