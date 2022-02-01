import React from 'react';
import { convertFilterToUrl } from '../../app/funtionsApi';

const SiderBarFiltersOptions = ({
    typeImage,
    lenguage,
    setLenguage,
    setTypeImage,
    setFiltros,
}
) => {

    const manejadorEventoClikLenguage = (event) => {
        const lenguagee = event.target.value;

        setLenguage(lenguagee)

        convertFilterToUrl(lenguage, typeImage, setFiltros)

    }

    const manejadorEventoClikTypeImage = (event) => {
        const typeImagee = event.target.value;

        setTypeImage(typeImagee)

        convertFilterToUrl(lenguage, typeImage, setFiltros)

    }

    return (
        <div className='sider-bar-container'>
            <div className="lenguage">
                <button
                    value="es"
                    onClick={manejadorEventoClikLenguage}
                >Es</button>
                <button
                    value="en"
                    onClick={manejadorEventoClikLenguage}
                >En</button>
                <button
                    value="it"
                    onClick={manejadorEventoClikLenguage}
                >It</button>
            </div>
            <div className="image-types">
                <button
                    value="all"
                    onClick={manejadorEventoClikTypeImage}
                >All</button>
                <button
                    value="photo"
                    onClick={manejadorEventoClikTypeImage}
                >Photo</button>
                <button
                    value="illustration"
                    onClick={manejadorEventoClikTypeImage}
                >Illustration</button>
                <button
                    value="vector"
                    onClick={manejadorEventoClikTypeImage}
                >Vector</button>
            </div>
        </div>
    );
};

export default SiderBarFiltersOptions;
