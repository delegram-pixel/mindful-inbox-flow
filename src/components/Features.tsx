
import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col p-6 bg-white/50 backdrop-blur-sm rounded-lg shadow cozy-shadow hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px]">
      <div className="h-12 w-12 flex items-center justify-center rounded-full bg-cocoa/10 text-cocoa mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-cocoa mb-2">{title}</h3>
      <p className="text-cocoa-light">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  // You would typically import these from a component library like lucide-react or heroicons
  // Here, we're just using simple SVG markup for the example
  const categorizeIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
    </svg>
  );

  const connectIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 17H7A5 5 0 0 1 7 7h2" />
      <path d="M15 7h2a5 5 0 1 1 0 10h-2" />
      <line x1="8" y1="12" x2="16" y2="12" />
    </svg>
  );

  const summaryIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="8" y1="6" x2="21" y2="6" />
      <line x1="8" y1="12" x2="21" y2="12" />
      <line x1="8" y1="18" x2="21" y2="18" />
      <line x1="3" y1="6" x2="3.01" y2="6" />
      <line x1="3" y1="12" x2="3.01" y2="12" />
      <line x1="3" y1="18" x2="3.01" y2="18" />
    </svg>
  );

  const customizeIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  );

  const notifyIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  );

  const learnIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );

  return (
    <section id="features" className="w-full py-12 md:py-24 bg-ivory">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-cocoa">
            Smart Features for Smart Inboxes
          </h2>
          <p className="mt-4 text-xl text-cocoa-light max-w-3xl mx-auto">
            Our intelligent AI analyzes your messages, so you can focus on what truly matters.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            title="Smart Categorization"
            description="Automatically sort messages into tasks, reminders, events, notes, and junk."
            icon={categorizeIcon}
          />
          <FeatureCard
            title="Multiple Integrations"
            description="Connect your Gmail, Outlook, Slack, SMS, and Notion accounts."
            icon={connectIcon}
          />
          <FeatureCard
            title="Daily & Weekly Summaries"
            description="Get organized reports of your most important messages and actionable items."
            icon={summaryIcon}
          />
          <FeatureCard
            title="Customizable Labels"
            description="Create your own categories and rules to match your workflow."
            icon={customizeIcon}
          />
          <FeatureCard
            title="Smart Notifications"
            description="Receive alerts only for what matters, when it matters."
            icon={notifyIcon}
          />
          <FeatureCard
            title="AI That Learns"
            description="Our system improves with your feedback, getting smarter over time."
            icon={learnIcon}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
