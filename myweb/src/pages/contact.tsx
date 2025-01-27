import '../style/main.css';
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareGithub } from "react-icons/fa6";
import { useTheme } from '../context/context';
import { motion } from 'motion/react';

function Contact() {

    const { theme } = useTheme();

    return (

        <div className={theme == "light" ? "contact-container-light" : "contact-container-dark"}>

            <div className="left">

                <motion.span className="outer-circle"

                    initial={{ opacity: 0, }}
                    animate={{ opacity: 1, }}
                    transition={{ duration: 1, delay: 1.2, type: "tween" }}

                > <span className="inner-circle"></span> </motion.span>

                <motion.div className="accounts"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 2, ease: "backOut" }}
                >
                    <a href="https://www.linkedin.com/in/mohamed-mob-720a12228/"><FaLinkedin className='icon' /></a>
                    <a href="https://www.instagram.com/22_mh_22/"><AiFillInstagram className='icon' /></a>
                    <a href="https://github.com/Mohammed5798"><FaSquareGithub className='icon' /></a>
                </motion.div>
            </div>

            <div className="right">

                <form className='form' action='mailto:mohammedrich000@gmail.com' method="POST" encType='text/plain'>
                    <motion.label className='label' htmlFor="name"

                        initial={{ opacity: 0, }}
                        animate={{ opacity: 1, }}
                        transition={{ duration: 1, delay: 2.6, type: "tween" }}

                    >name</motion.label>
                    <motion.input min={3} className='user-name' type="text" id="name" name="name" required

                        initial={{ opacity: 0, }}
                        animate={{ opacity: 1, }}
                        transition={{ duration: 1, delay: 2.6, type: "tween" }}

                    />
                    <br></br>

                    <motion.label className='label' htmlFor="email"

                        initial={{ opacity: 0, }}
                        animate={{ opacity: 1, }}
                        transition={{ duration: 1, delay: 3.1, type: "tween" }}

                    >email</motion.label>
                    <motion.input className='user-email' type="email" id="email" name="email" required

                        initial={{ opacity: 0, }}
                        animate={{ opacity: 1, }}
                        transition={{ duration: 1, delay: 3.1, type: "tween" }}

                    />
                    <br></br>

                    <motion.label className='label' htmlFor="message"

                        initial={{ opacity: 0, }}
                        animate={{ opacity: 1, }}
                        transition={{ duration: 1, delay: 3.7, type: "tween" }}

                    >message</motion.label>
                    <motion.textarea className='textarea' name="message" id="message" rows={4} cols={50} required

                        initial={{ opacity: 0, }}
                        animate={{ opacity: 1, }}
                        transition={{ duration: 1, delay: 3.7, type: "tween" }}

                    ></motion.textarea>
                    <br></br>

                    <motion.button type='submit' className='submit'

                        initial={{ opacity: 0, }}
                        animate={{ opacity: 1, }}
                        transition={{ duration: 1, delay: 4.2, type: "tween" }}

                    > submit </motion.button>

                </form>
            </div>

        </div>
    );
};

export default Contact;