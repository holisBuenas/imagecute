import React, { useState } from 'react';
import { returnUrlNew } from '../../app/funtionsView';


const BuscadorImagenesNuevas = ({ setUrlQueryApi, filtros }) => {
    const API_KEY = '12556864-63ec1536bcc4749970b9ea6fd';
    const URL = "https://pixabay.com/api/?key=" + API_KEY + "&q="

    const [textoBusqueda, setTextoBusqueda] = useState("");

    const manejadorEvenetoCambio = (event) => {

        setTextoBusqueda(event.target.value)
        console.log(textoBusqueda)
    }
    const manejadorSubmit = (event) => {
        event.preventDefault()
        setUrlQueryApi(URL + returnUrlNew(textoBusqueda) + filtros)
        console.log(URL + returnUrlNew(textoBusqueda) + filtros)
    }

    return (
        <div className='buscador'>
            <form onSubmit={manejadorSubmit} >

                <input
                    onChange={manejadorEvenetoCambio}
                    type="text"
                    name="busqueda"
                    placeholder='Realizar nueva busqueda' />
                <button type="submit">Buscar</button>
            </form>
        </div>
    );
};

export default BuscadorImagenesNuevas;
