
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Cookies = () => {
  return (
    <div className="min-h-screen flex flex-col bg-ivory">
      <Header />
      <main className="flex-1 py-12 md:py-24">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-cocoa mb-8">
            Cookie Policy
          </h1>
          
          <div className="prose prose-cocoa max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-cocoa mb-4">1. What Are Cookies?</h2>
              <p className="text-cocoa-light mb-4">
                Cookies are small text files that are stored on your device when you visit our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-cocoa mb-4">2. How We Use Cookies</h2>
              <p className="text-cocoa-light mb-4">
                We use cookies to:
              </p>
              <ul className="list-disc pl-6 text-cocoa-light mb-4">
                <li>Remember your preferences</li>
                <li>Understand how you use our website</li>
                <li>Improve your experience</li>
                <li>Provide personalized content</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-cocoa mb-4">3. Types of Cookies We Use</h2>
              <ul className="list-disc pl-6 text-cocoa-light mb-4">
                <li>Essential cookies: Required for basic site functionality</li>
                <li>Analytics cookies: Help us understand site usage</li>
                <li>Preference cookies: Remember your settings</li>
                <li>Marketing cookies: Used for targeted advertising</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-cocoa mb-4">4. Managing Cookies</h2>
              <p className="text-cocoa-light mb-4">
                You can control cookies through your browser settings. However, disabling certain cookies may limit your ability to use some features of our service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-cocoa mb-4">5. Contact Us</h2>
              <p className="text-cocoa-light">
                If you have questions about our Cookie Policy, please contact us at privacy@smartinboxai.com
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cookies;
