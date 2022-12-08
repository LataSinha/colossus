import React from "react";
import { Grid } from "@mui/material";
import photography from "../assets/PixelIt.png";

import { Helmet } from "react-helmet";
import { useNavigate } from "react-router";
import coding from "../assets/CodeMania.png";
import webd from "../assets/WebForces.png";
import paperPresentation from "../assets/Papyrus.png";
import quiz from "../assets/Quizz.png";
import lanGame from "../assets/NostalgicRacing.png";
import lanGame2 from "../assets/Codm.png";

import Navbar1 from "./navbar/Navbar1";

const Technical = () => {
  const navigate = useNavigate();
  const handlePixelIt = () => {
    navigate("/pixelIt");
  };
  const handleCoding = () => {
    navigate("/codeMania");
  };
  const handleWebd = () => {
    navigate("/webForces");
  };
  const handleQuiz = () => {
    navigate("/quizzieBuzzie");
  };
  const handlePaperPresentation = () => {
    navigate("/papyrus");
  };

  const handleNostalgicRacing = () => {
    navigate("/nostalgicRacing");
  };
  const handleRampage = () => {
    navigate("/rampage");
  };
  return (
    <div className="events">
      <Navbar1 />
      <h4
        style={{
          padding: "60px",
          fontFamily: "Gotham",
          color: "#fff",
          display: "flex",
          fontSize: "3em",
          justifyContent: "center",
          fontWeight: "bold",
        }}
      >
        Technical Events
      </h4>
      <Grid container>
        <Grid items xs={4}>
          <img
            className="img"
            src={coding}
            onClick={handleCoding}
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
            onClick={handleWebd}
            src={webd}
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
            onClick={handleQuiz}
            src={quiz}
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
            onClick={handlePaperPresentation}
            src={paperPresentation}
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
            onClick={handleNostalgicRacing}
            src={lanGame}
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
            onClick={handleRampage}
            src={lanGame2}
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
            onClick={handlePixelIt}
            src={photography}
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
    </div>
  );
};

export default Technical;
