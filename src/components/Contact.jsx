import React from 'react'

const Contact = () => {
    return (
        <div name='contact' className='pt-20 bg-gradient-to-b from-pink-600 to-pink-900 p-4 text-white'>
            <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold border-pink-300 font-signature'>Reach Out</p>
                    <p className='py-6'>If you have any query then you can leave a comment down here</p>
                </div>

                <div flex justify-center items-center>
                    <form action="https://getform.io/f/05a54c3b-5b48-4977-ae92-0a24bb583358" method="POST" className='flex flex-col w-full md:w-1/2'>
                        <input type='text' name='name' placeholder='Enter Your Name' className='p-2 bg-transparent border-2 rounded-md text-white
                 focus:outline-none'/>

                        <input type="text" name='email' placeholder='Enter Your Email' className='my-4 p-2 bg-transparent border-2 rounded-md text-white
                 focus:outline-none' />

                        <textarea name="message" rows="10" placeholder='Write Your Message Here' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />

                        <button
                            className='text-white px-6 py-3 my-8 mx-auto flex items-center rounded-md bg-gradient-to-r from-red-800 to-red-500  cursor-pointer hover:scale-110 duration-300'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact