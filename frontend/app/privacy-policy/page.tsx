"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, ArrowLeft, Lock } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
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
              <Shield className="w-4 h-4" />
              <span>Data Protection</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-6xl font-black uppercase text-black mb-4 md:mb-6 tracking-tighter leading-none"
            >
              Privacy <span className="text-accent underline decoration-accent/20 underline-offset-8">Policy</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm md:text-lg text-gray-600 font-medium max-w-2xl mx-auto"
            >
              We value your privacy and appreciate your trust in us. This policy outlines how we protect and process your digital personal data.
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
              
              <h2 className="text-2xl font-black uppercase text-black mb-4 border-b border-gray-100 pb-2">1. OBJECTIVE:</h2>
              <div className="space-y-4 text-gray-600 mb-8">
                <p>
                  <strong>1.1. FIXWHEEL</strong> (“Company”/ “FIXWHEEL”/ “We”/ “Us” or “Our”) recognizes the importance of maintaining your privacy. We value your privacy and appreciate your trust in us. This Data Protection and Privacy Policy (<strong>“Policy”</strong>) describes the terms of processing of digital personal data of individuals, group of individuals, entities and group of entities (<strong>“You”</strong> or <strong>“User”</strong>), who upon use of our platform, consent to submit their Personal Data (as defined below) and how we treat user information collected on the platform <Link href="/" className="text-accent hover:underline">https://fixwheel.app/</Link> and other offline sources (<strong>“Platform”</strong>).
                </p>
                <p>This Policy applies to current and former visitors to our website and to our online customers who:</p>
                <ul className="list-disc pl-8 space-y-1">
                  <li>Visit our FixWheel App for the purpose of browsing; or</li>
                  <li>Are customers who buy Services offered on the FixWheel App; or</li>
                  <li>Are partner brands using our Services; or</li>
                  <li>Are users of any system set up on the FixWheel App to provide a better consumer experience (Assistant / Chats / Pop-ups chat boxes etc.); and</li>
                  <li>Anyone contacting customer services.</li>
                </ul>
                <p>By consenting to the contents of the Privacy notice and this Policy, you agree to our collection and processing of your data.</p>
                <p>
                  <strong>1.2.</strong> This Policy lays down the norms that govern the use, disclosure and sharing of information about the registered users of the Company.
                </p>
              </div>

              <h2 className="text-2xl font-black uppercase text-black mt-8 mb-4 border-b border-gray-100 pb-2">2. SCOPE AND APPLICABILITY:</h2>
              <div className="space-y-4 text-gray-600 mb-8">
                <p><strong>2.1.</strong> This Policy applies to all data i.e. representation of information, facts, concepts, opinions or instructions capable of processing or interpreting (<strong>“Personal Data”</strong>) which the User submits to the platform of the Company with its own free, specific, informed, unconditional and unambiguous consent.</p>
                <p><strong>2.2.</strong> This Policy aims to be and make the User compliant with relevant statutory and regulatory requirements affecting Data Protection and Data Privacy laws including but not limited to the Digital Personal Data Protection Act 2023.</p>
                <p><strong>2.3.</strong> The Policy aims to describe the manner in which your Data is stored and processed by us.</p>
                <p><strong>2.4.</strong> The Company reserves the right to update this Policy and such changes will be posted on this page. Where the Company requires any information in addition to the information stated herein, the Company shall issue a fresh Privacy Notice for the information and consent of the User.</p>
              </div>

              <h2 className="text-2xl font-black uppercase text-black mt-8 mb-4 border-b border-gray-100 pb-2">3. WHAT PERSONAL DATA MAY BE COLLECTED:</h2>
              <div className="space-y-4 text-gray-600 mb-8">
                <p>We may collect the following Personal Data and Non-Personal Data when you use the Platform:</p>
                
                <h3 className="text-xl font-bold text-black mt-4 mb-2">a) Personal Information:</h3>
                <ul className="list-disc pl-8 space-y-2">
                  <li>Information provided by you for using our services, such as your Name, mobile number, email, password, date of birth, residential address, gender, marital status, Permanent Account Number (PAN), your bank details, etc.</li>
                  <li>Additional information based on the services obtained from the User as detailed in the Notice and at the discretion of the User.</li>
                  <li>For use of certain services, we may require performance of Know Your Customer registration check and register / update your KYC if not already registered / updated. In such cases, we will require you to provide your KYC information, upload documentary evidence of your identity, address and financial details and record a live video interaction through the device in use that clearly shows your face to establish liveliness and verify that it’s you who is accessing our application.</li>
                  <li>We may also retrieve your information from SMS. Our FixWheel App will provide you with a unique time-bound one-time password (<strong>“OTP”</strong>). This OTP shall be shared via your network carriers SMS services, and will ensure that you have completed a successful registration on the FixWheel App. We use an OTP based log-in system, which provides security and ease of access to the FixWheel App.</li>
                  <li>During the use of our services, we will collect information about your transaction history, transaction status and other transaction details.</li>
                  <li>When you access the Platform through the mobile application, we will receive demographic information and profile data about User’s activity. We identify and use your location, IP address, make, model and the unique identifier of the device in use.</li>
                  <li>When you interact with our customer support systems including through chat bots, email or call, we record these interactions.</li>
                </ul>

                <h3 className="text-xl font-bold text-black mt-4 mb-2">b) Non Personal Information:</h3>
                <ul className="list-disc pl-8 space-y-2">
                  <li>When you open our mobile app, we collect and store information to enable us to provide an online experience that matches your device. The information collected includes the type and address of the device you use, browser and its version, the operating system and its version you are using and the website from which you came to the Platform.</li>
                  <li>When you install and access our mobile applications through a mobile device, we collect information including your location, IP address, make, model and the unique identifier of the device in use, the browser and its version, the operating system installed on the device and its version.</li>
                  <li>When you browse our site or receive an email from us, we and the companies we work with, use cookies and / or pixel tags to collect information and store your online preferences. Cookies are widely used and most browsers are set up to accept them automatically. If you would prefer, you can choose to not accept cookies by disabling the same through browser settings.</li>
                  <li>Cookies and pixel tags help us improve your online experience. This comprises, inter alia, your response to any of our emails, the time and duration of your visits to our site and pages you viewed while on our site.</li>
                </ul>

                <h3 className="text-xl font-bold text-black mt-4 mb-2">c) Payment Information:</h3>
                <p>
                  If you transact with Us, We collect some additional information, such as a billing address, bank details, credit / debit card number, credit / debit card expiration date and / or other payment instrument details and tracking information from cheques or money orders as the case may be. You will also provide Us with Your payment transaction information if You choose to pay for the Services available on Our FixWheel App. We will not use Your financial information for any purpose other than to complete a payment transaction with You.
                </p>
                <p>
                  To the extent possible, We provide You the option of not divulging any specific information that You wish for Us not to collect, store or use. We use third-party payment processors for processing payments. We do not store your card data on their servers. Your data is encrypted through the Payment Card Industry Data Security Standard (PCI-DSS) when processing any payment. Your purchase transaction data is only used as long as is necessary to complete your purchase transaction. After that is complete, your purchase transaction information is not saved.
                </p>
                <p>
                  Our payment gateways adhere to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, MasterCard, American Express and Discover. PCI-DSS requirements help ensure the secure handling of credit and debit card information by our store and its service providers.
                </p>
              </div>

              <h2 className="text-2xl font-black uppercase text-black mt-8 mb-4 border-b border-gray-100 pb-2">4. CONSENT FOR PROCESSING PERSONAL DATA:</h2>
              <div className="space-y-4 text-gray-600 mb-8">
                <p><strong>4.1.</strong> The Data Fiduciary i.e. the Company requires processing of the Personal Data of the Data Principal i.e. the User, from time to time for specific purpose. On or before such processing, the Data Fiduciary raises a request to the Data Principal for its consent to such storage and processing which shall be accompanied by a Notice containing the following information:</p>
                <ul className="list-disc pl-8 space-y-1">
                  <li>The Personal Data which is proposed to be processed;</li>
                  <li>The purpose for which the Personal Data is proposed to be processed;</li>
                  <li>The manner in which the Data Principal may withdraw its consent;</li>
                  <li>The manner in which the Data Principal may access grievance redressal mechanism as provided by the Data Fiduciary in respect of any act or omission of the Data Fiduciary in relation to the Personal Data;</li>
                  <li>The manner in which the Data Principal may make a complaint to the Data Protection Board of India as established under the Digital Personal Protection Act 2023. Hereinafter referred to as <strong>“Notice”</strong>.</li>
                </ul>
                <p><strong>4.2.</strong> The Data Fiduciary provides the aforesaid Notice in English or any other language as mentioned under Schedule 8 of the Constitution of India for complete understanding and comprehension by the Data Principal.</p>
                <p><strong>4.3.</strong> The Data Fiduciary only processes the Personal Data of the Data Principal post obtaining consent of the Data Principal in regards to the same.</p>
                <p><strong>4.4.</strong> Once the Data Principal provides its consent to the processing of the Personal Data, it shall be deemed that the Data Principal has read and understood the contents of the Notice and the consent given thereafter is free, specific, informed, unconditional and unambiguous and shall signify an agreement to the processing of the Personal Data for the purpose as mentioned in the Notice.</p>
                <p><strong>4.5.</strong> We do not knowingly collect or solicit Personal Information from anyone under the age of 18 or knowingly allow such person to register for the Services on the FixWheel App without the verifiable consent of a parent or a lawful guardian. If you are under 18, please do not attempt to register for the Services or send any information about yourself to Us. In the event that we learn that we have collected Personal Information from a child under the age of 18, without parental consent, we will delete that information as quickly as possible. If you believe that we might have any information from or about a child under 18, you can contact us at <a href="mailto:support@fixwheel.app" className="text-accent hover:underline">support@fixwheel.app</a> immediately.</p>
              </div>

              <h2 className="text-2xl font-black uppercase text-black mt-8 mb-4 border-b border-gray-100 pb-2">5. PURPOSE:</h2>
              <div className="space-y-4 text-gray-600 mb-8">
                <p><strong>5.1.</strong> The purpose of processing Personal Data under this policy is detailed as under:</p>
                <ul className="list-disc pl-8 space-y-2">
                  <li>Facilitating various doorstep services provided by us, including onboarding you on the FixWheel App, processing bookings and servicing requests.</li>
                  <li>To detect and protect the Company against error, fraud, and other criminal activity.</li>
                  <li>To enforce Our Terms, and as otherwise described to You at the time of collection.</li>
                  <li>To resolve your queries, concerns and to provide you with support in the case of any issues during the use of our services.</li>
                  <li>Informing you about any offers relating to products and services including sharing of marketing material with you.</li>
                  <li>Streamlining and customizing your experience while using the mobile application or while accessing our services through the mobile browser or our website.</li>
                  <li>General business and operating purposes such as the administration, management and operation of the business including client/user interaction, responding to requests, customizing and improving Services.</li>
                  <li>For Payment, billing and invoicing related purposes.</li>
                  <li>To Store and process Personal Data for any other lawful and specified purpose for which the Data Principal has given its consent.</li>
                  <li>Processing under the order of the State or such government body or authorized office of the State having appropriate jurisdiction.</li>
                </ul>
                <p><strong>5.2.</strong> The purpose of processing Non-Personal Data under this policy is detailed as under:</p>
                <ul className="list-disc pl-8 space-y-2">
                  <li>To improve your experience while using our website, mobile website or mobile application.</li>
                  <li>For troubleshooting and identifying any bugs, operational issues, process bottlenecks, errors, in the application and for analyzing usage and activity trends.</li>
                  <li>Prepare analyses, reports and tools for your use such as insights.</li>
                  <li>To monitor, identify, resolve and prevent and security incidents, frauds, criminal activities, prohibited activities, non-compliances.</li>
                </ul>
                <p><strong>5.3.</strong> FixWheel's use and transfer to any other app of information received from Google APIs will adhere to Google API Services User Data Policy, including the Limited Use requirements.</p>
              </div>

              <h2 className="text-2xl font-black uppercase text-black mt-8 mb-4 border-b border-gray-100 pb-2">6. DISCLOSURE OF INFORMATION:</h2>
              <div className="space-y-4 text-gray-600 mb-8">
                <p><strong>6.1.</strong> As a matter of policy, we do not sell or rent any personally identifiable information about You to any Third Party. Furthermore, we do not share Personal Information with any Third Parties except in the limited circumstances described in this Privacy Policy.</p>
                <p><strong>6.2.</strong> <strong>Service Providers:</strong> We may use third party service providers such as vendors, service providers, partners, etc. to enable us in providing some services to you such as sending e-mail messages to you and tracking them on our behalf, collecting a fee for our services, and providing technical support. We will not share with, or make available, your personal information to any third party without your authorization, except if we are specifically directed or mandated to do so under any Applicable Law, legal proceeding or directive by any administrative, judicial, quasi-judicial, statutory or regulatory body.</p>
                <p><strong>6.3.</strong> <strong>State:</strong> We may require providing Personal Data information to the State or any other authorized government agency as per the applicable law for the time being in force or under any order, decree, judgment of any court having appropriate jurisdiction.</p>
                <p><strong>6.4.</strong> <strong>Analytics:</strong> We use analytics services, including mobile analytics software, to help Us understand and improve how the Service is being used. These services may collect, store and use Personal Information in order to help us understand things like how often people/ customers use the Service, the events that occur within the application, usage, performance data, and from where the application was downloaded.</p>
                <p><strong>6.5.</strong> <strong>Re-organization:</strong> In the event of all or a portion of FIXWHEEL or its assets are acquired by or merged with a third party, Personal Information that we have collected from Users would be one of the assets transferred to or acquired by that third party.</p>
              </div>

              <h2 className="text-2xl font-black uppercase text-black mt-8 mb-4 border-b border-gray-100 pb-2">7. PROTECTION OF PERSONAL INFORMATION:</h2>
              <div className="space-y-4 text-gray-600 mb-8">
                <p><strong>7.1.</strong> We have implemented reasonable steps to ensure that your Personal Data is kept confidential and secure. Registering for a service on our Platform requires creation of Login ID and Password are the primary means to access our services and website, and hence as a security feature, our website requires creation of a password that meets certain complex requirements. We recommend and require that you keep your Login ID and Password confidential.</p>
                <p><strong>7.2.</strong> Every time you login to our website or mobile application, we use, inter alia, the latest authentication and encryption protocols (TLS 1.2) along with session timeouts, firewalls to protect your account from unauthorized access. Your password information is not accessible to anyone including us and can only be changed / updated by you using a two-factor authentication process.</p>
                <p><strong>7.3.</strong> We may offer the use of social logins or identity providers such as Google, Facebook etc. to enable you to conveniently create an account and register yourselves on our website. We require you to maintain adequate confidentiality of your social login information and use this facility after due consideration and with appropriate caution.</p>
              </div>

              <h2 className="text-2xl font-black uppercase text-black mt-8 mb-4 border-b border-gray-100 pb-2">8. WITHDRAWAL OF CONSENT / DELETION OF ACCOUNT:</h2>
              <div className="space-y-4 text-gray-600 mb-8">
                <p><strong>8.1.</strong> You, the Data Principal (as defined under the Digital Personal Data Protection Act 2023), may withdraw your consent for processing of the Personal Data or delete your account at any time by sending an email to <a href="mailto:support@fixwheel.app" className="text-accent hover:underline">support@fixwheel.app</a>.</p>
                <p><strong>8.2.</strong> Upon withdrawal of the consent by you, we shall, within a reasonable time, cease and cause our data processors to cease processing your Personal Data.</p>
                <p><strong>8.3.</strong> Where we are bound under the applicable law or by the order of any authority having appropriate jurisdiction to process Personal Data, we shall process such data irrespective of whether the Data Principal withdraws its consent.</p>
                <p><strong>8.4.</strong> In the event of deletion of account, the profile of the User shall be deleted from the database of the Platform, which also includes Name, email, DOB, Address, Orders, Payment Details.</p>
              </div>

              <h2 className="text-2xl font-black uppercase text-black mt-8 mb-4 border-b border-gray-100 pb-2">9. OBLIGATIONS OF THE DATA FIDUCIARY:</h2>
              <div className="space-y-4 text-gray-600 mb-8">
                <p><strong>9.1.</strong> The Company i.e. the Data Fiduciary is compliant with this policy and the applicable law for the time being in force.</p>
                <p><strong>9.2.</strong> We protect the personal data in its possession or under its control by taking reasonable security safeguards to prevent personal data breach.</p>
                <p><strong>9.3.</strong> We have implemented measures to erase or cause its data processors to erase such personal data that was made available by you in the event you withdraw your consent or where the specified purpose for which the Personal Data is obtained is no longer being served.</p>
                <p><strong>9.4.</strong> We shall upon intimation by you of correction, completion or updating of your Personal Data correct such inaccurate Personal Data, complete such incomplete Personal Data or update such Personal Data as the same may be.</p>
              </div>

              <h2 className="text-2xl font-black uppercase text-black mt-8 mb-4 border-b border-gray-100 pb-2">10. OBLIGATIONS OF DATA PRINCIPAL:</h2>
              <div className="space-y-4 text-gray-600 mb-8">
                <p><strong>10.1.</strong> You shall ensure that the information submitted to us is accurate and complete.</p>
                <p><strong>10.2.</strong> The Data Principal i.e. you, shall nominate any other individual who shall in the event of death or incapacity of the Data Principal exercise the rights of the Data Principal in accordance with the provisions of this Policy.</p>
                <p><strong>10.3.</strong> You shall comply with the provisions of all applicable laws for the time being in force, and shall not impersonate another person while providing your Personal Data.</p>
              </div>

              <h2 className="text-2xl font-black uppercase text-black mt-8 mb-4 border-b border-gray-100 pb-2">11. DATA PROTECTION OFFICER & CONTACT:</h2>
              <div className="space-y-4 text-gray-600 mb-8">
                <p><strong>11.1.</strong> The Data Fiduciary has appointed a Data Protection Officer to address any queries or grievances. You can contact us for assistance on the following details:</p>
                <ul className="list-disc pl-8 space-y-1">
                  <li><strong>Email ID:</strong> <a href="mailto:support@fixwheel.app" className="text-accent hover:underline">support@fixwheel.app</a></li>
                  <li><strong>Support Channel:</strong> Physical or electronic communication via website contact form.</li>
                </ul>
              </div>

              <h2 className="text-2xl font-black uppercase text-black mt-8 mb-4 border-b border-gray-100 pb-2">12. ADVISORY NOTE:</h2>
              <div className="space-y-4 text-gray-600 mb-8">
                <p>This Privacy Policy is published in compliance with, inter alia:</p>
                <ul className="list-disc pl-8 space-y-1">
                  <li>Section 43A of the Information Technology Act, 2000; and</li>
                  <li>Regulation 4 of the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Information) Rules, 2011 (“SPDI Rules”);</li>
                  <li>THE DIGITAL PERSONAL DATA PROTECTION ACT, 2023.</li>
                </ul>
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
