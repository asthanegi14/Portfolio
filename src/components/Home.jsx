import React from 'react'
import MyImg from '../assets/ashu.png';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Link } from "react-scroll";

const Home = () => {
    return (
        <div name="home" className='h-screen w-full bg-gradient-to-b from-pink-900 via-pink-900 to-pink-500'>

            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 text-pink-200 md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-4xl sm:text-7xl font-bold font-signature'>
                        Hey there!! It's Me Astha Negi
                    </h2>
                    <p className='text-pink-300 py-4 max-w-md'>
                        Hello Cumties & Kelaas I am ASTHA NEGI.
                        I was born and raised in bageshwar Uttarakhand then for my graduation i moved to dehradun. Currently I'm pursuing B.tech Computer Science from Graphic Era Hill University Dehradun.
                        I did my schooling from Javahar Navodaya Vidhyalaya Bageshwar. I'm a student of section J 6th Sem.
                    </p>

                    <div>
                        <Link
                            to="clg"
                            smooth
                            duration={500}
                            className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-red-800 to-red-500 cursor-pointer'
                        >
                            College Work
                            <span className='group-hover:rotate-90 duration-300'><MdKeyboardArrowRight size={25} className='ml-1' /></span>
                        </Link>
                    </div>
                </div>
                <div className='px-4 py-4'>
                    <img src={MyImg} alt="My Img" className='border-4 rounded-full max-auto w-2/3 md:w-full ' />
                </div>
            </div>
        </div>
    );
};

export default Home