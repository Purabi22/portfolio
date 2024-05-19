import React from 'react';
import "./ProjectCard.css";

const ProjectCard = ({ details }) => {
    return (
        <div className='project-card'>
            <h6>
                <a href={details.url} target="_blank" rel="noopener noreferrer">
                    {details.title}
                </a>
            </h6>
            <ul>
                {details.description.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProjectCard;
