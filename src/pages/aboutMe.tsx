import { useState, } from 'react';
import { useTheme } from '../context/context';
import { motion } from 'motion/react';
import '../style/main.css';

function AboutMe() {
    const [text, setText] = useState(true);
    const [text1, setText1] = useState(true);

    const Changing = ()=>{
        
        if(text == true){
            setText(false);
        }else{
            setText(true);
        }
    };

    const Changing1 = ()=>{
        
        if(text1 == true){
            setText1(false);
        }else{
            setText1(true);
        }
    };

    //* dark/light mood
    const { theme } = useTheme();

    return (
        <div id='aboutMe' className={theme == "dark" ? "about-me-container-dark" : "about-me-container-light"}>

            <div className="top">

                <motion.div className="left-text"
                
                initial={{ y:-100, opacity:0 }}
                whileInView={{ y:0, opacity:1 }}
                transition={{ duration:1, delay:1.6, type:"tween" }}

                >

                    <div className="left">
                        <span className="circle"></span>
                        <span className="line"></span>
                    </div>

                    <div className="right">
                        <h1 className="title">who am i</h1>
                        <p className="text">
                            I am <span className="myname">Mohammed MOB. Oday</span> 20 years old, I live in Baghdad Iraq and I’m a passionate frontend developer and web designer,
                            and I'm a first-year college student in TECHNICAL COLLEGE OF MANAGEMENT, beside that I like reading books, running,
                            and playing chess, I’d like to connect and collaborate, Feel free to check out my projects or drop me a message to
                            discuss exciting opportunities.
                        </p>
                        <a href='/contact' className="readMore">contact me</a>
                    </div>

                </motion.div>

                <motion.div className="middle"
                
                initial={{ scale:1.1, opacity:0 }}
                whileInView={{ scale:1, opacity:1 }}
                transition={{ duration:1, delay:3, type:"tween" }}

                >
                    <span className="shape"></span>
                    <img className='my-image' src="/assets/about me image (1).webp" alt="hi" />
                </motion.div>

                <motion.div className="right-text"
                
                initial={{ y:100, opacity:0 }}
                whileInView={{ y:0, opacity:1 }}
                transition={{ duration:1, delay:1.6, type:"tween" }}

                >

                    <div className="left">
                        <h1 className={text ? "title" : "editedTitle"}>my mindset</h1>
                        <p className={ text ? "text" : "showedText"}>My mindset is rooted in openness,curiosity, and growth. I am open-minded, embracing new ideas and
                            perspectives to fuel creativity and adaptability. I prioritize clear and meaningful interactions, value strong connections and effective
                            collaboration. Problem-solving and critical thinking are key strengths, enabling me to tackle challenges effectively and deliver thoughtful solutions.
                            As a passionate learner, I currently speak English and Arabic and aim to master five languages by 2035. For me, learning expands
                            perspectives and deepens connections, driving both personal and professional growth.</p>
                        <button onClick={Changing} className="readMore"> {text ? "read more" : "read less"}</button>
                    </div>
                    <div className={text ? "right" : "editedRight"}>
                        <span className="circle"></span>
                        <span className="line"></span>
                    </div>

                </motion.div>
            </div>

            <div className="down">

                <motion.div className="left-text"
                
                initial={{ x:-100, opacity:0 }}
                whileInView={{ x:0, opacity:1 }}
                transition={{ duration:1, delay:1, type:"tween" }}

                >

                    <div className={text1 ? "left" : "editedLeft"}>
                        <span className="circle"></span>
                        <span className="line"></span>
                    </div>

                    <div className="right">
                        <h1 className={text1 ? "title" : "titled"}>what i do</h1>
                        <p className={text1 ? "text" : "texted"}>
                            I specialize in front-end technology and web design with expertise in creating visually appealing
                            and functional websites. My skills include JavaScript, HTML, CSS, React, TypeScript, and SCSS, which I use to build responsive
                            and user-friendly web applications. Additionally, I have a strong background in web design, utilizing tools like
                            Photoshop, Illustrator, Figma, and Adobe XD to craft professional designs for various projects. Over the years, I’ve
                            completed multiple projects that demonstrate my ability to merge creativity and technical knowledge. Whether designing
                            a web interface or creating visual assets, I am passionate about delivering high-quality, impactful results.
                        </p>
                        <button onClick={Changing1} className="readMore">{text1 ? "read more" : "read less"}</button>
                    </div>

                </motion.div>

                <div className="myImage">

                    <img src="/assets/me front copy1.webp" alt="hi" className="image" />
                </div>

            </div>

        </div>
    );
};

export default AboutMe;