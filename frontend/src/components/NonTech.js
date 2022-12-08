import React from "react";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router";
import dramatics from "../assets/Umang.png";
import betfair from "../assets/BiddersDate.png";
import poem from "../assets/Kavyanjali.png";
import music from "../assets/SurSangam.png";
import soloDance from "../assets/RockTillTheDrop.png";
import groupDance from "../assets/BeatExplosion.png";
import fineArts from "../assets/ArtyCrafty.png";
import karoke from "../assets/Karoke.png";
import photography2 from "../assets/Pixofy.png";
import Navbar from "./navbar/Navbar1";
import concentrica from "../assets/concentrica.png";

const NonTech = () => {
  const navigate = useNavigate();

  const handlePixofy = () => {
    navigate("/pixofy");
  };
  const handleBetfair = () => {
    navigate("/betfair");
  };
  const handleUmang = () => {
    navigate("/umang");
  };
  const handleArtyCrafty = () => {
    navigate("/artyCrafty");
  };
  const handlePixelIt = () => {
    navigate("/pixelIt");
  };
  const handleKavyanjali = () => {
    navigate("/kavyanjali");
  };
  const handleConcentrica = () => {
    navigate("/concentrica");
  };
  const handleSurSangam = () => {
    navigate("/surSangam");
  };
  const handleKaraoke = () => {
    navigate("/karaoke");
  };
  const handleBeatExplosion = () => {
    navigate("/beatExplosion");
  };
  const handleRockTillYouDrop = () => {
    navigate("/rockTillYouDrop");
  };
  return (
    <div className="events">
      <Navbar />
      <h4
        style={{
          padding: "60px",
          fontFamily: "Gotham",
          color: "#fff",
          display: "flex",
          fontSize: "3em",
          justifyContent: "center",
          fontWeight: "bold",
          transition: "transform .1s",
          cursor: "pointer",
        }}
      >
        Cultural Events
      </h4>
      <Grid container>
        <Grid item xs={4}>
          <img
            className="img"
            onClick={handleUmang}
            src={dramatics}
            style={{
              height: "80%",
              width: "80%",
              marginLeft: "10%",
              borderRadius: "15%",
              transition: "transform .1s",
              cursor: "pointer",
            }}
          />
        </Grid>
        <Grid items xs={4}>
          <img
            className="img"
            onClick={handlePixofy}
            src={photography2}
            style={{
              height: "80%",
              width: "80%",
              marginLeft: "10%",
              borderRadius: "100",
              transition: "transform .1s",
              cursor: "pointer",
            }}
          />
        </Grid>
        <Grid items xs={4}>
          <img
            className="img"
            onClick={handleKavyanjali}
            src={poem}
            style={{
              height: "80%",
              width: "80%",
              marginLeft: "10%",
              borderRadius: "15%",
              transition: "transform .1s",
              cursor: "pointer",
            }}
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid items xs={4}>
          <img
            className="img"
            src={soloDance}
            style={{
              height: "80%",
              width: "80%",
              marginLeft: "10%",
              borderRadius: "15%",
              transition: "transform .1s",
              cursor: "pointer",
            }}
          />
        </Grid>
        <Grid items xs={4}>
          <img
            className="img"
            src={groupDance}
            style={{
              height: "80%",
              width: "80%",
              marginLeft: "10%",
              borderRadius: "15%",
              transition: "transform .1s",
              cursor: "pointer",
            }}
          />
        </Grid>
        <Grid items xs={4}>
          <img
            className="img"
            onClick={handleBetfair}
            src={betfair}
            style={{
              height: "80%",
              width: "80%",
              marginLeft: "10%",
              borderRadius: "15%",
              transition: "transform .1s",
              cursor: "pointer",
            }}
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid items xs={4}>
          <img
            className="img"
            src={music}
            style={{
              height: "80%",
              width: "80%",
              marginLeft: "10%",
              borderRadius: "15%",
              transition: "transform .1s",
              cursor: "pointer",
            }}
          />
        </Grid>
        <Grid items xs={4}>
          <img
            className="img"
            src={karoke}
            style={{
              height: "80%",
              width: "80%",
              marginLeft: "10%",
              borderRadius: "15%",
              transition: "transform .1s",
              cursor: "pointer",
            }}
          />
        </Grid>
        <Grid items xs={4}>
          <img
            className="img"
            onClick={handleArtyCrafty}
            src={fineArts}
            style={{
              height: "80%",
              width: "80%",
              marginLeft: "10%",
              borderRadius: "15%",
              transition: "transform .1s",
            }}
          />
        </Grid>
        <Grid container>
          <Grid item xs={4}>
            <img
              className="img"
              onClick={handleConcentrica}
              src={concentrica}
              style={{
                height: "80%",
                width: "80%",
                marginLeft: "10%",
                borderRadius: "15%",
                transition: "transform .1s",
                cursor: "pointer",
              }}
            />
          </Grid>

          <Grid item xs={4}></Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default NonTech;
