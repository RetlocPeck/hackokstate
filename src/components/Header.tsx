'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Code, Calendar, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { href: '/', label: 'Home', icon: Code },
    { href: '/info', label: 'Info', icon: Calendar },
    { href: '#', label: 'Register', icon: Users, external: true },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-osu-orange rounded-lg flex items-center justify-center group-hover:bg-osu-orange-dark transition-colors">
              <Code className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl text-osu-black">
              Hack OKState <span className="text-osu-orange">'25</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              if (item.external) {
                return (
                  <a
                    key={item.href}
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfkK7cdHguJkm0dvn5fz7TA5MBc9hVRMcQ3lNaG7_nY0gL5SA/viewform?usp=sharing&ouid=110797256475146890415"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-700 hover:text-osu-orange transition-colors font-medium"
                  >
                    <IconComponent className="w-4 h-4" />
                    <span>{item.label}</span>
                  </a>
                );
              }
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center space-x-2 text-gray-700 hover:text-osu-orange transition-colors font-medium"
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-osu-gray-light transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-osu-black" />
            ) : (
              <Menu className="w-6 h-6 text-osu-black" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-gray-200 py-4"
            >
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => {
                  const IconComponent = item.icon;
                  if (item.external) {
                    return (
                      <a
                        key={item.href}
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfkK7cdHguJkm0dvn5fz7TA5MBc9hVRMcQ3lNaG7_nY0gL5SA/viewform?usp=sharing&ouid=110797256475146890415"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center space-x-3 text-gray-700 hover:text-osu-orange transition-colors font-medium py-2"
                      >
                        <IconComponent className="w-5 h-5" />
                        <span>{item.label}</span>
                      </a>
                    );
                  }
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center space-x-3 text-gray-700 hover:text-osu-orange transition-colors font-medium py-2"
                    >
                      <IconComponent className="w-5 h-5" />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}