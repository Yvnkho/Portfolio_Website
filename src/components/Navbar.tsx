import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, Github, Linkedin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'About', href: '/#about' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Contact', href: '/#contact' },
  ];

  const isHomePage = location.pathname === '/';

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-2 bg-white/90 dark:bg-dark-800/90 shadow-md backdrop-blur-md' 
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-xl font-bold text-primary-600 dark:text-primary-400"
            >
              <Shield size={24} className="text-secondary-500" />
              <span className="font-mono">Yankho Kamtukulo</span>
            </Link>
            <div className="flex items-center space-x-3 ml-4">
              <a
                href="https://x.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="X (formerly Twitter)"
              >
                <span className="font-bold text-lg">𝕏</span>
              </a>
              <a
                href="https://github.com/Yvnkho"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/yankho-kamtukulo-91127129b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BgyaVPY%2BxR0uSNXbA4hqrRQ%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={isHomePage ? link.href : `/${link.href}`}
                className="text-dark-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
            <ThemeToggle />
          </div>

          <div className="flex items-center md:hidden space-x-4">
            <ThemeToggle />
            <button 
              onClick={toggleMenu}
              className="text-dark-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-dark-600">
            <div className="flex flex-col space-y-4 mt-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={isHomePage ? link.href : `/${link.href}`}
                  className="text-dark-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;