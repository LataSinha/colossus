import React from "react";
import { Grid } from "@material-ui/core";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router";
import colossusLogo from "../assets/colossus_logo.png";
import umang from "../assets/umangPoster.jpg";
import Navbar1 from "../components/navbar/Navbar1";

const Umang = () => {
  const navigate = useNavigate();
  const handleRegister = () => {
    navigate("/umangRegistration");
  };
  return (
    <>
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
                  textAlign:'center'
                }}
              >
                Umang
              </h1> 
            </Grid>
          </Grid>

          <Grid container>
          <Grid item xs={12} sm={6} md={6}>
              <img
                src={umang}
                className='poster'
              />
              </Grid>
            <Grid item xs={12} sm={6} md={6}>
              {/* <img
                src={colossusLogo}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "90%",
                  margin: "auto",
                  marginTop: "5%",
                }}
              />
              <p
                style={{
                  color: "#fff",
                  marginLeft: "26%",
                  fontFamily: "Gotham",
                  letterSpacing: ".2rem",
                  fontSize: "1100%",
                }}
              >
                The Cosmic Fun Begins
              </p>
              <h1
                style={{
                  color: "#fff",
                  marginLeft: "102%",
                  fontFamily: "Gotham",
                  letterSpacing: ".2rem",
                  fontSize: "400%",
                }}
              >
                Umang
              </h1> */}
              <br />
              <br />
              <h5 style={{ color: "#fff", marginLeft: "10%",marginRight:'10%', }}>
                Let's meet on the street to sing the geets!
              </h5>
              <p
                style={{
                  color: "#fff",
                  marginLeft: "10%",
                  marginRight:'10%',
                  textAlign: "justify",
                }}
              >
                Street theatre is a form of theatrical performance and
                presentation in outdoor public spaces without a specific paying
                audience. It is a team event of 10-15 members. Each team from
                various colleges and universities will come to showcase their
                performance to get the attention of the audience and deliver a
                social message.
              </p>
              <h5 style={{ color: "#fff", marginLeft: "10%",marginRight:'10%' }}>
                Rules and Regulations
              </h5>
              <ul style={{ color: "#fff", marginLeft: "10%",marginRight:'10%', }}>
                <li>Registration fees for the event is Rs.1000.</li>
                <li>
                  The competition is open to all undergraduate and postgraduate
                  students.
                </li>
                <li>
                  Any sort of racism, homophobia, sexism, or another offensive
                  language will be immediately disqualified.
                </li>
                <li>Use of inflammable is prohibited.</li>
                <li>Each team can have a maximum of 15 members.</li>
                <li>Teams are asked to bring their props and costumes.</li>
                <li>There will be no practice facility at the venue.</li>
                <li>
                  The teams will be immediately disqualified for exceeding the
                  time limit.
                </li>
                <li>
                  After the performance, the performing area should not be
                  damaged or left messy.
                </li>
                <li>
                  Each team will be assigned time slots on a first-come,
                  first-served basis or as needed.
                </li>
                <li>The decision of the judges will be final.</li>
                <li>Organizers can change the rules anytime.</li>
                <li>
                  The competetion has <b>2 rounds:</b>
                  <ul>
                    <ul>
                      <b>Prelims</b>
                      <li>
                        Each team will get (7+10) minutes including set up &
                        performance.
                      </li>
                    </ul>
                    <ul>
                      <b>Finals</b>
                      <li>8 Teams will be selected.</li>
                      <li>
                        Each team will get 25 minutes including set up &
                        performance.
                      </li>
                    </ul>
                  </ul>
                </li>
              </ul>
              <h5 style={{ color: "#fff", marginLeft: "10%",marginRight:'10%', }}>For Enquiry</h5>
              <ul style={{ color: "#fff", marginLeft: "10%",marginRight:'10%', }}>
                <li>Tarun Chawla- 88601091578</li>
                <li>Ritik Singh- 9868084050</li>
              </ul>
            </Grid>
            
            
            </Grid>
          {/* </Grid> */}
          <Grid container>
          <button
               onClick = {handleRegister}
                className="register"
                type="submit"
                // style={{ marginTop: "75%" }}
              >
                Register
              </button>
            </Grid>
        </div>
      </div>
    </>
  );
};

export default Umang;
