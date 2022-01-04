import React from 'react';
import '../styles/main.css'

function TrackCep({ events }) {
    if (!events || events.length === 0){
       return null;
    }else{
        return ( <>
            <h1> CEP Encontrado </h1> 
            <ul className = "list-group" > {events.map(item =>
                    <li className = 'list-group-item' key = { item.cep } >
                    <span> CEP: { item.cep } </span> 
                    <span> Logradouro: { item.logradouro } </span> 
                    <span> Bairro: { item.bairro } </span> 
                    <span> Localidade: { item.localidade } </span> 
                    <span> UF: { item.uf } </span> 
                    </li>)} 
                    </ul> 
                    </>
                )} ;
            }
            export default TrackCep;