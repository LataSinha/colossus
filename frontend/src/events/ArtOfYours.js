import React from "react";
import poster from "../assets/ArtOfYoursPoster.jpeg";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router";
import { Grid } from "@material-ui/core";
import colossusLogo from "../assets/colossus_logo.png";
import Navbar1 from "../components/navbar/Navbar1";

const ArtOfYours = () => {
  const navigate = useNavigate();
  const handleRegistration = () => {
    navigate("/artOfYoursRegistration");
  };
  return (
    <div>
      <Helmet>
        <style>{"body { background: linear-gradient(90deg,rgba(0, 12, 25, 1) 0%,rgba(22, 111, 147, 1) 87%,rgba(0, 212, 255, 1) 100%);}"}</style>
      </Helmet>
      
      <div>
      <Navbar1 />
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
              Art of Yours
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
            <p style={{ color: "#fff",marginLeft: "10%",marginRight:'10%' }}>
              We are organizing a photography competition in our college fest
              'COLOSSUS'.
            </p>
            <h5 style={{ color: "#fff", marginLeft: "10%",marginRight:'10%'}}>
              Rules and Regulations
            </h5>
            <ul style={{ color: "#fff", marginLeft: "10%",marginRight:'10%' }}>
            <li>Theme for the painting will be given on the spot.</li>
              <li>A3 Sheets will be provided at the venue.</li>
              <li>
                You need to take care of your sheet as no extra sheets will be
                provided from our side.
              </li>
              <li>
                The art should be an original work. Plagiarism of any kind will
                lead to immediate disqualification.
              </li>
              
              <li>
                The total duration for completion of the painting is 1 hour.
              </li>
              <li>
                Make payment for your entry and post the screenshot of your
                payment in the form provided below.
              </li>
              <li>
                The backside of the paintings should carry the participant's
                details clearly.
              </li>
              <li>
                Results will be announced on the basis of relevance to the
                topic, color mixing and usage, and how beautiful the painting
                is.
              </li>
              <li>The Judges' decisions will be final</li>
              <li>Organizers can change the rule anytime.</li>
            </ul>
            <h4 style={{ color: "#fff", marginLeft: "10%",marginRight:'10%' }}>
              Entry Fee:&nbsp;₹ 50
            </h4>
            <h5 style={{ color: "#fff", marginLeft: "10%",marginRight:'10%' }}>For Enquiry</h5>
            <ul style={{ color: "#fff", marginLeft: "10%",marginRight:'10%' }}>
              <li>Shivam Tiwari- +91-8604563049</li>
              <li>Ayush Verma- +91- 8287824607</li>
              <li>Somiya Bharadwaj- +91-8979175671</li>
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

export default ArtOfYours;
