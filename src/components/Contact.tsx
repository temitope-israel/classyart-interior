"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import {
  FaInstagram,
  FaWhatsapp,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";

const WHATSAPP_NUMBER = "2348025780872"; // Replace with your real WhatsApp number (e.g. 2348012345678 without + or spaces)
const EMAIL_ADDRESS = "info@classyartinterior.com";

const socialLinks = [
  {
    name: "WhatsApp",
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
    icon: FaWhatsapp,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/classy_interiordeco",
    icon: FaInstagram,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/stella-nzeribe-5b0357173",
    icon: FaLinkedinIn,
  },
  {
    name: "Pinterest",
    href: "https://pinterest.com",
    icon: FaPinterestP,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    projectType: "Private Residence / Villa",
    location: "",
    details: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Prepares the formatted text payload
  const createBriefText = () => {
    return `*NEW PROJECT INQUIRY — CLASSYART INTERIORS*
----------------------------------------
*Name:* ${formData.name}
*Phone/WhatsApp:* ${formData.phone}
*Project Type:* ${formData.projectType}
*Location:* ${formData.location || "Not specified"}
----------------------------------------
*Details/Timeline:*
${formData.details || "No additional details provided."}`;
  };

  // Handlers for WhatsApp and Email redirection
  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const encodedText = encodeURIComponent(createBriefText());
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`,
      "_blank",
    );
  };

  const handleSendEmail = () => {
    const subject = encodeURIComponent(
      `Project Inquiry: ${formData.projectType} - ${formData.name}`,
    );
    const body = encodeURIComponent(createBriefText());
    window.location.href = `mailto:${EMAIL_ADDRESS}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="relative py-28 sm:py-40 bg-cream text-ink border-t border-ink/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Editorial Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-ink/10 pb-8 mb-16 sm:mb-24 gap-4"
        >
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-accent text-[11px] font-mono uppercase tracking-[0.3em]">
                04 / Start A Project
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-6xl text-ink font-light tracking-tight">
              Let's Begin.
            </h2>
          </div>

          <p className="text-ink/50 text-xs font-mono uppercase tracking-[0.25em] max-w-xs">
            [ Inquiries &amp; Consultations ]
          </p>
        </motion.div>

        {/* Main 2-Column Hub */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Narrative & Quick Actions */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-4">
              <h3 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-ink font-light leading-snug">
                Have a space in mind? <br />
                <span className="italic font-serif text-accent">
                  Let's shape it together.
                </span>
              </h3>
              <p className="text-ink/70 text-base leading-relaxed font-light">
                Whether you are building a private residence from the ground up
                or redesigning a corporate workplace, we invite you to discuss
                your project directly with our design studio.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4 pt-4 border-t border-ink/10">
              {/* WhatsApp Callout */}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-5 bg-ink text-cream hover:bg-accent transition-colors duration-500 rounded-none"
              >
                <div className="flex items-center gap-4">
                  <FaWhatsapp
                    size={22}
                    className="text-accent group-hover:text-cream transition-colors"
                  />
                  <div>
                    <span className="block text-xs font-mono uppercase tracking-widest text-cream/60 group-hover:text-cream/90">
                      Instant Direct Message
                    </span>
                    <span className="font-semibold text-sm tracking-wide">
                      Chat on WhatsApp
                    </span>
                  </div>
                </div>
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              {/* Email Address */}
              <a
                href={`mailto:${EMAIL_ADDRESS}`}
                className="group flex items-center justify-between p-5 border border-ink/15 hover:border-ink bg-white/50 transition-colors duration-300 rounded-none"
              >
                <div className="flex items-center gap-4">
                  <Mail
                    size={20}
                    className="text-ink/60 group-hover:text-accent transition-colors"
                  />
                  <div>
                    <span className="block text-[10px] font-mono uppercase tracking-widest text-ink/50">
                      Official Inquiries
                    </span>
                    <span className="text-xs font-mono font-medium text-ink">
                      {EMAIL_ADDRESS}
                    </span>
                  </div>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-ink/40 group-hover:text-ink transition-colors"
                />
              </a>
            </div>

            {/* Studio Location Badge */}
            <div className="pt-6 border-t border-ink/10 flex items-start gap-4">
              <MapPin size={18} className="text-accent shrink-0 mt-0.5" />
              <div>
                <span className="block text-[10px] font-mono uppercase tracking-widest text-ink/50 mb-1">
                  Primary Studio &amp; Site Headquarters
                </span>
                <p className="text-xs font-mono text-ink/80">
                  Victoria Island, Lagos &bull; By Appointment Only
                </p>
              </div>
            </div>

            {/* Social Channels with React Icons */}
            <div className="pt-6 border-t border-ink/10 space-y-3">
              <span className="block text-[10px] font-mono uppercase tracking-[0.25em] text-ink/50">
                Follow Our Field Work
              </span>
              <div className="flex items-center gap-3">
                {socialLinks.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.name}
                      className="w-11 h-11 border border-ink/15 hover:border-ink hover:bg-ink hover:text-cream flex items-center justify-center transition-all duration-300 text-ink/80"
                    >
                      <Icon size={16} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-white/60 border border-ink/10 p-8 sm:p-12">
            <h4 className="font-[family-name:var(--font-display)] text-2xl text-ink font-light mb-2">
              Send a Project Brief
            </h4>
            <p className="text-xs text-ink/60 font-mono uppercase tracking-wider mb-8">
              Fill in your details to launch a pre-formatted chat or email
              inquiry.
            </p>

            <form onSubmit={handleSendWhatsApp} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-ink/60">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Chief Adeleke"
                    className="w-full bg-cream/50 border border-ink/15 focus:border-ink px-4 py-3 text-xs text-ink placeholder:text-ink/30 focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-ink/60">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+234 ..."
                    className="w-full bg-cream/50 border border-ink/15 focus:border-ink px-4 py-3 text-xs text-ink placeholder:text-ink/30 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-ink/60">
                    Project Type
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full bg-cream/50 border border-ink/15 focus:border-ink px-4 py-3 text-xs text-ink/80 focus:outline-none transition-colors"
                  >
                    <option value="Private Residence / Villa">
                      Private Residence / Villa
                    </option>
                    <option value="Penthouse Apartment">
                      Penthouse Apartment
                    </option>
                    <option value="Commercial / Boardroom">
                      Commercial / Boardroom
                    </option>
                    <option value="Design Consultation Only">
                      Design Consultation Only
                    </option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-ink/60">
                    Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="e.g. Ikoyi, Lagos"
                    className="w-full bg-cream/50 border border-ink/15 focus:border-ink px-4 py-3 text-xs text-ink placeholder:text-ink/30 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-[10px] font-mono uppercase tracking-widest text-ink/60">
                  Project Details / Timeline
                </label>
                <textarea
                  rows={4}
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  placeholder="Tell us about the space, expected square footage, and key goals..."
                  className="w-full bg-cream/50 border border-ink/15 focus:border-ink px-4 py-3 text-xs text-ink placeholder:text-ink/30 focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Action Buttons: WhatsApp Primary, Email Secondary */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <button
                  type="submit"
                  className="group w-full py-4 bg-ink text-cream hover:bg-accent text-xs uppercase tracking-[0.2em] font-semibold transition-colors duration-500 flex items-center justify-center gap-2"
                >
                  <FaWhatsapp size={16} />
                  <span>Send via WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={handleSendEmail}
                  className="group w-full py-4 border border-ink/20 text-ink hover:bg-ink hover:text-cream text-xs uppercase tracking-[0.2em] font-semibold transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <Mail size={15} />
                  <span>Email Brief</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
