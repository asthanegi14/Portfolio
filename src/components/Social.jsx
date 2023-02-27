import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
const Social = () => {
    return (
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
            <ul>
                <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-purple-800'>
                    <a href="https://www.linkedin.com/in/astha-negi-771b22216/" className='flex justify-between items-center w-full text-white'>
                        <>
                            LinkedIn <FaLinkedin size={30} /></>
                    </a>
                </li>
                <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-purple-800'>
                    <a href="https://github.com/asthanegi14" className='flex justify-between items-center w-full text-white'>
                        <>
                            GitHub <FaGithub size={30} /></>
                    </a>
                </li>
                <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-purple-800'>
                    <a href="mailto: asthanegi539@gmail.com" className='flex justify-between items-center w-full text-white'>
                        <>
                            GMail <HiOutlineMail size={30} /></>
                    </a>
                </li>
                <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-purple-800'>
                    <a href="resume_AsthaNegi.pdf" download={true} target='_blank' className='flex justify-between items-center w-full text-white'>
                        <>
                            Resume <BsFillPersonLinesFill size={30} /></>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Social