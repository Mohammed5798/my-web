import { useState } from 'react';
import { useTheme } from '../context/context';
import '../style/main.css';

function Footer() {

    const { theme } = useTheme();
    
    console.log(theme);
    

    return (
        <div className={theme == "light" ? "footer-container-light" : "footer-container-dark"}>

            <div className="circle-div">
                <span className="circle"></span>
            </div>

            <div className="details">

                <div className="top">
                    <a href='#' className="link">home</a>
                    <a href='#' className="link">contact me</a>
                    <a href='#' className="link">projects</a>
                    <a href='#' className="link">CV</a>
                </div>

                <span className="line"></span>

                <div className="bottom">
                    <p className="text">Feel free to contact me anytime, anywhere.</p>
                    <p className="email">mohammedrich000@mail.com</p>
                </div>
            </div>


        </div>
    );
};

export default Footer;