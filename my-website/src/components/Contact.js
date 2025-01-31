import React, {useState} from "react";
import emailjs from "emailjs-com";
import contact from "../../src/images/contact.jpg";
import "../style/Contact.css"
import resume from "../../src/resume.pdf";

const handleDownloadResume = () => {
  const link = document.createElement("a");
  link.href = resume; 
  link.download = "resume.pdf"; 
  link.click();
};

const handleLinkedInClick = () => {
  window.open("https://www.linkedin.com/in/ananya-rao-281821246/", "_blank");
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await emailjs.send(
        "service_v50mtiq", // service id
        "abcd12345", // template id
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "a1InZIPk0RXFbynSX" // public key
      );
      setStatus("Message Sent!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("Error sending message.");
    }
  };

  return (
    <div className="section">
      <h1 className="contact-title">Contact Me</h1>
      <div className="buttons">
        <button className="download-button" onClick={handleDownloadResume}>
          Download My Resume
        </button>
        <button className="linkedin-button" onClick={handleLinkedInClick}>
          LinkedIn
        </button>
      </div>
      <div className="contact-container">
        <img className="contact" src={contact} alt="Contact" width="300" />
        <div className="contact-form-container">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="jane doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="janedoe@gmail.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                placeholder="type your message here"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
          {status && <p className="status-message">{status}</p>}
        </div>
      </div>
    </div>
  );
};

export default Contact;
