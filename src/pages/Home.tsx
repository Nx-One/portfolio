import React from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
export function Home() {
  return <div className="w-full min-h-screen bg-primary-bg">
      <Navigation />
      {/* Hero Section - Full Viewport Height */}
      <section className="min-h-screen flex items-center pt-16">
        <div className="container">
          <div className="max-w-4xl">
            {/* Name */}
            <h1 className="text-text-primary mb-4">Fikri Akbar Pramudya.</h1>
            {/* Title */}
            <h2 className="text-text-secondary mb-6">
              Web Developer & Software Engineer.
            </h2>
            {/* Summary */}
            <p className="text-body text-text-secondary mb-8 max-w-2xl">
              Experienced in building scalable web applications with
              .Net Core, .Net Framework, Laravel, REST APIs, React, and SQL Server, 
              with a focus on performance optimization and clean architecture.
            </p>
            {/* CTA Button */}
            <Link to="/projects" className="inline-block px-6 py-3 bg-primary-accent text-text-primary font-medium hover:opacity-90 transition-opacity">
              View Projects
            </Link>
          </div>
        </div>
      </section>
      {/* Introduction Section */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-body text-text-primary leading-relaxed">
              I am a full-stack developer with a strong foundation in information
              system and several years of professional experience building
              robust web applications. My work focuses on backend development
              using .Net, creating efficient REST APIs, and
              optimizing database performance with SQL Server. I am passionate about
              writing clean, maintainable code and continuously improving
              application performance to deliver exceptional user experiences.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>;
}