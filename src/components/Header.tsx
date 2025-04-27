
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();

  const getInitials = (name: string) => {
    return name
      ?.split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase() || 'U';
  };

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <header className="sticky top-0 w-full bg-ivory border-b border-cocoa/10 z-40">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-cocoa to-cocoa-light bg-clip-text text-transparent">
              Smart Inbox AI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-cocoa hover:text-cocoa-light transition-colors">
              Home
            </Link>
            <Link to="/features" className="text-cocoa hover:text-cocoa-light transition-colors">
              Features
            </Link>
            <Link to="/pricing" className="text-cocoa hover:text-cocoa-light transition-colors">
              Pricing
            </Link>
          </nav>

          {/* Desktop Auth Buttons or Avatar */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger className="focus:outline-none">
                  <Avatar className="h-8 w-8 cursor-pointer">
                    <AvatarImage src={user.user_metadata.avatar_url} />
                    <AvatarFallback>{getInitials(user.user_metadata.full_name || 'User')}</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={handleSignOut} className="text-red-600 cursor-pointer">
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outline" className="border-cocoa text-cocoa hover:bg-cocoa/5">
                    Sign In
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button className="bg-cocoa text-ivory hover:bg-cocoa-light">Get Started</Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-cocoa hover:bg-cocoa/5 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-ivory border-t border-cocoa/10 animate-fade-in">
          <div className="container px-4 py-4 flex flex-col space-y-4">
            <Link
              to="/"
              className="px-4 py-2 text-cocoa hover:bg-cocoa/5 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/features"
              className="px-4 py-2 text-cocoa hover:bg-cocoa/5 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              to="/pricing"
              className="px-4 py-2 text-cocoa hover:bg-cocoa/5 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <div className="flex flex-col space-y-2 pt-2 border-t border-cocoa/10">
              {user ? (
                <Button
                  variant="outline"
                  className="w-full border-red-600 text-red-600 hover:bg-red-50"
                  onClick={handleSignOut}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </Button>
              ) : (
                <>
                  <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="outline" className="w-full border-cocoa text-cocoa">
                      Sign In
                    </Button>
                  </Link>
                  <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                    <Button className="w-full bg-cocoa text-ivory hover:bg-cocoa-light">
                      Get Started
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
