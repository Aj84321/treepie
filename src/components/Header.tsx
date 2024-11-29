import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart, User, Palette } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useAuthStore } from '@/store/authStore';
import { motion, AnimatePresence } from 'framer-motion';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuthStore();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-black">
            Treepie
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/shop" className="text-gray-700 hover:text-black">Shop</Link>
            <Link to="/custom" className="text-gray-700 hover:text-black">Custom Design</Link>
            <Link to="/collections" className="text-gray-700 hover:text-black">Collections</Link>
            <Link to="/about" className="text-gray-700 hover:text-black">About</Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Palette className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="sm">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            {isAuthenticated ? (
              <Button
                variant="outline"
                size="sm"
                onClick={() => logout()}
              >
                Sign Out
              </Button>
            ) : (
              <Link to="/login">
                <Button variant="outline" size="sm">
                  <User className="h-5 w-5" />
                </Button>
              </Link>
            )}
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden"
            >
              <div className="py-4 space-y-4">
                <Link to="/shop" className="block text-gray-700">Shop</Link>
                <Link to="/custom" className="block text-gray-700">Custom Design</Link>
                <Link to="/collections" className="block text-gray-700">Collections</Link>
                <Link to="/about" className="block text-gray-700">About</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};