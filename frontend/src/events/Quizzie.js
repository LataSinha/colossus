import React from "react";
import { Grid } from "@material-ui/core";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router";
import quizPoster from "../assets/quizPoster.jpeg";
import colossusLogo from "../assets/colossus_logo.png";
import { Navigate } from "react-router";
import Navbar1 from "../components/navbar/Navbar1";

const Quizzie = () => {
  const navigate = useNavigate();
  const handleQuizRegistration = () => {
    navigate("/quizzieBuzzieRegistration");
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
              Quizzie Buzzie
            </h1>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} sm={6} md={6}>
            <img
              src={quizPoster}
              className='poster'
            /></Grid>
          <Grid item xs={12} sm={6} md={6}>
              <br />
              <br />
              <h5 style={{ color: "#fff", marginLeft: "10%",marginRight:'10%' }}>
                Technical Quiz
              </h5>
              <h6 style={{ color: "#fff", marginLeft: "10%",marginRight:'10%' }}>
                <i>Come and show your technical prowess! </i>
              </h6>
              <p style={{ color: "#fff", marginLeft: "10%",marginRight:'10%' }}>
                We are organizing a technical quiz event which consists of two
                rounds
              </p>
              <p style={{ color: "#fff", marginLeft: "10%",marginRight:'10%' }}>
                <b>Round 1</b> will be the MCQ’s round: With a wide array of
                questions from numerous technical topics, this is one event that
                will breach the boundaries of your technical lore.{" "}
              </p>
              <h4 style={{ color: "#fff",marginLeft: "10%",marginRight:'10%' }}>ROUND 1 Rules</h4>
              <ul style={{ color: "#fff", marginLeft: "10%",marginRight:'10%' }}>
                <li>No phones allowed.</li>
                <li>Time limit 20 mins. No extra time will be provided.</li>
                <li>Cross-Discussions will lead to disqualifications.</li>
                <li>No negative marking in this round. </li>
                <li>
                  Decisions of the Quiz Masters will be the final decision.
                </li>
                <li>Organizers can change the rule at any time.</li>
              </ul>
              <h4 style={{ color: "#fff", marginLeft: "10%",marginRight:'10%' }}>ROUND 2</h4>
              <ul style={{ color: "#fff", marginLeft: "10%",marginRight:'10%'}}>
                <li>
                  Rules for this round will be disclosed on the beginning of the
                  round itself.
                </li>
                <li>100 Points for each question.</li>
                <li>Penalisation of 50 points for wrong answers.</li>
                <li>Organizers can change the rule at any time.</li>
              </ul>
              <h5 style={{ color: "#fff", marginLeft: "10%",marginRight:'10%' }}>For Enquiry</h5>
              <ul style={{ color: "#fff", marginLeft: "10%",marginRight:'10%' }}>
                <li>Mridani- 6395711814</li>
                <li>Anand- 9165642584</li>
              </ul>
            </Grid>
            <Grid container>
              <button
                onClick={handleQuizRegistration}
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

export default Quizzie;
