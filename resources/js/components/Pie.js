import React from 'react';
import ReactDOM from 'react-dom';


export default function Pie() {
    return (
        <div className='container'>
            <p>&copy; 2022 EasyAccess</p>
        </div>
        
    );
}

if (document.getElementById('pie')) {
    ReactDOM.render(<Pie />, document.getElementById('pie'));
}