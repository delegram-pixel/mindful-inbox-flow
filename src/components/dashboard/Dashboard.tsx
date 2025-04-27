
import React from 'react';
import InboxCard from './InboxCard';
import { CategoryType } from '@/components/ui/CategoryBadge';

const Dashboard: React.FC = () => {
  // Mock data for demonstration
  const mockMessages = {
    tasks: [
      {
        id: '1',
        title: 'Review Q2 Marketing Strategy',
        content: 'Please review the Q2 marketing strategy document by EOD. Need your input before the meeting tomorrow.',
        source: 'Gmail',
        category: 'task' as CategoryType,
        date: new Date(new Date().setHours(new Date().getHours() - 3)),
        isRead: false,
      },
      {
        id: '2',
        title: 'Update project timeline',
        content: 'Can you update the project timeline with the new deadlines we discussed yesterday?',
        source: 'Slack',
        category: 'task' as CategoryType,
        date: new Date(new Date().setHours(new Date().getHours() - 5)),
        isRead: true,
      }
    ],
    reminders: [
      {
        id: '3',
        title: 'Team lunch tomorrow',
        content: 'Just a friendly reminder about our team lunch tomorrow at 12:30 PM at the Italian restaurant.',
        source: 'Outlook',
        category: 'reminder' as CategoryType,
        date: new Date(new Date().setHours(new Date().getHours() - 8)),
        isRead: false,
      }
    ],
    events: [
      {
        id: '4',
        title: 'Quarterly planning session',
        content: 'The quarterly planning session is scheduled for next Monday at 9 AM in the main conference room.',
        source: 'Calendar',
        category: 'event' as CategoryType,
        date: new Date(new Date().setDate(new Date().getDate() - 1)),
        isRead: true,
      }
    ],
    notes: [
      {
        id: '5',
        title: 'Ideas for new product features',
        content: 'Here are some ideas for new product features we discussed: 1. AI-powered recommendations, 2. Dark mode, 3. Export to PDF',
        source: 'Notion',
        category: 'note' as CategoryType,
        date: new Date(new Date().setDate(new Date().getDate() - 2)),
        isRead: true,
      }
    ],
  };

  // Simple Icons for each category
  const icons = {
    task: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    reminder: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
    event: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    note: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  };

  return (
    <div className="container px-4 mx-auto py-8">
      <div className="flex flex-col md:flex-row items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-cocoa">My Smart Inbox</h1>
        <div className="flex items-center mt-4 md:mt-0">
          <button className="text-cocoa hover:text-cocoa-light mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
          <button className="text-cocoa hover:text-cocoa-light mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </button>
          <button className="text-cocoa hover:text-cocoa-light">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="1" />
              <circle cx="19" cy="12" r="1" />
              <circle cx="5" cy="12" r="1" />
            </svg>
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InboxCard 
          category="task" 
          messages={mockMessages.tasks} 
          icon={icons.task}
        />
        <InboxCard 
          category="reminder" 
          messages={mockMessages.reminders} 
          icon={icons.reminder}
        />
        <InboxCard 
          category="event" 
          messages={mockMessages.events} 
          icon={icons.event}
        />
        <InboxCard 
          category="note" 
          messages={mockMessages.notes} 
          icon={icons.note}
        />
      </div>
    </div>
  );
};

export default Dashboard;
