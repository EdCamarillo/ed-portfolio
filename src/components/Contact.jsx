import emailjs from 'emailjs-com';
import { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState("");

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

  return (
    <section
      id="contact"
      className="flex flex-col md:flex-row p-8 h-full items-center justify-center min-h-screen animate-slideUp max-w-7xl mx-auto will-change-transform"
    >
      <form onSubmit={sendEmail} className='space-y-4'>
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
        <button
          type="submit"
          className="flex items-center px-5 py-3 bg-primary text-white text-md font-semibold rounded-lg shadow hover:bg-[#7CD6B0] transition duration-300"
        >
          Submit
        </button>
        {status && <p className="text-sm text-green-500">{status}</p>}
      </form>
    </section>
  );
};

export default Contact;