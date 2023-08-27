import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

export const Layout = ({ children }) => {
    return (
        <>
            <div className="flex">
                <Sidebar />
                <div className="flex-1">
                    <Navbar />
                    {children}
                </div>
            </div>
        </>
    )
}
