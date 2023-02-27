import React from 'react'
import Donation from '../assets/donationWebsite.png';
import Todo from '../assets/todo.png';
import Converter from '../assets/converter.png';
import Gehu from '../assets/gehu.png';


const Projects = () => {
    return (
        <div name='projects' className='pt-20 bg-gradient-to-b from-pink-600 to-pink-600 text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold border-pink-900 font-signature'>Projects</p>
                    <p className='py-6'>Check out some of my projects.</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    <div className='shadow-md shadow-pink-400 rounded-lg'>
                        <img src={Donation} alt="Donation Website" className='rounded-md duration-200 ' />
                        <div className=' rounded-lg flex items-center justify-center'>
                            <button className='shadow-md shadow-pink-400 rounded-md hover:scale-105 w-1/2 px-6 py-3 m-4 duration-200 text text-xl'>Demo</button>
                            <button className='shadow-md shadow-pink-400 rounded-md hover:scale-105 w-1/2 px-6 py-3 m-4 duration-200 text text-xl'>Code</button>
                        </div>
                    </div>
                    <div className='shadow-md shadow-pink-400 rounded-lg'>
                        <img src={Todo} alt="todo list" className='rounded-md duration-200' />
                        <div className=' rounded-lg flex items-center justify-center'>
                            <button className='shadow-md shadow-pink-400 rounded-md hover:scale-105 w-1/2 px-6 py-3 m-4 duration-200 text text-xl'>Demo</button>
                            <button className='shadow-md shadow-pink-400 rounded-md hover:scale-105 w-1/2 px-6 py-3 m-4 duration-200 text text-xl'>Code</button>
                        </div>
                    </div>
                    <div className='shadow-md shadow-pink-400 rounded-lg'>
                        <img src={Converter} alt="Converter" className='rounded-md duration-200' />
                        <div className=' rounded-lg flex items-center justify-center'>
                            <button className='shadow-md shadow-pink-400 rounded-md hover:scale-105 w-1/2 px-6 py-3 m-4 duration-200 text text-xl'>Demo</button>
                            <button className='shadow-md shadow-pink-400 rounded-md hover:scale-105 w-1/2 px-6 py-3 m-4 duration-200 text text-xl'>Code</button>
                        </div>
                    </div>
                    <div className='shadow-md shadow-pink-400 rounded-lg'>
                        <img src={Gehu} alt="Gehu Website" className='rounded-md duration-200' />
                        <div className=' rounded-lg flex items-center justify-center'>
                            <button className='shadow-md shadow-pink-400 rounded-md hover:scale-105 w-1/2 px-6 py-3 m-4 duration-200 text text-xl'>Demo</button>
                            <button className='shadow-md shadow-pink-400 rounded-md hover:scale-105 w-1/2 px-6 py-3 m-4 duration-200 text text-xl'>Code</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Projects