import React from "react";

const Contact = () => {
  return (
    <section className="px-6 py-16 max-w-3xl mx-auto">
      <h2 className="text-3xl font-semibold  mb-4">
        Get in Touch
      </h2>
      <p className=" mb-6">
        DM us on Instagram or send your inquiry below.
      </p>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border px-4 py-2 rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border px-4 py-2 rounded"
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          className="w-full border px-4 py-2 rounded"
        ></textarea>
        <button className="bg-yellow-600 text-white px-6 py-2 rounded hover:bg-yellow-700">
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
