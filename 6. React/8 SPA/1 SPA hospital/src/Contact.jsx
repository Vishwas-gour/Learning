function Contact() {
  return (
    <>
      <section class="contact" id="contact">
        <div class="contact-info">
          <h2>Contact Us</h2>
          <div class="infoBox">
            <div class="info-item">
              <h3>Address</h3>
              <p>123 Main Street, Cityville, State, 123456</p>
            </div>
            <div class="info-item">
              <h3>Phone</h3>
              <p>+91 34321 56743</p>
            </div>
            <div class="info-item">
              <h3>Email</h3>
              <p>cityhospital@gmail.com</p>
            </div>
          </div>
        </div>
        <form class="contact-form">
          <h3>Send Us a Message</h3>
          <input
            type="text" name="name" placeholder="Your Name" />
          <input
            type="email" name="email" placeholder="Your Email" />
          <textarea name="message" placeholder="Your Message" ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </>
  )
  }
  export default Contact;