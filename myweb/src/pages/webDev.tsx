import '../style/main.css'
import { useTheme } from '../context/context';
import { useState } from 'react';
import { motion } from 'motion/react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import '../../node_modules/swiper/swiper.css';
import '../../node_modules/swiper/modules/navigation.css';

// import required modules
import { Navigation, Keyboard } from 'swiper/modules';

function WebDev() {
    const [className, setClassName] = useState(true);

    const { theme } = useTheme();

    const handleClicking = () => {

        if (className == true) {
            setClassName(false)
        } else {
            setClassName(true);
        }
    };

    return (
        <div className={theme == "light" ? "web-design-container-light" : "web-design-container-dark"}>

            <div className="top">

                <motion.div className="left-dev"
                    initial={{ y: -75, opacity: 0, }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.7, delay: .7, ease: 'backInOut' }}
                >

                    <h1 className="title">web development</h1>
                    <span className="line"></span>
                    <p className={className ? "text-dev" : "active-text-dev"}>
                        The journey of learning web development began after completing a web design on May 30th, 2022. An influential moment occurred when I read a
                        report outlining the salary ranges for web developers, which sparked my interest due to the impressive figures. Motivated by this, I embarked on
                        my web development journey, starting with HTML and CSS before progressing to JavaScript and TypeScript.

                        To reinforce my understanding and master these skills, I built various projects. Over time, I transitioned to learning React, and I have
                        continued to develop my expertise in this field ever since.
                    </p>

                    <button className={className ? "readMore" : "readLess"} onClick={handleClicking}>{className ? "read more" : "read less"}</button>

                </motion.div>

                <img className='myImage' src="" alt="hi" />
            </div>

            <div className="middle">

                <span className="creative">

                    <img className='image' src="/assets/problem-solving (1).png" alt="hi" />
                    <img className='image-white' src="/assets/problem-solving.png" alt="hi" />
                    <h1 className="title"> problem solving </h1>
                </span>

                <span className="communication">

                    <img src="/assets/decision.png" alt="hi" className="image" />
                    <img src="/assets/decision (1).png" alt="hi" className="image-white" />
                    <h1 className="title"> critical thinking </h1>
                </span>

                <span className="responsive">

                    <img src="/assets/calendar.png" alt="hi" className="image" />
                    <img src="/assets/calendar (1).png" alt="hi" className="image-white" />
                    <h1 className="title"> time management </h1>
                </span>

            </div>

            <div className="bottom-web-dev-projects">
                <motion.h1 className="title"
                
                initial={{y:-50, opacity:0}}
                whileInView={{y:0, opacity:1}}
                transition={{duration:2, ease:"backInOut"}}

                >projects</motion.h1>

                <Swiper navigation={true} modules={[Navigation, Keyboard]} keyboard={{ enabled: true }}
                    loop={true} className="mySwiper">

                    <SwiperSlide className='swiper-slide'>

                        <div className="project">

                            <motion.div className="website"
                            
                            initial={{opacity:0, scale:0}}
                            whileInView={{opacity:1, scale:1}}
                            transition={{duration:1.5, delay:1.5}}

                            >

                                <img className='image' src="/assets/web_dev_projects/jewelrey web.png" alt="hi" />

                                <a href='https://a0274b3c.jewelry-web.pages.dev' className='link' >jewelry shop website</a>

                            </motion.div>

                            <motion.span className="icons"
                            
                            initial={{y:50, opacity:0}}
                            whileInView={{y:0, opacity:1}}
                            transition={{duration:2, delay:1.8, ease:'backInOut'}}

                            >
                                <img className='icon' src="/assets/web_dev_projects/html.svg" alt="hi" />
                                <img className='icon' src="/assets/web_dev_projects/css.svg" alt="hi" />
                                <img className='icon' src="/assets/web_dev_projects/typescript.png" alt="hi" />
                                <img className='icon' src="/assets/web_dev_projects/react.png" alt="hi" />
                            </motion.span>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='swiper-slide'>

                        <div className="project">

                            <motion.div className="website"
                            
                            initial={{opacity:0, scale:0}}
                            whileInView={{opacity:1, scale:1}}
                            transition={{duration:1.5, delay:1.5}}

                            >

                                <img className='image' src="/assets/web_dev_projects/pet shop web.png" alt="hi" />

                                <a href='https://mohammed5798.github.io/pet-shop-WEB/' className='link'>pet shop website</a>

                            </motion.div>


                            <motion.span className="icons"
                            
                            initial={{y:50, opacity:0}}
                            whileInView={{y:0, opacity:1}}
                            transition={{duration:2, delay:1.8, ease:'backInOut'}}

                            >
                                <img className='icon' src="/assets/web_dev_projects/html.svg" alt="hi" />
                                <img className='icon' src="/assets/web_dev_projects/css.svg" alt="hi" />
                                <img className='icon' src="/assets/web_dev_projects/java-script.png" alt="hi" />
                            </motion.span>

                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='swiper-slide'>

                        <div className="project">

                            <motion.div className="website"
                            
                            initial={{opacity:0, scale:0}}
                            whileInView={{opacity:1, scale:1}}
                            transition={{duration:1.5, delay:1.5}}

                            >

                                <img className='image' src="/assets/web_dev_projects/education web.png" alt="hi" />
                                <a href='https://mohammed5798.github.io/Education-web/' className='link' >education website</a>

                            </motion.div>

                            <motion.span className="icons"
                            
                            initial={{y:50, opacity:0}}
                            whileInView={{y:0, opacity:1}}
                            transition={{duration:2, delay:1.8, ease:'backInOut'}}

                            >
                                <img className='icon' src="/assets/web_dev_projects/html.svg" alt="hi" />
                                <img className='icon' src="/assets/web_dev_projects/css.svg" alt="hi" />
                                <img className='icon' src="/assets/web_dev_projects/java-script.png" alt="hi" />
                            </motion.span>
                        </div>
                    </SwiperSlide>

                </Swiper>

            </div>

        </div>
    );
};

export default WebDev;