import React from 'react'

function ProjectCard({Title, Link1}) {

  return (
    <React.Fragment>
        <div className="m-2 w-64 p-3 bg-black text-white outline-white outline hover:outline-sky-700 rounded-lg">
          <h3 className="text-center font-bold mb-3">{Title}</h3>
          <div className="text-center text-black bg-yellow-400 font-bold p-1 w-36 rounded-lg ms-10 hover:scale-105 transition delay-150 ease-in-out"><a href={Link1}>Download</a></div>
        </div>
        
    </React.Fragment>
  )
}

export default ProjectCard
