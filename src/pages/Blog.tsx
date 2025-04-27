
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Blog = () => {
  const posts = [
    {
      title: 'Introducing Smart Inbox AI',
      excerpt: 'Learn how our AI-powered inbox management system can transform your daily workflow.',
      date: 'Apr 15, 2024',
      readTime: '5 min read',
      category: 'Product'
    },
    {
      title: 'The Future of Email Management',
      excerpt: 'Exploring how AI is revolutionizing the way we handle digital communications.',
      date: 'Apr 10, 2024',
      readTime: '7 min read',
      category: 'Industry'
    },
    {
      title: 'Best Practices for Inbox Zero',
      excerpt: 'Tips and tricks to maintain a clean inbox and improve productivity.',
      date: 'Apr 5, 2024',
      readTime: '6 min read',
      category: 'Tips'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-ivory">
      <Header />
      <main className="flex-1 py-12 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-cocoa mb-4">
              Blog
            </h1>
            <p className="text-xl text-cocoa-light max-w-3xl mx-auto">
              Insights, updates, and stories about intelligent inbox management.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {posts.map((post, index) => (
              <article key={index} className="bg-white/50 backdrop-blur-sm rounded-lg shadow overflow-hidden hover:shadow-lg transition-all">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm text-cocoa-light">{post.date}</span>
                    <span className="text-cocoa-light">•</span>
                    <span className="text-sm text-cocoa-light">{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-semibold text-cocoa mb-2">{post.title}</h2>
                  <p className="text-cocoa-light mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm px-3 py-1 rounded-full bg-cocoa/10 text-cocoa">
                      {post.category}
                    </span>
                    <Link 
                      to="#" 
                      className="text-cocoa hover:text-cocoa-light transition-colors"
                    >
                      Read more →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
