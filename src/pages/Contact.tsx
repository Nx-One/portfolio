import React, { useState } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { MailIcon, PhoneIcon, MapPinIcon, LinkedinIcon, GithubIcon } from 'lucide-react';
export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for API submission
    console.log('Form submission:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    alert('Message sent successfully! (This is a demo - no actual submission)');
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return <div className="min-h-screen flex flex-col">
      <Navigation />

      <div className="pt-32 pb-20">
        <div className="container">
          <h1 className="mb-16">Contact</h1>

          {/* <div className="max-w-3xl mx-auto space-y-16"> */}
          <div className="grid grid-cols-1 md:grid-cols-1 gap-12 md:gap-20 max-w-5xl mx-auto">
            {/* Contact Introduction */}
            <div>
              <p className="text-body text-text-secondary leading-relaxed">
                I'm open to discussing new projects, collaboration
                opportunities, or answering any questions you may have about my
                work. Feel free to reach out through any of the channels below
                or use the contact form to send me a message directly.
              </p>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-body">
                  <MailIcon size={20} className="text-primary-accent" />
                  <a href="mailto:fikriakbarpramudya51@gmail.com" className="text-text-secondary hover:text-primary-accent">
                    fikriakbarpramudya51@gmail.com
                  </a>
                </div>

                <div className="flex items-center gap-4 text-body">
                  <PhoneIcon size={20} className="text-primary-accent" />
                  <a href="tel:+6285959575989" className="text-text-secondary hover:text-primary-accent">
                    +62 859 5957 5989
                  </a>
                </div>

                <div className="flex items-center gap-4 text-body">
                  <MapPinIcon size={20} className="text-primary-accent" />
                  <span className="text-text-secondary">Bekasi, Indonesia</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-6 mt-8">
                <a href="https://www.linkedin.com/in/fikri-akbar-pramudya/" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary-accent" aria-label="LinkedIn">
                  <LinkedinIcon size={24} />
                </a>
                <a href="https://github.com/Nx-One" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary-accent" aria-label="GitHub">
                  <GithubIcon size={24} />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            {/* <div>
              <h3 className="mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-body text-text-secondary mb-2">
                    Name
                  </label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 bg-secondary-bg border border-border rounded text-text-primary focus:outline-none focus:border-primary-accent" placeholder="Your name" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-body text-text-secondary mb-2">
                    Email
                  </label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 bg-secondary-bg border border-border rounded text-text-primary focus:outline-none focus:border-primary-accent" placeholder="your.email@example.com" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-body text-text-secondary mb-2">
                    Message
                  </label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6} className="w-full px-4 py-3 bg-secondary-bg border border-border rounded text-text-primary focus:outline-none focus:border-primary-accent resize-none" placeholder="Your message..." />
                </div>

                <button type="submit" className="btn-primary w-full md:w-auto">
                  Send Message
                </button>
              </form>
            </div> */}
          </div>
        </div>
      </div>

      <Footer />
    </div>;
}