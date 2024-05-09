import React from "react";
import'./App.css';
import Navbar from "./components/Navbar";
import Photo from "./components/Photo";
import Skills from "./components/Skills";
import Project from "./components/Project";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
const App = () =>{
  return(
    <>
    <Navbar/>
    <div className="container">
    <Photo/>
    <Skills/>
    <Project/>
    <ContactMe/>
    </div>
    <Footer/>
    </>
  );
};
export default App;