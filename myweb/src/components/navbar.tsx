import '../style/main.css';
import { LuSunMedium } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    const [isActive, setIsActive] = useState(true);

    const menuClicking = () => {
        setIsActive(!isActive);
    };

    // const menuClose = ()=>{ setIsActive(isActive); console.log("hi")};

    const downloadingCV = ()=>{};

    return (

        <div className="navbar-container">

            <div className={isActive ? "inactive-navbar" : "active-navbar"}>

                <img className='logo' src="/assets/logo.svg" alt="hi" />

                <div className="middle">

                    <span className="left-line"> <span className="circle1"></span> </span>

                    <h1 className="menu" onClick={menuClicking}

                    >menu</h1>

                    <span className="right-line"> <span className="circle2"></span> </span>

                </div>

                <span className="span-sun"><LuSunMedium className='sun' /></span>

                {/* active navbar */}
                <div className="top">
                    <h1 className='button-close' onClick={menuClicking}><IoMdClose /></h1>
                </div>

                <div className="down">

                    <div className="left">

                        <Link to="/">home</Link>

                        <Link to="/aboutMe">about me</Link>

                        <label htmlFor="options">my skills</label>

                        <select id="options">

                            <option value="option1">graphic design</option>

                            <option value="option2">web development</option>

                        </select>
                        
                        <Link to="/contact" className='link'>contact</Link>

                        {/* not completed */}
                        <p className="CV" onClick={downloadingCV}>download CV</p>

                    </div>

                    <div className="right">
                        <img src="/assets/Ellipse 9.svg" alt="" />

                        <div className="icons">
                            <div className="left"></div>
                            <div className="right"></div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default NavBar;