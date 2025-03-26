import React,{useState} from 'react'

function Navbar() {
    const [displayMode,setDisplayMode] = useState(false);
    const changeDisplay = () => {
        setDisplayMode(!displayMode) 
        console.log(displayMode)
    }

  return (
    <React.Fragment>
        <div className={displayMode?"border-white bg-black border-b-2 flex flex-col space-y-0 sm:space-y-0 sm:flex-row items-center justify-evenly font-bold text-neutral-50 py-4 gap-2 sm:gap-0":"border-white bg-black border-b-2 flex flex-col gap-2 sm:gap-0 space-y-1 sm:space-y-0 sm:flex-row items-center justify-evenly font-bold text-neutral-50 py-4"}> 
            <div className="block sm:hidden text-black text-xl" onClick={changeDisplay}><i className="bi bi-list"></i></div>
            <a href="/"><div className={displayMode?"p-2 rounded-md sm:block bg-black hover:bg-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 ring ring-white hover:ring-purple-700 cursor-pointer":"rounded-xl hidden sm:block p-2 hover:bg-black transition ease-in-out delay-150 bg-black hover:-translate-y-1 hover:scale-110  duration-300 ring ring-white hover:ring-purple-700"}><i className="bi bi-house"></i> Home</div></a>
            <a href="/examination"><div className={displayMode?"p-2 sm:block rounded-md hover:bg-black transition ease-in-out delay-150 bg-black hover:-translate-y-1 hover:scale-110  duration-300 ring ring-white hover:ring-purple-700":"rounded-xl hidden sm:block p-2 hover:bg-black transition ease-in-out delay-150 bg-black hover:-translate-y-1 hover:scale-110  duration-300 ring ring-white hover:ring-purple-700"}><i className="bi bi-newspaper"></i> Exam Materials</div></a>
            <a href="/projectmaterials"><div className={displayMode?"p-2 sm:block rounded-md hover:bg-black transition ease-in-out delay-150 bg-black hover:-translate-y-1 hover:scale-110  duration-300 ring ring-white hover:ring-purple-700":"rounded-xl hidden sm:block p-2 hover:bg-black transition ease-in-out delay-150 bg-black hover:-translate-y-1 hover:scale-110  duration-300 ring ring-white hover:ring-purple-700"}><i className="bi bi-list-nested"></i> Project Materials</div></a>
            <a href="/resources"><div className={displayMode?"p-2 sm:block rounded-md hover:bg-black transition ease-in-out delay-150 bg-black hover:-translate-y-1 hover:scale-110 hover:bg-fuchsia-800 duration-300 ring ring-white hover:ring-purple-700":"rounded-xl sm:block hidden p-2 bg-black hover:bg-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 ring ring-white hover:ring-purple-700"}><i className="bi bi-card-text"></i> Links</div></a>
        </div>
    </React.Fragment>
  )
}
export default Navbar
