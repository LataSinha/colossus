import React from "react";
import { useNavigate } from "react-router";
import tech from "../assets/techBanner.png";
import nonTech from "../assets/nontechBanner.png";
import Navbar1 from "./navbar/Navbar1";
import { Helmet } from "react-helmet"
import { Grid } from "@material-ui/core";

const Events = () => {
  const navigate = useNavigate();
  const handleTech = () => {
    navigate("/technical");
  };
  const handleNonTech = () => {
    navigate("/NonTech");
  };
  return (
    <div>
      <Helmet>
                <style>{"body { background: linear-gradient(90deg,rgba(0, 12, 25, 1) 0%,rgba(22, 111, 147, 1) 87%,rgba(0, 212, 255, 1) 100%);}"}</style>
        </Helmet>
      <Navbar1 />
      <Grid container>
        <Grid item sm={12} xs={12} md={6} 
        // style={{padding:'1rem'}}
        >
        <h4
          className="cultural">Technical Events</h4>
            <img
            // className="img"
            src={tech}
            onClick={handleTech}
            // className='techImg'
            style={{
              height: "40%",
              width: "70%",
              marginLeft: "14%",
              borderRadius: "25%",
              transition: "transform .1s",
              cursor: "pointer",
              // paddingBottom: "1rem",
            }}
          />
      </Grid>
      <Grid item xs={12} md={6} 
      // style={{padding:'2rem'}}
      >
      <h4 
          className="cultural" 
            >
            Cultural Events
          </h4>
          <img
            // className="img"
            src={nonTech}
            onClick={handleNonTech}
            classname='nontechImg'
            style={{
              height: "45%",
              width: "75%",
              marginLeft: "10%",
              borderRadius: "25%",
              transition: "transform .1s",
              cursor: "pointer",
              paddingBottom: "1rem",
            }}
          />
      </Grid>
      </Grid>
      {/* <div
        className="events"
        // style={{
        //   display: "flex",
        //   height: "100vh",
        //   width: "100vw"
        // }}
      >
        <div
        // className="c"
          style={{
            padding: "2rem",
          }}
        >
          {" "}
          <h4
          className="cultural"
            // style={{
            //   marginTop: "10%",
            //   marginBottom: "20%",
            //   fontFamily: "Gotham",
            //   color: "#fff",
            //   display: "flex",
            //   fontSize: "3em",
            //   justifyContent: "center",
            //   fontWeight: "bold",
            // }}
          >
            Technical Events
          </h4>
          <img
            // className="img"
            src={tech}
            onClick={handleTech}
            style={{
              height: "40%",
              width: "30%",
              marginLeft: "10%",
              borderRadius: "25%",
              transition: "transform .1s",
              cursor: "pointer",
              paddingBottom: "1rem",
            }}
          />
        </div>
        <div 
        //  className="cultural"
        >
          {" "}
          <h4 
          className="cultural"
              // style={{
              //   marginTop: "10%",
              //   marginBottom: "20%",
              //   fontFamily: "Gotham",
              //   color: "#fff",
              //   display: "flex",
              //   fontSize: "3em",
              //   justifyContent: "center",
              //   fontWeight: "bold",
              //   transition: "transform .1s",
              //   cursor: "pointer",
              // }}
            >
            Cultural Events
          </h4>
          <img
            // className="img"
            src={nonTech}
            onClick={handleNonTech}
            style={{
              height: "40%",
              width: "80%",
              marginLeft: "10%",
              borderRadius: "25%",
              transition: "transform .1s",
              cursor: "pointer",
              paddingBottom: "1rem",
            }}
          />
        </div>
      </div> */}
    </div>
  );
};

export default Events;
