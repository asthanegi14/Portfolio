import React from 'react'
import Donation from '../assets/Donation.jpg';
import Todo from '../assets/todo.jpg';
import Converter from '../assets/converter.png';
import Gehu from '../assets/gehu.jpeg';
import Calci from '../assets/calci.jpg';

import Fade from 'react-reveal/Fade';

const Projects = () => {
    return (
        <div name='projects' className='pt-20 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 text-black'>

            <Fade duration="3000">
                <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                    <div className='pb-8'>
                        <p className='text-4xl font-bold border-cyan-700 font-signature'>Projects</p>
                        <p className='py-6'>Check out some of my projects.</p>
                    </div>
                    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

                        <Fade distance="20%" duration="2000" bottom>
                            <div>
                                <img src={Gehu} alt="Gehu Website" className='duration-200' />
                                {/* <div className=' rounded-lg flex items-center justify-center'>
                                    <button className='shadow-md shadow-cyan-900 rounded-md hover:scale-105 w-1/2 px-6 py-3 m-4 duration-200 text-8px'><a href="https://asthanegi14.github.io/Unofficial-website-of-Graphic-era-university/"> Demo</a></button>
                                    <button className='shadow-md shadow-cyan-900 rounded-md hover:scale-105 w-1/2 px-6 py-3 m-4 duration-200 text-8px'><a href="https://github.com/asthanegi14/Unofficial-website-of-Graphic-era-university"> Code</a></button>
                                </div> */}
                                <div className='py-4 rounded-lg items-center justify-center'>
                                    <h2 className='text-center px-2 py-2 font-bold font-signature'>Clone Of Graphic Era University</h2>
                                    <p className='text-center'>A Full Stack Website</p>
                                </div>
                            </div>
                        </Fade>
                        <Fade distance="20%" duration="2000" bottom>
                            <div >
                                <img src={Todo} alt="todo list" className='duration-200' />
                                {/* <div className=' rounded-lg flex items-center justify-center'>
                                    <button className='shadow-md shadow-cyan-900 rounded-md hover:scale-105 w-1/2 px-6 py-3 m-4 duration-200 text-8px'>Demo</button>
                                    <button className='shadow-md shadow-cyan-900 rounded-md hover:scale-105 w-1/2 px-6 py-3 m-4 duration-200 text-8px'><a href="https://github.com/asthanegi14/Oibsip_taskno_3_ToDo-List-AngularJs-">Code</a> </button>
                                </div> */}

                                <div className='py-4 rounded-lg items-center justify-center'>
                                    <h2 className='text-center px-2 py-2 font-bold font-signature'>Make Your ToDo List Here</h2>
                                    <p className='text-center'>Built With AngularJs</p>
                                </div>
                            </div></Fade>

                        <Fade distance="20%" duration="2000" bottom>
                            <div>
                                <img src={Donation} alt="Donation Website" className='duration-200 ' />
                                {/* <div className=' rounded-lg flex items-center justify-center'>
                                    <button className='shadow-md shadow-cyan-900 rounded-md hover:scale-105 w-1/2 px-6 py-3 m-4 duration-200 text-8px'>Demo</button>
                                    <button className='shadow-md shadow-cyan-900 rounded-md hover:scale-105 w-1/2 px-6 py-3 m-4 duration-200 text-8px'><a href="https://github.com/Greedy-Only/Crowd-Funding-Website-using-Ethereum-Blockchain">Code</a> </button>
                                </div> */}

                                <div className='py-4 rounded-lg items-center justify-center'>
                                    <h2 className='text-center px-2 py-2 font-bold font-signature'>Donation Website With Blockchain</h2>
                                    <p className='text-center'>Use of Etherium</p>
                                </div>
                            </div>
                        </Fade>
                        <Fade distance="20%" duration="2000" bottom>
                            <div>
                                <img src={Converter} alt="Converter" className='duration-200' />
                                {/* <div className=' rounded-lg flex items-center justify-center'>
                                    <button className='shadow-md shadow-cyan-900 rounded-md hover:scale-105 w-1/2 px-6 py-3 m-4 duration-200 text-8px'><a href="https://asthanegi14.github.io/VOICE-Or-TEXT-CONVERTER/"> Demo</a></button>
                                    <button className='shadow-md shadow-cyan-900 rounded-md hover:scale-105 w-1/2 px-6 py-3 m-4 duration-200 text-8px'><a href="https://github.com/asthanegi14/VOICE-Or-TEXT-CONVERTER"> Code</a></button>
                                </div> */}

                                <div className='py-4 rounded-lg items-center justify-center'>
                                    <h2 className='text-center px-2 py-2 font-bold font-signature'>Text-to-Voice & Voice-to-Text</h2>
                                    <p className='text-center'>By Using JavaScript</p>
                                </div>
                            </div>

                        </Fade>
                        <Fade distance="20%" duration="2000" bottom>
                            <div>
                                <img src={Calci} alt="Calculator" className='duration-200' />
                                {/* <div className=' rounded-lg flex items-center justify-center'>
                                    <button className='shadow-md shadow-cyan-900 rounded-md hover:scale-105 w-1/2 px-6 py-3 m-4 duration-200 text-8px'><a href="https://asthanegi14.github.io/Oibsip_taskno_1_Calculator-using-js/"> Demo</a></button>
                                    <button className='shadow-md shadow-cyan-900 rounded-md hover:scale-105 w-1/2 px-6 py-3 m-4 duration-200 text-8px'><a href="https://github.com/asthanegi14/Oibsip_taskno_1_Calculator-using-js"> Code</a></button>
                                </div> */}

                                <div className='py-4 rounded-lg items-center justify-center'>
                                    <h2 className='text-center px-2 py-2 font-bold font-signature'>Make Your Calculations Easy</h2>
                                    <p className='text-center'>By Using JavaScript </p>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </Fade>
        </div>
    )
}

export default Projects