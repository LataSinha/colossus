import React from "react";
import { Helmet } from "react-helmet";
import Navbar1 from "../components/navbar/Navbar1";

const SurSangamRegistration = () => {
  return (
    <>
      <Helmet>
        <style>{"body { background-color: #046e97; }"}</style>
      </Helmet>
      <Navbar1 />
      <div>
        <iframe
          style={{ width: "100%", marginTop: "10%",height:'840px' }}
          className="link"
          src="https://docs.google.com/forms/d/e/1FAIpQLSfZ2GbZZppiO17JqC9dtc-WUMOpvZdDoNtI5Odse2Nxwp0rYA/viewform?embedded=true"
          width="640"
          height="300"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        ></iframe>
      </div>
    </>
  );
};

export default SurSangamRegistration;
