import { useTheme } from '../context/context';
import '../style/main.css';

function AboutMe() {

    //* dark/light mood
    const { theme } = useTheme();

    return (
        <div className={theme == "dark" ? "about-me-container-dark" : "about-me-container-light"}>

            <div className="left-text">

                <div className="left">
                    <span className="circle"></span>
                    <span className="line"></span>
                </div>

                <div className="right">
                    <h1 className="title">who am i</h1>
                    <p className="text"></p>
                    <button className="readMore">read more</button>
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
                        perspectives to fuel creativity and adaptability. I prioritize clear and meaningful interactions, valui strong connections and effective
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
    );
};

export default AboutMe;