import React, { useState } from "react";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Glamstar from "./Glamstar";
import "./Home.css";
import logo from "./img/logo.png";
import Project from "./Project";
import Projects from "./Projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"

function Home() {
  <i class="fab fa-facebook-f"></i>
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });
  // Toogle Menu
  const [show, setShow] = useState(true);
  return (
    <div className="home" id="Home">
      <div className="home__bg">
        <div className="header d__flex align__items__center pxy__30">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="navigation pxy__30">
            <ul className="navbar d__flex">
              <a href="#Home">
                <li className="nav__items mx__15">Home</li>
              </a>
              <a href="#About">
                <li className="nav__items mx__15">About</li>
              </a>


              <a href="#Portfolio">
                <li className="nav__items mx__15">Portfolio</li>
              </a>

              <a href="#Contact">
                <li className="nav__items mx__15">Contact</li>
              </a>

            </ul>
          </div>
          {/* Toogle Menu */}
          <div className="toggle__menu">
            <svg onClick={() => setShow(!show)}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-justify white pointer"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
          {show ? (
            <div className="sideNavbar">
              <ul className="sidebar d__flex">
                <li className="sideNavbar">
                  <a href="#Home">Home</a>
                </li>
                <li className="sideNavbar">
                  <a href="#About">About</a>
                </li>

                <li className="sideNavbar">
                  <a href="#Portfolio">Portfolio</a>
                </li>

                <li className="sideNavbar">

                  <a href="#Contact">Contact</a>
                </li>
                <li className="sideNavbar">
                  <div >
                    <a href="https://www.facebook.com/nirjhor.iftahaj" target="_blank" rel="noopener" class="btn-icon-only rounded-circle ml-1 btn btn-facebook" aria-label="Facebook"><span class="btn-inner--icon"><i class="fa fa-facebook-square"></i></span></a>
                  </div>
                </li>
                <li className="sideNavbar">
                  <div >
                    <a rel="noopener" href="https://www.linkedin.com/in/nirjhor-iftahaj-a4a62184/" target="_blank" class="btn-icon-only rounded-circle ml-1 btn btn-twitter" aria-label="Linkedin"><span class="btn-inner--icon"><i class="fa fa-linkedin"></i></span></a>
                  </div>
                </li>
                <li className="sideNavbar">
                  <div >
                    <a rel="noopener" aria-label="Github" href="https://github.com/niirjhor" target="_blank" class="nav-link-icon nav-link"><i class="fa fa-github"></i><span class="nav-link-inner--text d-lg-none ml-2">Github</span></a>
                  </div>
                </li>
              </ul>
            </div>
          ) : null}
        </div>
        {/* HOME CONTENT */}
        <div className="container">
          <div className="home__content">
            <div className="home__meta">
              <h1 className="home__text  pz__10">WELCOME TO MY WORLD</h1>
              <h2 className="home__text pz__10">Hi, I’m Kaim Iftahaj Nirjhor</h2>
              <h3 className="home__text sweet pz__10">Junior Web Developer.</h3>
              <h4 className="home__text pz__10">based in Bangladesh.</h4>
            </div>
            <div>
              <div >
                <a href="https://www.facebook.com/nirjhor.iftahaj" target="_blank" rel="noopener" class="btn-icon-only rounded-circle ml-1 btn btn-facebook" aria-label="Facebook"><span class="btn-inner--icon"><i class="fa fa-facebook-square"></i></span></a>
              </div>
              <div>
                <a rel="noopener" href="https://www.linkedin.com/in/nirjhor-iftahaj-a4a62184/" target="_blank" class="btn-icon-only rounded-circle ml-1 btn btn-twitter" aria-label="Linkedin"><span class="btn-inner--icon"><i class="fa fa-linkedin"></i></span></a>
              </div>
              <div>
                <a rel="noopener" aria-label="Github" href="https://github.com/niirjhor" target="_blank" class="nav-link-icon nav-link"><i class="fa fa-github"></i><span class="nav-link-inner--text d-lg-none ml-2">Github</span></a></div>
            </div>
          </div>
        </div>
      </div>
      <About></About>
      <Project></Project>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default Home;
