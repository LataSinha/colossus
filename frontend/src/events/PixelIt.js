import React from "react";
import graphicPoster from "../assets/graphicPoster.jpg";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router";
import { Grid } from "@material-ui/core";
import Navbar1 from "../components/navbar/Navbar1";
import colossusLogo from "../assets/colossus_logo.png";

const CodeMania = () => {
  const navigate = useNavigate();
  const handleRegister = () => {
    navigate("/pixelItRegistration");
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
              Pixel It
            </h1>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} sm={6} md={6}>
            <img
              src={graphicPoster}
              className='poster'
            /></Grid>
          <Grid item xs={12} sm={6} md={6}>
            <br />
            <br />
            <p style={{ color: "#fff", marginLeft: "10%",marginRight:'10%' }}>
              We are organizing a graphic designing competition in our college
              fest COLOSSUS.
            </p>
            <h5 style={{ color: "#fff", marginLeft: "10%",marginRight:'10%' }}>
              Rules and Regulations
            </h5>
            <ul style={{ color: "#fff", marginLeft: "10%",marginRight:'10%'}}>
              <li>
                <b>Poster Size:</b>&nbsp;1080×1080
              </li>
              <li>
                <b>File Size:</b>&nbsp; Maximum file size is 20 mb
              </li>
              <li>
                <b>File Format:</b>&nbsp; Save your file as a PDF for quick and
                easy upload.
              </li>
              <li>Each participant should submit one entry only.</li>
              <li>
                First 10-20 mins will be given for downloading elements, icons,
                and images that can be used in the poster.
              </li>
              <li>
                Participants will have to turn off the internet before starting
                with the poster. Any participant who is found to have internet
                after starting with the design of the poster will be
                disqualified.
              </li>
              <li>
                Each participant can download a maximum of 5 elements from the
                internet.
              </li>
              <li>
                Participants can use only Adobe Photoshop or affinity to design
                the posters.
              </li>
              <li>
                The poster will be judged according to the following criteria:
                creativity, presentation, and relevance to the theme.
              </li>
              <li>
                Participant name or identifying mark must not appear on the
                Poster.
              </li>
              <li>
                The poster should be the original work of the participant. Any
                participant found violating rules and regulations will be
                disqualified from the competition.
              </li>
              <li>
                No posters should include an image or name of government
                officials or popular personalities.
              </li>
              <li>Decision of the jury will be considered final.</li>
              <li>All Participants should have their college IDs with them.</li>
            </ul>
            <h4 style={{ color: "#fff", marginLeft: "10%",marginRight:'10%' }}>
              Entry Fee:&nbsp;₹ 50
            </h4>
            <h5 style={{ color: "#fff", marginLeft: "10%",marginRight:'10%' }}>For Enquiry</h5>
            <ul style={{ color: "#fff", marginLeft: "10%",marginRight:'10%' }}>
              <li>Nitish Gupta- 9260906197</li>
              <li>Somiya Bhardwaj- 8979175671</li>
            </ul>
          </Grid>
          <Grid container>
            <button
              onClick={handleRegister}
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
