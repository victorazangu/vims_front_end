import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";
import Socials from "../socials/Socials";

const Footer = (props) => {
  return (
    <MDBFooter className="bg-light text-center text-dark footer">
      <Socials />
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(251, 251, 251,03)", color: "black" }}
      >
        © 2023 Copyright:Vims
      </div>
    </MDBFooter>
  );
};

export default Footer;
