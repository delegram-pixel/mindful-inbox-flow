
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col bg-ivory">
      <Header />
      <main className="flex-1 py-12 md:py-24">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-cocoa mb-8">
            Terms of Service
          </h1>
          
          <div className="prose prose-cocoa max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-cocoa mb-4">1. Acceptance of Terms</h2>
              <p className="text-cocoa-light mb-4">
                By accessing or using Smart Inbox AI, you agree to be bound by these Terms of Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-cocoa mb-4">2. Use of Services</h2>
              <p className="text-cocoa-light mb-4">
                You agree to use the services only for lawful purposes and in accordance with these Terms.
              </p>
              <ul className="list-disc pl-6 text-cocoa-light mb-4">
                <li>Maintain accurate account information</li>
                <li>Protect your account credentials</li>
                <li>Comply with all applicable laws</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-cocoa mb-4">3. Account Terms</h2>
              <p className="text-cocoa-light mb-4">
                You are responsible for:
              </p>
              <ul className="list-disc pl-6 text-cocoa-light mb-4">
                <li>Maintaining the security of your account</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us of any unauthorized use</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-cocoa mb-4">4. Intellectual Property</h2>
              <p className="text-cocoa-light mb-4">
                The service and its contents are owned by Smart Inbox AI and protected by copyright and other laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-cocoa mb-4">5. Contact</h2>
              <p className="text-cocoa-light">
                For any questions about these Terms, please contact us at legal@smartinboxai.com
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
