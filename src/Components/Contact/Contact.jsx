import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    // Giữ nguyên key của bạn
    formData.append("access_key", "f575bb70-a1a4-44b7-a211-f7f3d0125f65");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully!");
        event.target.reset();
        // Tự động xóa thông báo sau 5 giây
        setTimeout(() => setResult(""), 5000);
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      setResult("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="contact-container">
        
        {/* Cột thông tin liên hệ */}
        <div className="contact-col info-col">
          <h3>Get in Touch</h3>
          <p className="contact-desc">
            I am currently looking for new opportunities in Software Development. 
            Whether you have a question, a project idea, or just want to say hi, 
            feel free to send me a message!
          </p>
          
          <ul className="contact-details">
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              <span>trapham.dev@gmail.com</span>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <span>(+84) 123-456-789</span>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <span>Thach Hoa, Thach That, Ha Noi</span>
            </li>
          </ul>
        </div>

        {/* Cột Form gửi tin nhắn */}
        <div className="contact-col form-col">
          <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
            
            <label>Your Email</label>
            <input
              type="email" 
              name="email"
              placeholder="Enter your email"
              required
            />
            
            <label>Write your message here</label>
            <textarea 
              name="message" 
              rows="5" 
              placeholder="Enter your message..." 
              required
            ></textarea>
            
            <button className="submit-btn" type="submit">
              Submit now
            </button>
          </form>

          {result && <span className="form-result">{result}</span>}
        </div>

      </div>
    </div>
  );
};

export default Contact;