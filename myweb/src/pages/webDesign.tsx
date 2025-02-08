import '../style/main.css'
import { useTheme } from '../context/context';
import { useState } from 'react';
import { motion } from 'motion/react';

import { Swiper, SwiperSlide } from 'swiper/react';

import '../../node_modules/swiper/swiper.css';
import '../../node_modules/swiper/modules/effect-coverflow.css';
import '../../node_modules/swiper/modules/pagination.css';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';

function WebDesign() {

    const [className, setClassName] = useState(true);

    const [photoshop, setPhotoshop] = useState(true);
    const [illustrator, setIllustrator] = useState(false);
    const [figma, setFigma] = useState(false);

    const { theme } = useTheme();

    const handleClicking = () => {

        if (className == true) {
            setClassName(false)
        } else {
            setClassName(true);
        }
    };

    const handlingIllustratorProjects = () => {
        if (illustrator == true) {
            setIllustrator(false);

        } else {
            setIllustrator(true);
            setPhotoshop(false);
            setFigma(false);
        };
    };

    const handlingPhotoshopProjects = () => {
        if (photoshop == true) {
            setPhotoshop(false);
        } else {
            setPhotoshop(true);
            setIllustrator(false);
            setFigma(false);
        };
    };

    const handlingFigmaProjects = () => {
        if (figma == true) {
            setFigma(false);
        } else {
            setFigma(true);
            setPhotoshop(false);
            setIllustrator(false);
        };
    };

    return (
        <div className={theme == "light" ? "web-design-container-light" : "web-design-container-dark"}>

            <div className="top">

                <motion.div className="left"
                    initial={{ y:-75, opacity: 0, }}
                    animate={{ y:0, opacity: 1 }}
                    transition={{ duration: 1.7, delay: .7, ease: 'backInOut' }}
                >

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

                </motion.div>

                <img className='myImage' src="" alt="" />
            </div>

            <div className="middle">

                <span className="creative">

                    <img className='image' src="/assets/creativity.png" alt="hi" />
                    <img className='image-white' src="/assets/creativity (1).png" alt="hi" />
                    <h1 className="title"> creativity </h1>
                </span>

                <span className="communication">

                    <img src="/assets/dialog (1).png" alt="hi" className="image" />
                    <img src="/assets/dialog.png" alt="hi" className="image-white" />
                    <h1 className="title"> communication </h1>
                </span>

                <span className="responsive">

                    <img src="/assets/responsive (1).png" alt="hi" className="image" />
                    <img src="/assets/responsive.png" alt="hi" className="image-white" />
                    <h1 className="title"> responsive </h1>
                </span>

            </div>

            <div className="bottom">
                <div className="left">
                    <motion.h1
                    
                    initial={{ opacity: 0, }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5, ease: 'backInOut' }}
                    
                    className="title">projects</motion.h1>

                    <motion.img onClick={handlingPhotoshopProjects} src="/assets/web_design_projects/photoshop/photoshop icon.svg" alt="hi"
                        className={photoshop == true ? "photoShop-checked" : "photoshop"} 
                        
                        initial={{ x:-100, opacity: 0, }}
                        whileInView={{ x:0, opacity: 1 }}
                        transition={{ duration: 1.5, delay: 1, ease: 'backInOut' }}

                        />

                    <motion.img onClick={handlingIllustratorProjects} src="/assets/web_design_projects/illustrator/illustrator icon.svg" alt="hi"
                        className={illustrator == false ? "illustrator" : "illustrator-checked"} 
                        
                        initial={{ x:-100, opacity: 0, }}
                        whileInView={{ x:0, opacity: 1 }}
                        transition={{ duration: 1.5, delay: 1.5, ease: 'backInOut' }}

                        />

                    <motion.img onClick={handlingFigmaProjects} src="/assets/web_design_projects/figma/figma icon.svg" alt="hi"
                        className={figma == false ? "figma" : "figma-checked"} 
                        
                        initial={{ x:-100, opacity: 0, }}
                        whileInView={{ x:0, opacity: 1 }}
                        transition={{ duration: 1.5, delay: 2, ease: 'backInOut' }}

                        />

                </div>

                <motion.div className="right"
                
                initial={{ scale:.8, opacity: 0, }}
                whileInView={{ scale:1, opacity: 1 }}
                transition={{ duration: 1.5, delay: 3, ease: 'backInOut' }}

                >

                    {/* //! photoShop projects */}
                    <Swiper className={photoshop == false ? "photoshop-swiper-not-displayed" : 'photoshop-swiper-displayed'}

                        slidesPerView={1}
                        spaceBetween={50}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Navigation, Pagination]}

                    >

                        <SwiperSlide className='swiper-slide'>
                            <img className='image' src="/assets/web_design_projects/photoshop/boat.png" alt="hi" />
                        </SwiperSlide>

                        <SwiperSlide className='swiper-slide'>
                            <img className='image' src="/assets/web_design_projects/photoshop/mountain.png" alt="hi" />
                        </SwiperSlide>

                        <SwiperSlide className='swiper-slide'>
                            <img className='image' src="/assets/web_design_projects/photoshop/mountain-3297562_1920 copy.png" alt="hi" />
                        </SwiperSlide>

                        <SwiperSlide className='swiper-slide'>
                            <img className='image' src="/assets/web_design_projects/photoshop/struggle.png" alt="hi" />
                        </SwiperSlide>

                        <SwiperSlide className='swiper-slide'>
                            <img className='image' src="/assets/web_design_projects/photoshop/struggle-3805349_1920.psd REMOVE copy.png" alt="hi" />
                        </SwiperSlide>

                        <SwiperSlide className='swiper-slide'>
                            <img className='image' src="/assets/web_design_projects/photoshop/volkswagen.png" alt="hi" />
                        </SwiperSlide>

                        <SwiperSlide className='swiper-slide'>
                            <img className='image' src="/assets/web_design_projects/photoshop/volkswagen-899046_1920.psd change color copy.png" alt="hi" />
                        </SwiperSlide>

                        <SwiperSlide className='swiper-slide'>
                            <img className='image' src="/assets/web_design_projects/photoshop/me.png" alt="hi" />
                        </SwiperSlide>

                        <SwiperSlide className='swiper-slide'>
                            <img className='image' src="/assets/web_design_projects/photoshop/EKRV7862.psd me copy.png" alt="hi" />
                        </SwiperSlide>

                        <SwiperSlide className='swiper-slide'>
                            <img className='image' src="/assets/web_design_projects/photoshop/london.png" alt="hi" />
                        </SwiperSlide>

                        <SwiperSlide className='swiper-slide'>
                            <img className='image' src="/assets/web_design_projects/photoshop/london-3582649_1920.psd change color copy.png" alt="hi" />
                        </SwiperSlide>

                        <SwiperSlide className='swiper-slide'>
                            <img className='image' src="/assets/web_design_projects/photoshop/woman-Hus saturation.png" alt="hi" />
                        </SwiperSlide>

                        <SwiperSlide className='swiper-slide'>
                            <img className='image' src="/assets/web_design_projects/photoshop/woman- color change by Hus saturation and color balance copy.png" alt="hi" />
                        </SwiperSlide>

                        <SwiperSlide className='swiper-slide'>
                            <img className='image' src="/assets/web_design_projects/photoshop/img copy.png" alt="hi" />
                        </SwiperSlide>

                        <SwiperSlide className='swiper-slide'>
                            <img className='image' src="/assets/web_design_projects/photoshop/Untitled-1.psd LOGO.png" alt="hi" />
                        </SwiperSlide>

                        <SwiperSlide className='swiper-slide'>
                            <img className='image' src="/assets/web_design_projects/photoshop/Untitled-1.psd not finsh copy.png" alt="hi" />
                        </SwiperSlide>
                    </Swiper>

                    {/* //! illustrator projects */}
                    <Swiper className={illustrator == false ? "illustrator-swiper-not-displayed" : 'illustrator-swiper-displayed'}

                        slidesPerView={1}
                        spaceBetween={50}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Navigation, Pagination]}
                    >

                        <SwiperSlide className='swiper-slide'>
                            <img className='image' src="/assets/web_design_projects/illustrator/cup candy.png" alt="hi" />
                        </SwiperSlide>

                        <SwiperSlide className='swiper-slide'>
                            <img className='image' src="/assets/web_design_projects/illustrator/EGGPLANT .png" alt="hi" />
                        </SwiperSlide>

                        <SwiperSlide className='swiper-slide'>
                            <img className='image' src="/assets/web_design_projects/illustrator/guy.png" alt="hi" />
                        </SwiperSlide>

                        <SwiperSlide className='swiper-slide'>
                            <img className='image' src="/assets/web_design_projects/illustrator/kun fuo.png" alt="hi" />
                        </SwiperSlide>

                        <SwiperSlide className='swiper-slide'>
                            <img className='image' src="/assets/web_design_projects/illustrator/penguin.png" alt="hi" />
                        </SwiperSlide>

                        <SwiperSlide className='swiper-slide'>
                            <img className='image' src="/assets/web_design_projects/illustrator/spider man.png" alt="hi" />
                        </SwiperSlide>

                        <SwiperSlide className='swiper-slide'>
                            <img className='image' src="/assets/web_design_projects/illustrator/waman and man.png" alt="hi" />
                        </SwiperSlide>

                        <SwiperSlide className='swiper-slide'>
                            <img className='image' src="/assets/web_design_projects/illustrator/web man.png" alt="hi" />
                        </SwiperSlide>
                    </Swiper>

                    {/* //! figma projects */}
                    <Swiper className={figma == false ? "figma-swiper-not-displayed" : 'figma-swiper-displayed'}

                        slidesPerView={1}
                        spaceBetween={1}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Navigation, Pagination]}

                    >
                        <SwiperSlide className='swiper-slide'>
                            <img className='image' src="/assets/web_design_projects/photoshop/boat.png" alt="hi" />
                        </SwiperSlide>

                    </Swiper>

                </motion.div>
            </div>

        </div>
    );
};

export default WebDesign;