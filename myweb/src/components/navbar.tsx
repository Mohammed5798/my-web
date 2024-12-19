import '../style/main.css';
import { LuSunMedium } from "react-icons/lu";

function NavBar() {
    return ( 
        <div className="navbar-container">

            <div className="main-navbar">

                <img className='logo' src="/assets/logo.svg" alt="hi" />

                <div className="middle">
                    
                    <span className="left-line"> <span className="circle1"></span> </span>

                    <h1 className="menu">menu</h1>
                    
                    <span className="right-line"> <span className="circle2"></span> </span>

                </div>

                <span className="sun"><LuSunMedium /></span>

            </div>

            {/* <div className="full-navbar">

            </div> */}


        </div>
     );
};

export default NavBar;