
import React from 'react';
import Dashboard from '@/components/dashboard/Dashboard';

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-ivory">
      <div className="bg-cocoa text-ivory py-4 border-b border-cocoa/10">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-xl font-bold">Smart Inbox AI</span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-1 rounded-full hover:bg-cocoa-light transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
            </button>
            <div className="w-8 h-8 rounded-full bg-cocoa-light flex items-center justify-center">
              <span className="text-sm font-medium">JD</span>
            </div>
          </div>
        </div>
      </div>
      <Dashboard />
    </div>
  );
};

export default DashboardPage;
