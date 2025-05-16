import '../style/main.css'
import { motion } from 'motion/react';
import { useTheme } from '../context/context';
import AboutMe from './aboutMe';

function HomePage() {
    const { theme } = useTheme();

    return (
        <div className="home">
            <div className= { theme == "light" ? 'home-container-light' : 'home-container-dark'}>
                <div className="left">
                    <div className="top">
                        <motion.h1
                            initial={{ x: -120, opacity: 0, }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: .8, delay: 1.4 }}
                            className="first-title">hi, my name is</motion.h1>
                        <motion.h1
                            initial={{scale:0}}
                            animate={{scale:1}}
                            transition={{duration:1.2, delay:2.5}}
                            className="myname">mohammed</motion.h1>
                        <motion.h1
                            initial={{ x: 120, opacity: 0, }}
                            animate={{ x: 0, opacity: 1,}}
                            transition={{ duration: 1.3, delay: 1.4, }}
                            className="second-title">designer <span>&</span> developer</motion.h1>
                    </div>
                    <a href='#aboutMe' className="bottom">
                        <motion.button 
                            initial={{ y: 120, opacity: 0, }}
                            animate={{ y: 0, opacity: 1,}}
                            transition={{ duration: .8, delay: 3, type: 'spring' }}
    
                            className="button">explore</motion.button>
                    </a>
                </div>
                <motion.div className="right"
                    initial={{ opacity: 0, }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 3.9, ease: 'backInOut' }}
                >
                    <span className='line'></span>
                    <p className="text"> scroll down </p>
                </motion.div>
            </div>
            <AboutMe></AboutMe>
        </div>
    );
}

export default HomePage;