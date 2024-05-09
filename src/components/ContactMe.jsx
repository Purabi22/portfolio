import React from 'react'
import "./ContactMe.css"
import ContactInfoCard from './ContactInfoCard'
import ContactForm from './ContactForm'
const ContactMe = () => {
  return (
    <section className='contact-container'>
        <h5>Contact Me</h5>
        <div className='contact-content'>
            <div style={{flex:1}}>
              <ContactInfoCard
              iconUrl="./images/email.jpg"
              text="purabim28@gmail.com"
              />
              <ContactInfoCard
              iconUrl="./images/github.jpg"
              text="https://github.com/Purabi22"
              />
              <ContactInfoCard
              iconUrl="./images/linkedin.jpg"
              text="https://www.linkedin.com/in/purabi-mondal-b8883b244/"
              />
            </div>
            <div style={{flex:1 }}>
              <ContactForm/>
            </div>
        </div>
    </section>
  )
}

export default ContactMe
