import React from 'react';
import Myself from '../Myself/Myself';
import Brother from '../Brother/Brother';
import Sister from '../Sister/Sister';

const Father = ({house}) => {
    return (
        <div>
            <h2>Father</h2>
            <p>house: {house}</p>
            <section className='flex'>
                <Myself house={house}/>
                <Brother house={house}/>
                <Sister house={house}/>
            </section>
        </div>
    );
};

export default Father;