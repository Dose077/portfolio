import React from 'react'
import { Link } from 'react-scroll'
const handleSetActive = (to) => {
  console.log(to);
};

const MenuOverlay = ({links}) => {
  return (
   <ul className='flex flex-col py-4 items-center'>
    {links.map((link,index) =>(
        <li key={index}>

            <Link 
            activeClass="active" 
            to={link.path}
            spy={true} 
            smooth={true} 
            offset={-100} 
            duration={500} 
            onSetActive={handleSetActive} 
            className='text-slate-200'
            >
              {link.title}

              </Link>
        </li>
    ))}
   </ul>
  )
}

export default MenuOverlay