import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY");
    form.append("firstName", formData.firstName);
    form.append("lastName", formData.lastName);
    form.append("phone", formData.phone);
    form.append("message", formData.message);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: form,
    });

    if (response.ok) {
      toast.success("Message sent successfully!");
      setFormData({ firstName: "", lastName: "", phone: "", message: "" });
    } else {
      toast.error("Failed to send message.");
    }
  };

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left content */}
        <div>
          <div className="h-[2px] w-8 bg-orange-600 mb-4" />
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Hire Hedgehog Electric <br /> As Your Electrician?
          </h2>
          <p className="text-gray-700 mb-6">
            Our electricians are hardworking, dedicated, and focused on meeting the needs of our clients. Your safety is our very top priority, and we go above and beyond to ensure that all electrical installations, repairs, and other services are done in a way that ensures the optimal functioning of your electrical systems.
          </p>

          <div className="flex items-center gap-4 mt-6">
            <button className="bg-orange-600 text-white px-6 py-2 font-semibold rounded">Contact Us</button>
            <div className="flex items-center gap-2">
              <div className="bg-orange-100 p-2 rounded-full">
                <FaPhoneAlt className="text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Have any questions?</p>
                <p className="text-lg font-semibold">435-310-5268</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right form */}
        <div className="bg-blue-50 p-6 rounded-lg shadow-md">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Name *</label>
                <input
                  type="text"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                  placeholder="First Name"
                />
              </div>
              <div>
                <label className="text-sm font-medium">&nbsp;</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full border p-2 rounded mt-[1.25rem] sm:mt-0"
                  placeholder="Last Name"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Phone Number *</label>
              <input
                type="text"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                placeholder="Phone Number"
              />
            </div>

            <div>
              <label className="text-sm font-medium">How Can We Help?</label>
              <textarea
                name="message"
                rows="3"
                value={formData.message}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                placeholder="Any Message"
              />
            </div>

            

            <button
              type="submit"
              className="bg-white border px-5 py-2 rounded hover:bg-gray-100"
            >
              Send Information
            </button>
          </form>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </section>
  );
};

export default ContactSection;
