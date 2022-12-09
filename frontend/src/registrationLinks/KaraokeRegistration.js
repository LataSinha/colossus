import React from "react";
import { Helmet } from "react-helmet";
import Navbar1 from "../components/navbar/Navbar1";

const KaraokeRegistration = () => {
  return (
    <>
       <Helmet>
        <style>{"body { background: linear-gradient(90deg,rgba(0, 12, 25, 1) 0%,rgba(22, 111, 147, 1) 87%,rgba(0, 212, 255, 1) 100%);}"}</style>
      </Helmet>
      <Navbar1 />
      <div>
        <iframe
          style={{ width: "100%", marginTop: "10%", height: "800px" }}
          src="https://docs.google.com/forms/d/e/1FAIpQLSefIlcxi2Bhg2RSO8qdygpfHqsOUWZmX97IYEy0uEHy-zCQBQ/viewform?embedded=true"
        ></iframe>
      </div>
    </>
  );
};

export default KaraokeRegistration;
