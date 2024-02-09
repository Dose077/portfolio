'use client'
import React, { useState, useTransition } from 'react'
import Image from 'next/image'
import laptop from '../../../public/img/laptop.jpg'
import TabButton from './TabButton'

const TAB_DATA =[
    {
        title: 'skills',
        id : 'skills',
        content:(
            <ul className='list-disc pl-2'>
                <li>HTML</li>
                <li>CSS</li>
                <li>SASS</li>
                <li>TAILWIND CSS</li>
                <li>BOOTSTRAP</li>
                <li>JAVA SCRIPT</li>
                <li>REACT</li>
                <li>REDUX</li>
                <li>MUI/ANT DESIGN</li>
                <li>NODE.JS</li>
                <li>NEXT.JS</li>
                <li>TYPE SCRIPT</li>
            </ul>
        )

    },
      {
        title: 'education',
        id : 'education',
        content:(
            <ul className='list-disc pl-2'>
                <li>Najot ta`lim</li>
            </ul>
        )

    },
    {
        title: 'certifications  ',
        id : 'certifications',
        content:(
            <ul className='list-disc pl-2'>
                <li>Najot ta`lim Frontend developer</li>
            </ul>
        )

    }
]

const AboutSection = () => {
    const [tab,setTab] = useState('skills')
    const [isPending,startTransation] = useTransition()

    const handleTabChange = (id) =>{
        startTransation (() =>{
                setTab(id)
        })
    }
  return (
    <section className='text-white'>
<div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:py-16'>
   <Image 
   alt=''
   src={laptop}
   width={500}
   height={500}
   />
   <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
    <h2 className='text-4xl fw-bold text-white mb-4'>About Me</h2>
    <p className='text-base lg:text-lg'>I am a frontend developer, I create responsive and adaptive sites, I mainly work with HTML, CSS,SASS, JAVA SCRIPT, REACT, REDUX, NODE.JS,NEXT.JS and Git</p>
    <div className='flex flex-row mt-8 justify-start'>
        <TabButton selectTab={() => handleTabChange('skills')}  active={tab === 'skills'} >Skills</TabButton>
        <TabButton selectTab={() => handleTabChange('education')}  active={tab === 'education'}>Education</TabButton>
        <TabButton selectTab={() => handleTabChange('certifications')}  active={tab === 'certifications'} >Certifications</TabButton>
    </div>
        <div className='mt-8'>
            {
                TAB_DATA.find((t)=>t.id === tab).content
            }
        </div>
   </div>
</div>
    </section>
  )
}

export default AboutSection