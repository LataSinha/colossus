import { useState } from "react";
import "./navbar.css";
import { useNavigate } from 'react-router';
import cdac from "./cdac.png";
import {NavLink,Link} from 'react-router-dom'

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const navigate = useNavigate()
  // const handleEvents = () => {
  //   navigate('/events')
  // }
  // const handleTimeline = () => {
  //   navigate('/timeline')
  // }
  // var linkStyle;
  //   if (this.state.hover) {
  //     linkStyle = {backgroundColor: 'red'}
  //   } else {
  //     linkStyle = {backgroundColor: 'blue'}
  //   }
  

  return (
    <nav className="navigation" style={{position:'fixed'}}>
      <a href="https://www.cdac.in/" className="brand">
        <img src={cdac} height="50px" />
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* icon from Heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul style={{ cursor: 'pointer', color: 'white', }} >
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* <li>
            <a href="#sponsors">Sponsors</a>
          </li> */}
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <Link to='/events'>Events</Link>
          </li>{" "}
          <li>
            <Link to='/timeline'>Timeline</Link>
          </li>{" "}
          {/* 
          TODO: Make it work
           */}
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
