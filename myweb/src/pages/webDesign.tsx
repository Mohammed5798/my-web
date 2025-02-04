import '../style/main.css'
import { useTheme } from '../context/context';
import { useState } from 'react';

function WebDesign() {

    const [className, setClassName] = useState(true);

    const { theme } = useTheme();

    const handleClicking = () => {

        if (className == true) {
            setClassName(false)
        } else {
            setClassName(true);
        }
    }

    return (
        <div className={theme == "light" ? "web-design-container-light" : "web-design-container-dark"}>

            <div className="top">

                <div className="left">

                    <h1 className="title">web design</h1>
                    <span className="line"></span>
                    <p className={className ? "text" : "active-text"}>
                        My adventure into the world of web design kicked off on October 19th, 2021. At the time, I had no idea where this path would
                        lead me, I just felt an undeniable urge to dive in and invest my time in learning. Little did I know that I was on my way
                        to becoming a web designer!

                        I still vividly recall a pivotal moment during a meeting with my best friend, <span className='ibrahim'>Ibrahim.</span> He looked at me and said,
                        “Why don’t you learn Photoshop?” It was such a simple suggestion, but back then, I had no clue what Photoshop even was.
                        I thought to myself, “Why not?” That simple curiosity was the spark that ignited my journey.

                        From that moment on, I threw myself into the world of design. I mastered Photoshop and Illustrator, and soon after, I
                        delved into Adobe XD. Each tool opened new doors for creativity, enabling me to craft stunning designs. Eventually, I
                        also discovered Figma, which further expanded my skill set,

                        <span className='quote'>What started as a single suggestion transformed into a passionate pursuit.</span>
                    </p>

                    <button className={className ? "readMore" : "readLess"} onClick={handleClicking}>{className ? "read more" : "read less"}</button>

                    {/* <p className="text">my journey of learning web design started on October 19th, 2021. I did not know where I was going I only
                        knew that I should learn it because I believed I must invest my time, and I still believe in it, as a matter of fact, I 
                        did not even know I would become a web designer, I remember I was in a meeting with my best friend IBRAHIM, and he told
                        me this " Why do not you learn Photoshop" back then I did not know Photoshop, and I said to him "Why not" and from this
                        moment the journey has started, and learned Photoshop, Illustrator, and then Adobe XD, and now I can use these tools 
                        to create amazing designs, later I learned Figma.
                    </p> */}

                </div>

                <img className='myImage' src="" alt="" />
            </div>

            <div className="middle">

                <span className="creative">

                    <img className='image' src="/assets/creativity (1).png" alt="hi" />
                </span>

                <span className="communication">

                    <img src="/assets/dialog.png" alt="hi" className="image" />
                </span>

                <span className="responsive">

                    <img src="/assets/responsive.png" alt="hi" className="image" />
                </span>

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