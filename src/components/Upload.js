import React from 'react';
import { FcPanorama } from 'react-icons/fc';

const Upload = () => {
    return (
        <div className="bg-gray-800 w-[290px] sticky overflow-x-hidden h-[83vh] flex flex-col justify-center">
            <div className="image text-center text-8xl flex justify-center">
                <FcPanorama />
            </div>
            <div className="content">
                <span>Upload panoramas</span>
                <br />
                .jpg or png
            </div>
        </div>
    )
}

export default Upload;
