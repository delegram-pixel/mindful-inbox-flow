
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  const values = [
    {
      title: 'Innovation',
      description: 'We push the boundaries of AI to solve real communication challenges.'
    },
    {
      title: 'Privacy',
      description: 'Your data security and privacy are at the core of everything we do.'
    },
    {
      title: 'Simplicity',
      description: 'We believe in making complex technology simple and accessible.'
    },
    {
      title: 'Impact',
      description: 'Our success is measured by how much time we save our users.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-ivory">
      <Header />
      <main className="flex-1 py-12 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-cocoa mb-4">
              About Smart Inbox AI
            </h1>
            <p className="text-xl text-cocoa-light max-w-3xl mx-auto">
              We're on a mission to help professionals take control of their communication.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-semibold text-cocoa mb-4">Our Story</h2>
              <p className="text-cocoa-light mb-4">
                Smart Inbox AI was born from a simple observation: people spend too much time managing their communications instead of focusing on what truly matters.
              </p>
              <p className="text-cocoa-light">
                We built this platform to help busy professionals regain control of their time and attention through intelligent message management.
              </p>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-lg p-8 shadow">
              <h2 className="text-2xl font-semibold text-cocoa mb-4">Our Mission</h2>
              <p className="text-cocoa-light">
                To revolutionize how professionals handle their daily communications by leveraging AI to create more meaningful and productive workflows.
              </p>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-cocoa mb-8 text-center">Our Values</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white/50 backdrop-blur-sm rounded-lg p-6 shadow">
                  <h3 className="text-xl font-semibold text-cocoa mb-2">{value.title}</h3>
                  <p className="text-cocoa-light">{value.description}</p>
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

export default About;
