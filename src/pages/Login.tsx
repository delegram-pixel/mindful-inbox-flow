
import React from 'react';
import Header from '@/components/Header';
import AuthForm from '@/components/auth/AuthForm';
import Footer from '@/components/Footer';

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-ivory to-ivory-dark">
      <Header />
      <main className="flex-1 flex items-center justify-center py-12">
        <AuthForm mode="login" />
      </main>
      <Footer />
    </div>
  );
};

export default Login;
