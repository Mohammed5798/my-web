import '../style/main.css';
import { LuSunMedium } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function NavBar() {
    
    const [isActive, setIsActive] = useState(true);

    const navigate = useNavigate();

    const menuClicking = () => {
        setIsActive(!isActive);
    };

    const selectHandle = (event:any)=>{

        let selectedValue = event.target.value;

        if(selectedValue === "option1"){
            navigate('/graphicDesign');
        }else{
            navigate('/webDev');
        }
    };

    //* CV not completed
    const downloadingCV = () => {};

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

                        <Link to="/" className='link'>home</Link>

                        <Link to="/aboutMe" className='link'>about me</Link>

                        <select id="options" value="my skills" onChange={selectHandle}>
                            <option value="my skills" disabled>My Skills</option>
                            <option value="option1"> Graphic Design</option>
                            <option value="option2">Web Development</option>
                        </select>

                        <Link to="/contact" className='link'>contact</Link>

                        {/* not completed */}
                        <a className="link" onClick={downloadingCV}>download CV</a>

                    </div>

                    <div className="right">
                        <img className='shape' src="/assets/Ellipse 9.svg" alt="" />

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