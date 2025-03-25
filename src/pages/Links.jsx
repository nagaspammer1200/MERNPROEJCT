import React from 'react'
import Navbar from '../components/Navbar'

function Links() {

  return (
    <React.Fragment>
        <Navbar/>
        <div className="items-center bg-black text-white">
          <h1 className="p-3 font-semibold text-center">The God of GECB</h1>
          <p className="p-6 italic text-center text-start font-semibold ring ring-3 ring-white rounded-lg m-3">The following links can help students ace your exams and save your time.</p>
          <div className="mt-6 p-6 font-bold">
            <h1>Links Below </h1>
            <ul className="list-disc">
              <li className="ms-6"><a className="underline decoration-sky-400" href="https://github.com/nagaspammer1200">KTU Notes</a></li>
              <li className="ms-6"><a className="underline decoration-sky-400" href="https://www.linkedin.com/in/sreekanth-p-s-867515290">Kerala Notes</a></li>
            </ul>
            
          </div>
        </div>
    </React.Fragment>
  )
}

export default Links
