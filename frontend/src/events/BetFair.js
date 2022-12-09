import React from "react";
import { Grid } from "@material-ui/core";
import { useNavigate } from "react-router";
import { Helmet } from "react-helmet";
import colossusLogo from "../assets/colossus_logo.png";
import betfairPoster from "../assets/betfairPoster.png";
import Navbar1 from "../components/navbar/Navbar1";

const BetFair = () => {
  const navigate = useNavigate();
  const handleBetFairReg = () => {
    navigate("/biddersDateRegistration");
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
              Bidder's Date
            </h1>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12} sm={6} md={6}>
            <img
              src={betfairPoster}
              className='poster'
            /></Grid>
          <Grid item xs={12} sm={6} md={6}>
              <br />
              <br />
              <p style={{ color: "#fff", marginLeft: "10%",marginRight:'10%' }}>
                We are organizing a Bet Fair in our college fest for all the
                cricket lovers.
              </p>
              <h4 style={{ color: "#fff", marginLeft: "10%",marginRight:'10%' }}>
                ROUND 1: The Quiz
              </h4>
              <ul style={{ color: "#fff", marginLeft: "10%",marginRight:'10%' }}>
                <li>
                  The questions will be regarding International Cricket and IPL.
                </li>
                <li>
                  Top 5 highest scoring teams will make it to the next level.
                </li>
              </ul>
              <h4 style={{ color: "#fff", marginLeft: "10%",marginRight:'10%' }}>
                ROUND 2: The Bidding
              </h4>
              <ul style={{ color: "#fff", marginLeft: "10%",marginRight:'10%' }}>
                <li>
                  Participation can be individual or in a team of 2 members.
                </li>
                <li>
                  Teams will be provided an equal amount of Virtual cash before
                  the bidding.
                </li>
                <li>Teams will be required to form a Cricket Team.</li>
                <li>
                  Each player that will be auctioned will have a rating and base
                  price attached to them.
                </li>
                <li>Team with the maximum total ratings will be the winner.</li>
                <li>
                  Each team must buy at least one wicketkeeper,5 batsmen,5
                  bowlers.{" "}
                </li>
                <li>Each team has at most 5 overseas players.</li>
              </ul>
              <h5 style={{ color: "#fff", marginLeft: "10%",marginRight:'10%' }}>
                Rules and Regulations
              </h5>
              <ul style={{ color: "#fff", marginLeft: "10%",marginRight:'10%'}}>
                <li>
                  This competition is open to all undergraduates and
                  postgraduate student students (identity cards will be required
                  at the time of registration).
                </li>
                <li>
                  {" "}
                  In case of any contention, the decision of the management team
                  will be non-objectionable.
                </li>
                <li>The organizers can change the rules at any time.</li>
              </ul>
              <h4 style={{ color: "#fff", marginLeft: "10%",marginRight:'10%' }}>
                Entry Fee: :&nbsp;₹ 100 for each team
              </h4>
              <h5 style={{ color: "#fff", marginLeft: "10%",marginRight:'10%' }}>For Enquiry</h5>
              <ul style={{ color: "#fff", marginLeft: "10%",marginRight:'10%'}}>
                <li>Anand- 9165642584</li>
                <li>Tarun- 8860391578</li>
              </ul>
            </Grid>
            <Grid container>
              <button
                onClick={handleBetFairReg}
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

export default BetFair;
