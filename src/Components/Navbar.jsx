import React from 'react'
import Logo from "../assets/origami.png"

function Navbar() {
    return (
        <div className="h-16 bg-green-500 w-full flex items-center px-4">
            <img className="w-10 h-10" src={Logo} alt="App Logo" />
        </div>
    )
}

export default Navbar