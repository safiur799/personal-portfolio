import { useState } from "react";
import axios from "axios";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with your form submission logic
    console.log("Form Data:", formData);
    // Reset form fields after submission
    // setFormData({ name: "", email: "", phone: "", message: "" });
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: "POST",
      url: "https://formspree.io/f/mayazgen",
      data: formData,
    })
      .then((response) => {
        handleServerResponse(
          true,
          "Thank you, your message has been submitted."
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto px-4 contactSection"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block mb-1 font-semibold text-xl text-[#FFF]"
          >
            Name
          </label>
          <input
            type="text required"
            id="name"
            name="name"
            placeholder="Your Name"
            className="w-full bg-[#43366A] rounded-full  px-3 py-2 focus:outline-none focus:text-white text-base font-normal "
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block mb-1 font-semibold text-xl text-[#FFF]"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            className="w-full   px-3 py-2 bg-[#43366A] rounded-full focus:outline-none focus:text-white text-base font-normal"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block mb-1 font-semibold text-xl text-[#FFF]"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Your Phone"
            className="w-full bg-[#43366A] rounded-full px-3 py-2 focus:outline-none focus:text-white text-base font-normal"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block mb-1 font-semibold text-xl text-[#FFF]"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            className="w-full bg-[#43366A] rounded px-3 py-2 focus:outline-none focus:text-white text-base font-normal"
            rows="4"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-[#43366A] hover:bg-[#F86F03] text-white px-4 py-2 rounded-full w-full"
        >
          {!status.submitting
            ? !status.submitted
              ? "Submit"
              : "Submitted"
            : "Submitting..."}
        </button>
      </form>
      {status.info.error && (
        <div className="error text-red-400 text-center mt-4">
          Error: {status.info.msg}
        </div>
      )}
      {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
    </>
  );
};

export default ContactForm;
