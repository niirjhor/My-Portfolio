import React from "react";
import "./Project.css";
import Details from "./Details";
import Project1 from './img/portfolio-1.jpg';
import Project2 from './img/portfolio-1.jpg';
import Project3 from './img/portfolio-3.jpg';
import Project4 from './img/portfolio-4.jpg';
import Project5 from './img/screencapture-create-react-auth-web-app-2021-11-30-16_11_56.png';
import Project6 from './img/screencapture-miracle-tourism-ltd-web-app-2021-11-30-16_21_18.png'
import Project7 from './img/screencapture-specialised-diagonistic-center-web-app-2021-11-30-16_25_53.png'

const details = [
    {
        id: 1,
        name: 'Glamstar-An Online Store',
        details1: "1.Designed a full stack MERN responsive niche product website for jewellery shopping with dashboard features for user and admin.",
        details2: `2.
        Authentication through Email and password is used, and admin privilege is available with order creation,products addition, deletion, managing orders.Authenticated users can book products, check their orders and if needed delete orders.`,
        details3: `3.Users can also give reviews based on service.HTML, CSS, React-bootstrap, React, Firebase, Node js, Express js, MongoDB`,
        img: './img/screencapture-create-react-auth-web-app-2021-11-30-16_11_56.png',

    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '09.00 AM - 10.00 AM',
        price: 15,
        space: 8,
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '10.00 AM - 11.00 AM',
        price: 17,
        space: 9,
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '11.00 AM - 12.00 PM',
        price: 19,
        space: 5,
    },
    {
        id: 5,
        name: 'Pediatric Dental',
        time: '06.00 PM - 07.00 PM',
        price: 25,
        space: 10,
    },
    {
        id: 6,
        name: 'Oral Surgery',
        time: '07.00 PM - 08.00 PM',
        price: 35,
        space: 10,
    },
]


function Project() {
    return (
        <div>

            {
                details.map(detail => <Details detail={detail}
                    key={detail.id}></Details>)

            }

        </div>



    );
}

export default Project;
