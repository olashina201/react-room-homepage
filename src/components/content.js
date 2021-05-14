import React from 'react'
import AboutDark from '../images/image-about-dark.jpg';
import AboutLight from '../images/image-about-light.jpg'

export default function Content() {
    return (
        <div class="content">
            <div class="first">
                <img src={AboutDark} alt="" />
            </div>
            <div class="second">
                <h2>ABOUT OUR FURNITURE</h2>
                <p class="description2">Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.</p>
            </div>
            <div class="third">
                <img src={AboutLight} alt="" />
            </div>
        </div>
    )
}
