import React, { useState } from 'react'
import Interview from '../assets/interview.jpeg';
import Gd from '../assets/gd.jpeg';
import Lecture from '../assets/lecture.jpeg';
import Asign from '../assets/assignment.jpeg';
import { FaTimes } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Flowchart from '../assets/flowchart.png';
import Movie from '../assets/movie.jpeg';



const Clg = () => {

    const [view1, setview] = useState(false);
    const [view2, setview2] = useState(false);
    const [view3, setview3] = useState(false);
    const [view4, setview4] = useState(false);
    const [week1, setweek1] = useState(false);
    const [week2, setweek2] = useState(false);
    const [week3, setweek3] = useState(false);

    function popUp() {
        setview(!view1);
    }
    function popUp2() {
        setview2(!view2);
    }

    function popUp3() {
        setview3(!view3);
    }

    function popUp4() {
        setview4(!view4);
    }
    function wk1() {
        setweek1(!week1);
    }
    function wk2() {
        setweek2(!week2);
    }
    function wk3() {
        setweek3(!week3);
    }

    return (

        <div name='clg' className='pt-20 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 text-black'>
            <Fade duration="3000">
                <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-black'>

                    <div className="pb-6">
                        <p className='text-4xl font-bold text-black font-signature'>College Work</p>
                        <p className='py-6'>This section contains all my college work</p>
                    </div>

                    <div className='w-full grid grid-cols-1 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                        <Fade distance="20%" duration="2000" bottom>
                            <div className='py-2 rounded-lg '>
                                <img src={Lecture} alt="html" className='object-cover w-full h-48' />
                                <p onClick={() => { popUp() }} className='hover:scale-105 duration-500 bg-gradient-to-r from-cyan-700 via-cyan-400 to-cyan-600 text-black text-center rounded-md shadow-md mt-4 px-4 py-4 shadow-cyan-900 font-signature'>Weekly Lectures</p>
                            </div>
                        </Fade>
                        <Fade distance="20%" duration="2000" bottom>
                            <div className='py-2 rounded-lg '>
                                <img src={Asign} alt="html" className='object-cover w-full h-48' />
                                <p onClick={() => { popUp2() }} className='hover:scale-105 duration-500 bg-gradient-to-r from-cyan-700 via-cyan-400 to-cyan-600 text-black text-center rounded-md shadow-md mt-4 px-4 py-4 shadow-cyan-900 font-signature'>Assignments</p>
                            </div>
                        </Fade>
                        <Fade distance="20%" duration="2000" bottom>
                            <div className='py-2 rounded-lg '>
                                <img src={Interview} alt="html" className='object-cover w-full h-48' />
                                <p onClick={() => { popUp3() }} className='hover:scale-105 duration-500 bg-gradient-to-r from-cyan-700 via-cyan-400 to-cyan-600 text-black text-center rounded-md shadow-md mt-4 px-4 py-4 shadow-cyan-900 font-signature'>Personal Interview</p>
                            </div>
                        </Fade>
                        <Fade distance="20%" duration="2000" bottom>
                            <div className='py-2 rounded-lg '>
                                <img src={Gd} alt="html" className='object-cover w-full h-48' />
                                <p onClick={() => { popUp4() }} className='hover:scale-105 duration-500 bg-gradient-to-r from-cyan-700 via-cyan-400 to-cyan-600 text-black text-center rounded-md shadow-md mt-4 px-4 py-4 shadow-cyan-900 font-signature'>Group Discussion</p>
                            </div>
                        </Fade>
                    </div>
                </div>
            </Fade>
            <Zoom distance="20%" duration="2000">
                {view1 &&

                    <div className='pop sm:mx-20 sm:my-28 fixed  bg-gradient-to-r from-cyan-700 via-cyan-400 to-cyan-600 text-black px-12 py-8'>
                        <div className='absolute top-2 right-0 pb-2 h-16 w-16' onClick={popUp}>
                            <><FaTimes /></>
                        </div>
                        <div className='h-64'>
                            <img src={Lecture} alt="Gehu" className='popUpImg h-full ' />
                        </div>

                        <p className='pt-2 text-center'>Here is my weekly learning from the lectures.</p>
                        <div className='px-4 text-center place-items-center space-x-6 space-y-6 flex-row'>
                            <button onClick={() => { wk1() }} className='cursor-pointer hover:scale-105 duration-500 text-sm bg-gradient-to-r  from-red-700 to-red-500 text-white px-4 py-2 font-signature text-center rounded-md'>Week 1</button>
                            <button onClick={() => { wk2() }} className='cursor-pointer hover:scale-105 duration-500 text-sm  bg-gradient-to-r  from-red-700 to-red-500 text-white px-4 py-2 font-signature text-center rounded-md'>Week 2</button>
                            <button onClick={() => { wk3() }} className='cursor-pointer hover:scale-105 duration-500 text-sm  bg-gradient-to-r  from-red-700 to-red-500 text-white px-4 py-2 font-signature text-center rounded-md'>Week 3</button>

                        </div>
                    </div>
                }
            </Zoom>
            <Zoom>
                {view2 &&

                    <div className='pop sm:mx-20 sm:my-8 fixed  bg-gradient-to-r from-gray-700 via-gray-400 to-gray-600 text-black px-12 py-8'>
                        <div className='absolute top-2 right-0 pb-2 h-16 w-16' onClick={() => { popUp2() }}>
                            <><FaTimes /></>
                        </div>
                        <div className='h-64'>
                            <img src={Movie} alt="Gehu" className='popUpImg h-full ' />
                        </div>
                        <div className='px-4 pt-8 text-center'>
                            <h2 className='font-signature text-2xl py-2'>"The Pursuit Of Happyness"</h2>

                            <h2 className='font-lg'>Favourait Dialogues</h2>
                            <p className='text-red-700 font-signature'>Nobody’s life is perfect. But nobody’s is all bad, either. </p>

                            <h2 className='font-lg'>Movie Review</h2>
                            <p className='text-sm sm:font-lg'>If you ever wanted to see a movie that portrayed what really makes a man, then you must see this movie. Although this film is depressing in many points. Thomas Jefferson says we need to pursue happiness. That's what Chris Gardner does. He never gives up. He could even inspire some people. Overall this will be a good family film and has it's father-son moments.
                            </p>
                        </div>
                    </div>
                }
            </Zoom>
            <Zoom>
                {view3 &&

                    <div className='pop sm:mx-20 sm:my-28 fixed  bg-gradient-to-r from-cyan-700 via-cyan-400 to-cyan-600 text-black px-12 py-8'>
                        <div className='absolute top-2 right-0 pb-2 h-16 w-16' onClick={() => { popUp3() }}>
                            <><FaTimes /></>
                        </div>
                        <div className='h-64'>
                            <img src={Interview} alt="Gehu" className='popUpImg h-full ' />
                        </div>
                        <div className='px-4 pt-8 text-center'>
                            {/* <h2 className='font-signature text-2xl py-2 '>Donation Website With Blockchain</h2>
                            <p className='py-2'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur deleniti fugiat numquam in pariatur ipsam. Esse fugiat facilis sit quia beatae repellat, harum, aspernatur quis eveniet repellendus ut explicabo molestiae magni! Odit culpa blanditiis.</p> */}
                            <p>No content available right now</p>
                        </div>
                    </div>
                }</Zoom>
            <Zoom>
                {view4 &&

                    <div className='pop sm:mx-20 sm:my-28 fixed  bg-gradient-to-r from-cyan-700 via-cyan-400 to-cyan-600 text-black px-12 py-8'>
                        <div className='absolute top-2 right-0 pb-2 h-16 w-16' onClick={() => { popUp4() }}>
                            <><FaTimes /></>
                        </div>
                        <div className='h-64'>
                            <img src={Gd} alt="Gehu" className='popUpImg h-full ' />
                        </div>
                        <div className='px-4 pt-8 text-center'>
                            {/* <h2 className='font-signature text-2xl py-2 '>Text-to-Voice & Voice-to-Text</h2>
                            <p className='py-2'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur deleniti fugiat numquam in pariatur ipsam. Esse fugiat facilis sit quia beatae repellat, harum, aspernatur quis eveniet repellendus ut explicabo molestiae magni!</p> */}
                            <p>No content available right now</p>
                        </div>
                    </div>
                }
            </Zoom>


            <Zoom distance="20%" duration="2000">
                {week1 &&

                    <div className='pop sm:mx-20 sm:my-28 fixed  bg-gradient-to-r from-cyan-700 via-cyan-400 to-cyan-600 text-black px-12 py-8'>
                        <div className='absolute top-2 right-0 pb-2 h-16 w-16' onClick={() => { wk1() }}>
                            <><FaTimes /></>
                        </div>
                        <div className='px-4 pt-8 text-center'>
                            <h2 className='font-signature text-2xl py-2 '>First Interaction</h2>
                            <p className='py-2 text-lg sm:text-sm'>In the first week, our 6th-semester XCS lab faculty, Mr. Vishal Chabra, sir, introduced us. He thought about how to prepare for placements. He assigned us tasks like making an E-portfolio, making memes, and preparing a self-introduction.</p>
                        </div>
                    </div>
                }

            </Zoom>
            <Zoom distance="20%" duration="2000">
                {week2 &&

                    <div className='pop sm:mx-20 sm:my-28 fixed  bg-gradient-to-r from-cyan-700 via-cyan-400 to-cyan-600 text-black px-12 py-8'>
                        <div className='absolute top-2 right-0 pb-2 h-16 w-16' onClick={() => { wk2() }}>
                            <><FaTimes /></>
                        </div>
                        <div className='px-4 text-center'>
                            <h2 className='font-signature text-2xl pb-2 '>Introduction</h2>
                            <p className='py-2 text-lg sm:text-sm'>This week, we learn how to prepare a personal and a professional introduction and how your body language, tone, eye contact with audience, and your confidence matter while you are presenting yourself.</p>

                            <center>
                                <img src={Flowchart} alt="flowchart" className='sm:w-1/2 sm:h-2/3' />
                            </center>
                            <p className='py-4 text-sm'>**TASK: This is the flowchart according to which we have to prepare a professional interview and present it next week.</p>
                        </div>
                    </div>
                }

            </Zoom>

            <Zoom distance="20%" duration="2000">
                {week3 &&

                    <div className='pop sm:mx-20 sm:my-28 fixed  bg-gradient-to-r from-cyan-700 via-cyan-400 to-cyan-600 text-black px-12 py-8'>
                        <div className='absolute top-2 right-0 pb-2 h-16 w-16' onClick={() => { wk3() }}>
                            <><FaTimes /></>
                        </div>
                        <div className='px-4 pt-8 text-center'>
                            <h2 className='font-signature text-2xl py-2 '>Self Introduction</h2>
                            <p className='py-2 text-lg sm:text-sm'>This week we have to introduce ourselves in front of all our classmates. After introducing myself to my classmates Mr. Vishal Chabra sir point out my mistakes and told me to improve. He told me that although I followed the format I was fumbling and I was not making eye contact with everyone. After that lecture, I practiced and prepare an improved and impressive introduction video.</p>

                        </div>
                        <div className='px-4 pt-8 text-center'>

                            <a href='www.google.com' className='cursor-pointer hover:scale-105 duration-500 text-sm bg-gradient-to-r  from-red-700 to-red-500 text-white px-4 py-2 font-signature text-center rounded-md' alt="intro">Introduction video Link</a>
                        </div>
                    </div>
                }
            </Zoom>
        </div>
    )
}

export default Clg