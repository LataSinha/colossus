import React from "react";
import poster from "../assets/GroupDancePoster.jpg";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router";
import { Grid } from "@material-ui/core";
import colossusLogo from "../assets/colossus_logo.png";
import Navbar1 from "../components/navbar/Navbar1";

const BeatExplosion = () => {
  const navigate = useNavigate();
  const handleRegistration = () => {
    navigate("/beatExplosionRegistration");
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
              Beat Explosion
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
            <h5 style={{ color: "#fff", marginLeft: "10%", marginRight:'10%' }}>
              <i>Dancers Do Not Need Wings To Fly, Their Feet Does The Work.</i>
            </h5>
            <p style={{ color: "#fff",marginLeft: "10%", marginRight:'10%'  }}>
              Hello Dancers! Let the beat control your bodies and set the stage
              on fire with your passion for dancing, C-DAC Noida is organizing "
              Beat Explosion " which is an inter-college competition for all the
              Dancers to showcase their grooves and moves.
            </p>
            <h5 style={{ color: "#fff", marginLeft: "10%", marginRight:'10%'  }}>
              Rules and Regulations
            </h5>
            <ul style={{ color: "#fff", marginLeft: "10%", marginRight:'10%'  }}>
              <li>Maximum time allotted for each performance is 10 mins.</li>
              <li>Team has to bring their backing track on their own.</li>
              <li>No props will be provided.</li>
              <li>5-6 members per team is allowed.</li>
              <li>Organizers can change the rules anytime.</li>
            </ul>
            <h4 style={{ color: "#fff", marginLeft: "10%", marginRight:'10%' }}>
              Entry Fee:&nbsp;₹ 150
            </h4>
            <h5 style={{ color: "#fff", marginLeft: "10%", marginRight:'10%' }}>For Enquiry</h5>
            <ul style={{ color: "#fff", marginLeft: "10%", marginRight:'10%'  }}>
              <li>Nidhi Pandey- 9958146451</li>
              <li>Avya Gupta- 9560348411</li>
            </ul>
          </Grid>
          <Grid container>
            <button
              onClick={handleRegistration}
              className="register"
              style={{ padding: '2rem 8rem 4rem 8rem' }}
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
