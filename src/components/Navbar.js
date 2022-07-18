import React from "react";

import troll_face from "../images/Troll Face.png"

export default function Navbar() {

    return (
        <nav className="nav-bar">
            <img src = {troll_face} alt= "troll_face"></img>
            <h2 className="nav-h2">Meme Generator</h2>
            <h3 className="nav-h3">React Project-3</h3>
            
        </nav>
        

    )
}