import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import { ArrowLeft, Router } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';  // Use React Router's useNavigate instead of Next.js useRouter

interface AuthFormProps {
  mode?: 'login' | 'signup';
}

const AuthForm: React.FC<AuthFormProps> = ({ mode = 'login' }) => {
  const [activeTab, setActiveTab] = useState<string>(mode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { signIn, signUp } = useAuth();
  const navigate = useNavigate(); // Use useNavigate hook from react-router-dom

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (activeTab === 'login') {
        await signIn(email, password);
      } else {
        await signUp(email, password, name);
      }
      // Redirect to home after successful sign-in or sign-up
      navigate('/');  // Home page redirection
    } catch (error) {
      console.error('Authentication error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-4 sm:p-6 lg:p-8 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg cozy-shadow">
      <div className="mb-6">
        <Link to="/" className="flex items-center text-cocoa hover:text-cocoa-light transition-colors">
          <ArrowLeft size={16} className="mr-2" />
          <span>Back to home</span>
        </Link>
      </div>
      
      <h2 className="text-2xl font-bold text-center text-cocoa mb-6">
        {activeTab === 'login' ? 'Sign in to your account' : 'Create an account'}
      </h2>
      
      <Tabs 
        defaultValue={mode} 
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full"
      >
        <TabsList className="grid grid-cols-2 mb-6">
          <TabsTrigger value="login">Sign In</TabsTrigger>
          <TabsTrigger value="signup">Sign Up</TabsTrigger>
        </TabsList>
        
        <TabsContent value="login">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-cocoa">
                Email Address
              </label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-cocoa/20 focus:border-cocoa"
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-sm font-medium text-cocoa">
                  Password
                </label>
                <Link to="/forgot-password" className="text-sm font-medium text-cocoa-light hover:text-cocoa transition-colors">
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-cocoa/20 focus:border-cocoa"
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-cocoa hover:bg-cocoa-light text-ivory"
              disabled={isLoading}
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </Button>
            
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-cocoa/10"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-cocoa-light">Or continue with</span>
              </div>
            </div>
            
            <Button 
              type="button" 
              variant="outline" 
              className="w-full border-cocoa/20 text-cocoa hover:bg-cocoa/5"
              disabled={isLoading}
            >
              Sign in with Google
            </Button>
          </form>
        </TabsContent>
        
        <TabsContent value="signup">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-cocoa">
                Full Name
              </label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border-cocoa/20 focus:border-cocoa"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="signup-email" className="text-sm font-medium text-cocoa">
                Email Address
              </label>
              <Input
                id="signup-email"
                type="email"
                placeholder="name@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-cocoa/20 focus:border-cocoa"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="signup-password" className="text-sm font-medium text-cocoa">
                Password
              </label>
              <Input
                id="signup-password"
                type="password"
                placeholder="••••••••"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-cocoa/20 focus:border-cocoa"
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-cocoa hover:bg-cocoa-light text-ivory"
              disabled={isLoading}
            >
              {isLoading ? 'Creating account...' : 'Create Account'}
            </Button>
          </form>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AuthForm;
