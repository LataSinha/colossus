import { useState } from "react";
import "./navbar.css";
import {useNavigate} from react-router;
import logo from "./logo.png";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const navigate = useNavigate()
  const handleEvents = () =>{
    navigate('/events')
  }
  const handleTimeline = () =>{
    navigate('/timeline')
  }

  return (
    <nav className="navigation">
      <a href="https://www.cdac.in/" className="brand">
        <img src={logo} height="50px" />
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
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#sponsors">Sponsors</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a onClick={handleEvents}>Events</a>
          </li>{" "}
          <li>
            <a onClick={handleTimeline}>Timeline</a>
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
