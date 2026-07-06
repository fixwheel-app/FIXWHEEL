"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trash2, AlertTriangle, Mail, ArrowRight, CheckCircle2, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import { submitAccountDeletion } from '@/lib/api';

export default function DeleteAccountClient() {
  const [formState, setFormState] = useState({
    email: '',
    reason: ''
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

    // Client validation
    const errors: Record<string, string> = {};
    if (!formState.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formState.reason.trim()) {
      errors.reason = 'Please provide a reason for deleting your account';
    } else if (formState.reason.trim().length < 5) {
      errors.reason = 'Reason must be at least 5 characters long';
    }

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await submitAccountDeletion(formState);
      if (response.success) {
        setSubmitted(true);
      } else {
        setErrorMsg(response.error || 'Failed to submit account deletion request. Please try again.');
        if (response.details && Array.isArray(response.details)) {
          const apiErrors: Record<string, string> = {};
          response.details.forEach((err: any) => {
            if (err.path && err.path[0]) {
              apiErrors[err.path[0]] = err.message;
            }
          });
          setValidationErrors(apiErrors);
        }
      }
    } catch (err) {
      setErrorMsg('An unexpected error occurred. Please check your internet connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Header */}
      <section className="relative pt-20 md:pt-32 pb-12 md:pb-20 bg-gray-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full -mr-48 -mt-48 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full -ml-32 -mb-32 blur-3xl opacity-50" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-600 font-bold uppercase tracking-widest text-[10px] mb-6"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Google Play Console Compliance</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-7xl font-black uppercase text-black mb-4 md:mb-6 tracking-tighter leading-none"
            >
              Account <span className="text-accent underline decoration-accent/20 underline-offset-8">Deletion</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-sm md:text-lg text-gray-600 font-medium max-w-2xl mx-auto"
            >
              Request to permanently delete your FixWheel account and all associated user data.
            </motion.p>
          </div>
        </div>
        
        <div className="absolute -bottom-[1px] left-0 right-0 h-16 bg-white [clip-path:polygon(0_100%,100%_100%,100%_0)]" />
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 max-w-7xl mx-auto">
            
            {/* Left side: Information / Warnings */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-xl md:text-3xl font-black text-black uppercase mb-4 tracking-tight">Important Notice</h2>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  Google Play Store policies require us to provide a transparent mechanism to delete your account. Deleting your account will initiate the permanent removal of your data from our systems.
                </p>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-2xl p-5 md:p-6 space-y-4 shadow-sm">
                <div className="flex items-center gap-3 text-red-700">
                  <AlertTriangle className="w-6 h-6 shrink-0" />
                  <h4 className="font-bold text-sm uppercase tracking-wide">Permanent Actions</h4>
                </div>
                <ul className="space-y-3 text-xs md:text-sm text-red-800/80 font-medium list-disc list-inside">
                  <li>Your user profile and registered mobile number will be removed.</li>
                  <li>Your active and historical bike service bookings will be anonymized.</li>
                  <li>Any stored credentials or authorization details will be permanently erased.</li>
                  <li>This action is irreversible. You will not be able to recover your account once it is deleted.</li>
                </ul>
              </div>

              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 md:p-6 text-gray-600 space-y-2 text-xs md:text-sm shadow-sm">
                <p className="font-semibold text-black uppercase tracking-wider text-[10px] text-gray-400">Processing Time</p>
                <p className="font-medium">
                  Once submitted, our data privacy team will verify the request and complete the deletion process within <span className="text-accent font-bold">48–72 hours</span>. You will receive an email confirmation once completed.
                </p>
              </div>
            </div>

            {/* Right side: Delete Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl md:rounded-[2.5rem] border border-gray-100 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.08)] p-5 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-2 h-full bg-accent"></div>
                
                {submitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16"
                  >
                    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-green-500 mx-auto mb-6">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl md:text-3xl font-black text-black uppercase mb-3 md:mb-4 tracking-tighter">Deletion Requested</h3>
                    <p className="text-gray-600 text-sm md:text-base mb-6 md:mb-8 font-medium max-w-md mx-auto">
                      Your request has been successfully saved in our system for the email <span className="font-bold text-black">{formState.email}</span>. We will process your deletion request shortly.
                    </p>
                    <Link 
                      href="/"
                      className="inline-flex items-center gap-2 bg-accent hover:bg-black text-white px-8 py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs transition-all shadow-md"
                    >
                      Back to Home
                    </Link>
                  </motion.div>
                ) : (
                  <>
                    <div className="mb-8">
                      <h3 className="text-2xl md:text-3xl font-black text-black uppercase tracking-tight mb-2">Request Form</h3>
                      <p className="text-gray-500 text-sm">Please verify your email address to submit the request.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {errorMsg && (
                        <div className="bg-red-50 border border-red-100 text-red-600 px-4 py-3 rounded-xl text-sm font-medium">
                          {errorMsg}
                        </div>
                      )}

                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1 flex items-center gap-1.5">
                          <Mail className="w-3.5 h-3.5 text-accent" />
                          Registered Email Address *
                        </label>
                        <input 
                          required
                          type="email" 
                          name="email"
                          placeholder="name@example.com"
                          className={`w-full bg-gray-50 border ${validationErrors.email ? 'border-red-400 focus:ring-red-200' : 'border-transparent focus:border-accent/30'} focus:bg-white px-6 py-4 rounded-xl text-black outline-none transition-all duration-300 font-medium`}
                          value={formState.email}
                          onChange={handleInputChange}
                          disabled={isSubmitting}
                        />
                        {validationErrors.email && (
                          <p className="text-red-500 text-xs mt-1.5 font-semibold">{validationErrors.email}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1 flex items-center gap-1.5">
                          <MessageSquare className="w-3.5 h-3.5 text-accent" />
                          Reason for account deletion *
                        </label>
                        <textarea 
                          required
                          name="reason"
                          rows={4}
                          placeholder="Please tell us why you wish to delete your account..."
                          className={`w-full bg-gray-50 border ${validationErrors.reason ? 'border-red-400 focus:ring-red-200' : 'border-transparent focus:border-accent/30'} focus:bg-white px-6 py-4 rounded-xl text-black outline-none transition-all duration-300 font-medium resize-none`}
                          value={formState.reason}
                          onChange={handleInputChange}
                          disabled={isSubmitting}
                        ></textarea>
                        {validationErrors.reason && (
                          <p className="text-red-500 text-xs mt-1.5 font-semibold">{validationErrors.reason}</p>
                        )}
                      </div>

                      <button 
                        disabled={isSubmitting}
                        type="submit" 
                        className="w-full bg-accent hover:bg-black text-white px-8 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-sm transition-all shadow-[0_15px_30px_rgba(230,43,43,0.25)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)] active:scale-[0.98] flex items-center justify-center gap-3 disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                        ) : (
                          <>
                            Submit Deletion Request
                            <ArrowRight className="w-4 h-4" />
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
    </main>
  );
}
