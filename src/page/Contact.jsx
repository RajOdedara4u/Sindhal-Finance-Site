import React from "react";
import WhatsAppButton from "../component/WhatsAppButton";
import InstagramButton from "../component/InstagramButton";
const Contact = () => {
  return (
    <section className="px-6 py-16 max-w-3xl mx-auto">
      <h2 className="text-3xl font-semibold  mb-4">Get in Touch</h2>
      <p className=" mb-6">DM us on Instagram or send your inquiry below.</p>
      <div className="w-full flex justify-between">
        <WhatsAppButton />
        <InstagramButton />
      </div>
    </section>
  );
};

export default Contact;
