import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';
import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';
import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import InstagramIcon from '../../assets/instagram.png';
import YoutubeIcon from '../../assets/youtube.png';



export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xsqf4br', 'template_79b3mwl', form.current, 'VJi69gQ80JUFaOk7A')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email Sent !');
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div id ="contactPage">
        <div id ='clients'>
          <hi className="contactPageTitle" >My Clients</hi>
          <p className='clientsDesc'>
            I have had the opportunity to work with a diverse group of companies.
            Some of the notable companies i have worked with includes
          </p>
          <div className='clientImgs'>
          <img src={Walmart} alt= 'Clients' className='clientImg' />
          <img src={Adobe} alt= 'Clients' className='clientImg' />
          <img src={Microsoft} alt= 'Clients' className='clientImg' />
          <img src={Facebook} alt= 'Clients' className='clientImg' />
          </div>
        </div>
        
        <div id ='contact'>
            <h1 className='contactPageTitle'>Contact me</h1>
            <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail} >
                <input className='name' type='text' placeholder='Your Name'  name="your_name" required/>
                <input className='email' type='email' placeholder='Your Email' name='your_email' required/>
                <textarea name='message' id='' cols='default' rows='5' placeholder='Your Message' className='msg' required></textarea>
                <button className='submitBtn' type='submit' value='send'>Send</button>
                
                <div className='links'>
                    <img src={FacebookIcon} alt="FacebookIcon" className='link' />
                    <img src={TwitterIcon} alt="TwitterIcon" className='link' />
                    <img src={InstagramIcon} alt="InstagramIcon" className='link' />
                    <img src={YoutubeIcon} alt="YoutubeIcon" className='link' />
                </div>
            </form>
        </div>

    </div>
  )
}

export default Contact;