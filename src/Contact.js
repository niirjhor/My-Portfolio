import React from 'react';
import './Contact.css';
import emailjs from 'email-js'
import contactImg from "./img"
function Contact() {

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_gfbiaml', "template_1cuuhwp", e.target, "user_C56CecxefP8rOQRXmz0GH").then(res => {
            console.log(res);

        }).catch(err => console.log(err))
    }
    return (
        <div className="contact component__space" id="Contact">
            <div className="row">
                <div className="col__2">
                    <div className="contact__box">
                        <div className="contact__meta">
                            <h1 className="hire__text">Hire Me.</h1>
                            <p className="hire__text white">I am available for freelance work. Connect with me via phone:</p>
                            <p className="hire__text white"><strong>+8436 14 245</strong> or email <strong>admin@example.com</strong></p>
                        </div>
                        <form action="" onSubmit={sendEmail}>

                            <label>name</label>
                            <input type="text" name="name" id="" />
                            <label>Email</label>
                            <input type="email" name="user_email" id="" />

                            <label>Message</label>
                            <input type="text" name="message" id="" />
                            <input type="submit" value="Send" />

                            {/* <div className="input__box">

                                <input type="text" name="name" className="name" placeholder="Your name *" />
                                <input type="text" name="user_email" className="contact email" placeholder="Your Email *" />
                                <input type="text" className="contact subject" placeholder="Write a Subject" />
                                <textarea name="message" id="message" placeholder="Write Your message"></textarea>
                                <input type="submit"
                                    value="Send" />

                            </div> */}
                        </form>
                    </div>
                </div>
                <div className="col__2">
                    <img src={contactImg} alt="" className="contact__img" />
                </div>
            </div>
        </div>
    )
}

export default Contact
