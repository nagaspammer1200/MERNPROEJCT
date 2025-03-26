import React from 'react'
import Navbar from '../components/Navbar'

function Home() {

  return (
    <React.Fragment>
        <Navbar/>
        <div className="p-4 border border-white rounded-lg text-white object-center ms-32 me-32 mt-12">
          <h2 className="font-semibold text-center m-3 font-bold">The God of time</h2>
          <p className="text-start font-semibold">Welcome to my website. I am a former alumni of <a className="underline text-green-300 decoration-red-600 decoration-3 decoration-offset-3 font-bold">Government Engineering College Barton Hill.</a> This site was created so that students of the KTU 2019 Scheme of my college can find study materials personalized for them. This website caters only for students of 2019 Scheme <a className="underline text-yellow-300 decoration-white decoration-3 font-bold"> Electrical and Electronics Engineering</a> students of KTU. Although i won't deny it's use for core subjects and lab examinations for the 2024 counterparts. The website contains Series Questions of both first and second series, Lab exam questions, placement materials etc. This website was created for me to work on MERN projects. </p><br />
          <ul className="list-disc">
              <li className="ms-6">The Links for Series Questions are given as Google Drive Folders</li>
              <li className="ms-6">Lab Questions are given as Google Sheet files</li>
              <li className="ms-6">Project Page consists of zip files for Project Latex code and pdf for Project Report</li>
            </ul>
          <div class="text-center mt-12 font-bold">
            <h3 className='mt-3'>Contact Details below: </h3>
            <h4><a href="https://linkedin.com/in/sreekanth-p-s-867515290/">LinkedIn</a></h4>
            <h4><a href="https://github.com/nagaspammer1200">Github</a></h4>
          </div>
        </div>
    </React.Fragment>
  )
}

export default Home
