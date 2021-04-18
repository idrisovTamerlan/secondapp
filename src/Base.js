import React from 'react';
import Surt from './image.jpg'
function Base(props) {
    return (
        <div>
        <h1>
            Привет,это Тамерлан.
        </h1>
           <img src={Surt}/>
        </div>
    );
}

export default Base;