import React from 'react';
import "./Glamstar.css";
import img1 from './img/Glamstar2.JPG'
import img2 from './img/Glamstar3.JPG'
import img3 from './img/Glamstar4.JPG'
import img4 from './img/Glamstar5.JPG'
import img5 from './img/Glamstar6.JPG'
import img6 from './img/Glamstar7.JPG'
import img7 from './img/Glamstar8.JPG'
import img8 from './img/Glamstar9.JPG'
import img9 from './img/Glamstar10.JPG'

import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const Glamstar = () => {
    return (
        <div>
            <div className="project component__space" id="Portfolio">
                <div className="heading">
                    <h1 className="heading">Some screen shots of Glamstar site</h1>

                </div>
                <div className="container">
                    <div className="">

                        <div className=''>
                            <img src={img3} alt="" srcset="" />
                        </div>
                        <div>
                            <img src={img4} alt="" srcset="" />
                        </div>
                        <div>
                            <img src={img5} alt="" srcset="" />
                        </div>
                        <div>
                            <img src={img6} alt="" srcset="" />
                        </div>
                        <div>
                            <img src={img7} alt="" srcset="" />
                        </div>






                    </div>
                </div>
            </div>
        </div>
    );
};

export default Glamstar;