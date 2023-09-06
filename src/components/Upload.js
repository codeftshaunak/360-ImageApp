import React, { useRef, useState } from 'react';
import { FcAddImage, FcPanorama } from 'react-icons/fc';
import { useDispatch, useSelector } from 'react-redux';
import { addImage } from '../redux/features/imageSlice';

const Upload = ({ data }) => {
    const dispatch = useDispatch();
    const fileInputRef = useRef(null);
    const [showPanaromaUpload, setShowPanaromaUpload] = useState(false)
    const uploadedPanoromaImages = useSelector(state => state.images);
    const [inputKey, setInputKey] = useState(0); // Unique key for resetting input

    const handleFileSelect = (e) => {
        const selectedFiles = Array.from(e.target.files);
        dispatch(addImage(selectedFiles))
        if (selectedFiles) {
            setShowPanaromaUpload(true)
        }
        // Reset the input using a new key
        setInputKey(prevKey => prevKey + 1);
    };

    const handleIconClick = () => {
        fileInputRef.current.click();
    };

    return (
        <div className="bg-gray-800 w-[290px] sticky overflow-x-hidden h-[83vh] flex flex-col justify-center">
            <div className="image text-center text-8xl flex justify-center relative">
                {
                    data === "panoramas" ? (
                        <label htmlFor="fileInput" onClick={() => handleIconClick} className="icon-label" style={showPanaromaUpload ? { position: "fixed", top: '5rem', left: '0', fontSize: '3rem', backgroundColor: "white", border: "1px solid white", paddingLeft: "1rem", paddingRight: "1rem" } : { display: 'block' }}>
                            <FcPanorama />
                        </label>
                    ) : (
                        <FcAddImage />
                    )
                }
                <input
                    key={inputKey} // Use a unique key to reset the input
                    ref={fileInputRef}
                    type="file"
                    accept=".jpg, .png"
                    multiple
                    onChange={handleFileSelect}
                    id="fileInput"
                    className="hidden"
                />
            </div>
            {
                data === "panoramas" ? (
                    <div className="content" style={showPanaromaUpload ? { display: "none" } : { display: 'block' }}>
                        <span>Upload panoramas</span>
                        <br />
                        .jpg or png
                    </div>
                ) : (
                    <div className="content">
                        <span>Upload 2D Floor Plan</span>
                        <br />
                        .jpg or png
                    </div>
                )
            }

            {
                data == "panoramas" && <div>
                    {uploadedPanoromaImages.map((image, index) => (
                        <img key={index} src={image.previewUrl} alt={`Uploaded ${index}`} />
                    ))}
                </div>
            }

        </div >
    )
}

export default Upload;
