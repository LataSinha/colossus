import React from "react";
import poster from "../assets/SursangamPoster.jpg";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router";
import { Grid } from "@material-ui/core";
import colossusLogo from "../assets/colossus_logo.png";
import Navbar1 from "../components/navbar/Navbar1";

const CodeMania = () => {
  const navigate = useNavigate();
  const handleRegistration = () => {
    navigate("/surSangamRegistration");
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
              Sursangam
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
              <i>Where words fail, Music speaks!!!!</i>
            </h5>
            <p style={{ color: "#fff",marginLeft: "10%",marginRight:'10%'}}>
              C-DAC Noida is organizing "Sursangam" which is an inter-college
              singing competition for all the singers to showcase their singing
              skills and let the world be lost in their melodies.
            </p>
            <p style={{ color: "#fff", marginLeft: "10%",marginRight:'10%'}}>
              And the best 3 winners will be awarded.
            </p>
            <h5 style={{ color: "#fff", marginLeft: "10%",marginRight:'10%' }}>
              Rules and Regulations
            </h5>
            <ul style={{ color: "#fff", marginLeft: "10%",marginRight:'10%'}}>
              <li>Strictly bollywood songs allowed.</li>
              <li>2Time limit - 3+1 including set up and sound check</li>
              <li>Maximum 2 accompanists are allowed.</li>
              <li>Electronic tanpura allowed</li>
              <li>Maximum 30 entries are allowed.</li>
              <li>Participants must carry their own instruments.</li>
              <li>Use of pre-recorded track is not allowed</li>
              <li>Organizers can change the rules anytime.</li>
            </ul>
            <h4 style={{ color: "#fff", marginLeft: "10%",marginRight:'10%' }}>
              Entry Fee:&nbsp;₹ 50
            </h4>
            <h5 style={{ color: "#fff", marginLeft: "10%",marginRight:'10%' }}>For Enquiry</h5>
            <ul style={{ color: "#fff", marginLeft: "10%",marginRight:'10%' }}>
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

export default CodeMania;
