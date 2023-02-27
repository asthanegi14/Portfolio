import React from 'react'
import Interview from '../assets/interview.jpeg';
import Gd from '../assets/gd.jpeg';
import Lecture from '../assets/lecture.jpeg';
import Asign from '../assets/assignment.jpeg';
const clg = () => {
    return (

        <div name='clg' className='pt-20 bg-gradient-to-b from-pink-600 to-pink-600 text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-white'>

                <div className="pb-8">
                    <p className='text-4xl font-bold text-white font-signature'>College Work</p>
                    <p className='py-6'>This section contains all my college work</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                    <div className='py-2 rounded-lg '>
                        <img src={Lecture} alt="html" className='object-cover rounded-md duration-200 w-full h-48' />
                        <p className='hover:scale-105 duration-500  rounded-md shadow-md mt-4 px-4 py-4 shadow-pink-300'>Lectures Learning</p>
                    </div>
                    <div className='py-2 rounded-lg '>
                        <img src={Asign} alt="html" className='object-cover rounded-md duration-200 w-full h-48' />
                        <p className='hover:scale-105 duration-500 rounded-md shadow-md mt-4 px-4 py-4 shadow-pink-300'>Assignments</p>
                    </div>
                    <div className='py-2 rounded-lg '>
                        <img src={Interview} alt="html" className='object-cover rounded-md duration-200 w-full h-48' />
                        <p className='hover:scale-105 duration-500  rounded-md shadow-md mt-4 px-4 py-4 shadow-pink-300'>Personal Interview</p>
                    </div>
                    <div className='py-2 rounded-lg '>
                        <img src={Gd} alt="html" className='object-cover rounded-md duration-200 w-full h-48' />
                        <p className='hover:scale-105 duration-500  rounded-md shadow-md mt-4 px-4 py-4 shadow-pink-300'>Group Discussion</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default clg