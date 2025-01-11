import { useEffect, useState } from 'react';
import '../style/main.css'
import { motion } from 'motion/react';

function HomePage() {

    // const [theme, setTheme] = useState("dark");
    // let theme = localStorage.getItem("theme");

    // console.log(theme);

    // const storedTheme = localStorage.getItem('theme');
    // if (storedTheme) return setTheme(storedTheme);


    return (
        <div className='home-container-dark'>

            <div className="left">

                <div className="top">
                    <motion.h1

                        initial={{ x: -70, opacity: 0, }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.5, delay: 1.2, ease: 'backInOut' }}

                        className="first-title">hi, my name is</motion.h1>
                    <motion.h1

                        initial={{ x: -70, opacity: 0, }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.5, delay: 1.8, ease: 'backInOut' }}

                        className="myname">mohammed</motion.h1>
                    <motion.h1

                        initial={{ x: -70, opacity: 0, }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.5, delay: 2.3, ease: 'backInOut' }}

                        className="second-title">designer <span>&</span> developer</motion.h1>
                </div>

                <div className="bottom">
                    <motion.button

                        initial={{ y: 120, opacity: 0, }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 2.8, type: 'spring' }}

                        className="button">explore</motion.button>
                </div>

            </div>

            <motion.div className="right"

                initial={{ x: 140, opacity: 0, }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 3.7, ease: 'backInOut' }}

            >

                <span className='line'></span>

                <p className="text"> scroll down </p>

            </motion.div>

        </div>
    );
}

export default HomePage;