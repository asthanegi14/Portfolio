import React from 'react'
import html from '../assets/html.png';
import css from '../assets/css.png';
import java from '../assets/java.png';
import php from '../assets/php.png';
import sql from '../assets/sql.avif';
import tcss from '../assets/tcss.png';
import js from '../assets/js.png';
import react from '../assets/react.png';

const Skills = () => {
    return (
        <div name='skills' className='pt-20 bg-gradient-to-r from-cyan-900 via-cyan-600 to-cyan-800 text-black'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-black'>

                <div className="pb-6">
                    <p className='text-4xl font-bold text-black font-signature'>Skills</p>
                    <p className='py-6'>These are some technologies I've worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-6 gap-8 text-center py-8 px-12 sm:px-0'>
                    <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-black'>
                        <img src={html} alt="html" className='w-20 mx-auto' />
                        <p className='mt-4'>HTML</p>
                    </div>
                    <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-black'>
                        <img src={css} alt="html" className='w-20 mx-auto' />
                        <p className='mt-4'>CSS</p>
                    </div>
                    <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-black'>
                        <img src={php} alt="html" className='w-20 mx-auto pt-9' />
                        <p className='mt-4'>Php</p>
                    </div>
                    <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-black'>
                        <img src={react} alt="html" className='w-20 mx-auto pt-9' />
                        <p className='mt-4'>REACT</p>
                    </div>
                    <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-black'>
                        <img src={java} alt="html" className='w-20 mx-auto' />
                        <p className='mt-4'>JAVA</p>
                    </div>
                    <div className='shadow-md hover:scale-105 duration-500 py-4 rounded-lg shadow-black'>
                        <img src={sql} alt="html" className='w-20 mx-auto pt-7' />
                        <p className='mt-4'>SQL</p>
                    </div>
                    <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-black'>
                        <img src={tcss} alt="html" className='w-20 mx-auto' />
                        <p className='mt-4'>TAILWIND CSS</p>
                    </div>
                    <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-black'>
                        <img src={js} alt="html" className='w-20 mx-auto' />
                        <p className='mt-4'>JAVASCRIPT</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills