import React from 'react';
import { FcAddImage, FcPanorama } from 'react-icons/fc';

const Upload = ({ data }) => {
    console.log(data);
    return (
        <div className="bg-gray-800 w-[290px] sticky overflow-x-hidden h-[83vh] flex flex-col justify-center">
            <div className="image text-center text-8xl flex justify-center">
                {
                    data === "panoramas" ? <FcPanorama /> : <FcAddImage />


                }
            </div>

            {
                data === "panoramas" ? <div className="content">
                    <span>Upload panoramas</span>
                    <br />
                    .jpg or png
                </div> : <div className="content">
                    <span>Upload 2D Floor Plan</span>
                    <br />
                    .jpg or png
                </div>
            }

        </div>
    )
}

export default Upload;
