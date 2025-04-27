
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col bg-ivory">
      <Header />
      <main className="flex-1 py-12 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-cocoa mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-cocoa-light max-w-3xl mx-auto">
              Have questions? We're here to help.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="text-2xl font-semibold text-cocoa mb-4">Get in Touch</h2>
              <p className="text-cocoa-light mb-8">
                Fill out the form and we'll get back to you as soon as possible.
              </p>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-cocoa mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border border-cocoa/20 focus:outline-none focus:ring-2 focus:ring-cocoa/20 bg-white/50"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-cocoa mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-lg border border-cocoa/20 focus:outline-none focus:ring-2 focus:ring-cocoa/20 bg-white/50"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-cocoa mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg border border-cocoa/20 focus:outline-none focus:ring-2 focus:ring-cocoa/20 bg-white/50"
                  ></textarea>
                </div>
                
                <Button className="w-full bg-cocoa text-ivory hover:bg-cocoa-light">
                  Send Message
                </Button>
              </form>
            </div>
            
            <div>
              <div className="bg-white/50 backdrop-blur-sm rounded-lg p-8 shadow mb-8">
                <h3 className="text-xl font-semibold text-cocoa mb-4">Office</h3>
                <p className="text-cocoa-light">
                  123 AI Avenue<br />
                  San Francisco, CA 94105<br />
                  United States
                </p>
              </div>
              
              <div className="bg-white/50 backdrop-blur-sm rounded-lg p-8 shadow mb-8">
                <h3 className="text-xl font-semibold text-cocoa mb-4">Support Hours</h3>
                <p className="text-cocoa-light">
                  Monday - Friday<br />
                  9:00 AM - 6:00 PM PST
                </p>
              </div>
              
              <div className="bg-white/50 backdrop-blur-sm rounded-lg p-8 shadow">
                <h3 className="text-xl font-semibold text-cocoa mb-4">Email Us</h3>
                <p className="text-cocoa-light">
                  Support: support@smartinboxai.com<br />
                  Sales: sales@smartinboxai.com<br />
                  Press: press@smartinboxai.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
