import React from "react";
import videoBg from "../assets/HomeBackground.mp4";
import Sponsors from "./Sponsors";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./navbar/Navbar";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
     <Helmet>
                <style>{"body { background-color: #000; }"}</style>
            </Helmet>
    <Navbar />
    <div
      className="main"
      style={{
        backgroundImage: `linear-gradient(90deg,rgba(0, 12, 25, 1) 0%, rgba(22, 111, 147, 1) 87%,rgba(0, 212, 255, 1) 100%)`,
 
      }}
    >
     
      <video src={videoBg} autoPlay loop muted />
      <div>
        {/* <Sponsors />
        <br /> */}
        <About />
        <br />
        <Contact />
      </div>
    </div>
    </>
  );
};

export default Home;
