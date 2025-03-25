import React from 'react'

function ExamCard({ExamName, Semester, Time1, Link1}) {

  return (
    <React.Fragment>
        <div className="m-2 w-64 p-1 bg-black text-white border-white border rounded-lg">
            <div className="m-1 p-2 bg-gray-900 opacity-90">
                <div className="flex justify-around mb-2">
                  <h3 className="text-center font-bold text-sky-600 underline decoration-solid decoration-red-700 decoration-2 underline-offset-4 uppercase">{ExamName}</h3>
                  <h3 className="text-center font-bold text-sky-600">S{Semester}</h3>
                </div>
                <div className="text-center p-3">
                  <div className="hover:text-blue-600"><a href={Link1}>{Time1}</a></div>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default ExamCard
