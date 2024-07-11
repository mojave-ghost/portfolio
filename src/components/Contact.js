import React from 'react';

function Contact() {
  return (
    <section id="contact">
      <h2 className="text-2xl text-primary font-montserrat m-4">Contact</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message"></textarea>
        <button type="submit">Send</button>
      </form>
      <div className="social-links">
        {/* Add your social media links here */}
      </div>
    </section>
  );
}

export default Contact;