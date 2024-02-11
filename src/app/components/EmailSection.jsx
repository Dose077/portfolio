'use client'
import React from 'react'
import git from '../../../public/img/github.png'
import lin from '../../../public/img/linkedin.svg'
import Link from 'next/link'
import Image from 'next/image'
import { Element } from 'react-scroll'

const EmailSection = () => {


    const  handeSubmit = (e) =>{
        e.preventDefault()
    }
  return (
    <Element name='contact'  className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'>
        <div className='bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-blue-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-y-q/2'></div>
        <div className='z-10'>
            <h5 className='text-xl font-bold text-white my-2'>Let`s Connect </h5>
            <p className='text-[#ADB7BE] mb-4 max-w-md'>
            I`m currently for new opportunities,my inbox is always open.
            Whether you have questions or just one to say hi,I`ll try my best to get back to you 
            </p>
            <div className='socials flex flex-row gap-2'>
                <Link href='https://github.com/Dose077'>
                    <Image src={git} className='bg-slate-200' width={50} height={50} alt='Git hub icon'/>
                </Link> 
                 <Link href='/'>
                    <Image src={lin} className='bg-slate-200 ' alt='Linked In icon'/>
                </Link>
            </div>
        </div>
        <div>
            <form className='flex flex-col  ' onSubmit={handeSubmit}>
              <div className='mb-6'>
              <label 
                htmlFor="email"
                 typeof='email' 
                 className='text-white block mb-2 text-sm font-medium'>
                 Your Email
                 </label>  
                <input 
                name='email'
                type='email' 
                id='email' 
                required 
                placeholder='jacob@gogle.com' 
                className='bg-[#181818]  border border-blue-600 placeholder-[#9CA2A9] text-gray-100 text-sm  rounded-lg block w-full p-2.5  ' />
              </div>
            <div className="mb-6">
            <label 
                htmlFor="subject"
                 typeof='subject' 
                 className='text-white block mb-2 text-sm font-medium'>
                 Subject
                 </label>
                <input 
                name='subject'
                type='text' 
                id='subject' 
                required 
                placeholder='John saying Hi!' 
                className='bg-[#181818]  border border-blue-600 placeholder-[#9CA2A9] text-gray-100 text-sm  rounded-lg block w-full p-2.5  ' />
            </div>
            <div className='mb-6'>
                <label 
                htmlFor="message"
                className='text-white block mb-2 text-sm font-medium'
           >
            Message
                </label>
                <textarea 
                name="message" 
                id="message" 
                className='bg-[#181818]  border border-blue-600 placeholder-[#9CA2A9] text-gray-100 text-sm  rounded-lg block w-full p-2.5 '
                placeholder="Let's talk about..."
                />
            </div>
                <button 
                type='submit'
                className='bg-blue-500 hover:bg-blue-600 text-white font-medium  py-2.5 px-5 rounded-lg w-full'
                >
                        Send Message

                </button>
            </form>
        </div>
    </Element>
  )
}

export default EmailSection