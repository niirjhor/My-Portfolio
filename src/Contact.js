import React from 'react';
import './Contact.css';
import emailjs from 'emailjs-com'
import contactImg from "./img/about-9.jpg"
import { Form } from 'react-bootstrap';
function Contact() {

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_gfbiaml', "template_1cuuhwp", e.target, "user_C56CecxefP8rOQRXmz0GH").then(res => {
            console.log(res);

        }).catch(err => console.log(err))
        document.getElementById('names').value = "";
        document.getElementById('emails').value = "";
        document.getElementById('messagess').value = "";
        alert('Succesfully Message is Sent')
    }
    return (
        <div className="contact component__space" id="Contact">
            <div className="row">
                <div className="col__2">
                    <div className="contact__box">
                        <div className="contact__meta">
                            <h1 className="hire__text">Hire Me.</h1>
                            <p className="hire__text white">I am available for freelance work. Connect with me via phone:</p>
                            <p className="hire__text white"><strong>+8801720660147</strong> or email <strong>nirjhor.taurus@gmail.com</strong></p>
                            <p className="hire__text white">Send Your Message in the mail</p>
                        </div>
                        <form action="" onSubmit={sendEmail}>


                            <input type="text" name="name" className="contact email" placeholder="Your name *" id="names" />


                            <input type="email" name="user_email" className="contact email" placeholder="Email *" id="emails" />


                            <textarea placeholder="Write Your message" type="text" name="message" className="message" id="messagess" />
                            <input className="btn contact pointer" type="submit" value="Send" />

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
