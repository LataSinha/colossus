import React from 'react'
import videoBg from '../assets/HomeBg.mp4'
import logo from '../assets/colossus_logo.png'
import Sponsors from './Sponsors'
import About from './About'
import Footer from './Footer'
import Events from './Events'
import {useNavigate} from 'react-router-dom'
import Navbar from './Navbar'

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/events')
  }
  return (
    <div className='main' style={{ backgroundColor: '#016b9e' }}>
      <div>
        <nav class="navbar fixed-top navbar-expand-lg navbar-dark p-md-3">
          <div class="container">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
              <div class="mx-auto"></div>
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link text-white" href="#" style={{ fontFamily: 'Gotham', fontWeight: 'bold', fontSize: '1.5em' }}>Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="#about" style={{ fontFamily: 'Gotham', fontWeight: 'bold', fontSize: '1.5em' }}>About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="#sponsors" style={{ fontFamily: 'Gotham', fontWeight: 'bold', fontSize: '1.5em' }}>Sponsors</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" onClick={handleClick} style={{ fontFamily: 'Gotham', fontWeight: 'bold', fontSize: '1.5em',cursor:'pointer' }}>Events</a>
                </li>
                {/* <li class="nav-item">
            <a class="nav-link text-white" href="#">Contact</a>
          </li> */}
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <video src={videoBg} autoPlay loop muted />
      <div className='content'>
        <img src={logo} />
        <h3 style={{textAlign:'center',display:'flex',justifyContent:'center',marginLeft:'14%',fontFamily:'Gotham',padding:'1rem',letterSpacing:'0.3rem'}}>The Cosmic Fun Begins</h3>
      </div><div style={{ backgroundColor: '#016b9e' }}>
      <a name='sponsors'><Sponsors /></a>
      <a name='about'><About /></a>
      {/* <a name='events'><Events /></a> */}
      </div>
      <Footer />
    </div>
  )
}

export default Home
