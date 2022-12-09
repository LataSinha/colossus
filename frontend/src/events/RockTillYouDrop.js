import React from "react";
import poster from "../assets/SoloDancePoster.jpg";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router";
import { Grid } from "@material-ui/core";
import colossusLogo from "../assets/colossus_logo.png";
import Navbar1 from "../components/navbar/Navbar1";

const BeatExplosion = () => {
  const navigate = useNavigate();
  const handleRegistration = () => {
    navigate("/RockTillTheDropRegistration");
  };
  return (
    <div>
      <Helmet>
        <style>{"body { background: linear-gradient(90deg,rgba(0, 12, 25, 1) 0%,rgba(22, 111, 147, 1) 87%,rgba(0, 212, 255, 1) 100%);}"}</style>
      </Helmet>
      <Navbar1 />
      <div>
        <Grid container>
          <Grid item xs={12}>
            <h1 className='nth1'>COLOSSUS"22</h1>
            <p className='ntp'>
              The Cosmic Fun Begins
            </p>
            <h1
              style={{
                color: "#fff",
                // marginLeft: "102%",
                fontFamily: "Gotham",
                letterSpacing: ".2rem",
                fontSize: "400%",
                textAlign: 'center'
              }}
            >
              Rock Till You Drop
            </h1>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12} sm={6} md={6}>
            <img
              src={poster}
              className='poster'
            /></Grid>
          <Grid item xs={12} sm={6} md={6}>
            <br />
            <br />
            <h5 style={{ color: "#fff", marginLeft: "10%",marginRight:'10%' }}>
              <i>Dancers Do Not Need Wings To Fly, Their Feet Does The Work.</i>
            </h5>
            <p style={{ color: "#fff", marginLeft: "10%",marginRight: '10%' }}>
              Hello Dancers! Grab your dancing shoes and get ready, C-DAC Noida
              is organizing " ROCK TILL THE DROP " which is an inter-college
              competition for all the Dancers to showcase their grooves and
              moves.
            </p>
            <h5 style={{ color: "#fff", marginLeft: "10%",marginRight:'10%' }}>
              Rules and Regulations
            </h5>
            <h4 style={{ color: "#fff",  marginLeft: "10%",marginRight:'10%' }}>ROUND 1</h4>
            <ul style={{ color: "#fff",  marginLeft: "10%",marginRight:'10%' }}>
              <li>
                Winner Shortlisted from this round will be eligible for Round 2.{" "}
              </li>
              <li>Maximum time allotted to each performer is 5 min. </li>
              <li>Organizers can change the rules anytime.</li>
            </ul>

            <h4 style={{ color: "#fff", marginLeft: "10%",marginRight:'10%' }}>ROUND 2</h4>
            <ul style={{ color: "#fff",  marginLeft: "10%",marginRight:'10%' }}>
              <li>One dance Battle will be of max 7-8 mins.</li>
              <li>1 min performance by each participant in the battle.</li>
              <li>Organizers can change the rules anytime.</li>
            </ul>
            <h4 style={{ color: "#fff",  marginLeft: "10%",marginRight:'10%' }}>
              Entry Fee:&nbsp;₹ 50
            </h4>
            <h5 style={{ color: "#fff",  marginLeft: "10%",marginRight:'10%' }}>For Enquiry</h5>
            <ul style={{ color: "#fff",  marginLeft: "10%",marginRight:'10%' }}>
              <li>Nidhi Pandey- 9958146451</li>
              <li>Avya Gupta- 9560348411</li>
            </ul>
          </Grid>
          <Grid container>
            <button
              style={{ padding: '2rem 8rem 4rem 8rem' }}
              onClick={handleRegistration}
              className="register"
            >
              Register
            </button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default BeatExplosion;
