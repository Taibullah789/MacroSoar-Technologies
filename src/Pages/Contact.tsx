import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Footer from '../Components/homeComponents/Footer';
import '../Components/styleCss/Home.css';
import HeaderInfo from '../Components/HeaderInfo';

function Contact() {
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Submitting...");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch(
        "https://pxetmmimlpucxvvsgnsh.functions.supabase.co/contact-form",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        e.currentTarget.reset();
      } else {
        const err = await res.json();
        setStatus("❌ Error: " + (err.error || "Something went wrong"));
      }
    } catch (error: any) {
      setStatus("❌ Network error: " + error.message);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col ">
      {/* Orange Wave Header */}
      <HeaderInfo header="Contact Us" description="Drop us a message for any query" />

      {/* Main Card Section */}
      <div className=" contact flex-1 flex flex-col items-center justify-center px-4 py-16  relative top-10">
        <div className="bg-gray-100 contentSection rounded-xl shadow-md max-w-4xl w-full flex flex-col md:flex-row p-8 gap-8">
          {/* Left: Reasons & Contact Info */}
          <div className="flex-1">
            <div className="text-lg font-bold text-gray-800 mb-2">Some other great reasons to choose us</div>
            <div className="text-gray-600 text-sm mb-4">
              Take the first steps towards increased productivity and reduced stress with Macro Soar. We are a highly trained, dedicated team, helping entrepreneurs, professionals, and small teams streamline success not just in work, but in life too.
            </div>
            <ul className="text-sm text-gray-700 space-y-2 mb-4">
              <li className="flex items-center gap-2"><FontAwesomeIcon icon={faCheckCircle} className="text-orange-500" /> Staff works from our offices in Pakistan</li>
              <li className="flex items-center gap-2"><FontAwesomeIcon icon={faCheckCircle} className="text-orange-500" /> Scale up / down on demand</li>
              <li className="flex items-center gap-2"><FontAwesomeIcon icon={faCheckCircle} className="text-orange-500" /> One time or ongoing projects</li>
              <li className="flex items-center gap-2"><FontAwesomeIcon icon={faCheckCircle} className="text-orange-500" /> Hire based on skillset</li>
            </ul>
            <div className="font-bold text-gray-800 mb-1">Contact Info</div>
            <div className="flex items-center gap-2 text-sm mb-1"><FontAwesomeIcon icon={faPhoneAlt} className="text-orange-500" /> +923455327716</div>
            <div className="flex items-center gap-2 text-sm mb-4"><FontAwesomeIcon icon={faEnvelope} className="text-orange-500" /> macrosoartechnologies@gmail.com</div>
          </div>

          {/* Right: Contact Form */}
          <div className="flex-1">
            <div className="text-lg font-bold text-gray-800 mb-4">Let's Get in Touch</div>
            <form onSubmit={handleSubmit} className=" space-y-4">
              <div className="flex gap-4">
                <input type="text" name="name" placeholder="Your Name" required className="flex-1 rounded-md border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-200 bg-white shadow-sm" />
                <input type="email" name="email" placeholder="Your Email" required className="flex-1 rounded-md border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-200 bg-white shadow-sm" />
              </div>
              <div className="flex gap-4">
                <input type="text" name="phone" placeholder="Your Phone" required className="flex-1 rounded-md border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-200 bg-white shadow-sm" />
                <input type="text" name="subject" placeholder="Your Subject" required className="flex-1 rounded-md border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-200 bg-white shadow-sm" />
              </div>
              <textarea name="message" placeholder="Your Message" rows={4} required className="w-full rounded-md border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-200 bg-white shadow-sm resize-none" />
              <div className="flex items-center gap-2 text-xs">
                <input type="checkbox" id="terms" required className="accent-orange-500" />
                <label htmlFor="terms">Accept <span className="text-orange-500">Terms</span> and <span className="text-orange-500">Privacy policy</span>.</label>
              </div>
              <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-md transition-colors">Send Message</button>
            </form>
            {status && <p className="mt-4 text-sm">{status}</p>}
          </div>
        </div>
      </div>

      <div className="relative top-30">
        <Footer />
      </div>
    </div>
  );
}

export default Contact;
