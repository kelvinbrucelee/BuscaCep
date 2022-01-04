import React, { useState } from 'react';
import TrackCep from './TrackCep'
import '../styles/main.css';

function BuscaCep() {
    const [events, setEvents] = useState([])

    const convertToArray = (obj) => {
        const arr = [obj];
        return arr;
    }

    const submitHandle = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        fetch(`https://viacep.com.br/ws/${data.tracking}/json/`)
            .then(response => response.json())
            .then(data => {
                const array = convertToArray(data);
                setEvents(array);
            })
            .catch(error => console.error);
    }
    return ( <div className = "container" >
        <h1 id="titulo"> Buscar CEP </h1> 
        <form onSubmit = { submitHandle } >
            <div className = "form-group" >
                <button id="btn-buscar" type = "text" name = "TrackCEP" className = "btn btn-dark" > Buscar </button>
                <input id="label" placeholder='EX:12345678' type="number" name = "tracking" className = "form-group" />
            </div>
            
        </form> 
        <div id="infor">
        <TrackCep events = { events }/> 
        </div>
        
        </div>

    );
}

export default BuscaCep;