import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 max-w-[1400px] mx-auto w-full bg-brand-bg/80 backdrop-blur-sm"
    >
      {/* Links - Visible on mobile (Left), Desktop (Left) */}
      <div className="flex items-center gap-3 md:gap-8 text-xs md:text-sm font-medium text-brand-dark/80">
        <Link to="/about" className="hover:text-brand-dark transition-colors">About</Link>
        <Link to="/case-studies" className="hover:text-brand-dark transition-colors whitespace-nowrap">Case Studies</Link>
        <Link to="/news" className="hover:text-brand-dark transition-colors">News</Link>
      </div>

      {/* Logo - Mobile (Right via flex), Desktop (Absolute Center) */}
      <div className="md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
        <Link to="/" className="text-2xl md:text-4xl font-serif tracking-tight text-brand-dark">
          Jane
        </Link>
      </div>

      {/* CTA - Hidden on mobile, Visible on Desktop (Right) */}
      <div className="hidden md:block">
        <Link 
          to="/book-call" 
          className="bg-brand-primary text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-black transition-all hover:scale-105 active:scale-95 duration-300"
        >
          Book a free call
        </Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;
