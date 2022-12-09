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
import { Helmet } from "react-helmet"

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
    navigate("/artOfYours");
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
    <div>
      <Navbar />
      <Helmet>
                <style>{"body { background: linear-gradient(90deg,rgba(0, 12, 25, 1) 0%,rgba(22, 111, 147, 1) 87%,rgba(0, 212, 255, 1) 100%);}"}</style>
        </Helmet>
      <h4
        className="webFont"
      >
        Cultural Events
      </h4>
      <h6 className="webFont" style={{fontSize:'200%',color:'red'}}>
       <i> Register Before 19 December 2022!</i>
      </h6>
      <Grid container>
        <Grid item xs={12} sm={6} md={4}>
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
        <Grid items xs={12} sm={6} md={4}>
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
        <Grid items xs={12} sm={6} md={4}>
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
        <Grid items xs={12} sm={6} md={4}>
          <img
            className="img"
            src={soloDance}
            onClick={handleRockTillYouDrop}
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
        <Grid items xs={12} sm={6} md={4}>
          <img
            className="img"
            src={groupDance}
            onClick={handleBeatExplosion}
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
        <Grid items xs={12} sm={6} md={4}>
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
        <Grid items xs={12} sm={6} md={4}>
          <img
            className="img"
            src={music}
            onClick={handleSurSangam}
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
        <Grid items xs={12} sm={6} md={4}>
          <img
            className="img"
            src={karoke}
            onClick = {handleKaraoke}
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
        <Grid items xs={12} sm={6} md={4}>
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
          <Grid item xs={12} sm={6} md={4}>
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
