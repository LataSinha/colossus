import React from "react";
import { Grid } from "@material-ui/core";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router";
import colossusLogo from "../assets/colossus_logo.png";
import papyrus from "../assets/paperPresentation.jpg";
import Navbar1 from "../components/navbar/Navbar1";

const Papyrus = () => {
  const navigate = useNavigate();
  const handleRegister = () => {
    navigate("/papyrusRegistration");
  };
  return (
    <>
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
              Papyrus
            </h1>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} sm={6} md={6}>
            <img
              src={papyrus}
              className='poster'
            /></Grid>
          <Grid item xs={12} sm={6} md={6}>
              <br />
              <br />
              <p style={{ color: "#fff", marginLeft: "10%",marginRight:'10%' }}>
                A Paper Presentation competition will be organized in our
                Fest/Colossus'22
              </p>
              <h4 style={{ color: "#fff", marginLeft: "10%",marginRight:'10%' }}>Topics</h4>
              <ul style={{ color: "#fff", marginLeft: "10%",marginRight:'10%' }}>
                <li>Web Mining</li>
                <li>RAID Technology</li>
                <li>Embedded Systems and Programming</li>
                <li>Cloud Computing and Cloud Services</li>
                <li>AI in Machines</li>
                <li>Negative Impacts of AI</li>
                <li>Mobile Computing and Its Applications</li>
                <li>Intelligent Apps</li>
                <li>Harvard Architecture vs Von Neumann Architecture</li>
              </ul>
              <h4 style={{ color: "#fff", marginLeft: "10%",marginRight:'10%' }}>
                Rules and Regulations
              </h4>
              <ul style={{ color: "#fff", marginLeft: "10%",marginRight:'10%' }}>
                <li>
                  Participants have to choose a topic based on trending
                  technology and they have to give a presentation(5-7 mins) on
                  that topic.
                </li>
                <li>Participation can be in teams of at most 2 members.</li>
              </ul>
              <h3 style={{ color: "#fff", marginLeft: "10%",marginRight:'10%' }}>Entry Fee:</h3>
              <ul style={{ color: "#fff", marginLeft: "10%",marginRight:'10%' }}>
                <li>50(individual)</li>
                <li>100(team)</li>
              </ul>
              <h5 style={{ color: "#fff", marginLeft: "10%",marginRight:'10%' }}>For Enquiry</h5>
              <ul style={{ color: "#fff", marginLeft: "10%",marginRight:'10%' }}>
                <li>Ajay- +91 90507 07066</li>
                <li>Aditi- 7905955636</li>
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
    </>
  );
};

export default Papyrus;
