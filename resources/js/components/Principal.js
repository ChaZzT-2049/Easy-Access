
import React from 'react';
import ReactDOM from 'react-dom';

export default function Principal() {
    return (
        <div>
            <h1 className='text-center'>Bienvenido a Easy Access</h1>
            <h4 className='text-center'><strong>Inicia sesión o Registrate</strong></h4>
        </div>
    );
}

if (document.getElementById('bienvenida')) {
    ReactDOM.render(<Principal />, document.getElementById('bienvenida'));
}