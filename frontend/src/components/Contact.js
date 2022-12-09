import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LocationOnIcon from "@mui/icons-material/LocationOn";


const useStyles = makeStyles((theme) => ({
  link: {
    color: "#fff",
    textDecoration: "none",
    padding: "0.1rem",
    cursor: "pointer",
    "&.active": {
      color: "#f2f2f2",
    },
    "&:hover": {
      color: "#FF8D29",
    },
  },
}));

const Contact = () => {
  const classes = useStyles();
  const handleClick1 = (e) => {
    e.preventDefault();
    window.location.replace("http://instagram.com/colossus_cdac");
  };
  const handleClick2 = (e) => {
    e.preventDefault();
    window.location.replace(
      "https://mui.com/material-ui/react-card/#main-content"
    );
  };
  return (
    <>
      <div
        className="contact"
        id="contact"
       
      >
        <h4
          style={{
            top: "0",
            marginBottom: "70px",
            fontFamily: "Gotham",
            color: "#fff",
            display: "flex",
            fontSize: "3em",
            justifyContent: "center",
            fontWeight: "bold",
          }}
        >
          Contact Us
        </h4>
        <Grid container style={{display:'flex',justifyContent:'center',textAlign:'center'}} >
          <Grid item xs={4} >
            <Typography style={{ display: "flex" ,color:'#fff'}}>
              <LocationOnIcon
                // style={{ color: "#fff", cursor: "pointer", marginLeft: "15%" }}
                // sx={{ fontSize: "40px" }}
              />
              <p 
              // style={{ color: "#fff" }}
              >
                Centre for Development of Advanced Computing
              </p>
            </Typography>
            <p  
            style={{ color: "#fff", marginLeft: "17%" }}
            >
              {" "}
              B-30, Sector-62, Institution Area,{" "}
            </p>
            <p 
            style={{ color: "#fff", marginLeft: "17%" }}
            >Noida - 201307</p>
            <p 
            style={{ color: "#fff", marginLeft: "17%" }}
            >
              Uttar Pradesh (India)
            </p>
            <p 
            style={{ color: "#fff", marginLeft: "17%" }}
            >
              Phone: +91-120-2210800
            </p>
          </Grid>
          <Grid item xs={4} >
            <h6 
             style={{ color: "#fff", fontSize: "bold", marginLeft:'20%', marginTop: "3%" }}
             >
              Useful Links
            </h6>
            <br />
            <Link  to="/" className={classes.link} style={{ color: "#fff", marginLeft: "17%" }}>
              Home
            </Link>
            <br />
            <br />
            <Link  to="/events" className={classes.link} style={{ color: "#fff", marginLeft: "17%" }}>
              Events
            </Link>
            <br />
            <br />
            <Link  to="/timeline" className={classes.link} style={{ color: "#fff", marginLeft: "17%" }}>
              TimeLine
            </Link>
          </Grid>
          <Grid item xs={4} className="contactp">
            <h6>
              Follow Us
            </h6>
            <br />
            <Typography>
              <InstagramIcon
                style={{ color: "#fff", cursor: "pointer" }}
                sx={{ fontSize: "50px" }}
                onClick={handleClick1}
              />
            </Typography>
            <br />
            <br />
            <Typography>
              <FacebookIcon
                style={{ color: "#fff", cursor: "pointer" }}
                sx={{ fontSize: "50px" }}
                onClick={handleClick2}
              />
            </Typography>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Contact;
