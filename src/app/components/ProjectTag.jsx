import React from 'react'

const ProjectTag = ({name,onClick,isSelected}) => {
    const   buttonStyles = isSelected
    ? 'text-white border-purple-500 '
    : 'text-white border-blue-600 hover:border-white' 
  return (
    <button className={`${buttonStyles} rounded-full border-2  px-6 py-3 hover:border-white text-xl cursor-pointer`}
    onClick={()=>onClick(name)}
    >

        {name}
    </button>

  )
}

export default ProjectTag