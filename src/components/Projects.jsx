import React, { useState } from 'react';
import Donation from '../assets/Donation.jpg';
import Todo from '../assets/todo.jpg';
import Converter from '../assets/converter.png';
import Gehu from '../assets/gehu.jpeg';
import Calci from '../assets/calci.jpg';
import { FaTimes } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const Projects = () => {


    const [view1, setview] = useState(false);
    const [view2, setview2] = useState(false);
    const [view3, setview3] = useState(false);
    const [view4, setview4] = useState(false);
    const [view5, setview5] = useState(false);

    function popUp() {
        setview(!view1);
    }
    function popUp2() {
        setview2(!view2);
    }

    function popUp3() {
        setview3(!view3);
    }

    const popUp4 = () => {
        setview4(!view4);
    }

    const popUp5 = () => {
        setview5(!view5);
    }

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
                                <div className='py-4 rounded-lg items-center justify-center'>
                                    <h2 className='text-center px-2 py-2 font-bold font-signature'>Clone Of Graphic Era University</h2>
                                    <p className='text-center'>A Full Stack Website</p>
                                </div>
                                <div onClick={() => { popUp() }} className='py-2 rounded-lg '>
                                    <p className='hover:scale-105 duration-500 bg-gradient-to-r from-cyan-700 via-cyan-400 to-cyan-600 text-black text-center rounded-md shadow-md mt-4 px-4 py-4 shadow-cyan-900 font-signature cursor-pointer'>Read More</p>
                                </div>
                            </div>
                        </Fade>
                        <Fade distance="20%" duration="2000" bottom>
                            <div >
                                <img src={Todo} alt="todo list" className='duration-200' />
                                <div className='py-4 rounded-lg items-center justify-center'>
                                    <h2 className='text-center px-2 py-2 font-bold font-signature'>Make Your ToDo List Here</h2>
                                    <p className='text-center'>Built With AngularJs</p>
                                </div>

                                <div onClick={() => { popUp2() }} className='py-2 rounded-lg '>
                                    <p className='hover:scale-105 duration-500 bg-gradient-to-r from-cyan-700 via-cyan-400 to-cyan-600 text-black text-center rounded-md shadow-md mt-4 px-4 py-4 shadow-cyan-900 font-signature'>Read More</p>
                                </div>
                            </div></Fade>

                        <Fade distance="20%" duration="2000" bottom>
                            <div>
                                <img src={Donation} alt="Donation Website" className='duration-200 ' />

                                <div className='py-4 rounded-lg items-center justify-center'>
                                    <h2 className='text-center px-2 py-2 font-bold font-signature'>Donation Website With Blockchain</h2>
                                    <p className='text-center'>Use of Etherium</p>
                                </div>

                                <div onClick={() => { popUp3() }} className='py-2 rounded-lg '>
                                    <p className='hover:scale-105 duration-500 bg-gradient-to-r from-cyan-700 via-cyan-400 to-cyan-600 text-black text-center rounded-md shadow-md mt-4 px-4 py-4 shadow-cyan-900 font-signature'>Read More</p>
                                </div>
                            </div>
                        </Fade>
                        <Fade distance="20%" duration="2000" bottom>
                            <div>
                                <img src={Converter} alt="Converter" className='duration-200' />

                                <div className='py-4 rounded-lg items-center justify-center'>
                                    <h2 className='text-center px-2 py-2 font-bold font-signature'>Text-to-Voice & Voice-to-Text</h2>
                                    <p className='text-center'>By Using JavaScript</p>
                                </div>

                                <div onClick={() => { popUp4() }} className='py-2 rounded-lg '>
                                    <p className='hover:scale-105 duration-500 bg-gradient-to-r from-cyan-700 via-cyan-400 to-cyan-600 text-black text-center rounded-md shadow-md mt-4 px-4 py-4 shadow-cyan-900 font-signature '>Read More</p>
                                </div>
                            </div>

                        </Fade>
                        <Fade distance="20%" duration="2000" bottom>
                            <div>
                                <img src={Calci} alt="Calculator" className='duration-200' />
                                <div className='py-4 rounded-lg items-center justify-center'>
                                    <h2 className='text-center px-2 py-2 font-bold font-signature'>Make Your Calculations Easy</h2>
                                    <p className='text-center'>By Using JavaScript </p>
                                </div>
                                <div onClick={() => { popUp5() }} className='py-2 rounded-lg '>
                                    <p className='hover:scale-105 duration-500 bg-gradient-to-r from-cyan-700 via-cyan-400 to-cyan-600 text-black text-center rounded-md shadow-md mt-4 px-4 py-4 shadow-cyan-900 font-signature'>Read More</p>
                                </div>
                            </div>
                        </Fade>
                    </div>
                    {/* After clicking on read more button */}
                </div>
            </Fade>

            <Zoom distance="20%" duration="2000">
                {view1 &&

                    <div className='pop sm:mx-20 sm:my-4 fixed  bg-gradient-to-b from-cyan-600 via-cyan-400 to-cyan-600 text-black px-12 py-8'>
                        <div className='absolute top-2 right-0 pb-2 h-16 w-16' onClick={popUp}>
                            <><FaTimes /></>
                        </div>
                        <div className='h-64'>
                            <img src={Gehu} alt="Gehu" className='popUpImg h-full ' />
                        </div>
                        <div className='px-4 pt-8 text-center'>
                            <h2 className='font-signature text-2xl py-2 '>Clone Of Graphic Era University</h2>
                            <p className='py-2'> It is a Full Stack Website made up with the help of HTML, CSS, and JavaScript. This website is not a proper clone i tried to implement my learnings in it. With the help of this website a user can get to know more about Graphic Era University as well as the academic deatils also he or she can contact to the staf of GEU. There is a 360 degree tour of GEU is available in it.</p>
                        </div>
                        <center>
                            <div className='space-x-4'>
                                <a href="https://asthanegi14.github.io/Unofficial-website-of-Graphic-era-university/">
                                    <button className='cursor-pointer hover:bg-gray-200 hover:text-black duration-500 text-lg  bg-red-700 text-white px-4 py-2 font-signature text-center rounded-md'>Demo</button>
                                </a>

                            </div>
                        </center>
                    </div>
                }
            </Zoom>
            <Zoom>
                {view2 &&

                    <div className='pop sm:mx-20 sm:my-4 fixed  bg-gradient-to-b from-cyan-600 via-cyan-400 to-cyan-600 text-black px-12 py-8'>
                        <div className='absolute top-2 right-0 pb-2 h-16 w-16' onClick={() => { popUp2() }}>
                            <><FaTimes /></>
                        </div>
                        <div className='h-64'>
                            <img src={Todo} alt="Gehu" className='popUpImg h-full ' />
                        </div>
                        <div className='px-4 pt-8 text-center'>
                            <h2 className='font-signature text-2xl py-2 '>Make Your ToDo List Here</h2>
                            <p className='py-2'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur deleniti fugiat numquam in pariatur ipsam. Esse fugiat facilis sit quia beatae repellat, harum, aspernatur quis eveniet repellendus ut explicabo molestiae magni! Odit culpa blanditiis!</p>
                        </div>
                        <center>
                            <div className='space-x-4'>
                                <a href="https://asthanegi14.github.io/Oibsip_taskno_3_ToDo-List-AngularJs-/">
                                    <button className='cursor-pointer hover:bg-gray-200 hover:text-black duration-500 text-lg  bg-red-700 text-white px-4 py-2 font-signature text-center rounded-md'>Demo</button>
                                </a>

                            </div>
                        </center>
                    </div>
                }
            </Zoom>
            <Zoom>
                {view3 &&

                    <div className='pop sm:mx-20 sm:my-4 fixed  bg-gradient-to-b from-cyan-600 via-cyan-400 to-cyan-600 text-black px-12 py-8'>
                        <div className='absolute top-2 right-0 pb-2 h-16 w-16' onClick={() => { popUp3() }}>
                            <><FaTimes /></>
                        </div>
                        <div className='h-64'>
                            <img src={Donation} alt="Gehu" className='popUpImg h-full ' />
                        </div>
                        <div className='px-4 pt-8 text-center'>
                            <h2 className='font-signature text-2xl py-2 '>Donation Website With Blockchain</h2>
                            <p className='py-2'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur deleniti fugiat numquam in pariatur ipsam. Esse fugiat facilis sit quia beatae repellat, harum, aspernatur quis eveniet repellendus ut explicabo molestiae magni! Odit culpa blanditiis.</p>
                        </div>
                        <center>
                            <div className='space-x-4'>
                                <p className='font-signature py-2'>There is no Demo available for this project</p>
                            </div>
                        </center>
                    </div>
                }</Zoom>
            <Zoom>
                {view4 &&

                    <div className='pop sm:mx-20 sm:my-4 fixed  bg-gradient-to-b from-cyan-600 via-cyan-400 to-cyan-600 text-black px-12 py-8'>
                        <div className='absolute top-2 right-0 pb-2 h-16 w-16' onClick={() => { popUp4() }}>
                            <><FaTimes /></>
                        </div>
                        <div className='h-64'>
                            <img src={Converter} alt="Gehu" className='popUpImg h-full ' />
                        </div>
                        <div className='px-4 pt-8 text-center'>
                            <h2 className='font-signature text-2xl py-2 '>Text-to-Voice & Voice-to-Text</h2>
                            <p className='py-2'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur deleniti fugiat numquam in pariatur ipsam. Esse fugiat facilis sit quia beatae repellat, harum, aspernatur quis eveniet repellendus ut explicabo molestiae magni!</p>
                        </div>
                        <center>
                            <div className='space-x-4'>
                                <a href="https://asthanegi14.github.io/VOICE-Or-TEXT-CONVERTER">
                                    <button className='cursor-pointer hover:bg-gray-200 hover:text-black duration-500 text-lg  bg-red-700 text-white px-4 py-2 font-signature text-center rounded-md'>Demo</button>
                                </a>
                            </div>
                        </center>
                    </div>
                }
            </Zoom>
            <Zoom>
                {view5 &&

                    <div className='pop sm:mx-20 sm:my-4 fixed  bg-gradient-to-b from-cyan-600 via-cyan-400 to-cyan-600 text-black px-12 py-8'>
                        <div className='absolute top-2 right-0 pb-2 h-16 w-16' onClick={() => { popUp5() }}>
                            <><FaTimes /></>
                        </div>
                        <div className='h-64'>
                            <img src={Calci} alt="Gehu" className='popUpImg h-full ' />
                        </div>
                        <div className='px-4 pt-8 text-center'>
                            <h2 className='font-signature text-2xl py-2 '>Make Your Calculations Easy</h2>
                            <p className='py-2'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur deleniti fugiat numquam in pariatur ipsam. Esse fugiat facilis sit quia beatae repellat, harum, aspernatur quis eveniet repellendus ut explicabo molestiae magni!</p>
                        </div>

                        <center>
                            <div className='space-x-4'>
                                <a href="https://asthanegi14.github.io/Oibsip_taskno_1_Calculator-using-js/">
                                    <button className='cursor-pointer hover:bg-gray-200 hover:text-black duration-500 text-lg  bg-red-700 text-white px-4 py-2 font-signature text-center rounded-md'>Demo</button>
                                </a>

                            </div>
                        </center>
                    </div>
                }
            </Zoom>
        </div>
    )
}

export default Projects