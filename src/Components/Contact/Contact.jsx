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
        <h3>Send a message</h3>
        <p>
          A random paragraph can also be an excellent way for a writer to tackle
          writers' block. Writing block can often happen due to being stuck with
          a current project that the writer is trying to complete.
        </p>
        <ul>
          <li>phamtra001@gmail.com</li>
          <li>Binh Yen, Thach That, Hoa Lac</li>
          <li>0123-456-789</li>
        </ul>
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
