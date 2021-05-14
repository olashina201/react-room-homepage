import React, {useEffect} from 'react';
import '../static/style.css';
import AngleLeft from '../images/icon-angle-left.svg';
import AngleRight from '../images/icon-angle-right.svg'
import arrow from '../images/icon-arrow.svg'

import "react-slideshow-image/dist/styles.css";


export default function Slider() {

    useEffect(() => {
        let currentIndex;
        let lastIndex;

        var imagecontainer = document.querySelector(".slider-images");
        var images = document.querySelectorAll(".slide-image");

        var contents = document.querySelectorAll(".image-content");
        var contentsContainer = document.querySelector(".image-slider-content");

        var next = document.querySelector(".next");
        var prev = document.querySelector(".prev");

        var width = images[0].clientWidth;
        var contentwidth = document.querySelector(".hero__content").clientWidth;

        const setLogic = images => {
            currentIndex = 0;
            lastIndex = images.length - 1;
        }

        //set images to stack beside each other
        
        const stack = (images, contents) => {
            images.forEach((image, index) => {
                let absposition = width * index + "px";
                image.style.left = absposition;
            });

            contents.forEach((content, index) => {
                let absposition = contentwidth * index + "px";
                content.style.left = absposition;
            });
            //also translate the containers after stacking
            translateX()

        }

        const translateX = () => {
            let moveto = images[currentIndex].style.left;
            let movecontentto = contents[currentIndex].style.left;
            imagecontainer.style.transform = `translateX(-${moveto})`;
            contentsContainer.style.transform = `translateX(-${movecontentto})`;
        }

        //add Listeners
        const addListeners = () => {
            next.addEventListener("click", () => {
                if (currentIndex < lastIndex) {
                    currentIndex += 1;
                    translateX()
                }
            });

            prev.addEventListener("click", () => {
                if (currentIndex > 0) {
                    currentIndex -= 1;
                    translateX()
                }
            })
        }

    setLogic(images);
    stack(images, contents);
    addListeners();

    //window.addEventListener('resize', resizeCarousel);
    })
    

    return (
        <div className="slider-container">
         
            <div className="slider-content">
                <div className="slider-images">
                    <div className="slide-image image1"></div>
                    <div className="slide-image image2"></div>
                    <div className="slide-image image3"></div>
                </div>
            </div>

            <div className="slider-btn">
                <button className="prev">
                    <img src={AngleLeft} alt="" />
                </button>
                <button className="next">
                    <img src={AngleRight} alt="" />
                </button>
            </div>


            <div className="container block hero__content">
                <div className="image-slider-content">
                    <div className="image-content">
                        <h1 className="title"> Discover innovative ways to decorate </h1>
                        <p className="description">We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love. </p>
                        <a href="#" className="shop"> Shop now <img src={ arrow } alt="" className="arrow" /></a>
                    </div>

                    <div className="image-content">
                        <h1 className="title"> We are available all across the globe </h1>
                        <p className="description">
                            With stores all over the world, it's easy for you to find furniture for your home or place
                            of business. Locally, we’re in most major cities throughout the country. Find the branch
                            nearest you using our store locator. Any questions? Don't hesitate to contact us today
                        </p>
                        <a href="#" className="shop"> Shop now <img src="./images/icon-arrow.svg" alt="" className="arrow" /></a>
                    </div>

                    <div className="image-content">
                        <h1 className="title"> Manufactured with the best materials </h1>
                        <p className="description">
                            Our modern furniture store provide a high level of quality. Our company has invested in
                            advanced technology to ensure that every product is made as perfect and as consistent as possible. With three
                            decades of experience in this industry, we understand what customers want for their home and office.
                        </p>
                        <a href="#" className="shop"> Shop now <img src="./images/icon-arrow.svg" alt="" className="arrow" /></a>
                    </div>
                </div>
            </div>
            
        </div>

    
    )
}
