"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowLeft, Shield } from 'lucide-react';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Header Section */}
      <section className="relative pt-20 md:pt-24 pb-12 md:pb-16 bg-gray-50 overflow-hidden">
        {/* Subtle decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -mr-32 -mt-32 blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full -ml-48 -mb-48 blur-3xl opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold uppercase tracking-widest text-xs mb-6"
            >
              <FileText className="w-4 h-4" />
              <span>Legal Documents</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-6xl font-black uppercase text-black mb-4 md:mb-6 tracking-tighter leading-none"
            >
              Terms & <span className="text-accent underline decoration-accent/20 underline-offset-8">Conditions</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm md:text-lg text-gray-600 font-medium max-w-2xl mx-auto"
            >
              Please read these terms and conditions carefully before using our doorstep two-wheeler service platform.
            </motion.p>
          </div>
        </div>
        
        {/* Slanted Bottom decoration */}
        <div className="absolute -bottom-[1px] left-0 right-0 h-16 bg-white [clip-path:polygon(0_100%,100%_100%,100%_0)]" />
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl border border-gray-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)] p-6 md:p-12 prose prose-gray max-w-none">
              
              <p className="text-gray-600 leading-relaxed mb-6">
                The Terms of Use laid down herein (referred to as <strong>“Terms”</strong>) as uploaded on <Link href="/" className="text-accent hover:underline">https://fixwheel.app/</Link> shall govern the usage, rights and liabilities of <strong>FIXWHEEL</strong> (hereinafter referred to as “Company”/ “FIXWHEEL”/ “We”/ “Us” or “Our”) and the User (<strong>“You / User”</strong>) while accessing and using the FIXWHEEL website and mobile application as defined below.
              </p>

              <p className="text-gray-600 leading-relaxed mb-8">
                <strong>FIXWHEEL</strong> is the brand / mark of <strong>FIXWHEEL</strong>. Through its platform <Link href="/" className="text-accent hover:underline">https://fixwheel.app/</Link> the Company is engaged in the business of doorstep maintenance and repair services including but not limited to servicing, cleaning, check-up, dry wash, etc. of two wheeler vehicles.
              </p>

              <p className="text-gray-600 leading-relaxed mb-8">
                These Terms shall govern the legal rights and responsibilities with respect to the present and future User’s access to the Platform. By accessing the Platform and continuing its use thereafter, the User declares that it has read, understood and unconditionally agreed to the contents of these Terms which shall form a binding contract of the User with FIXWHEEL.
              </p>

              <h2 className="text-2xl font-black uppercase text-black mt-8 mb-4 border-b border-gray-100 pb-2">I. DEFINITIONS:</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-8">
                <li><strong>“Platform”</strong> shall mean the mobile application and the website of the Company.</li>
                <li><strong>“Technician” / “Mechanic”</strong> shall mean and include the independent third party Technician engaged with the Company to provide services to the User.</li>
                <li><strong>“User”</strong> shall mean and include the user / customer of the Platform and include an individual who is legally above 18 years of age, of sound mind, and capable of entering into a contract under Indian law.</li>
              </ul>

              <h2 className="text-2xl font-black uppercase text-black mt-8 mb-4 border-b border-gray-100 pb-2">II. USAGE:</h2>
              <div className="space-y-4 text-gray-600 mb-8">
                <p><strong>A.</strong> Any User accessing the Platform for using or otherwise consuming the Service/indulging in surfing or exploring of the Platform shall be bound by these Terms, and all other rules, regulations and policies referred to herein or provided by the Company in relation to any of the Services.</p>
                <p><strong>B.</strong> The Company holds the right to modify the Terms of the present document by posting the same on the Platform without any prior express intimation to the Users. Users are hereby advised to review the Terms periodically and/or every time before using the Mobile Application, as per their convenience. The updated Terms shall supersede the previous versions of the Terms and shall take effect immediately upon the Uploading of the same on the Platform. The continuous use and access to the Platform shall be deemed as an acceptance of the prevalent Terms by the User.</p>
                <p><strong>C.</strong> In the event that the User does not agree with the Terms laid down by the Company, they may choose not to access the Platform or refrain from continuing to use the Platform as the case may be.</p>
                <p><strong>D.</strong> The Company may, subject to the laws laid down and prevalent in India and on the grounds laid down in the present Terms, restrict, suspend or terminate the use of the Platform by any User Account to all or any part of the Platform of any or all of the Company Services. The Grounds for restrictions, suspension or termination shall be as follows:</p>
                <ul className="list-disc pl-8 space-y-1">
                  <li>Breach of the Terms;</li>
                  <li>Access or use of the Application by any User below the age of 18;</li>
                  <li>Where the Company has reasons to believe that the User has conducted any illegitimate transaction against which the Platform may suffer loss / fine / charge;</li>
                  <li>Where the Company has reasons to believe that the User is location spoofing by disguising their location;</li>
                  <li>Falsifying their personal information (including, but not limited to, name, email address, bank details and/or any other information or documentation);</li>
                  <li>Where the User has uploaded text or media which is inappropriate, vulgar, objectionable, defamatory, violent, etc. at the sole discretion of the Company;</li>
                  <li>Any other misuse of the Platform;</li>
                  <li>Any violation of the prevalent laws in force in India.</li>
                </ul>
                <p><strong>E.</strong> The Company shall also hold the right to initiate appropriate civil /criminal action and demand compensation for loss suffered by the Company due to any act as aforementioned in the grounds.</p>
                <p><strong>F.</strong> The Company shall subject to the laws laid down and prevalent in India, at its sole and absolute discretion, change, suspend or discontinue all or any part of the Platform / Services Establish general practices and limits concerning the use of the Platform.</p>
                <p><strong>G.</strong> The User expresses consent to receiving communications such as announcements, administrative messages, and advertisements from the Company or any of its partners, licensors or associates/affiliates over the contact information provided by the User including E-mail and Whatsapp.</p>
                <p><strong>H.</strong> Use of the Platform is subject to existing laws and legal processes. Nothing contained in these Terms and Conditions shall limit Company’s right to comply with governmental, court, and law-enforcement requests or requirements relating to User’s use of the Platform.</p>
              </div>

              <h2 className="text-2xl font-black uppercase text-black mt-8 mb-4 border-b border-gray-100 pb-2">III. INTELLECTUAL PROPERTY:</h2>
              <div className="space-y-4 text-gray-600 mb-8">
                <p><strong>A.</strong> The Platform i.e. FIXWHEEL includes without limitation a combination of content created by the Company its partners, affiliates, licensors, associates and / or submitted by other Users. The Intellectual Property Rights in all software underlying the Platform and material published on the Platforms, including but not limited to all content(s), software, advertisements, written content, photographs, images, illustrations, marks, logos, audio or video clipping and Flash animations shall be owned by the Company. User shall be solely responsible for all content that a User uploads on to the Platform whether in whole or in part.</p>
                <p><strong>B.</strong> User further confirms and undertakes to not display or use the names, logos, marks, labels, trademarks, copyrights or intellectual and proprietary rights of any third party on the Platforms.</p>
                <p><strong>C.</strong> User agrees to indemnify and hold harmless the Company, its directors, employees, affiliates and assigns against all costs, damages, loss and harm including towards litigation costs and counsel fees, in respect of any third party claims that may be initiated arising out of such display or use of the intellectual property of a third party by such User.</p>
              </div>

              <h2 className="text-2xl font-black uppercase text-black mt-8 mb-4 border-b border-gray-100 pb-2">IV. THIRD PARTY SITES, SERVICES AND PRODUCTS:</h2>
              <div className="space-y-4 text-gray-600 mb-8">
                <p><strong>A.</strong> The Platform may contain links to other internet sites owned and operated by third parties.</p>
                <p><strong>B.</strong> Use of each of those external links or third-party sites is subject to the conditions, if any, posted by such sites. The Company does not exercise any control over any internet third-party sites apart from its own Platform and cannot in any manner whatsoever be held responsible for any content on any third-party internet site.</p>
                <p><strong>C.</strong> By entering any third-party website or clicking on any third-party link, the User admits to do so at his own risk and cost and shall not under any circumstances hold the Company liable for any consequence of the User’s actions/visit to such third party sites.</p>
              </div>

              <h2 className="text-2xl font-black uppercase text-black mt-8 mb-4 border-b border-gray-100 pb-2">V. PRIVACY POLICY & COMMUNICATION CONSENT:</h2>
              <div className="space-y-4 text-gray-600 mb-8">
                <p><strong>A.</strong> All information collected from User(s) is subject to Company’s Privacy Policy which is available on <Link href="/terms" className="text-accent hover:underline">https://fixwheel.app/privacy-policy</Link> (or as hosted on our website).</p>
                <p><strong>B.</strong> <strong>COMMUNICATION & TELEMARKETING (UCC) CONSENT:</strong> When a User submits their mobile number on the Platform (including through any enquiry / booking form or pop-up), or contacts the Company by calling or messaging the Company's published phone or WhatsApp numbers, the User expressly consents to be contacted by <strong>FIXWHEEL</strong> in relation to their service request, booking, enquiry and related offers and updates.</p>
                <p><strong>C.</strong> Such consent extends to communications made by automated and voice-bot calls, manual / agent calls, SMS, RCS and WhatsApp messages, sent only to the contact number the User has themselves provided to, or used to contact, the Company. This consent is voluntary, specific and informed, and shall, to the extent permitted under the Telecom Commercial Communications Customer Preference Regulations (TCCCPR) and applicable law, operate as the User's registered opt-in / consent for the said communications notwithstanding any Do-Not-Disturb (DND) preference.</p>
                <p><strong>D.</strong> The Company does not sell, rent or share the User's mobile number or personal data with any unrelated third party for their independent marketing. The Company contacts only those numbers that Users have themselves provided to, or used to contact, the Company.</p>
                <p><strong>E.</strong> The User may withdraw this consent at any time by writing to <a href="mailto:support@fixwheel.app" className="text-accent hover:underline">support@fixwheel.app</a> or by replying STOP to a message, after which the Company shall, within a reasonable period, cease such communications save for transactional messages required to service an active booking or as required under applicable law.</p>
                <p><strong>F.</strong> This Communication & Telemarketing Consent clause is version 1.0, effective 19 May 2026, and forms part of these Terms. The date and source of the User's submission / contact, as recorded in the Company's systems, together with this clause, constitute the User's digital opt-in record.</p>
              </div>

              <h2 className="text-2xl font-black uppercase text-black mt-8 mb-4 border-b border-gray-100 pb-2">VI. USER CONDUCT & INFORMATION:</h2>
              <div className="space-y-4 text-gray-600 mb-8">
                <p><strong>A.</strong> User agrees to provide true, accurate, current, and complete information at the time of registration/booking and at all other times (as required by the Company).</p>
                <p><strong>B.</strong> User is responsible for maintaining the confidentiality of their accounts and passwords and agrees to immediately notify the Company of any unauthorized use of their passwords.</p>
                <p><strong>C.</strong> User agrees not to copy, modify, rent, lease, loan, sell, assign, distribute, reverse engineer, or otherwise transfer any right to the technology or software underlying the Platforms or Company services.</p>
              </div>

              <h2 className="text-2xl font-black uppercase text-black mt-8 mb-4 border-b border-gray-100 pb-2">VII. BOOKINGS & SERVICES:</h2>
              <div className="space-y-4 text-gray-600 mb-8">
                <p><strong>A.</strong> The User may make an Order for services through the Platform and provide the information as requested. Once a technician has accepted the Order and it is confirmed, the User shall receive confirmation and will be required to make payment in accordance with these Terms.</p>
                <p><strong>B.</strong> <strong>LIMITATION:</strong> While using the Platform to conduct transactions with any technicians, Users are responsible for making their own determinations that the technician’s capability and competence are suitable for their requirements. The Platform shall not be responsible for ensuring the standard of quality offered by any technician, and does not hold any responsibility for the opinions, conduct, or actions of the technicians booked through its platform.</p>
                <p><strong>C.</strong> Upon a Customer’s successful completion of placing an Order, we may call the Customer on the mobile number provided by them to confirm certain details of the placed Order, such as the delivery location, price, details of vehicle, and informing the customer about the estimated arrival time of technicians for each Order.</p>
              </div>

              <h2 className="text-2xl font-black uppercase text-black mt-8 mb-4 border-b border-gray-100 pb-2">VIII. PAYMENTS:</h2>
              <div className="space-y-4 text-gray-600 mb-8">
                <p><strong>A.</strong> The Payments made on or through the Platform shall compulsorily be in Indian Rupees (INR).</p>
                <p><strong>B.</strong> The Payments can be made through: Debit Card, Credit Card, UPI, or Cash on delivery.</p>
                <p><strong>C.</strong> The User agrees that FIXWHEEL is authorized to collect, on behalf of the technician, the charges for the products and services provided by the technician, as the case may be.</p>
                <p><strong>D.</strong> FIXWHEEL retains the right to charge a platform fee at its discretion. All charges and fees are inclusive of applicable taxes.</p>
              </div>

              <h2 className="text-2xl font-black uppercase text-black mt-8 mb-4 border-b border-gray-100 pb-2">IX. RELEASE & LIMITATION OF LIABILITY:</h2>
              <div className="space-y-4 text-gray-600 mb-8">
                <p><strong>A.</strong> User shall access the Services provided on the Platform voluntarily and at their own risk. Company shall, under no circumstances be held responsible or liable on account of any loss or damage sustained (including but not limited to any accident, injury, death, loss of property) by User or any other person or entity during the course of access to the Services.</p>
                <p><strong>B.</strong> To the maximum extent permitted by applicable law, the total liability of Company to the User for any damages (regardless of the foundation for the action) shall not exceed in the aggregate the total amount deposited / paid on the Platform by the User for the specific booking in concern.</p>
              </div>

              <h2 className="text-2xl font-black uppercase text-black mt-8 mb-4 border-b border-gray-100 pb-2">X. MECHANIC (PARTNER) SPECIFIC TERMS:</h2>
              <div className="space-y-4 text-gray-600 mb-8">
                <p><strong>A.</strong> The terms set out in this section apply to independent technicians / mechanics ("Mechanic" / "Partner") who register on the Platform through the FixWheel Partner app or interface to provide doorstep two-wheeler maintenance and repair services.</p>
                <p><strong>B.</strong> <strong>RELATIONSHIP:</strong> The Mechanic is an independent service provider and is NOT an employee, agent, partner, or joint venturer of the Company. The Company merely operates the Platform that connects Users with Mechanics.</p>
                <p><strong>C.</strong> <strong>DATA COLLECTION & RECORDING:</strong> By using the Partner App, the Mechanic consents to the collection of precise GPS location data, device battery details, push tokens, and audio recordings of customer interactions during active bookings for quality assurance, dispute resolution, safety, and regulatory compliance.</p>
                <p><strong>D.</strong> <strong>OBLIGATIONS:</strong> Mechanics must arrive at the agreed timeslot, perform services diligently with professional skill, charge only the displayed prices, collect payments only through supported methods, and behave respectfully and professionally at all times.</p>
              </div>

              <div className="mt-12 pt-6 border-t border-gray-100 text-center">
                <Link href="/" className="inline-flex items-center gap-2 text-accent font-bold uppercase tracking-wider text-sm hover:underline">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Home
                </Link>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
