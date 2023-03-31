import React from 'react'
import Logo from "../../assets/images/logo.png";
import Footer from '../footer/Footer';
import SignUpForm from './SignUpForm';
function SignUp() {
  return (
    <div>
    <section class="m-3 p-3">
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
              <h1>Sign Up</h1>
          <SignUpForm/>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
  </div>
  )
}

export default SignUp