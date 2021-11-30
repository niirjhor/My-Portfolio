import React from "react";
import "./About.css";
import aboutImg from "./img/about2.jpg";
function About() {
  //  Up To Top Btn
  window.addEventListener("scroll", function () {
    const upToTop = document.querySelector("a.bottom__to__top");
    upToTop.classList.toggle("active", window.scrollY > 0)
  });
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                I am a junior web develper with more than 15 projects work experience.I am very passionate Full Stack Web developer building  Web Applications with Javascript/Reactjs/Nodejs/Expressjs and some other cool libraries and frame works.
              </p>
              <p className="about__text p__color">

              </p>
              <p className="about__text p__color">
                If you want to see my information you can get a good view from my resume.My skills are listed below.
              </p>
              <div class="about__content-skills">
                <div class="skills">
                  <div class="skills__skill">HTML</div>
                  <div class="skills__skill">CSS</div>
                  <div class="skills__skill">JavaScript</div>
                  <div class="skills__skill">React</div>
                  <div class="skills__skill">GIT</div>
                  <div class="skills__skill">Boostrap</div>
                  <div class="skills__skill">Node.js</div>
                  <div class="skills__skill">Express.js</div>
                  <div class="skills__skill">MongoDB</div>
                </div>
              </div>
              <div className="about__button d__flex align__items__center">
                <a target='_blank' href="https://drive.google.com/file/d/12KgJP6wNmFdgO_dGZNCy7m8hvJKGctDF/view?usp=sharing">
                  <button className="about btn pointer">See Resume</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-up white"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
