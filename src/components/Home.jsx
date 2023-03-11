import React from 'react'
import MyImg from '../assets/ashu.png';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Link } from "react-scroll";
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
// import Zoom from 'react-reveal/Zoom';

const Home = () => {
    return (
        <div name="home" className="h-screen w-full bg-gradient-to-r from-cyan-700 via-cyan-400 to-cyan-600">

            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 text-black md:flex-row'>

                <div className='flex flex-col justify-center h-full'>
                    {/* <Zoom distance="20%" duration="2000"> */}
                    <h2 className='text-4xl sm:text-7xl font-bold font-signature'>
                        Welcome!! I'm Astha Negi
                    </h2>
                    {/* </Zoom> */}
                    {/* <img src="https://readme-typing-svg.demolab.com?font=Merriweather&weight=700&pause=1000&color=92120B&width=432&lines=I'm+a+student;A+passionate+coder;And+a+self+motivated+person." alt="Typing SVG" /> */}
                    <p className='text-blac py-4 max-w-md'>
                        Hello Cumties & Kelaas I am ASTHA NEGI.
                        I was born and raised in Bageshwar Uttarakhand then for my graduation i moved to Dehradun. Currently I'm pursuing B.tech Computer Science from Graphic Era Hill University Dehradun.
                        I did my schooling from Javahar Navodaya Vidhyalaya Bageshwar. I'm a student of section J 6th Sem.
                    </p>
                    <Bounce distance="20%" duration="2000">
                        <div>
                            <Link
                                to="clg"
                                smooth
                                duration={500}
                                className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-red-800 to-red-500 cursor-pointer font-signature'
                            >
                                College Work
                                <span className='group-hover:rotate-90 duration-300'><MdKeyboardArrowRight size={25} className='ml-1' /></span>
                            </Link>
                        </div>

                    </Bounce>
                </div>
                <div>
                    <Fade bottom duration="2000">

                        <img src={MyImg} alt="My Img" className='rounded-full mx-auto pb-8 w-2/3 md:w-full ' />
                    </Fade>
                </div>
            </div>

            {/* <p className='w-full text-center bg-pink-700 text-white'>This Portfolio is for professional work of my college so please do not misuse the content inside it.</p> */}
        </div>
    );
};

export default Home