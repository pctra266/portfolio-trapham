import React from "react";
import "./Contact.css";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f575bb70-a1a4-44b7-a211-f7f3d0125f65");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="contact">
      <div className="contact-col">
        <div className="contact-content">
          <h3>Send a Message</h3>
          <p>
            Feel free to reach out! Whether you have a question, want to
            collaborate, or just want to say hi — I'm always open to
            conversations.
          </p>
          <ul>
            <li><strong>Email:</strong> phamtra001@gmail.com</li>
            <li><strong>Location:</strong> Hanoi, Vietnam</li>
            <li><strong>Phone:</strong> 0947-852-588</li>
          </ul>
        </div>
      </div>

      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label htmlFor="">Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your name"
            required
          />
          <label htmlFor="">Your Phone Number</label>
          <input
            type="number"
            name="phone"
            placeholder="Enter Your email"
            required
          />
          <label htmlFor="">Message</label>
          <textarea name="message" id="" rows="6" required></textarea>
          <button className="btn" type="submit">
            Send
          </button>
        </form>

        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
