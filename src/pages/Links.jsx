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
              <li className="ms-6"><a className="underline decoration-sky-400 hover:text-blue-600" href="https://www.ktunotes.in/">KTU Notes</a>: A great resource to get short concise notes.</li>
              <li className="ms-6"><a className="underline decoration-sky-400 hover:text-blue-600" href="https://www.keralanotes.com/">Kerala Notes</a>: A website that is useful for notes on certain subjects.</li>
              <li className="ms-6"><a className="underline decoration-sky-400 hover:text-blue-600" href="https://ceadoor.ihrd.ac.in/pages/downloads.php">College of Engineering Adoor Question Paper Repository</a>: It contains university papers.</li>
              <li className="ms-6"><a className="underline decoration-sky-400 hover:text-blue-600" href="https://www.mzce.ac.in/page2?cxv=IjQ1Ig==">Mount Zion Learning Centre</a>: This contains university question papers in an organized Google Drive</li>
              <li className="ms-6"><a className="underline decoration-sky-400 hover:text-blue-600" href="http://ee.cet.ac.in/program/btech.html">College of Engineering Trivandrum</a>: This contains lab materials.</li>
              <li className="ms-6"><a className="underline decoration-sky-400 hover:text-blue-600" href="https://drive.google.com/drive/folders/1XCKdzvWestGZyWmH4-Dh2ylV-T_DpK-i ">KTU Subject Textbooks</a></li>

              <li className="ms-6"><a className="underline decoration-sky-400 hover:text-blue-600" href="https://drive.google.com/drive/folders/12i3A3ZtAzKPuwGezhWKWa4QepzJ9rY_8 ">University Exam Google Drive 1</a></li>
              <li className="ms-6"><a className="underline decoration-sky-400 hover:text-blue-600" href="https://drive.google.com/drive/folders/0B1FyIsWqG7lkY0N5eDM0ckpvZTg?resourcekey=0-CrP-kLmnthiVC7O_Vvj2hQ ">University Exam Google Drive 2</a></li>
              <li className="ms-6"><a className="underline decoration-sky-400 hover:text-blue-600" href="https://drive.google.com/drive/folders/1FlaBAix4N09gOhMa_wl5rAa6KznILZZB ">Mount Zion Google Drive</a></li>
            </ul>
            
          </div>
        </div>
    </React.Fragment>
  )
}

export default Links
