
import React from 'react';
import ContactForm from './ContactForm'; 

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-content">
        <p>
          Have a question or want to work together? Feel free to get in touch with me!
        </p>
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;
