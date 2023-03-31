import React from "react";
import Logo from "../../assets/images/logo.png";
import Avatar from "../../assets/images/default.png";
import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from "mdb-react-ui-kit";

const Navbar = (props) => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <a class="navbar-brand mt-2 mt-lg-0" href="/">
              <img src={Logo} height="15" alt="Vims Logo" loading="lazy" />
            </a>

            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Dashboard
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/students">
                  Students
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/lecturers">
                  Lecturers
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/programs">
                  Programs
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/courses">
                  Courses
                </a>
              </li>
            </ul>
          </div>

          <div class="d-flex align-items-center">
            <a class="text-reset me-3" href="/blogs">
              blogs
              {/* <i class="fas fa-shopping-cart"></i> */}
            </a>
            <MDBDropdown>
              <MDBDropdownToggle color="light" style={{ border: "none" }}>
                <img
                  src={Avatar}
                  class="rounded-circle"
                  height="25"
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                />
              </MDBDropdownToggle>
              <MDBDropdownMenu>
                <MDBDropdownItem link>
                  <a class="dropdown-item" href="/admin">
                    My profile
                  </a>
                </MDBDropdownItem>
                <MDBDropdownItem link>
                  <a class="dropdown-item" href="admin">
                    Settings
                  </a>
                </MDBDropdownItem>
                <MDBDropdownItem link>
                  <a class="dropdown-item" href="logout">
                    Logout
                  </a>
                </MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
