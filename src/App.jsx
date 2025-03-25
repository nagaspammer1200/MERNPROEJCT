import React,{ createContext,useState,useEffect } from 'react'
import { BrowserRouter ,Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Examination from './pages/Examination';
import Links from './pages/Links';
import Project from './pages/Project';

function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <React.Fragment>
      <BrowserRouter> 
          <Routes> 
            <Route Index element={<Home/>}/> 
            <Route path="/" element={<Home/>}/>
            <Route path="/projectmaterials" element={<Project/>}/>
            <Route path="/examination" element={<Examination/>}/>
            <Route path="/resources" element={<Links/>}/>
          </Routes> 
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
