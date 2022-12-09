import React from "react";
import { Grid } from "@material-ui/core";
import { Helmet } from "react-helmet";
import { useNavigate } from 'react-router';
import colossusLogo from "../assets/colossus_logo.png";
import poetery from "../assets/poeteryPoster.png";
import Navbar1 from "../components/navbar/Navbar1";

const Pixofy = () => {
  const navigate = useNavigate()
  const handleRegister = () => {
    navigate('/kavyanjaliRegister')
  }
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
              Kavyanjali
            </h1>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12} sm={6} md={6}>
            <img
              src={poetery}
              className='poster'
            /></Grid>
          <Grid item xs={12} sm={6} md={6}>
            <br />
            <br />
            <h6 style={{ color: "#fff", marginLeft: "8%" }}>
              <i>
                All the fellow Ghalibs out there! get your seat-belts
                tightened up!
              </i>
            </h6>
            <p style={{ color: "#fff", marginLeft: "8%" }}>
              We welcome you all to grace us with your lovely presence and
              enjoy this wonderful event hosting many budding poets!
            </p>
            <p style={{ color: "#fff", marginLeft: "8%" }}>
              Poets can share their thoughts in both English and Hindi.
              Individual with the best poetry according to judges will be the
              winner.
            </p>
            <h5 style={{ color: "#fff", marginLeft: "8%" }}>
              Rules and Regulations
            </h5>
            <ul style={{ color: "#fff", marginLeft: "8%" }}>
              <li>Single-round event.</li>
              <li>Individual participation is invited.</li>
              <li>
                This competition is open to all undergraduate and postgraduate
                students.
              </li>
              <li>Poems can be in Hindi or English.</li>
              <li>
                Each participant will be given 3 minutes for their
                performance.
              </li>
              <li>
                A warning bell will ring on completion of 2:50 and the second
                bell will ring on completion of 3:00 after that you have to
                stop your performance else it will lead to disqualification.
              </li>
              <li>
                Poems should be original in its composition. Any sort of
                plagiarism is strictly prohibited.
              </li>
              <li>
                Any sort of racism, homophobia, sexism or another offensive
                language will be immediately disqualified.
              </li>
              <li>
                Decisions of the judges and management team will be final and
                non-objectionable.
              </li>
              <li>
                The Organizing team can make changes to the rules at any time.{" "}
              </li>
            </ul>
            <h5 style={{ color: "#fff", marginLeft: "8%" }}>For Enquiry</h5>
            <ul style={{ color: "#fff", marginLeft: "8%" }}>
              <li>Pratham- 76784 00616</li>
              <li>Himanshi- 9315216782</li>
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

export default Pixofy;
