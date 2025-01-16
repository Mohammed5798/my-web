import { useTheme } from '../context/context';
import '../style/main.css';

function AboutMe() {

    //* dark/light mood
    const { theme } = useTheme();

    return (
        <div className={theme == "dark" ? "about-me-container-dark" : "about-me-container-light"}>

            <div className="top">

                <div className="left-text">

                    <div className="left">
                        <span className="circle"></span>
                        <span className="line"></span>
                    </div>

                    <div className="right">
                        <h1 className="title">who am i</h1>
                        <p className="text">
                            I am <span className="myname">Mohammed MOB. Oday</span> 19 years old, I live in Baghdad Iraq and I’m a passionate frontend developer and web designer,
                            and I'm a first-year college student in TECHNICAL COLLEGE OF MANAGEMENT, beside that I like reading books, running,
                            and playing chess, I’d like to connect and collaborate, Feel free to check out my projects or drop me a message to
                            discuss exciting opportunities.
                        </p>
                        <button className="readMore">contact me</button>
                    </div>

                </div>

                <div className="middle">
                    <span className="shape"></span>
                    <img className='my-image' src="/assets/me5 4.svg" alt="hi" />
                </div>

                <div className="right-text">

                    <div className="left">
                        <h1 className="title">my mindset</h1>
                        <p className="text">My mindset is rooted in openness,curiosity, and growth. I am open-minded, embracing new ideas and
                            perspectives to fuel creativity and adaptability. I prioritize clear and meaningful interactions, value strong connections and effective
                            collaboration. Problem-solving and critical thinking are key strengths, enabling me to tackle challenges effectively and deliver thoughtful solutions.
                            As a passionate learner, I currently speak English and Arabic and aim to master five languages by 2035. For me, learning expands
                            perspectives and deepens connections, driving both personal and professional growth.</p>
                        <button className="readMore">read more</button>
                    </div>
                    <div className="right">
                        <span className="circle"></span>
                        <span className="line"></span>
                    </div>

                </div>
            </div>

            <div className="down">

                <div className="left-text">

                    <div className="left">
                        <span className="circle"></span>
                        <span className="line"></span>
                    </div>

                    <div className="right">
                        <h1 className="title">what i do</h1>
                        <p className="text">
                            specialize in front-end technology and web design with expertise in creating visually appealing
                            and functional websites. My skills include JavaScript, HTML, CSS, React, TypeScript, and SCSS, which I use to build responsive
                            and user-friendly web applications. Additionally, I have a strong background in web design, utilizing tools like
                            Photoshop, Illustrator, Figma, and Adobe XD to craft professional designs for various projects. Over the years, I’ve
                            completed multiple projects that demonstrate my ability to merge creativity and technical knowledge. Whether designing
                            a web interface or creating visual assets, I am passionate about delivering high-quality, impactful results.
                        </p>
                        <button className="readMore">contact me</button>
                    </div>

                </div>

                <img src="/assets/about me image.svg" alt="hi" className="myImage" />
            </div>


        </div>
    );
};

export default AboutMe;