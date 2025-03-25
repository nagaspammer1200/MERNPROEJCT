import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar'
import ExamCard from '../components/ExamCard'

function Examination() {

  const [firstSeries, setFirstSeries] = useState([]);
  const [secondSeries, setSecondSeries] = useState([]);
  const [labQuestions, setlabQuestions] = useState([]);

  useEffect(() => {

    //FIRST SERIES
    fetch("http://localhost:5000/api/firstseries")
      .then((res) => res.json())
      .then((data) => {
        console.log("First Series Response:", data); // Debugging

        // Ensure data is an array and sort it based on `time1`, then `semester`
        const sortedData = Array.isArray(data)
          ? data.sort((a, b) => {
              const dateA = new Date(a.time1);
              const dateB = new Date(b.time1);

              // First, sort by time1
              if (dateA - dateB !== 0) {
                  return dateA - dateB;
              }

              // If time1 is the same, sort by semester (Extract numeric value)
              const semA = parseInt(String(a.semester).replace(/\D/g, ""), 10) || 0;
              const semB = parseInt(String(b.semester).replace(/\D/g, ""), 10) || 0;

              return semA - semB;
          })
          : [];

        setFirstSeries(sortedData);
      })
      .catch((err) => {
        console.error("Error fetching first series:", err);
        setFirstSeries([]); // Prevent errors
      });

      //SECOND SERIES
      fetch("http://localhost:5000/api/secondseries")
      .then((res) => res.json())
      .then((data) => {
        console.log("Second Series Response:", data); // Debugging

        // Ensure data is an array and sort it based on `time1`, then `semester`
        const sortedData = Array.isArray(data)
          ? data.sort((a, b) => {
              const dateA = new Date(a.time1);
              const dateB = new Date(b.time1);

              // First, sort by time1
              if (dateA - dateB !== 0) {
                  return dateA - dateB;
              }

              // If time1 is the same, sort by semester (Extract numeric value)
              const semA = parseInt(String(a.semester).replace(/\D/g, ""), 10) || 0;
              const semB = parseInt(String(b.semester).replace(/\D/g, ""), 10) || 0;

              return semA - semB;
          })
          : [];

        setSecondSeries(sortedData);
      })
      .catch((err) => {
        console.error("Error fetching first series:", err);
        setSecondSeries([]); // Prevent errors
      });


      //LAB QUESTIONS
      fetch("http://localhost:5000/api/labquestions")
      .then((res) => res.json())
      .then((data) => {
        console.log("Lab Response:", data); // Debugging

        // Ensure data is an array and sort it based on `time1`, then `semester`
        const sortedData = Array.isArray(data)
          ? data.sort((a, b) => {
              const dateA = new Date(a.time1);
              const dateB = new Date(b.time1);

              // First, sort by time1
              if (dateA - dateB !== 0) {
                  return dateA - dateB;
              }

              // If time1 is the same, sort by semester (Extract numeric value)
              const semA = parseInt(String(a.semester).replace(/\D/g, ""), 10) || 0;
              const semB = parseInt(String(b.semester).replace(/\D/g, ""), 10) || 0;

              return semA - semB;
          })
          : [];

        setlabQuestions(sortedData);
      })
      .catch((err) => {
        console.error("Error fetching first series:", err);
        setlabQuestions([]); // Prevent errors
      });

      
}, []);





  

  return (
    <React.Fragment>
        <Navbar/>
        <div className="items-center bg-black text-white">
            <h1 className="p-3 font-semibold text-center">First Series Examinations</h1>
            <div className="grid grid-cols-3 gap-3 ps-8 mb-2">
                {firstSeries.map((item) => (
                  <ExamCard key={item._id} ExamName={item.subjectName} Semester={item.semester} Time1={item.time1}   Link1={item.link1} />
              ))}             
            </div>
            <hr />
            <h1 className="p-3 font-semibold text-center mt-3">Second Series Examinations</h1>
            <div className="grid grid-cols-3 gap-3 ps-8 mb-2">
            {secondSeries.map((item) => (
                  <ExamCard key={item._id} ExamName={item.subjectName} Semester={item.semester} Time1={item.time1}   Link1={item.link1} />
              ))}  
            </div>
            <hr />
            <h1 className="p-3 font-semibold text-center mt-3">Lab Questions</h1>
            <div className="grid grid-cols-3 gap-3 ps-8 mb-2">
            {labQuestions.map((item) => (
                  <ExamCard key={item._id} ExamName={item.subjectName} Semester={item.semester} Time1={item.time1}   Link1={item.link1} />
              ))}  
            </div>
        </div>
    </React.Fragment>
  )
}

export default Examination
