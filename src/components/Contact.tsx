import React, { useState } from 'react';
import { Mail, Instagram, Send, CheckCircle2, AlertCircle, ArrowUpRight, Globe, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Digital Marketing & Strategy',
    budget: '$500 - $1,500',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name or brand.';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide details about your project.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Please write at least 10 characters.';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
      }, 600);
    }
  };

  return (
    <section 
      id="contact" 
      className="relative py-20 sm:py-28 bg-[#070708] border-b border-[#8B001F]/30 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Headline matching Reference: "LET'S WORK TOGETHER" */}
        <div className="mb-14 sm:mb-16 border-b border-[#8B001F]/30 pb-4">
          <span className="text-xs font-mono tracking-[0.25em] text-[#BE123C] uppercase font-bold block mb-2">
            GET IN TOUCH & START COLLABORATING
          </span>
          <h2 className="font-headline text-5xl sm:text-6xl md:text-7xl tracking-tight uppercase text-white font-black">
            LET'S WORK TOGETHER
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-300 font-light max-w-xl">
            I'm currently open for new projects and collaborations. Let's create something impactful that drives real results.
          </p>
        </div>

        {/* 2-Column Grid: Left Contact Info with Red Signature, Right Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Contacts & Cursive Signature */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="p-7 sm:p-8 rounded-xs bg-[#0c0a0b] border border-[#8B001F]/25 relative overflow-hidden">
              <div className="relative">
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#BE123C] font-bold block mb-1">
                  OFFICIAL CONTACT CHANNELS
                </span>
                <h3 className="font-headline text-3xl sm:text-4xl text-white tracking-wide uppercase">
                  {PERSONAL_INFO.name}
                </h3>
                <p className="text-xs text-neutral-400 font-mono mt-1">
                  {PERSONAL_INFO.role} • {PERSONAL_INFO.location}
                </p>
              </div>

              {/* Direct Info List with Burgundy Circle Icons */}
              <div className="mt-8 space-y-4">
                
                {/* Email */}
                <a
                  id="contact-email-link"
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-4 p-3.5 rounded-xs bg-black/60 border border-[#8B001F]/20 hover:border-[#8B001F] hover:bg-[#8B001F]/10 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xs bg-[#8B001F]/20 text-[#BE123C] border border-[#BE123C]/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block">
                      EMAIL
                    </span>
                    <span className="text-sm sm:text-base font-bold text-white group-hover:text-[#BE123C] transition-colors truncate block">
                      {PERSONAL_INFO.email}
                    </span>
                  </div>
                </a>


                {/* Instagram */}
                <a
                  id="contact-instagram-link"
                  href={`https://instagram.com/${PERSONAL_INFO.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3.5 rounded-xs bg-black/60 border border-[#8B001F]/20 hover:border-[#8B001F] hover:bg-[#8B001F]/10 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xs bg-[#8B001F]/20 text-[#BE123C] border border-[#BE123C]/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block">
                      INSTAGRAM
                    </span>
                    <span className="text-sm sm:text-base font-bold text-white group-hover:text-[#BE123C] transition-colors">
                      @{PERSONAL_INFO.instagram}
                    </span>
                  </div>
                </a>

              </div>

              {/* Status Indicator */}
              <div className="mt-8 pt-6 border-t border-[#8B001F]/20 flex items-center justify-between">
                <span className="text-xs text-neutral-400">Response time</span>
                <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_rgba(16,185,129,0.8)]" />
                  Within 24 Hours
                </span>
              </div>
            </div>

            {/* Elegant Handwritten Cursive Red Signature (Matches Reference Image) */}
            <div className="pt-2 text-right">
              <span className="font-script text-4xl sm:text-5xl md:text-6xl text-[#BE123C] font-bold block rotate-[-3deg] select-none drop-shadow-[0_2px_10px_rgba(190,18,60,0.3)]">
                Manoj Chetri
              </span>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-[#0c0a0b] p-8 sm:p-10 rounded-xs border border-[#8B001F]/30 shadow-2xl">
            
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#8B001F]/20 text-[#BE123C] flex items-center justify-center mx-auto border-2 border-[#BE123C]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-headline text-3xl text-white tracking-wide uppercase">
                  MESSAGE SENT SUCCESSFULLY!
                </h4>
                <p className="text-sm text-neutral-300 max-w-md mx-auto font-light">
                  Thank you for reaching out, Manoj will review your project details and get back to you shortly at <span className="text-[#BE123C] font-mono font-bold">{formData.email}</span>.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      projectType: 'Digital Marketing & Strategy',
                      budget: '$500 - $1,500',
                      message: '',
                    });
                  }}
                  className="mt-4 px-6 py-2.5 bg-[#8B001F] text-white font-bold text-xs tracking-widest uppercase rounded-xs hover:bg-[#A11D33] transition-colors"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form id="portfolio-contact-form" onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div>
                  <h3 className="font-headline text-2xl sm:text-3xl text-white tracking-wide mb-1 uppercase">
                    START A CONVERSATION
                  </h3>
                  <p className="text-xs font-mono text-neutral-400">
                    FILL OUT THE FORM BELOW FOR COLLABORATIONS & INQUIRIES
                  </p>
                </div>

                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2 font-bold">
                    YOUR NAME OR BRAND <span className="text-[#BE123C]">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: '' });
                    }}
                    placeholder="e.g. Alex Vance or Studio Apex"
                    className={`w-full px-4 py-3.5 bg-black/70 rounded-xs border text-sm text-white focus:outline-none transition-colors ${
                      errors.name ? 'border-red-500 focus:border-red-500' : 'border-[#8B001F]/30 focus:border-[#BE123C]'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3" /> {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2 font-bold">
                    EMAIL ADDRESS <span className="text-[#BE123C]">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: '' });
                    }}
                    placeholder="alex@domain.com"
                    className={`w-full px-4 py-3.5 bg-black/70 rounded-xs border text-sm text-white focus:outline-none transition-colors ${
                      errors.email ? 'border-red-500 focus:border-red-500' : 'border-[#8B001F]/30 focus:border-[#BE123C]'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </p>
                  )}
                </div>

                {/* Project Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-project-type" className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2 font-bold">
                      PROJECT TYPE
                    </label>
                    <select
                      id="contact-project-type"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3.5 bg-black/70 rounded-xs border border-[#8B001F]/30 text-sm text-white focus:outline-none focus:border-[#BE123C] transition-colors"
                    >
                      <option value="Digital Marketing & Strategy">Digital Marketing & Strategy</option>
                      <option value="Social Media Campaign & Content">Social Media Campaign & Content</option>
                      <option value="Business Analytics & Spreadsheets">Business Analytics & Spreadsheets</option>
                      <option value="Online Presence & SEO">Online Presence & SEO</option>
                      <option value="General Collaboration">General Collaboration</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-budget" className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2 font-bold">
                      TIMELINE / SCOPE
                    </label>
                    <select
                      id="contact-budget"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3.5 bg-black/70 rounded-xs border border-[#8B001F]/30 text-sm text-white focus:outline-none focus:border-[#BE123C] transition-colors"
                    >
                      <option value="Immediate (This Month)">Immediate (This Month)</option>
                      <option value="Next 1-3 Months">Next 1-3 Months</option>
                      <option value="Long Term Collaboration">Long Term Collaboration</option>
                      <option value="Exploring Options">Exploring Options</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2 font-bold">
                    MESSAGE / PROJECT BRIEF <span className="text-[#BE123C]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: '' });
                    }}
                    placeholder="Tell me about your brand goals, project scope, and what you'd like to achieve..."
                    className={`w-full px-4 py-3.5 bg-black/70 rounded-xs border text-sm text-white focus:outline-none transition-colors resize-none ${
                      errors.message ? 'border-red-500 focus:border-red-500' : 'border-[#8B001F]/30 focus:border-[#BE123C]'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  id="contact-submit-btn"
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-[#8B001F] hover:bg-[#A11D33] text-white font-bold text-xs sm:text-sm tracking-[0.2em] uppercase rounded-xs shadow-lg shadow-[#8B001F]/30 border border-[#BE123C]/50 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {loading ? (
                    <span>TRANSMITTING MESSAGE...</span>
                  ) : (
                    <>
                      <span>SEND MESSAGE</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
