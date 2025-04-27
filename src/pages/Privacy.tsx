
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-ivory">
      <Header />
      <main className="flex-1 py-12 md:py-24">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-cocoa mb-8">
            Privacy Policy
          </h1>
          
          <div className="prose prose-cocoa max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-cocoa mb-4">1. Introduction</h2>
              <p className="text-cocoa-light mb-4">
                At Smart Inbox AI, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-cocoa mb-4">2. Information We Collect</h2>
              <p className="text-cocoa-light mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 text-cocoa-light mb-4">
                <li>Account information (name, email, password)</li>
                <li>Profile information</li>
                <li>Communication preferences</li>
                <li>Usage data</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-cocoa mb-4">3. How We Use Your Information</h2>
              <p className="text-cocoa-light mb-4">
                We use the collected information to:
              </p>
              <ul className="list-disc pl-6 text-cocoa-light mb-4">
                <li>Provide and maintain our services</li>
                <li>Improve user experience</li>
                <li>Send important notifications</li>
                <li>Analyze usage patterns</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-cocoa mb-4">4. Data Security</h2>
              <p className="text-cocoa-light mb-4">
                We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or deletion.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-cocoa mb-4">5. Contact Us</h2>
              <p className="text-cocoa-light">
                If you have any questions about this Privacy Policy, please contact us at privacy@smartinboxai.com
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
