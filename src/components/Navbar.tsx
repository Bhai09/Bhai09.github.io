import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Team', href: '#team' },
  { name: 'Contact', href: '#contact' }
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (isMobile) {
    return (
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-md' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              NicheCreators
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="py-4"
            >
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-white hover:text-purple-400 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </motion.div>
          )}
        </div>
      </nav>
    );
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-xl" />
        <div className="relative bg-gray-900/90 backdrop-blur-md rounded-full border border-gray-700 px-8 py-4">
          <div className="flex items-center gap-8">
            {navItems.map((item, index) => {
              const rotation = (360 / navItems.length) * index;
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-purple-400 transition-colors font-medium"
                  style={{ fontFamily: 'Orbitron, sans-serif' }}
                  whileHover={{
                    scale: 1.1,
                    rotate: rotation,
                    transition: { duration: 0.2 }
                  }}
                >
                  {item.name}
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}