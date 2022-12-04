import React from 'react'

const Navbar = () => {
  return (
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
            <a class="nav-link text-white" href="#" style={{fontFamily:'Gotham',fontWeight:'bold',fontSize:'1.5em'}}>Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#" style={{fontFamily:'Gotham',fontWeight:'bold',fontSize:'1.5em'}}>About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#" style={{fontFamily:'Gotham',fontWeight:'bold',fontSize:'1.5em'}}>Sponsors</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#" style={{fontFamily:'Gotham',fontWeight:'bold',fontSize:'1.5em'}}>Events</a>
          </li>
          {/* <li class="nav-item">
            <a class="nav-link text-white" href="#">Contact</a>
          </li> */}
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar
