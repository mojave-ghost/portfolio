import React from 'react';

function Contact() {
  return (
    <section id="contact">
      <h2 className="text-2xl text-primary font-montserrat my-6 mx-4">Contact</h2>
      <form className="relative flex flex-col items-center justify-center">
        <label htmlFor="name" className="contact-label">Name:</label>
        <input type="text" id="name" name="name" className="contact-input h-10"/>
        <label htmlFor="email" className="contact-label">Email:</label>
        <input type="email" id="email" name="email" className="contact-input h-10" />
        <label htmlFor="message" className="contact-label">Message:</label>
        <textarea id="message" name="message" className="contact-input h-24"></textarea>
        <button type="submit" className="bg-accent text-white px-6 py-1 rounded-lg font-montserrat my-6">
          Send
        </button>
      </form>
      <div className="social-links">
        {/* Add your social media links here */}
      </div>
    </section>
  );
}

export default Contact;