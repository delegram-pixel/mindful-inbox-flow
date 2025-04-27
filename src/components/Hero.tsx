
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-ivory to-ivory-dark">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12">
          <div className="flex flex-col space-y-6 lg:w-1/2 animate-fade-in">
            <div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-cocoa">
                Your Messages,{' '}
                <span className="bg-gradient-to-r from-cocoa to-cocoa-light bg-clip-text text-transparent">
                  Intelligently Organized
                </span>
              </h1>
              <p className="mt-4 text-xl text-cocoa-light md:text-2xl">
                Smart Inbox AI reads your messages and extracts what matters, saving you time and reducing communication overload.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/signup">
                <Button className="bg-cocoa hover:bg-cocoa-light text-ivory text-lg px-8 py-6">
                  Get Started Free
                </Button>
              </Link>
              <Link to="/features">
                <Button variant="outline" className="border-cocoa text-cocoa hover:bg-cocoa/5 text-lg px-8 py-6">
                  Learn More
                </Button>
              </Link>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6 text-cocoa-light">
              <div className="flex items-center gap-1">
                <Check size={18} className="text-cocoa" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-1">
                <Check size={18} className="text-cocoa" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-1">
                <Check size={18} className="text-cocoa" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="relative w-full aspect-video overflow-hidden rounded-lg shadow-2xl cozy-shadow">
              <div className="absolute inset-0 bg-gradient-to-br from-cocoa/80 to-cocoa-light/80 flex items-center justify-center">
                <div className="p-8 bg-ivory/95 rounded-lg shadow-lg max-w-md text-center">
                  <h3 className="text-xl font-medium text-cocoa mb-4">Inbox Overview</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-white/80 rounded-md">
                      <span>Tasks</span>
                      <span className="font-medium">12</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/80 rounded-md">
                      <span>Events</span>
                      <span className="font-medium">5</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/80 rounded-md">
                      <span>Reminders</span>
                      <span className="font-medium">8</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/80 rounded-md">
                      <span>Notes</span>
                      <span className="font-medium">15</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
