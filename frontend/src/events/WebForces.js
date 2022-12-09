import React from "react";
import { Grid } from "@material-ui/core";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router";
import webForces from "../assets/webdPoster.png";
import colossusLogo from "../assets/colossus_logo.png";
import Navbar1 from "../components/navbar/Navbar1";

const WebForces = () => {
  const navigate = useNavigate();
  const handleRegister = () => {
    navigate("/webforcesRegistration");
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
              Web Forces
            </h1>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} sm={6} md={6}>
            <img
              src={webForces}
              className='poster'
            /></Grid>
          <Grid item xs={12} sm={6} md={6}>
              <br />
              <br />
              <p style={{ color: "#fff", marginLeft: "10%",marginRight:'10%' }}>
                Competitors will receive a professional brief and must build a
                user-friendly, contemporary website in a live competition. The
                competition includes a range of competencies for web designers
                and developers. We welcome you all to grace us with your lovely
                presence and enjoy this wonderful event. You can join us
                individually or in a team of 2 members.
              </p>
              <p style={{ color: "#fff",marginLeft: "10%",marginRight:'10%'  }}>
                There is also a short session on website deployment on azure in
                which you will learn how to deploy your website using Microsoft
                Azure Static Web App Services.
              </p>
              <h5 style={{ color: "#fff", marginLeft: "10%",marginRight:'10%'  }}>
                Rules and Regulations
              </h5>
              <h4 style={{ color: "#fff",marginLeft: "10%",marginRight:'10%'  }}>ROUND 1</h4>
              <ul style={{ color: "#fff", marginLeft: "10%",marginRight:'10%' }}>
                <li>
                  30 mins MCQ round based on HTML, CSS, JS, PHP, Bootstrap,
                  jQuery, React, Node.
                </li>
                <li>It is an elimination round</li>
              </ul>
              <h4 style={{ color: "#fff", marginLeft: "10%",marginRight:'10%'  }}>ROUND 2</h4>
              <ul style={{ color: "#fff", marginLeft: "10%",marginRight:'10%'  }}>
                <li>
                  Participants have to make a basic 1-2 page website on a
                  particular topic in 2 hours.
                </li>
                <li>Topic will be given on spot.</li>
                <li>
                  Participants can use HTML, CSS, JS, Bootstrap, Node, React,
                  Express to make the website.
                </li>
              </ul>
              <h4 style={{ color: "#fff", marginLeft: "10%",marginRight:'10%'  }}>
                Entry Fee:&nbsp;₹ 100
              </h4>
              <h5 style={{ color: "#fff", marginLeft: "10%",marginRight:'10%'  }}>For Enquiry</h5>
              <ul style={{ color: "#fff", marginLeft: "10%",marginRight:'10%'  }}>
                <li>Muskan Rani- +91 93544 04363</li>
                <li>Shubham garg- +91 70423 81866</li>
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

export default WebForces;
