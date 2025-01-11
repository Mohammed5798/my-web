import '../style/main.css';
import { LuSunMedium } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { useEffect, useState } from 'react';
import { HiPaintBrush } from "react-icons/hi2";
import { VscCodeOss, VscFileCode } from "react-icons/vsc";
import { FiPenTool } from "react-icons/fi";
import { FaEyeDropper } from "react-icons/fa";
import { motion } from "motion/react"

import { Link, useNavigate } from 'react-router-dom';

function NavBar() {
    
    const [isActive, setIsActive] = useState(true);

    const navigate = useNavigate();

    //*------------closing & opening the navbar--------------//
    const menuClicking = () => {
        setIsActive(!isActive);
    };

    //* --------- function for skills pages-----------//
    const selectHandle = (event:any)=>{

        let selectedValue = event.target.value;

        if(selectedValue === "option1"){
            navigate('/graphicDesign');
            setIsActive(true);
        }else{
            navigate('/webDev');
            setIsActive(true);
        }
    };

    //*----------------dark mood & light mood---------------//
    const [isThem, setIsTheme] = useState(()=>{
        return localStorage.getItem("theme") || "light";
    });

    useEffect(()=>{
        localStorage.setItem("theme", isThem);
    },[isThem]);

    const changeThem = ()=>{
        setIsTheme(isThem === "light" ? "dark" : "light");
    }

    //*-----------------changing the class name based on the theme (for active navbar)-------------------//
    const handleClassName1 = ()=>{
        
        if(isThem === "light") return "active-navbar-light";

        if(isThem === "dark") return "active-navbar-dark";
    };

    //*-----------------changing the class name based on the theme (for inactive navbar)-------------------//
    const handleClassName2 = ()=>{
        
        if(isThem === "light") return "inactive-navbar-light";

        if(isThem === "dark") return "inactive-navbar-dark";
    };

    //* CV not completed
    const downloadingCV = () => {};

    return (

        <div className={isThem == 'light' ? "navbar-container-light" : "navbar-container-dark"}>

            {/* inactive navbar */}
            <motion.div className={isActive ? `${handleClassName2()}` : `${handleClassName1()}`}
            initial={{y:-30, opacity:0}}
            animate={{y:0, opacity:1}}
            transition={{duration: 1.2, ease:'backInOut'}}
            >

                <img className='logo' src="/assets/logo.svg" alt="hi" />

                <div className="middle">

                    <span className="left-line"> <span className="circle1"></span> </span>

                    <h1 className="menu" onClick={menuClicking}

                    >menu</h1>

                    <span className="right-line"> <span className="circle2"></span> </span>

                </div>

                <span className="span-sun" onClick={changeThem}><LuSunMedium className='sun' /></span>

                {/* active navbar */}
                <motion.div className="top"
                            initial={{y:-100, opacity:0}}
                            whileInView={{y:20, opacity:1}}
                            transition={{duration: 1.2, ease:'easeInOut'}}
                >
                    <span className='button-close' onClick={menuClicking}><IoMdClose /></span>
                </motion.div>

                <motion.div className="down"
                            initial={{y:-250, opacity:0}}
                            whileInView={{y:0, opacity:1}}
                            transition={{duration: 1.2, ease:'easeInOut'}}
                >

                    <div className="left">

                        <Link to="/" className='link' onClick={()=> setIsActive(true)}>home</Link>

                        <Link to="/aboutMe" className='link' onClick={()=> setIsActive(true)}>about me</Link>

                        <select id="options" value="my skills" onChange={selectHandle}>
                            <option value="my skills" disabled>My Skills</option>
                            <option value="option1" > Graphic Design</option>
                            <option value="option2" >Web Development</option>
                        </select>

                        <Link to="/contact" className='link' onClick={()=> setIsActive(true)}>contact</Link>

                        {/* not completed */}
                        <a className="link" onClick={downloadingCV}>download CV</a>

                    </div>

                    <div className="right">
                        <img className='shape' src="/assets/Ellipse 9.svg" alt="" />

                        <div className="icons">
                            <div className="left">

                            <span className="brush-tool-circle"><HiPaintBrush className='brush-tool'/></span>
                            <span className="pen-tool-circle"><FiPenTool className='pen-tool'/></span>
                            <span className="code-circle"><VscCodeOss className='code'/></span>

                            </div>
                            <div className="right">

                            <span className="file-code-circle"><VscFileCode className='file-code'/></span>
                            <span className="color-pen-circle"><FaEyeDropper className='color-pen'/></span>
                            <span className="design-circle"> <img src="assets/design 2.svg" alt="hi" className='design' /> </span>
                            <span className="digital-drawing-circle"> <img src="assets/digital-drawing 1.svg" alt="hi" className='digital-drawing'/> </span>

                            </div>
                        </div>
                    </div>

                </motion.div>

            </motion.div>

        </div>
    );
};

export default NavBar;