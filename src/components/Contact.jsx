import emailjs from 'emailjs-com';
import { useState } from 'react';
import { IoCopyOutline } from "react-icons/io5";

const Contact = () => {
  const [status, setStatus] = useState("");
  const [copyText, setCopyText] = useState("illumeddy@gmail.com");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      e.target,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    )
      .then(() => {
        setStatus("Message sent successfully!");
      })
      .catch(() => {
        setStatus("Failed to send message.");
      });

    e.target.reset();
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText("illumeddy@gmail.com");
    setCopyText("Copied to clipboard!");

    setTimeout(() => {
      setCopyText("illumeddy@gmail.com");
    }, 3000);
  };

  return (
    <section
      id="contact"
      className="flex flex-col md:flex-row p-8 h-full items-center justify-center min-h-screen animate-slideUp max-w-7xl mx-auto will-change-transform"
    >
      <form onSubmit={sendEmail} className="space-y-4 w-full max-w-lg">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-2 border rounded outline-none focus:border-[#7CD6B0]"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full p-2 border rounded outline-none focus:border-[#7CD6B0]"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="7"
          required
          className="w-full p-2 border rounded resize-none outline-none focus:border-[#7CD6B0]"
        />

        {/* Button & Copy Email Container */}
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="px-5 py-3 bg-primary text-white text-md font-semibold rounded-lg shadow hover:bg-[#7CD6B0] transition duration-300"
          >
            Submit
          </button>

          {/* Copy Email Button */}
          <button
            type="button"
            onClick={copyToClipboard}
            className="text-md font-normal transition duration-300 flex items-center text-gray-600 hover:text-gray-800"
          >
            <IoCopyOutline className="mr-1"/>
            {copyText}
          </button>
        </div>

        {status && <p className="text-sm text-green-500">{status}</p>}
      </form>
    </section>
  );
};

export default Contact;
