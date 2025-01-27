import '../style/main.css'
import { useTheme } from '../context/context';

function WebDesign() {

    const { theme } = useTheme();
    
    return (
        <div className= {theme == "light" ? "web-design-container-light" : "web-design-container-dark"}>

            <div className="top">
                <div className="left">

                </div>

                <img src="" alt="" />
            </div>

            <div className="middle">

            </div>

            <div className="bottom">
                <div className="left">

                </div>

                <div className="right">
                    
                </div>
            </div>

        </div>
    );
};

export default WebDesign;