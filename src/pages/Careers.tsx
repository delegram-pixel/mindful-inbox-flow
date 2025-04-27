
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Careers = () => {
  const positions = [
    {
      title: 'AI Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time'
    },
    {
      title: 'Product Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time'
    },
    {
      title: 'Frontend Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-ivory">
      <Header />
      <main className="flex-1 py-12 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-cocoa mb-4">
              Join Our Team
            </h1>
            <p className="text-xl text-cocoa-light max-w-3xl mx-auto">
              Help us build the future of intelligent communication management.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-semibold text-cocoa mb-4">Why Work With Us</h2>
              <ul className="space-y-4 text-cocoa-light">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Work remotely from anywhere in the world</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Competitive salary and equity options</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Flexible working hours and unlimited PTO</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Health insurance and wellness benefits</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Learning and development budget</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-lg p-8 shadow">
              <h2 className="text-2xl font-semibold text-cocoa mb-4">Our Values</h2>
              <ul className="space-y-4 text-cocoa-light">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Innovation at our core</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>User privacy first</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Remote-first culture</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Continuous learning</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-cocoa mb-8 text-center">Open Positions</h2>
            <div className="space-y-6 max-w-4xl mx-auto">
              {positions.map((position, index) => (
                <div key={index} className="bg-white/50 backdrop-blur-sm rounded-lg p-6 shadow">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-cocoa">{position.title}</h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="text-sm text-cocoa-light">{position.department}</span>
                        <span className="text-sm text-cocoa-light">•</span>
                        <span className="text-sm text-cocoa-light">{position.location}</span>
                        <span className="text-sm text-cocoa-light">•</span>
                        <span className="text-sm text-cocoa-light">{position.type}</span>
                      </div>
                    </div>
                    <Button variant="outline" className="border-cocoa text-cocoa hover:bg-cocoa/5">
                      Apply Now
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
