import React from 'react';
import { returnPrevImgages } from '../../app/funtionsView';

const PrevImages = ({ state }) => {

    return (
        <div className='preview-images-container'>
            {
                returnPrevImgages(state)
            }
        </div>
    );
};

export default PrevImages;
