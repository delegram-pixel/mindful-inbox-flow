
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Roadmap = () => {
  const roadmapItems = [
    {
      quarter: 'Q2 2024',
      title: 'Enhanced AI Processing',
      description: 'Improved message categorization with advanced AI models.',
      status: 'In Progress'
    },
    {
      quarter: 'Q3 2024',
      title: 'Mobile Apps',
      description: 'Native iOS and Android applications for on-the-go access.',
      status: 'Planned'
    },
    {
      quarter: 'Q3 2024',
      title: 'Team Collaboration',
      description: 'Shared inboxes and team-based workflows.',
      status: 'Planned'
    },
    {
      quarter: 'Q4 2024',
      title: 'Advanced Analytics',
      description: 'Detailed insights into communication patterns and productivity.',
      status: 'Planned'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-ivory">
      <Header />
      <main className="flex-1 py-12 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-cocoa mb-4">
              Product Roadmap
            </h1>
            <p className="text-xl text-cocoa-light max-w-3xl mx-auto">
              See what's next for Smart Inbox AI and track our progress.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {roadmapItems.map((item, index) => (
                <div key={index} className="relative pl-8 pb-8 border-l-2 border-cocoa/20 last:border-0">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-cocoa"></div>
                  <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 shadow">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-cocoa-light">{item.quarter}</span>
                      <span className={`text-sm px-3 py-1 rounded-full ${
                        item.status === 'In Progress' 
                          ? 'bg-cocoa text-ivory' 
                          : 'bg-cocoa/10 text-cocoa'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-cocoa mb-2">{item.title}</h3>
                    <p className="text-cocoa-light">{item.description}</p>
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

export default Roadmap;
