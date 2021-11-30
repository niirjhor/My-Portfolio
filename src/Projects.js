import React from "react";
import "./Project.css";
import Project1 from './img/portfolio-1.jpg';
import Project2 from './img/portfolio-1.jpg';
import Project3 from './img/portfolio-3.jpg';
import Project4 from './img/portfolio-4.jpg';
import Project5 from './img/screencapture-create-react-auth-web-app-2021-11-30-16_11_56.png';
import Project6 from './img/screencapture-miracle-tourism-ltd-web-app-2021-11-30-16_21_18.png'
import Project7 from './img/screencapture-specialised-diagonistic-center-web-app-2021-11-30-16_25_53.png'
import { Link } from "react-router-dom";

function Project() {
    return (

        <div className="project component__space" id="Portfolio">
            <div className="heading">
                <h1 className="heading">My Latest Projects</h1>
                <p className="heading p__color">
                    There are many projects which I have completed recently. You can check some of them below if you like.
                </p>
                <p className="heading p__color">
                    Live site link and Git link is provided also.
                </p>
            </div>
            <div className="container">
                <div className="row">

                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project5} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text fw-bold">Glamstar-An Online Store</h5>

                                <div> <a target='_blank' href="https://create-react-auth.web.app/" className="project__btn">Live Link</a>
                                    <a target='_blank' href="https://glamstar1.netlify.app/" className="project__btn">Details</a></div>


                            </div>
                        </div>
                    </div>


                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project6} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">Miracle Tourism Limited</h5>

                                <div> <a target='_blank' href="https://miracle-tourism-ltd.web.app/" className="project__btn">Live Link</a>
                                    <a target='_blank' href="https://miracle-toursism.netlify.app/" className="project__btn">Details</a></div>
                            </div>
                        </div>
                    </div>


                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project7} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">Specialized Diagnostic Center</h5>

                                <div> <a target='_blank' href="https://specialised-diagonistic-center.web.app/" className="project__btn">Live Link</a>
                                    <a target='_blank' href="https://specialized-diagonistic-center.netlify.app/" className="project__btn">Details</a></div>
                            </div>
                        </div>
                    </div>



                    <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">


                        <button className="view__more pointer btn"><link rel="stylesheet" href="" />View more</button>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default Project;
