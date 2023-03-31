import React from "react";

function SignUpForm() {
  return (
    <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label float-start">
          First Name
        </label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label float-start">
        Last Name
        </label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label float-start">
          Email
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label float-start">
        Phone
        </label>
        <input
          type="tel"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="mb-3">
        <label  class="form-label float-start">
        Id No
        </label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label float-start">
          Password
        </label>
        <input type="password" class="form-control" id="password" />
      </div>
      <button type="submit" class="btn btn-light btn-outline-dark">
        Sign Up
      </button>
    </form>
  );
}

export default SignUpForm;
