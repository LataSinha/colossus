import React from "react";
import { Grid } from "@material-ui/core";
import { useNavigate } from "react-router";
import { Helmet } from "react-helmet";
import colossusLogo from "../assets/colossus_logo.png";
import pixofy from "../assets/pixofyPoster.jpeg";
import Navbar1 from "../components/navbar/Navbar1";

const Pixofy = () => {
  const navigate = useNavigate();
  const handleRegister = () => {
    navigate("/pixofyRegistration");
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
              Pixofy
            </h1>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12} sm={6} md={6}>
            <img
              src={pixofy}
              className='poster'
            /></Grid>
          <Grid item xs={12} sm={6} md={6}>
            <br />
            <br />
            <p style={{ color: "#fff", marginLeft: "10%",marginRight:'10%' }}>
              A Photography competition will be organized in our
              Fest/Colossus'22.
            </p>
            <h4 style={{ color: "#fff", marginLeft: "10%",marginRight:'10%'}}>ROUND 1</h4>
            <ul style={{ color: "#fff", marginLeft: "10%",marginRight:'10%' }}>
              <li>30 minutes</li>
              <li>Only 1 picture will be considered.</li>
              <li>Candid photo of living being is to be captured.</li>
            </ul>
            <h4 style={{ color: "#fff", marginLeft: "10%",marginRight:'10%' }}>ROUND 2</h4>
            <ul style={{ color: "#fff", marginLeft: "10%",marginRight:'10%' }}>
              <li>5 minutes</li>
              <li>15 minutes editing</li>
              <li>It is an object round.</li>
              <li>Only 1 picture will be considered.</li>
            </ul>
            <h5 style={{ color: "#fff", marginLeft: "10%",marginRight:'10%' }}>
              Rules and Regulations
            </h5>
            <ul style={{ color: "#fff",marginLeft: "10%",marginRight:'10%' }}>
              <li>The Competition is open to students of all colleges.</li>
              <li>There will be two rounds.</li>
              <li>
                Judgment will be based on the total number of questions
                completed and the number of test cases passed.
              </li>
              <li>
                Lastly, the decision of the judges will be final and binding.
              </li>
              <li>Organizers can change the rule anytime.</li>
            </ul>
            <h5 style={{ color: "#fff", marginLeft: "10%",marginRight:'10%'}}>For Enquiry</h5>
            <ul style={{ color: "#fff", marginLeft: "10%",marginRight:'10%'}}>
              <li>Somiya Bharadwaj- +91-8979175671</li>
              <li>Shivam Tiwari- +91-8604563049</li>
              <li>Ayush Verma- +91- 8287824607</li>
            </ul>
          </Grid>
        </Grid>
        <Grid container>
          <button
            onClick={handleRegister}
            className="register"
            type="submit"
          // style={{ marginTop: "75%" }}
          >
            Register
          </button>
        </Grid>

      </div>
    </>
  );
};

export default Pixofy;
