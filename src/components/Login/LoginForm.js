import React from "react";


function LoginForm() {
  return (
    <form>
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
        <label for="exampleInputPassword1" class="form-label float-start">
          Password
        </label>
        <input
          type="password"
          class="form-control"
          id="password"
        />
      </div>
      <button type="submit" class="btn btn-light btn-outline-dark">
        Login
      </button>
    </form>
  );
}

export default LoginForm;
