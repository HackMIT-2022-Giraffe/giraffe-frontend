import "./Navbar.css"
import React, { Component } from 'react';

function Navbar() {
    return (
        
        <ul>
        <li className="title"><a href="/">Giraffe</a></li>
        <li className="moveRight"><a href="/">Home</a></li>
        <li className="moveRight"><a href="/about">About</a></li>
        <li className="moveRight"><a href="/plans">Plans</a></li>
        </ul>
    )
}

export default Navbar