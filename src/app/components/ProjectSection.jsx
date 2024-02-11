'use client'
import React, { useState } from "react";
import { Element } from "react-scroll";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";


const projectsData = [
  {
    id: 1,
    title: "Restaurant  Website",
    description: "Project 1 description",
    img:'/img/projects/foodie.png',
    tag: ["All", "React"],
    gitUrl:'https://github.com/Dose077/Reastaurant',
    previewUrl:'https://restaurantas.netlify.app/'
  },
  {
    id: 1,
    title: "HooBank Website",
    description: "Project 2 description",
    img:'/img/projects/hoobank.png',
    tag: ["All", "React"],
    gitUrl:'https://github.com/Dose077/Hoobank',
    previewUrl:'https://hooobankkk.netlify.app/'
  },
  {
    id: 1,
    title: "Epic game Website",
    description: "Project 3 description",
    img:'/img/projects/game.png',
    tag: ["All", "Java Script"],
    gitUrl:'https://github.com/Dose077/Game',
    previewUrl:'https://cool-kringle-755803.netlify.app/'
  },

];

const ProjectSection = () => {
  const [tag,setTag] = useState('All');
  
  const handleTagChange = (newTag) =>{
    setTag(newTag);
  }
  const filteredProjects = projectsData.filter((project)=>
    project.tag.includes(tag)
  )
  return (
    <Element name="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4">My Project</h2>
      <div className="text-white flex flex-row  justify-center items-center gap-2 py-6">
        <ProjectTag onClick={handleTagChange} name='All' isSelected={tag === 'All'}/>
        <ProjectTag onClick={handleTagChange} name='React' isSelected={tag === 'React'}/>
        <ProjectTag onClick={handleTagChange} name='Java Script' isSelected={tag === 'Java Script'}/>
        </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
    {filteredProjects.map((project)=>(
      <ProjectCard 
      key={project.id} 
      title={project.title} 
      description={project.description}
      imgUrl={project.img}
      tags={project}
      gitUrl={project.gitUrl}
      previewUrl={project.previewUrl}
      />
      ))}
      </div>
    
    </Element>
  );
};

export default ProjectSection;
