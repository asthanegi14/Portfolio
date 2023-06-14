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
import l1 from '../assets/l1.jpeg';
import l3 from '../assets/l3.jpeg';
import l4 from '../assets/l4.jpeg';
import l5 from '../assets/l5.jpeg';
import l6 from '../assets/l6.jpeg';
import l7 from '../assets/l7.jpeg';
import l8 from '../assets/l8.jpeg';
import l9 from '../assets/l9.jpeg';
import l10 from '../assets/l10.jpeg';
import l11 from '../assets/l11.jpeg';



const Clg = () => {

    const [view1, setview] = useState(false);
    const [view2, setview2] = useState(false);
    const [view3, setview3] = useState(false);
    const [view4, setview4] = useState(false);
    const [week1, setweek1] = useState(false);
    const [week2, setweek2] = useState(false);
    const [week3, setweek3] = useState(false);
    const [week4, setweek4] = useState(false);
    const [week5, setweek5] = useState(false);
    const [week6, setweek6] = useState(false);
    const [week7, setweek7] = useState(false);
    const [week8, setweek8] = useState(false);
    const [week9, setweek9] = useState(false);
    const [week10, setweek10] = useState(false);
    const [week11, setweek11] = useState(false);

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
    function wk4() {
        setweek4(!week4);
    }
    function wk5() {
        setweek5(!week5);
    }
    function wk6() {
        setweek6(!week6);
    }
    function wk7() {
        setweek7(!week7);
    }
    function wk8() {
        setweek8(!week8);
    }
    function wk9() {
        setweek9(!week9);
    }
    function wk10() {
        setweek10(!week10);
    }
    function wk11() {
        setweek11(!week11);
    }

    return (

        <div name='clg' className='pt-20 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 text-black'>
            <Fade duration="3000">
                <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-black'>

                    <div className="pb-6">
                        <p className='text-4xl font-bold text-black font-signature'>College Work</p>
                        <p className='py-6'>This section contains all my college work</p>
                    </div>

                    <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-8 text-center py-8 px-12 sm:px-0'>
                        <Fade distance="20%" duration="2000" bottom>
                            <div className='py-2 rounded-lg '>
                                <img src={Lecture} alt="html" className='object-cover w-full h-48' />
                                <p onClick={() => { popUp() }} className='hover:scale-105 duration-500 bg-gradient-to-r from-cyan-700 via-cyan-400 to-cyan-600 text-black text-center rounded-md shadow-md mt-4 px-4 py-4 shadow-cyan-900 font-signature'>Weekly Lectures</p>
                            </div>
                        </Fade>
                        <Fade distance="20%" duration="2000" bottom>
                            <div className='py-2 rounded-lg '>
                                <img src={Asign} alt="html" className='object-cover w-full h-48' />
                                <p onClick={() => { popUp2() }} className='hover:scale-105 duration-500 bg-gradient-to-r from-cyan-700 via-cyan-400 to-cyan-600 text-black text-center rounded-md shadow-md mt-4 px-4 py-4 shadow-cyan-900 font-signature'>Movie Review</p>
                            </div>
                        </Fade>
                        {/* <Fade distance="20%" duration="2000" bottom>
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
                        </Fade> */}
                    </div>
                </div>
            </Fade>
            <Zoom distance="20%" duration="2000">
                {view1 &&

                    <div className='pop sm:mx-20 sm:my-8 fixed  bg-gradient-to-r from-cyan-700 via-cyan-400 to-cyan-600 text-black px-12 py-2'>
                        <div className='absolute top-2 right-0 pb-2 h-16 w-16' onClick={popUp}>
                            <><FaTimes /></>
                        </div>
                        <div className='h-64'>
                            <img src={Lecture} alt="Gehu" className='popUpImg h-full ' />
                        </div>

                        <p className='pt-2 text-center'>Here is my weekly learning from the lectures.</p>
                        <div className='px-4 text-center space-x-6 space-y-6 grid grid-cols-3 sm:grid-cols-4'>
                            <div>
                                <button onClick={() => { wk1() }} className='cursor-pointer hover:scale-105 duration-500 text-sm bg-gradient-to-r  from-red-700 to-red-500 text-white px-4 py-2 font-signature text-center rounded-md'>Week 1</button>
                            </div>
                            <div>
                                <button onClick={() => { wk2() }} className='cursor-pointer hover:scale-105 duration-500 text-sm bg-gradient-to-r  from-red-700 to-red-500 text-white px-4 py-2 font-signature text-center rounded-md'>Week 2</button>
                            </div>
                            <div>
                                <button onClick={() => { wk3() }} className='cursor-pointer hover:scale-105 duration-500 text-sm  bg-gradient-to-r  from-red-700 to-red-500 text-white px-4 py-2 font-signature text-center rounded-md'>Week 3</button>
                            </div>
                            <div>
                                <button onClick={() => { wk4() }} className='cursor-pointer hover:scale-105 duration-500 text-sm  bg-gradient-to-r  from-red-700 to-red-500 text-white px-4 py-2 font-signature text-center rounded-md'>Week 4</button>
                            </div>
                            <div>
                                <button onClick={() => { wk5() }} className='cursor-pointer hover:scale-105 duration-500 text-sm  bg-gradient-to-r  from-red-700 to-red-500 text-white px-4 py-2 font-signature text-center rounded-md'>Week 5</button>
                            </div>
                            <div>
                                <button onClick={() => { wk6() }} className='cursor-pointer hover:scale-105 duration-500 text-sm  bg-gradient-to-r  from-red-700 to-red-500 text-white px-4 py-2 font-signature text-center rounded-md'>Week 6</button>
                            </div>
                            <div>
                                <button onClick={() => { wk7() }} className='cursor-pointer hover:scale-105 duration-500 text-sm  bg-gradient-to-r  from-red-700 to-red-500 text-white px-4 py-2 font-signature text-center rounded-md'>Week 7</button>
                            </div>
                            <div>
                                <button onClick={() => { wk8() }} className='cursor-pointer hover:scale-105 duration-500 text-sm  bg-gradient-to-r  from-red-700 to-red-500 text-white px-4 py-2 font-signature text-center rounded-md'>Week 8</button>
                            </div>
                            <div>
                                <button onClick={() => { wk9() }} className='cursor-pointer hover:scale-105 duration-500 text-sm  bg-gradient-to-r  from-red-700 to-red-500 text-white px-4 py-2 font-signature text-center rounded-md'>Week 9</button>
                            </div>
                            <div>
                                <button onClick={() => { wk10() }} className='cursor-pointer hover:scale-105 duration-500 text-sm  bg-gradient-to-r  from-red-700 to-red-500 text-white px-4 py-2 font-signature text-center rounded-md'>Week 10</button>
                            </div>
                            <div>
                                <button onClick={() => { wk11() }} className='cursor-pointer hover:scale-105 duration-500 text-sm  bg-gradient-to-r  from-red-700 to-red-500 text-white px-4 py-2 font-signature text-center rounded-md'>Week 11</button>
                            </div>


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
                }
            </Zoom>
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

                    <div className='pop sm:mx-20 sm:my-8 fixed  bg-gradient-to-r from-cyan-700 via-cyan-400 to-cyan-600 text-black px-12 py-8'>
                        <div className='absolute top-2 right-0 pb-2 h-16 w-16' onClick={() => { wk1() }}>
                            <><FaTimes /></>
                        </div>
                        <div className='px-4 pt-8 text-center'>
                            <h2 className='font-signature text-2xl py-2 '>First Interaction</h2>
                            <p className='py-2 text-lg sm:text-sm'>In the first week, our 6th-semester XCS lab faculty, Mr. Vishal Chabra, sir, introduced us. He thought about how to prepare for placements. He assigned us tasks like making an E-portfolio, making memes, and preparing a self-introduction.</p>
                        </div>

                        <center>
                            <img src={l1} alt="flowchart" className='sm:w-1/2 sm:h-2/3' />
                        </center>
                        <div className='px-4 pt-8 text-center'>

                            <a href='https://drive.google.com/file/d/1FyWhkaA-LSExegn-aXez3CK2GnykdgKH/view?usp=sharing' className='cursor-pointer hover:scale-105 duration-500 text-sm bg-gradient-to-r  from-red-700 to-red-500 text-white px-4 py-2 font-signature text-center rounded-md' alt="intro">video Log</a>
                        </div>
                    </div>
                }

            </Zoom>
            <Zoom distance="20%" duration="2000">
                {week2 &&

                    <div className='pop sm:mx-20 sm:my-8 fixed  bg-gradient-to-r from-cyan-700 via-cyan-400 to-cyan-600 text-black px-12 py-8'>
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
                        <div className='px-4 pt-8 text-center'>

                            <a href='https://drive.google.com/file/d/1GEWv-Vthshn7YsB0A7RrvD8OOp9cu19u/view?usp=sharing' className='cursor-pointer hover:scale-105 duration-500 text-sm bg-gradient-to-r  from-red-700 to-red-500 text-white px-4 py-2 font-signature text-center rounded-md' alt="intro">video Log</a>
                        </div>
                    </div>
                }

            </Zoom>
            <Zoom distance="20%" duration="2000">
                {week3 &&

                    <div className='pop sm:mx-20 sm:my-8 fixed  bg-gradient-to-r from-cyan-700 via-cyan-400 to-cyan-600 text-black px-12 py-6'>
                        <div className='absolute top-2 right-0 pb-2 h-16 w-16' onClick={() => { wk3() }}>
                            <><FaTimes /></>
                        </div>
                        <div className='px-4 pt-2 text-center'>
                            <h2 className='font-signature text-2xl py-2 '>Self Introduction</h2>
                            <p className='py-2 text-lg sm:text-sm'>This week we have to introduce ourselves in front of all our classmates. After introducing myself to my classmates Mr. Vishal Chabra sir point out my mistakes and told me to improve. He told me that although I followed the format I was fumbling and I was not making eye contact with everyone. After that lecture, I practiced and prepare an improved and impressive introduction video.</p>

                        </div>
                        <center>
                            <img src={l3} alt="flowchart" className='sm:w-1/2 sm:h-2/3 w-5/6' />
                        </center>
                        <div className='px-4 pt-8 text-center'>

                            <a href='https://drive.google.com/file/d/1GIwwb_ghELilYkS7zCSSXeuTt79vUlxc/view?usp=drive_link' className='cursor-pointer hover:scale-105 duration-500 text-sm bg-gradient-to-r  from-red-700 to-red-500 text-white px-4 py-2 font-signature text-center rounded-md' alt="intro">video Log</a>
                        </div>
                        <div className='px-4 pt-8 text-center'>

                            <a href='https://drive.google.com/file/d/1H27bnKQGUQ9Gg7g0OFMqK-8EGR7YTRvu/view?usp=sharing' className='cursor-pointer hover:scale-105 duration-500 text-sm bg-gradient-to-r  from-red-700 to-red-500 text-white px-4 py-2 font-signature text-center rounded-md' alt="intro">Introduction video Link</a>
                        </div>
                    </div>
                }
            </Zoom>
            <Zoom distance="20%" duration="2000">
                {week4 &&

                    <div className='pop sm:mx-20 sm:my-8 fixed  bg-gradient-to-r from-cyan-700 via-cyan-400 to-cyan-600 text-black px-12 py-8'>
                        <div className='absolute top-2 right-0 pb-2 h-16 w-16' onClick={() => { wk4() }}>
                            <><FaTimes /></>
                        </div>
                        <div className='px-4 text-center'>
                            <h2 className='font-signature text-2xl pb-2 '>Profiling Sheet</h2>
                            <p className='py-2 text-lg sm:text-sm'>We have been given a profiling sheet in which there are some frequently asked interview questions. Our task is to write down the answer to every question.</p>
                        </div>
                        <center>
                            <img src={l4} alt="flowchart" className='sm:w-1/2 sm:h-2/3' />
                        </center>
                        <div className='px-4 pt-8 text-center'>

                            <a href='https://drive.google.com/file/d/1GMUNW80WT92u7-2HgWysGKzmwlN5WVwh/view?usp=drive_link' className='cursor-pointer hover:scale-105 duration-500 text-sm bg-gradient-to-r  from-red-700 to-red-500 text-white px-4 py-2 font-signature text-center rounded-md' alt="intro">video Log</a>
                        </div>
                    </div>
                }

            </Zoom>
            <Zoom distance="20%" duration="2000">
                {week5 &&

                    <div className='pop sm:mx-20 sm:my-8 fixed  bg-gradient-to-r from-cyan-700 via-cyan-400 to-cyan-600 text-black px-12 py-8'>
                        <div className='absolute top-2 right-0 pb-2 h-16 w-16' onClick={() => { wk5() }}>
                            <><FaTimes /></>
                        </div>
                        <div className='px-4 text-center'>
                            <h2 className='font-signature text-2xl pb-2 '>Profiling sheet Answers</h2>
                            <p className='py-2 text-lg sm:text-sm'>In this week we discussed the answers of the profiling sheet.</p>
                        </div>
                        <center>
                            <img src={l5} alt="flowchart" className='sm:w-1/2 sm:h-2/3' />
                        </center>
                        <div className='px-4 pt-8 text-center'>

                            <a href='https://drive.google.com/file/d/1GO13_2VOwlQLVAWHgrIuiw744I_rQI16/view?usp=drive_link' className='cursor-pointer hover:scale-105 duration-500 text-sm bg-gradient-to-r  from-red-700 to-red-500 text-white px-4 py-2 font-signature text-center rounded-md' alt="intro">video Log</a>
                        </div>
                    </div>
                }

            </Zoom>
            <Zoom distance="20%" duration="2000">
                {week6 &&

                    <div className='pop sm:mx-20 sm:my-8 fixed  bg-gradient-to-r from-cyan-700 via-cyan-400 to-cyan-600 text-black px-12 py-8'>
                        <div className='absolute top-2 right-0 pb-2 h-16 w-16' onClick={() => { wk6() }}>
                            <><FaTimes /></>
                        </div>
                        <div className='px-4 text-center'>
                            <h2 className='font-signature text-2xl pb-2 '>Situation reaction test</h2>
                        </div>
                        <center>
                            <img src={l6} alt="flowchart" className='sm:w-1/2 sm:h-2/3' />
                        </center>
                        <div className='px-4 pt-8 text-center'>

                            <a href='https://drive.google.com/file/d/1GPQjgc1K0sKcMXaLTC5cSZnpVPlXWdkD/view?usp=drive_link' className='cursor-pointer hover:scale-105 duration-500 text-sm bg-gradient-to-r  from-red-700 to-red-500 text-white px-4 py-2 font-signature text-center rounded-md' alt="intro">video Log</a>
                        </div>
                    </div>
                }

            </Zoom>
            <Zoom distance="20%" duration="2000">
                {week7 &&

                    <div className='pop sm:mx-20 sm:my-8 fixed  bg-gradient-to-r from-cyan-700 via-cyan-400 to-cyan-600 text-black px-12 py-8'>
                        <div className='absolute top-2 right-0 pb-2 h-16 w-16' onClick={() => { wk7() }}>
                            <><FaTimes /></>
                        </div>
                        <div className='px-4 text-center'>
                            <h2 className='font-signature text-2xl pb-2 '>Discussion on women Safety</h2>
                            <p className='py-2 text-lg sm:text-sm'>We have to pass a law for women's safety. So what would that be?</p>
                        </div>
                        <center>
                            <img src={l7} alt="flowchart" className='sm:w-1/2 sm:h-2/3' />
                        </center>
                        <div className='px-4 pt-8 text-center'>

                            <a href='https://drive.google.com/file/d/1GUWXBQRlYmcuxS9_lOvtRQe-CPzFnQam/view?usp=drive_link' className='cursor-pointer hover:scale-105 duration-500 text-sm bg-gradient-to-r  from-red-700 to-red-500 text-white px-4 py-2 font-signature text-center rounded-md' alt="intro">video Log</a>
                        </div>
                    </div>
                }

            </Zoom>
            <Zoom distance="20%" duration="2000">
                {week8 &&

                    <div className='pop sm:mx-20 sm:my-8 fixed  bg-gradient-to-r from-cyan-700 via-cyan-400 to-cyan-600 text-black px-12 py-8'>
                        <div className='absolute top-2 right-0 pb-2 h-16 w-16' onClick={() => { wk8() }}>
                            <><FaTimes /></>
                        </div>
                        <div className='px-4 text-center'>
                            <h2 className='font-signature text-2xl pb-2 '>Discussion on Bharat Ratna</h2>
                            <p className='py-2 text-lg sm:text-sm'>We had to nominate one person to give bharat ratna and explain why we chose that person.</p>
                        </div>
                        <center>
                            <img src={l8} alt="flowchart" className='sm:w-1/2 sm:h-2/3' />
                        </center>
                        <div className='px-4 pt-8 text-center'>

                            <a href='https://drive.google.com/file/d/1GqSDcoVWdbWQFpuJ3Rx7wMz2ZzIrDMMk/view?usp=drive_link' className='cursor-pointer hover:scale-105 duration-500 text-sm bg-gradient-to-r  from-red-700 to-red-500 text-white px-4 py-2 font-signature text-center rounded-md' alt="intro">video Log</a>
                        </div>
                    </div>
                }

            </Zoom>
            <Zoom distance="20%" duration="2000">
                {week9 &&

                    <div className='pop sm:mx-20 sm:my-8 fixed  bg-gradient-to-r from-cyan-700 via-cyan-400 to-cyan-600 text-black px-12 py-8'>
                        <div className='absolute top-2 right-0 pb-2 h-16 w-16' onClick={() => { wk9() }}>
                            <><FaTimes /></>
                        </div>
                        <div className='px-4 text-center'>
                            <h2 className='font-signature text-2xl pb-2 '>Discussion on our product or software</h2>
                            <p className='py-2 text-lg sm:text-sm'>we have been divided into groups and each group had to choose one product and assign a role (eg: CEO, developer, marketing head, etc.) to each person in the group and describe their product as well as their role and contribution.</p>
                        </div>
                        <center>
                            <img src={l9} alt="flowchart" className='sm:w-1/2 sm:h-2/3' />
                        </center>
                        <div className='px-4 pt-8 text-center'>

                            <a href='https://drive.google.com/file/d/1GqyPuDgu4Ddxe0Ohv93oIY895lIuf9bW/view?usp=drive_link' className='cursor-pointer hover:scale-105 duration-500 text-sm bg-gradient-to-r  from-red-700 to-red-500 text-white px-4 py-2 font-signature text-center rounded-md' alt="intro">video Log</a>
                        </div>
                    </div>
                }

            </Zoom>
            <Zoom distance="20%" duration="2000">
                {week10 &&

                    <div className='pop sm:mx-20 sm:my-8 fixed  bg-gradient-to-r from-cyan-700 via-cyan-400 to-cyan-600 text-black px-12 py-8'>
                        <div className='absolute top-2 right-0 pb-2 h-16 w-16' onClick={() => { wk10() }}>
                            <><FaTimes /></>
                        </div>
                        <div className='px-4 text-center'>
                            <h2 className='font-signature text-2xl pb-2 '>Group discussion</h2>
                            <p className='py-2 text-lg sm:text-sm'>This week, we had a combined class with section 'I'. We had a controversial session. The GD topics were "Should beef ban in India" and "India is still a secular country or not"</p>
                        </div>
                        <center>
                            <img src={l10} alt="flowchart" className='sm:w-1/2 sm:h-2/3' />
                        </center>
                        <div className='px-4 pt-8 text-center'>

                            <a href='https://drive.google.com/file/d/1GvQT4IpSAg0pva7Pf1Hizd-jlX5n57g0/view?usp=sharing' className='cursor-pointer hover:scale-105 duration-500 text-sm bg-gradient-to-r  from-red-700 to-red-500 text-white px-4 py-2 font-signature text-center rounded-md' alt="intro">video Log</a>
                        </div>
                    </div>
                }

            </Zoom>
            <Zoom distance="20%" duration="2000">
                {week11 &&

                    <div className='pop sm:mx-20 sm:my-8 fixed  bg-gradient-to-r from-cyan-700 via-cyan-400 to-cyan-600 text-black px-12 py-8'>
                        <div className='absolute top-2 right-0 pb-2 h-16 w-16' onClick={() => { wk11() }}>
                            <><FaTimes /></>
                        </div>
                        <div className='px-4 text-center'>
                            <h2 className='font-signature text-2xl pb-2 '>Psychological Test</h2>
                            <p className='py-2 text-lg sm:text-sm'>This week, we had a psychological test.</p>
                        </div>
                        <center>
                            <img src={l11} alt="flowchart" className='sm:w-1/2 sm:h-2/3' />
                        </center>
                        <div className='px-4 pt-8 text-center'>

                            <a href='https://drive.google.com/file/d/1H0mMbbbPzep3Czvo4ngOfDiObxXuwZaz/view?usp=drive_link' className='cursor-pointer hover:scale-105 duration-500 text-sm bg-gradient-to-r  from-red-700 to-red-500 text-white px-4 py-2 font-signature text-center rounded-md' alt="intro">video Log</a>
                        </div>
                    </div>
                }

            </Zoom>
        </div>
    )
}

export default Clg