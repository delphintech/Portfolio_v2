// import logo from "../assets/img/delphintech_logo"
import { useState } from "react"

export function Navbar() {
    const [open, setOpen] = useState(false);

    return(
      // <nav className="bg-dark/85 fixed w-full z-20 top-0 start-0 text-accent1">
<nav className="fixed top-0 left-0 w-full z-50 bg-light/50 backdrop-blur-md border-b border-dark/20 text-dark drop-shadow-sm ">
        <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="#" className="text-xl font-serif grad">
              <span >DelphInTech</span>
            </a>
          <button onClick={() => setOpen(!open)} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-md md:hidden hover:bg-muted-1/30">
              <svg className="w-6 h-6"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/></svg>
          </button>

          <div className={`w-full md:block md:w-auto overflow-hidden transition-all duration-300 ${open ? 'max-h-96' : 'max-h-0 md:max-h-none'}`} id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
              <li><a href="#home" className="block py-2 px-3 rounded hover:bg-muted-1/30  p-2">Home</a></li>
              <li><a href="#about" className="block py-2 px-3 rounded hover:bg-muted-1/30  p-2">About</a></li>
              <li><a href="#resume" className="block py-2 px-3 rounded hover:bg-muted-1/30  p-2">Resume</a></li>
              <li><a href="#projects" className="block py-2 px-3  rounded hover:bg-muted-1/30 p-2">Projects</a></li>
              <li><a href="#contact" className="block py-2 px-3  rounded hover:bg-muted-1/30 p-2">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }

