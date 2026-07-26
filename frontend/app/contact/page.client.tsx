"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, MessageSquare, Globe } from 'lucide-react';
import Link from 'next/link';
import { submitQuery } from '@/lib/api';

export default function ContactClientPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    if (validationErrors[name]) {
      setValidationErrors(prev => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg(null);
    setValidationErrors({});

    // Simple validations
    const errors: Record<string, string> = {};
    if (!formState.name.trim()) errors.name = "Name is required";
    if (!formState.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      errors.email = "Invalid email format";
    }
    if (!formState.phone.trim()) {
      errors.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(formState.phone.replace(/[^0-9]/g, ""))) {
      errors.phone = "Phone must be a 10-digit number";
    }
    if (!formState.message.trim()) errors.message = "Message is required";

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      setIsSubmitting(false);
      return;
    }

    try {
      const formattedPhone = formState.phone.replace(/[^0-9]/g, "");
      const fullMessage = formState.subject 
        ? `[Subject: ${formState.subject}] ${formState.message}` 
        : formState.message;

      const response = await submitQuery({
        name: formState.name,
        email: formState.email,
        phone: formattedPhone,
        message: fullMessage
      });

      if (response.success) {
        setSubmitted(true);
        setFormState({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setErrorMsg(response.error || "Failed to send query. Please try again.");
      }
    } catch (err) {
      setErrorMsg("A network error occurred. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactDetails = [
    {
      icon: Phone,
      title: "Call Us",
      value: "+91 87459 45682",
      href: "tel:+918745945682",
      description: "Mon - Sat, 9am - 7pm"
    },
    {
      icon: Mail,
      title: "Email Support",
      value: "support@fixwheel.app",
      href: "mailto:support@fixwheel.app",
      description: "Response within 2 hours"
    },
    {
      icon: MapPin,
      title: "Our Location",
      value: "Delhi, India",
      href: "#",
      description: "Providing Doorstep Services Across Delhi NCR"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* 🔴 HERO SECTION */}
      <section className="relative pt-20 md:pt-32 pb-12 md:pb-20 bg-gray-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full -mr-48 -mt-48 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full -ml-32 -mb-32 blur-3xl opacity-50" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold uppercase tracking-widest text-[10px] mb-6"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Get In Touch</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-7xl font-black uppercase text-black mb-4 md:mb-6 tracking-tighter leading-none"
            >
              Contact <span className="text-accent underline decoration-accent/20 underline-offset-8">Us</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-sm md:text-lg text-gray-600 font-medium max-w-2xl mx-auto"
            >
              Have questions about your bike or our services? Our team is here to help.
            </motion.p>
          </div>
        </div>
        
        <div className="absolute -bottom-[1px] left-0 right-0 h-16 bg-white [clip-path:polygon(0_100%,100%_100%,100%_0)]" />
      </section>

      {/* 🔴 CONTACT CONTENT SECTION */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 max-w-7xl mx-auto">
            
            {/* Left side: Contact Info */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <h2 className="text-xl md:text-3xl font-black text-black uppercase mb-4 md:mb-6 tracking-tight">How Can We Help You?</h2>
                <p className="text-gray-600 leading-relaxed text-sm md:text-lg">
                  Whether you need a quick repair or a complete bike service, we're just a message away. Reach out to us through any of these channels.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {contactDetails.map((item, idx) => (
                  <motion.a
                    key={idx}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-4 md:gap-6 p-4 md:p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl hover:border-accent/20 transition-all group"
                  >
                    <div className="w-10 h-10 md:w-14 md:h-14 bg-gray-50 rounded-xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-inner shrink-0">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-gray-400 font-bold uppercase tracking-widest text-[10px] mb-1">{item.title}</h4>
                      <p className="text-black font-black text-base md:text-xl mb-1">{item.value}</p>
                      <p className="text-gray-500 text-sm font-medium">{item.description}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Right side: Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl md:rounded-[2.5rem] border border-gray-100 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.08)] p-5 md:p-12 relative overflow-hidden">
                {/* Visual accent */}
                <div className="absolute top-0 right-0 w-2 h-full bg-accent"></div>
                
                {submitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-20"
                  >
                    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-green-500 mx-auto mb-6">
                      <Send className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl md:text-3xl font-black text-black uppercase mb-3 md:mb-4 tracking-tighter">Message Sent!</h3>
                    <p className="text-gray-600 text-sm md:text-lg mb-6 md:mb-8 font-medium">Thank you for reaching out. We will get back to you within 24 hours.</p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="text-accent font-bold uppercase tracking-widest text-sm hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <div className="mb-10">
                      <h3 className="text-3xl font-black text-black uppercase tracking-tight mb-2">Send us a message</h3>
                      <p className="text-gray-500">Fields marked with <span className="text-accent">*</span> are required.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {errorMsg && (
                        <div className="p-4 bg-red-50 border border-red-200 text-red-600 rounded-xl text-sm font-semibold">
                          {errorMsg}
                        </div>
                      )}
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Full Name *</label>
                          <input 
                            required
                            name="name"
                            type="text" 
                            placeholder="John Doe"
                            className="w-full bg-gray-50 border border-transparent focus:border-accent/30 focus:bg-white px-6 py-4 rounded-xl text-black outline-none transition-all duration-300 font-medium"
                            value={formState.name}
                            onChange={handleInputChange}
                          />
                          {validationErrors.name && <p className="text-red-500 text-xs ml-1 font-semibold">{validationErrors.name}</p>}
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Email Address *</label>
                          <input 
                            required
                            name="email"
                            type="email" 
                            placeholder="name@example.com"
                            className="w-full bg-gray-50 border border-transparent focus:border-accent/30 focus:bg-white px-6 py-4 rounded-xl text-black outline-none transition-all duration-300 font-medium"
                            value={formState.email}
                            onChange={handleInputChange}
                          />
                          {validationErrors.email && <p className="text-red-500 text-xs ml-1 font-semibold">{validationErrors.email}</p>}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Phone Number *</label>
                          <input 
                            required
                            name="phone"
                            type="tel" 
                            placeholder="9876543210"
                            className="w-full bg-gray-50 border border-transparent focus:border-accent/30 focus:bg-white px-6 py-4 rounded-xl text-black outline-none transition-all duration-300 font-medium"
                            value={formState.phone}
                            onChange={handleInputChange}
                          />
                          {validationErrors.phone && <p className="text-red-500 text-xs ml-1 font-semibold">{validationErrors.phone}</p>}
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Subject</label>
                          <input 
                            name="subject"
                            type="text" 
                            placeholder="Service Inquiry"
                            className="w-full bg-gray-50 border border-transparent focus:border-accent/30 focus:bg-white px-6 py-4 rounded-xl text-black outline-none transition-all duration-300 font-medium"
                            value={formState.subject}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Message *</label>
                        <textarea 
                          required
                          name="message"
                          rows={5}
                          placeholder="Tell us what you need help with..."
                          className="w-full bg-gray-50 border border-transparent focus:border-accent/30 focus:bg-white px-6 py-4 rounded-xl text-black outline-none transition-all duration-300 font-medium resize-none"
                          value={formState.message}
                          onChange={handleInputChange}
                        ></textarea>
                        {validationErrors.message && <p className="text-red-500 text-xs ml-1 font-semibold">{validationErrors.message}</p>}
                      </div>

                      <button 
                        disabled={isSubmitting}
                        type="submit" 
                        className="w-full bg-accent hover:bg-black text-white px-8 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-sm transition-all shadow-[0_15px_30px_rgba(230,43,43,0.25)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)] active:scale-[0.98] flex items-center justify-center gap-3"
                      >
                        {isSubmitting ? (
                          <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                        ) : (
                          <>
                            Send Message
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔴 WHATSAPP CTA */}
      <section className="py-12 md:py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-green-500 rounded-2xl md:rounded-[2.5rem] p-6 md:p-16 text-center text-white relative overflow-hidden shadow-[0_30px_60px_-12px_rgba(34,197,94,0.4)]">
             <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mt-32 blur-3xl"></div>
             <div className="relative z-10 flex flex-col items-center">
               <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-green-500 mb-8 shadow-xl animate-bounce">
                 <MessageSquare className="w-10 h-10" />
               </div>
               <h3 className="text-2xl md:text-5xl font-black uppercase mb-4 md:mb-6 tracking-tight leading-none">Quick Booking on WhatsApp?</h3>
               <p className="text-white/90 text-sm md:text-xl font-medium mb-8 md:mb-12 max-w-lg mx-auto">Get instant estimate and book your repair within 2 minutes on WhatsApp.</p>
               <Link 
                href="https://wa.me/918745945682"
                className="bg-white text-green-600 px-8 py-4 md:px-12 md:py-5 rounded-2xl font-black uppercase tracking-[0.2em] shadow-xl hover:scale-105 active:scale-95 transition-all text-sm"
               >
                Message us now
               </Link>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}
