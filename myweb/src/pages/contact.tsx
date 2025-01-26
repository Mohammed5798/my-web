import '../style/main.css';
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareGithub } from "react-icons/fa6";
import { useTheme } from '../context/context';

function Contact() {

    const { them } = useTheme();

    return (

        <div className={them == "light" ? "contact-container-light" : "contact-container-dark"}>

            <div className="left">

                <span className="outer-circle"> <span className="inner-circle"></span> </span>

                <div className="accounts">
                    <FaLinkedin className='icon'/>
                    <AiFillInstagram className='icon'/>
                    <FaSquareGithub className='icon'/>
                </div>
            </div>

            <div className="right">

                <form className='form' action='mailto:mohammedrich000@gmail.com' method="POST" encType='text/plain'>
                    <label className='label' htmlFor="name">name</label>
                    <input min={3} className='user-name' type="text" id="name" name="name" required />
                    <br></br>

                    <label className='label' htmlFor="email">email</label>
                    <input className='user-email' type="email" id="email" name="email" required />
                    <br></br>

                    <label className='label' htmlFor="message">message</label>
                    <textarea className='textarea' name="message" id="message" rows={4} cols={50} required></textarea>
                    <br></br>

                    <button type='submit' className='submit'> submit </button>

                </form>
            </div>

        </div>
    );
};

export default Contact;