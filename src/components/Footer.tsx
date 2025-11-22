import React from 'react';
import { LinkedinIcon, GithubIcon, MailIcon } from 'lucide-react';
export function Footer() {
  return <footer className="border-t border-border mt-20">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-caption text-text-secondary">
            © 2024 Fikri Akbar Pramudya. All rights reserved.
          </p>
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/in/fikri-akbar-pramudya/" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary-accent transition-colors" aria-label="LinkedIn">
              <LinkedinIcon size={20} />
            </a>
            <a href="https://github.com/Nx-One" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary-accent transition-colors" aria-label="GitHub">
              <GithubIcon size={20} />
            </a>
            <a href="mailto:fikriakbarpramudya51@gmail.com" className="text-text-secondary hover:text-primary-accent transition-colors" aria-label="Email">
              <MailIcon size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>;
}