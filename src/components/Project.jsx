import React, { useRef } from 'react'
import './Project.css'
import {PROJECT} from "../utils/data"
import ProjectCard from './ProjectCard'
import Slider from "react-slick"
const Project = () => {
    const sliderRef=useRef();
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            responsive: [
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    },
                },
            ],
        };
const slideRight = () =>{
    sliderRef.current.slickNext();
};
const slideLeft = () =>{
    sliderRef.current.slickPrev();
};
    
    
    
  return (
   <section className='project-container'> 
    <h5>My Projects</h5>
    <div className='project-content'>
    <div className='arrow-right' onClick={slideRight}>
    <span>&#187;</span>
    </div>
    <div className='arrow-left' onClick={slideLeft}>
    <span>&#171;</span>
    </div>

        <Slider ref={sliderRef}{...settings}>
        {PROJECT.map((item)=>(
            <ProjectCard key={item.title} details={item}/>
        ))}
        </Slider>
    </div>
   </section>
  );
};


export default Project
