import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'WORK', href: '#work' },
  { name: 'ABOUT', href: '#about' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'CONTACT', href: '#contact' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isScrolled ? 'bg-background/90 backdrop-blur-md border-b border-border py-2' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-500">
          <a href="/" className="font-display font-medium tracking-tight text-text-primary hover:text-white transition-colors">
            JORAWAR SINGH
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-text-secondary hover:text-white transition-colors tracking-wide"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/Jorawar-Singh-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-primary border border-border px-4 py-2 rounded-sm hover:bg-surface-hover hover:border-border-hover transition-all duration-300 hover:-translate-y-0.5 tracking-wide flex items-center gap-1 group/btn"
            >
              RESUME <span className="text-xs group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform duration-300">↗</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-text-primary p-2"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[60] bg-background flex flex-col px-6 py-8"
          >
            <div className="flex justify-between items-center mb-16">
              <span className="font-display font-medium text-xl">JORAWAR</span>
              <button
                className="text-text-primary p-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="flex flex-col gap-8 text-2xl font-display">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-text-secondary hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="/Jorawar-Singh-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white mt-4 inline-flex items-center gap-2"
              >
                RESUME <span className="text-xl">↗</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
