
import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setContactForm({
      ...contactForm,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!contactForm.name || !contactForm.email || !contactForm.phone || !contactForm.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // Send message logic would go here
    toast({
      title: "Message sent",
      description: "We've received your message and will respond shortly.",
    });

    // Reset form
    setContactForm({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="py-10">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-brand-red">
            Home
          </Link>
          <span>/</span>
          <span className="text-black">Contact</span>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Contact Information */}
          <div className="w-full md:w-1/3">
            {/* Call Us */}
            <div className="mb-12">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center mr-4">
                  <Phone className="text-white w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold">Call To Us</h3>
              </div>
              <p className="text-gray-600 mb-4">
                We are available 24/7, 7 days a week.
              </p>
              <p className="text-gray-700">Phone: +8801611112222</p>
            </div>

            {/* Write To Us */}
            <div>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center mr-4">
                  <Mail className="text-white w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold">Write To US</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Fill out our form and we will contact you within 24 hours.
              </p>
              <p className="text-gray-700 mb-2">Emails: customer@exclusive.com</p>
              <p className="text-gray-700">Emails: support@exclusive.com</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full md:w-2/3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  className="w-full p-3 border border-gray-300 rounded"
                  value={contactForm.name}
                  onChange={handleInputChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email *"
                  className="w-full p-3 border border-gray-300 rounded"
                  value={contactForm.email}
                  onChange={handleInputChange}
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone *"
                  className="w-full p-3 border border-gray-300 rounded"
                  value={contactForm.phone}
                  onChange={handleInputChange}
                />
              </div>

              <textarea
                name="message"
                placeholder="Your Massage"
                className="w-full p-3 border border-gray-300 rounded h-40"
                value={contactForm.message}
                onChange={handleInputChange}
              ></textarea>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-brand-red text-white px-8 py-3 rounded font-medium hover:bg-red-600 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
