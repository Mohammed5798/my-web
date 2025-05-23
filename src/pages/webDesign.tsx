import '../style/main.css'
import { useTheme } from '../context/context';
import { useState } from 'react';
import { motion } from 'motion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel } from 'swiper/modules';

import '../../node_modules/swiper/swiper.css';
import '../../node_modules/swiper/modules/effect-coverflow.css';
import '../../node_modules/swiper/modules/pagination.css';

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
                    initial={{ y: -75, opacity: 0, }}
                    animate={{ y: 0, opacity: 1 }}
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
                        also discovered Figma, which further expanded my skill set.
                    </p>

                    <button className={className ? "readMore" : "readLess"} onClick={handleClicking}>{className ? "read more" : "read less"}</button>
                </motion.div>

                <img className='myImage' src="/assets/me left copy1.webp" alt="hi" />
            </div>

            <div className="middle">
                <motion.span className="creative"
                    initial={{ scale: 1., opacity: 0, }}
                    whileInView={{ scale: 0.9, opacity: 1 }}
                    transition={{ duration: 2, type: "tween" }}>
                    <img className='image' src="/assets/creativity.png" alt="hi" />
                    <img className='image-white' src="/assets/creativity (1).png" alt="hi" />
                    <h1 className="title"> creativity </h1>
                </motion.span>

                <motion.span className="communication"
                    initial={{ scale: 1., opacity: 0, }}
                    whileInView={{ scale: 0.9, opacity: 1 }}
                    transition={{ duration: 2, type: "tween" }}>
                    <img src="/assets/dialog (1).png" alt="hi" className="image" />
                    <img src="/assets/dialog.png" alt="hi" className="image-white" />
                    <h1 className="title"> communication </h1>
                </motion.span>

                <motion.span className="responsive"
                    initial={{ scale: 1., opacity: 0, }}
                    whileInView={{ scale: 0.9, opacity: 1 }}
                    transition={{ duration: 2, type: "tween" }}>

                    <img src="/assets/responsive (1).png" alt="hi" className="image" />
                    <img src="/assets/responsive.png" alt="hi" className="image-white" />
                    <h1 className="title"> responsive </h1>
                </motion.span>
            </div>

            <div className="bottom">
                <div className="left">
                    <motion.h1
                        initial={{ opacity: 0, }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1.5, ease: 'backInOut' }}
                        className="title">projects</motion.h1>

                    <div className="apps">
                        <motion.img onClick={handlingPhotoshopProjects} src="/assets/web_design_projects/photoshop/photoshop icon.svg" alt="hi"
                            className={photoshop == true ? "photoShop-checked" : "photoshop"}

                            initial={{ x: -100, opacity: 0, }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1.5, delay: 1, ease: 'backInOut' }}/>

                        <motion.img onClick={handlingIllustratorProjects} src="/assets/web_design_projects/illustrator/illustrator icon.svg" alt="hi"
                            className={illustrator == false ? "illustrator" : "illustrator-checked"}
                            initial={{ x: -100, opacity: 0, }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1.5, delay: 1.5, ease: 'backInOut' }}/>

                        <motion.img onClick={handlingFigmaProjects} src="/assets/web_design_projects/figma/figma icon.svg" alt="hi"
                            className={figma == false ? "figma" : "figma-checked"}

                            initial={{ x: -100, opacity: 0, }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1.5, delay: 2, ease: 'backInOut' }}/>
                    </div>
                </div>

                <motion.div className="right"

                    initial={{ scale: .8, opacity: 0, }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 3, ease: 'backInOut' }}>

                    {/* //! photoShop projects */}
                    <Swiper className={photoshop == false ? "photoshop-swiper-not-displayed" : 'photoshop-swiper-displayed'}

                        slidesPerView={1}
                        spaceBetween={50}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Navigation, Pagination, Mousewheel]}>
                        <SwiperSlide className='swiper-slide'>
                            <img className='image' src="/assets/web_design_projects/photoshop/boat.webp" alt="hi" />
                        </SwiperSlide>

                        <SwiperSlide className='swiper-slide'>
                            <img className='image' src="/assets/web_design_projects/photoshop/mountain.webp" alt="hi" />
                        </SwiperSlide>

                        <SwiperSlide className='swiper-slide'>
                            <img className='image' src="/assets/web_design_projects/photoshop/mountain-3297562_1920 copy.webp" alt="hi" />
                        </SwiperSlide>

                        <SwiperSlide className='swiper-slide'>
                            <img className='image' src="/assets/web_design_projects/photoshop/struggle.webp" alt="hi" />
                        </SwiperSlide>

                        <SwiperSlide className='swiper-slide'>
                            <img className='image' src="/assets/web_design_projects/photoshop/struggle-3805349_1920.psd REMOVE copy.webp" alt="hi" />
                        </SwiperSlide>

                        <SwiperSlide className='swiper-slide'>
                            <img className='image' src="/assets/web_design_projects/photoshop/volkswagen.webp" alt="hi" />
                        </SwiperSlide>

                        <SwiperSlide className='swiper-slide'>
                            <img className='image' src="/assets/web_design_projects/photoshop/volkswagen-899046_1920.psd change color copy.webp" alt="hi" />
                        </SwiperSlide>

                        <SwiperSlide className='swiper-slide'>
                            <img className='image' src="/assets/web_design_projects/photoshop/me.webp" alt="hi" />
                        </SwiperSlide>

                        <SwiperSlide className='swiper-slide'>
                            <img className='image' src="/assets/web_design_projects/photoshop/EKRV7862.psd me copy.webp" alt="hi" />
                        </SwiperSlide>

                        <SwiperSlide className='swiper-slide'>
                            <img className='image' src="/assets/web_design_projects/photoshop/london.webp" alt="hi" />
                        </SwiperSlide>

                        <SwiperSlide className='swiper-slide'>
                            <img className='image' src="/assets/web_design_projects/photoshop/london-3582649_1920.psd change color copy.webp" alt="hi" />
                        </SwiperSlide>

                        <SwiperSlide className='swiper-slide'>
                            <img className='image' src="/assets/web_design_projects/photoshop/woman-Hus saturation.webp" alt="hi" />
                        </SwiperSlide>

                        <SwiperSlide className='swiper-slide'>
                            <img className='image' src="/assets/web_design_projects/photoshop/woman- color change by Hus saturation and color balance copy.webp" alt="hi" />
                        </SwiperSlide>

                        <SwiperSlide className='swiper-slide'>
                            <img className='image' src="/assets/web_design_projects/photoshop/img copy.webp" alt="hi" />
                        </SwiperSlide>

                        <SwiperSlide className='swiper-slide'>
                            <img className='image' src="/assets/web_design_projects/photoshop/Untitled-1.psd LOGO.webp" alt="hi" />
                        </SwiperSlide>

                        <SwiperSlide className='swiper-slide'>
                            <img className='image' src="/assets/web_design_projects/photoshop/Untitled-1.psd not finsh copy.webp" alt="hi" />
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
                        modules={[Navigation, Pagination, Mousewheel]}>
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
                            <img className='image' src="/assets/web_design_projects/illustrator/spider man.webp" alt="hi" />
                        </SwiperSlide>

                        <SwiperSlide className='swiper-slide'>
                            <img className='image' src="/assets/web_design_projects/illustrator/waman and man.webp" alt="hi" />
                        </SwiperSlide>

                        <SwiperSlide className='swiper-slide'>
                            <img className='image' src="/assets/web_design_projects/illustrator/web man.png" alt="hi" />
                        </SwiperSlide>

                        <SwiperSlide className='swiper-slide'>
                            <img className='image' src="/assets/web_design_projects/illustrator/ICECREAM.webp" alt="hi" />
                        </SwiperSlide>

                    </Swiper>

                    {/* //! figma projects */}
                    <Swiper className={figma == false ? "figma-swiper-not-displayed" : 'figma-swiper-displayed'}

                        slidesPerView={1}
                        spaceBetween={50}
                        loop={true}
                        pagination={{
                            clickable: true,}}
                        navigation={true}
                        modules={[Navigation, Pagination, Mousewheel]}>
                        <SwiperSlide className='swiper-slide'>
                            <img className='image' src="/assets/web_design_projects/figma/Screenshot 2025-04-01 143502.png" alt="hi" />
                        </SwiperSlide>

                        <SwiperSlide className='swiper-slide'>
                            <img className='image' src="/assets/web_design_projects/figma/Screenshot 2025-04-01 145903.png" alt="hi" />
                        </SwiperSlide>

                        <SwiperSlide className='swiper-slide'>
                            <img className='image' src="/assets/web_design_projects/figma/Screenshot 2025-04-01 145750.png" alt="hi" />
                        </SwiperSlide>

                        <SwiperSlide className='swiper-slide'>
                            <img className='image' src="/assets/web_design_projects/figma/Screenshot 2025-04-01 145621.webp" alt="hi" />
                        </SwiperSlide>

                        <SwiperSlide className='swiper-slide'>
                            <img className='image' src="/assets/web_design_projects/figma/Screenshot 2025-04-01 145457.png" alt="hi" />
                        </SwiperSlide>

                        <SwiperSlide className='swiper-slide'>
                            <img className='image' src="/assets/web_design_projects/figma/Screenshot 2025-04-01 150002.png" alt="hi" />
                        </SwiperSlide>

                    </Swiper>
                </motion.div>
            </div>
        </div>
    );
};
export default WebDesign;