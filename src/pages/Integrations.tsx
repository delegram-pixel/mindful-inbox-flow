
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Integrations = () => {
  const integrations = [
    {
      name: 'Gmail',
      description: 'Connect your Gmail account for smart inbox management.',
      icon: '📧'
    },
    {
      name: 'Outlook',
      description: 'Integrate with Microsoft Outlook for comprehensive email handling.',
      icon: '📨'
    },
    {
      name: 'Slack',
      description: 'Keep track of important Slack messages and notifications.',
      icon: '💬'
    },
    {
      name: 'SMS',
      description: 'Never miss important text messages with SMS integration.',
      icon: '📱'
    },
    {
      name: 'Notion',
      description: 'Sync your Notion workspace with Smart Inbox AI.',
      icon: '📝'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-ivory">
      <Header />
      <main className="flex-1 py-12 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-cocoa mb-4">
              Integrations
            </h1>
            <p className="text-xl text-cocoa-light max-w-3xl mx-auto">
              Connect Smart Inbox AI with your favorite tools and services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrations.map((integration) => (
              <div key={integration.name} className="bg-white/50 backdrop-blur-sm rounded-lg p-8 shadow hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">{integration.icon}</div>
                <h3 className="text-xl font-semibold text-cocoa mb-2">{integration.name}</h3>
                <p className="text-cocoa-light">{integration.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Integrations;
