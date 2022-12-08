import React from "react";
import { useNavigate } from "react-router";
import tech from "../assets/techBanner.png";
import nonTech from "../assets/nontechBanner.png";
import Navbar1 from "./navbar/Navbar1";

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
      <Navbar1 />
      <div
        className="events"
        style={{
          display: "flex",
          height: "640px",
        }}
      >
        <div
          style={{
            padding: "2rem",
          }}
        >
          {" "}
          <h4
            style={{
              marginTop: "10%",
              marginBottom: "20%",
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
          <img
            className="img"
            src={tech}
            onClick={handleTech}
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
        <div
          style={{
            padding: "2rem",
          }}
        >
          {" "}
          <h4
            style={{
              marginTop: "10%",
              marginBottom: "20%",
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
          <img
            className="img"
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
      </div>
    </div>
  );
};

export default Events;
