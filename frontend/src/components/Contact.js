import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import logo from "../assets/logo.png";

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
        style={{ color: "black", margin: "20px 0px", padding: "10px" }}
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
        <Grid container>
          <Grid item xs={4}>
            <img
              src={logo}
              style={{
                marginTop: "-40%",
                width: "20%",
                height: "30%",
                marginLeft: "40%",
                borderRadius: "100%",
                marginBottom: "5%",
              }}
              className="logo"
            />
            <br />
            <Typography style={{ display: "flex" }}>
              <LocationOnIcon
                style={{ color: "#fff", cursor: "pointer", marginLeft: "15%" }}
                sx={{ fontSize: "40px" }}
              />
              <h6 style={{ color: "#fff" }}>
                Centre for Development of Advanced Computing
              </h6>
            </Typography>
            <p style={{ color: "#fff", marginLeft: "17%" }}>
              {" "}
              B-30, Sector-62, Institution Area,{" "}
            </p>
            <p style={{ color: "#fff", marginLeft: "17%" }}>Noida - 201307</p>
            <p style={{ color: "#fff", marginLeft: "17%" }}>
              Uttar Pradesh (India)
            </p>
            <p style={{ color: "#fff", marginLeft: "17%" }}>
              Phone: +91-120-2210800
            </p>
          </Grid>
          <Grid item xs={4}>
            <h5 style={{ color: "#fff", fontSize: "bold", marginTop: "3%" }}>
              Useful Links
            </h5>
            <br />
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <br />
            <br />
            <Link to="/events" className={classes.link}>
              Events
            </Link>
            <br />
            <br />
            <Link to="/contact" className={classes.link}>
              Contact Us
            </Link>
            <br />
            <br />
            {/* <Link to='/about' className={classes.link}>About Us</Link><br/> */}
          </Grid>
          <Grid item xs={4}>
            <h5 style={{ color: "#fff", fontSize: "bold", marginTop: "3%" }}>
              Follow Us
            </h5>
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
