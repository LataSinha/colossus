import React from "react";
import { Grid } from "@material-ui/core";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router";
import colossusLogo from "../assets/colossus_logo.png";
import lanGamingPoster from "../assets/NostalgicRacingPoster.png";
import Navbar1 from "../components/navbar/Navbar1";

const Pixofy = () => {
  const navigate = useNavigate();
  const handleRegister = () => {
    navigate("/nostalgicRacingRegister");
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
              Nostalgic Racing
            </h1>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} sm={6} md={6}>
            <img
              src={lanGamingPoster}
              className='poster'
            /></Grid>
          <Grid item xs={12} sm={6} md={6}>
              <br />
              <br />
              <p style={{ color: "#fff", marginLeft: "10%",marginRight:'10%' }}>
                We welcome you all to grace us with your lovely presence and
                enjoy this wonderful event!
              </p>
              <h5 style={{ color: "#fff", marginLeft: "10%",marginRight:'10%'  }}>
                Rules and Regulations
              </h5>
              <ul style={{ color: "#fff", marginLeft: "10%",marginRight:'10%'  }}>
                <li>
                  The Administrators reserve the right to modify the rules as
                  needed.
                </li>
                <li>
                  The number of winning rounds may differ in the first round,
                  according to the number of participant teams.
                </li>
                <li>
                  In case of a change, the teams will be informed about the
                  change by the admin.
                </li>
                <li>
                  Use of any cheat program and Intentional disconnection leads
                  to unfair gameplay.
                </li>
                <li>
                  Teams must understand that the rules listed are guidelines to
                  ensure fair and competitive play and are subject to the
                  administrators' interpretation based on the game's spirit
                </li>
              </ul>
              <h5 style={{ color: "#fff", marginLeft: "10%",marginRight:'10%'  }}>Guidelines</h5>
              <ul style={{ color: "#fff", marginLeft: "10%",marginRight:'10%'  }}>
                NFS-Most Wanted
                <li>Basic rules of racing will be applied.</li>
                <li>
                  The basic power-up gains will provide an advantage over the
                  other players.
                </li>
                <li>
                  The race will be conducted in the form of knock-out rounds.
                </li>
                <li>
                  Winner and Runner ups will be selected for the next rounds.
                </li>
                <li>
                  Players can carry their own mouse/keyboard if they wish
                  otherwise, it will be provided.
                </li>
              </ul>
              <h4 style={{ color: "#fff", marginLeft: "10%",marginRight:'10%'  }}>
                Entry Feee:&nbsp;₹ 50
              </h4>
              <h5 style={{ color: "#fff", marginLeft: "10%",marginRight:'10%'  }}>For Enquiry</h5>
              <ul style={{ color: "#fff", marginLeft: "10%",marginRight:'10%'  }}>
                <li>Ashish Sundriyal- 9958661136</li>
                <li>Pratham Jain- 7678400616</li>
                <li>Rishabh Gupta- 9718459700</li>
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
