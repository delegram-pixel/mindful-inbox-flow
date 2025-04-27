
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Pricing = () => {
  return (
    <div className="min-h-screen flex flex-col bg-ivory">
      <Header />
      <main className="flex-1 py-12 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-cocoa mb-4">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-cocoa-light max-w-3xl mx-auto">
              Start organizing your inbox smarter with our free plan.
              Upgrade anytime for more powerful features.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <div className="bg-white/50 backdrop-blur-sm rounded-lg p-8 shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-2xl font-semibold text-cocoa mb-4">Free</h3>
              <p className="text-4xl font-bold text-cocoa mb-6">$0<span className="text-lg font-normal">/mo</span></p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-cocoa-light">
                  <span className="mr-2">✓</span> Basic email integration
                </li>
                <li className="flex items-center text-cocoa-light">
                  <span className="mr-2">✓</span> Simple categorization
                </li>
                <li className="flex items-center text-cocoa-light">
                  <span className="mr-2">✓</span> Weekly summaries
                </li>
              </ul>
            </div>

            {/* Pro Plan */}
            <div className="bg-cocoa text-ivory rounded-lg p-8 shadow-lg hover:shadow-xl transition-all transform scale-105">
              <h3 className="text-2xl font-semibold mb-4">Pro</h3>
              <p className="text-4xl font-bold mb-6">$12<span className="text-lg font-normal">/mo</span></p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="mr-2">✓</span> All Free features
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span> Multiple integrations
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span> Advanced AI categorization
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span> Daily summaries
                </li>
              </ul>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white/50 backdrop-blur-sm rounded-lg p-8 shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-2xl font-semibold text-cocoa mb-4">Enterprise</h3>
              <p className="text-4xl font-bold text-cocoa mb-6">Custom</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-cocoa-light">
                  <span className="mr-2">✓</span> All Pro features
                </li>
                <li className="flex items-center text-cocoa-light">
                  <span className="mr-2">✓</span> Custom integrations
                </li>
                <li className="flex items-center text-cocoa-light">
                  <span className="mr-2">✓</span> Dedicated support
                </li>
                <li className="flex items-center text-cocoa-light">
                  <span className="mr-2">✓</span> SLA guarantees
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
