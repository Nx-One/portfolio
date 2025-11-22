import React from 'react';
import { Link } from 'react-router-dom';
export function Navigation() {
  return <nav className="fixed top-0 left-0 right-0 bg-primary-bg/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-h6 font-semibold text-text-primary hover:text-primary-accent transition-colors">
            FA
          </Link>
          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            <Link to="/" className="text-body text-text-secondary hover:text-text-primary transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-body text-text-secondary hover:text-text-primary transition-colors">
              About
            </Link>
            <Link to="/projects" className="text-body text-text-secondary hover:text-text-primary transition-colors">
              Projects
            </Link>
            <Link to="/skills" className="text-body text-text-secondary hover:text-text-primary transition-colors">
              Skills
            </Link>
            <Link to="/contact" className="text-body text-text-secondary hover:text-text-primary transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>;
}