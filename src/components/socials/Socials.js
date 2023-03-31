import React from "react";
import { MDBContainer, MDBIcon, MDBBtn } from "mdb-react-ui-kit";
const Socials = (props) => {
  return (
    <MDBContainer className="p-1">
      <section className="">
        <MDBBtn
          outline
          color="dark"
          floating
          className="m-1"
          href="#!"
          role="button"
        >
          <MDBIcon fab icon="facebook-f" />
        </MDBBtn>

        <MDBBtn
          outline
          color="dark"
          floating
          className="m-1"
          href="#!"
          role="button"
        >
          <MDBIcon fab icon="twitter" />
        </MDBBtn>

        <MDBBtn
          outline
          color="dark"
          floating
          className="m-1"
          href="#!"
          role="button"
        >
          <MDBIcon fab icon="google" />
        </MDBBtn>
        <MDBBtn
          outline
          color="dark"
          floating
          className="m-1"
          href="#!"
          role="button"
        >
          <MDBIcon fab icon="instagram" />
        </MDBBtn>

        <MDBBtn
          outline
          color="dark"
          floating
          className="m-1"
          href="#!"
          role="button"
        >
          <MDBIcon fab icon="linkedin-in" />
        </MDBBtn>

        <MDBBtn
          outline
          color="dark"
          floating
          className="m-1"
          href="#!"
          role="button"
        >
          <MDBIcon fab icon="github" />
        </MDBBtn>
      </section>
    </MDBContainer>
  );
};

export default Socials;
