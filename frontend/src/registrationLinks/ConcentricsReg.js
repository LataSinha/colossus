import React from "react";
import { Helmet } from "react-helmet";
import Navbar1 from "../components/navbar/Navbar1";

const ConcentricaRegistration = () => {
  return (
    <>
      <Helmet>
        <style>{"body { background: linear-gradient(90deg,rgba(0, 12, 25, 1) 0%,rgba(22, 111, 147, 1) 87%,rgba(0, 212, 255, 1) 100%);}"}</style>
      </Helmet>
      <Navbar1 />
      <div>
        <iframe
          style={{ width: "100%",marginTop:'10%' }}
          src="https://docs.google.com/forms/d/e/1FAIpQLSdDWIdPwh6V6w3urncxSUExMiwnrus92ZhIFygp9om4OGNwZg/viewform?embedded=true"
          width="640"
          height="1780"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </div>
    </>
  );
};

export default ConcentricaRegistration;
