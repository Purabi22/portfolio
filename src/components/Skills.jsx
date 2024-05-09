import React, { useState } from 'react';
import "./Skills.css";
import {SKILLS} from "../utils/data";
import SkillCard from './SkillCard';
import SkillsInfoCard from './SkillsInfoCard';
const Skills = () => {
    const[selectedSkill,setselectedSkill]=useState(SKILLS[0]);
    const handleSelectSkill=(data)=>{
        setselectedSkill(data);
    };
  return (
    <section className='skills-container'>
        <h5>My Skills</h5>
        <div className='skills-content'>
            <div className='skills'>
            {SKILLS.map((item)=>(
              <SkillCard
              key={item.title}
              iconUrl={item.icon}
              title={item.title} 
              isActive={selectedSkill.title===item.title} 
              onClick={()=>{
                handleSelectSkill(item);
              }}
              />
            ))}
            </div>
            <div className='skills-info'></div>
                <SkillsInfoCard
                heading={selectedSkill.title}
                skills={selectedSkill.skills}
                />

        </div>
        </section>
  );
};

export default Skills;
