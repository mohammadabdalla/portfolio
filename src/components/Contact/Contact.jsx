import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Contact.scss';
import SectionHeading from '../SectionHeading/SectionHeading';
import { Icon } from '@iconify/react';
import SocialLinks from '../SocialLinks/SocialLinks';

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = ({ data, socialData }) => {

  

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const serviceId = import.meta.env.VITE_REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_REACT_APP_EMAILJS_PUBLICKEY;
    console.log("serviceId: ",serviceId)
    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log("success")
          toast.success('Email sent successfully!');
          form.current.reset()
        },
        (error) => {
          toast.error(`Failed to send email`);
        },
      );
  };


  const { title, text, subTitle } = data;
  return (
    <section id="contact" className="st-dark-bg">
      <ToastContainer />
      <div className="st-height-b100 st-height-lg-b80"></div>
      <SectionHeading title="Contact" />
      <div className="container" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
        <div className="row d-flex">
          <div className="col-lg-6">
            <h3 className="st-contact-title">Just say Hello</h3>
            <div id="st-alert"></div>
            <form ref={form} onSubmit={sendEmail} method="POST" className="st-contact-form" id="contact-form">
              <div className="st-form-field">
                <input type="text" id="user_name" name="user_name" placeholder="Your Name" required />
              </div>
              <div className="st-form-field">
                <input type="text" id="user_email" name="user_email" placeholder="Your Email" required />
              </div>
              <div className="st-form-field">
                <textarea cols="30" rows="10" id="message" name="message" placeholder="Your Message" required></textarea>
              </div>
              <button className='st-btn st-style1 st-color1' type="submit" id="submit" name="submit">Send Message</button>
            </form>
            <div className="st-height-b0 st-height-lg-b30"></div>
          </div>
          <div className="col-lg-6">
            <div className="st-height-b0 st-height-lg-b40"></div>
            <h3 className="st-contact-title">{title}</h3>
            <div className="st-contact-text">{text}</div>
            <div className="st-contact-info-wrap">
              <div className="st-single-contact-info">
                <div className="st-icon-wrap">
                  <Icon icon="fa-regular:envelope" />
                </div>
                <div className="st-single-info-details">
                  <h4>Email</h4>
                  <Link to="#">mohammadabdulla523@gmail.com</Link>
                </div>
              </div>
              <div className="st-single-contact-info">
                <div className="st-icon-wrap">
                  <Icon icon="fa-solid:phone-alt" />
                </div>
                <div className="st-single-info-details">
                  <h4>Phone</h4>
                  <span>+962792876980</span>
                </div>
              </div>
              <div className="st-single-contact-info">
                <div className="st-icon-wrap">
                  <Icon icon="mdi:location" />
                </div>
                <div className="st-single-info-details">
                  <h4>Address</h4>
                  <span>Amman, Jordan <br />Jubaiha</span>
                </div>
              </div>
              <div className="st-social-info">
                <div className="st-social-text">{subTitle}</div>
                <SocialLinks data={socialData} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="st-height-b100 st-height-lg-b80"></div>
    </section>
  )
}

Contact.propTypes = {
  data: PropTypes.object,
  socialData: PropTypes.array,
}

export default Contact;
