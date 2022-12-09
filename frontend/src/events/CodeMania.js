import React from "react";
import codemaniaPoster from "../assets/codingPoster.jpeg";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router";
import { Grid } from "@material-ui/core";
import colossusLogo from "../assets/colossus_logo.png";
import Navbar1 from "../components/navbar/Navbar1";

const CodeMania = () => {
  const navigate = useNavigate();
  const handleRegistration = () => {
    navigate("/codeManiaRegistration");
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
              Code-Mania
            </h1>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} sm={6} md={6}>
            <img
              src={codemaniaPoster}
              className='poster'
            /></Grid>
          <Grid item xs={12} sm={6} md={6}>
            <br />
            <br />
            <p style={{ color: "#fff", marginLeft: "10%",marginRight:'10%' }}>
            <i>Programming is an art of algorithm design and the craft of debugging errant code
            Good programmers write code that humans can understand. Colossus is back with Code-mania the coding contest for aspiring developers.</i>
            </p>
            <p style={{ color: "#fff",marginLeft: "10%",marginRight:'10%'  }}>
              The competition consists of two rounds and each round is an
              eliminatory round. The fastest and most accurate participant will
              be the winner of the contest.
            </p>
            <h5 style={{ color: "#fff", marginLeft: "10%",marginRight:'10%'  }}>
              Platform:&nbsp;HACKERRANK
            </h5>
            <h4 style={{ color: "#fff", marginLeft: "10%",marginRight:'10%' }}>ROUND 1</h4>
            <ul style={{ color: "#fff", marginLeft: "10%",marginRight:'10%'  }}>
              <li>60 minutes</li>
              <li>3 questions (EASY-MEDIUM LEVEL)</li>
            </ul>
            <h4 style={{ color: "#fff", marginLeft: "10%",marginRight:'10%'  }}>ROUND 2</h4>
            <ul style={{ color: "#fff", marginLeft: "10%",marginRight:'10%' }}>
              <li>60 minutes</li>
              <li>3 questions (MEDIUM-HARD LEVEL)</li>
              <li>
                Our team will provide hints but some points will be deducted.
              </li>
            </ul>
            <h5 style={{ color: "#fff", marginLeft: "10%",marginRight:'10%' }}>
              Rules and Regulations
            </h5>
            <ul style={{ color: "#fff", marginLeft: "10%",marginRight:'10%' }}>
              <li>Students can register as individuals (Entry Fee Rs. 50 ).</li>
              <li>
                The candidate with a faster and maximum score will be a winner
              </li>
              <li>
                Judgment will be based on the total number of questions
                completed and the number of test cases passed.
              </li>
              <li>
                Each Question carries some marks which are displayed on the
                question window.
              </li>
              <li>
                Participation Certificates will be given to all the
                participants.
              </li>
              <li>Maximum 30 entries are allowed.</li>
              <li>Admin leaderboard will be used for result analysis.</li>
              <li>
                In case of a tie, one will be judged on test submission timing
                criteria.
              </li>
              <li>Decisions of the organizers will be final and binding.</li>
              <li>
                Participants must not open any other tab in the allotted
                computer.
              </li>
              <li>For any assistance inform the members on duty.</li>
              <li>
                Mobile Phones will be submitted before starting the event.
              </li>
              <li>All Participants should have their college IDs with them.</li>
              <li>Organizers can change the rules anytime.</li>
            </ul>
            <h5 style={{ color: "#fff", marginLeft: "10%",marginRight:'10%'  }}>For Enquiry</h5>
            <ul style={{ color: "#fff", marginLeft: "10%",marginRight:'10%' }}>
              <li>Aman- 9560922385</li>
              <li>Akshat- 8860315039</li>
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
    </>
  );
};

export default CodeMania;
