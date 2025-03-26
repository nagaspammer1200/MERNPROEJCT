import React from 'react'

function ExamCard({ExamName, Semester, Time1, Link1}) {

  return (
    <React.Fragment>
        <div className="m-2 w-64 outline-2 outline-offset-2 outline-white outline hover:outline-sky-700 rounded-lg">
            <div className="p-2 bg-black">
                <div className="flex justify-around mb-2 text-white">
                  <h3 className="text-center font-bold text-white underline decoration-solid decoration-red-700 decoration-2 underline-offset-4 uppercase">{ExamName}</h3>
                  <h3 className="text-center font-bold">S{Semester}</h3>
                </div>
                <h3 className="text-center text-yellow-400 font-bold mb-3">{Time1}</h3>
                <div className="text-center text-black bg-yellow-400 font-bold p-1 w-36 rounded-lg ms-10 hover:scale-105 transition delay-150 ease-in-out"><a href={Link1}>Download</a></div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default ExamCard
