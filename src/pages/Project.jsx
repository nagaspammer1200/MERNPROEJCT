import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar'
import ProjectCard from '../components/ProjectCard'

function Project() {
  const [projectSeminar, setProjectSeminar] = useState([]);



  useEffect(() => {
  
      //PROJECt
      fetch("http://localhost:5000/api/projectseminar")
          .then((res) => res.json())
          .then((data) => {
            console.log("First Series Response:", data); // Debug response
            setProjectSeminar(Array.isArray(data) ? data : []); // Ensure an array
          })
          .catch((err) => {
            console.error("Error fetching first series:", err);
            setProjectSeminar([]); // Prevent errors
          });
      
  }, []);



  return (
    <React.Fragment>
        <Navbar/>
        <div className="items-center bg-black text-white">
          <h1 className="p-3 font-semibold text-center text-4xl">Project Reports</h1>
            <div className="grid grid-cols-3 gap-3 ps-8">
              {projectSeminar.map((item) => (
                  <ProjectCard key={item._id} Title={item.title} Link1={item.link1} />
              ))}   
            </div>
        </div>
    </React.Fragment>
  )
}

export default Project
