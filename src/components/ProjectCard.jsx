import React from 'react'

function ProjectCard({Title, Link1}) {

  return (
    <React.Fragment>
        <div className="m-2 w-64 p-1 bg-black text-white border-white border rounded-lg">
            <div className="m-1 p-2 bg-gray-900 opacity-90">
                <div className="text-center p-3">
                    <div className="hover:text-blue-600"><a href={Link1}>{Title}</a></div>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default ProjectCard
