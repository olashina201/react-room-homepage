import React, { useState } from 'react'
import '../static/style.css';
import Logo from '../images/logo.svg';

export default function Header() {
    const toggle = () => {
        let nav = document.querySelector(".nav");
        let toggler = nav.querySelector(".toggler")

        toggler.addEventListener("click", () => {
            nav.classList.toggle("active");
        })
    }
    return (
        <React.Fragment>
            <div className="header">
                <nav className="navbar">
                    <div className="nav" >
                        <div className="toggler" onClick={ toggle } ></div>
                        <a href="#" className="logo"> <img src={Logo} alt="logo" /> </a>
                        <ul className="list">
                            <li className="nav-item"><a href="#" className="link">Home</a></li>
                            <li className="nav-item"><a href="#" className="link">Shop</a></li>
                            <li className="nav-item"><a href="#" className="link">About</a></li>
                            <li className="nav-item"><a href="#" className="link">Contact</a></li>
                        </ul>
                        <div className="space"></div>
                    </div>
                </nav>
            </div>
        </React.Fragment>
    )
}
