import React, { useState } from 'react'
import Upload from './Upload';

const Sidebar = () => {
    const [selectedButton, setSelectedButton] = useState(1);

    const handleButtonClick = (buttonNumber) => {
        setSelectedButton(buttonNumber);
    };

    return (
        <div className="top-0 over bottom-0 lg:left-0 p-2 w-[300px] text-center bg-gray-900 overflow-hidden">
            <div className="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900">
                <br />
                <div className="flex space-x-4 justify-center">
                    <button
                        style={{
                            backgroundColor: selectedButton === 1 ? '#007bff' : '#333',
                            color: '#fff',
                            fontWeight: 'bold',
                            padding: '10px 20px',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            transition: 'background-color 0.3s, color 0.3s',
                        }}
                        onClick={() => handleButtonClick(1)}
                    >
                        Paranoma
                    </button>
                    <button
                        style={{
                            backgroundColor: selectedButton === 2 ? '#007bff' : '#333',
                            color: '#fff',
                            fontWeight: 'bold',
                            padding: '10px 20px',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            transition: 'background-color 0.3s, color 0.3s',
                        }}
                        onClick={() => handleButtonClick(2)}
                    >
                        2D Image
                    </button>
                </div>
                <br />
                <Upload />
            </div>
        </div>
    )
}

export default Sidebar;
