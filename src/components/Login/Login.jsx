import React from "react";
import Logo from "../../assets/images/logo.png";
import LoginForm from './LoginForm'
import Footer from "../footer/Footer";

const Login = (props) => {
  return (
    <div>
      <section class="m-5 p-5">
        <div class="container-fluid h-custom">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-md-9 col-lg-6 col-xl-5">
              <img
                src={Logo}
                class="img-fluid"
                alt=""
              />
            </div>
            <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                <h1>Sign in</h1>
            <LoginForm/>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Login;
