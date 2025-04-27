
import React from 'react';
import Header from '@/components/Header';
import Features from '@/components/Features';
import Footer from '@/components/Footer';

const FeaturesPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-ivory">
      <Header />
      <main className="flex-1">
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default FeaturesPage;
