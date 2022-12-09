import React from "react";
import { Helmet } from "react-helmet";
import Navbar1 from "../components/navbar/Navbar1";

const BiddersDateRegistration = () => {
  return (
    <>
       <Helmet>
                <style>{"body { background: linear-gradient(90deg,rgba(0, 12, 25, 1) 0%,rgba(22, 111, 147, 1) 87%,rgba(0, 212, 255, 1) 100%);}"}</style>
        </Helmet>
        <Navbar1 />
      <div>
        <iframe
          ClassName="link"
          style={{ width: "100%", color: "#fff", marginTop: "10%" }}
          src="https://docs.google.com/forms/d/e/1FAIpQLSfIlPLq8v-7C4AuTJhXM5qiATNIwr1sq9DzDkqRSwqAoAojJw/viewform?embedded=true"
          width="640"
          height="3181"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        ></iframe>
      </div>
    </>
  );
};

export default BiddersDateRegistration;
