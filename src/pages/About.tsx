import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import Picture  from '@/assets/img/pic.jpeg';
export function About() {
  const skills = ['.NET Framework', '.NET Core','Laravel', 'React', 'REST APIs', 'Microsoft SQL Server', 'Python', 'HTML/CSS', 'Git'];
  return <div className="w-full min-h-screen bg-primary-bg">
      <Navigation />
      {/* Page Content */}
      <div className="pt-32 pb-20">
        <div className="container">
          {/* Page Header */}
          <h1 className="text-text-primary mb-16">About Me</h1>
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column - Portrait */}
            <div className="lg:col-span-4">
              <div className="aspect-[3/4] bg-primary-surface border border-border overflow-hidden">
                <img src={Picture} alt="Fikri Akbar Pramudya" className="w-full h-full object-cover" />
              </div>
            </div>
            {/* Right Column - Content */}
            <div className="lg:col-span-8">
              {/* Introduction */}
              <div className="mb-12">
                <p className="text-body text-text-primary leading-relaxed mb-4">
                  I am a full-stack developer with a strong foundation in
                  information systems and professional experience building
                  enterprise-grade web applications. My educational journey
                  began at SMK Negeri 26, where I developed foundational
                  programming skills, and continued at BINUS University, where I
                  deepened my understanding of software engineering principles
                  and modern development practices.
                </p>
                <p className="text-body text-text-primary leading-relaxed">
                  Throughout my career in IT development, I have focused on
                  creating scalable, maintainable solutions that prioritize both
                  performance and user experience.
                </p>
              </div>
              {/* Professional Experience */}
              <div className="mb-12">
                <h3 className="text-text-primary mb-4">
                  Professional Experience
                </h3>
                <p className="text-body text-text-primary leading-relaxed mb-4">
                  My professional journey includes roles as both Junior and
                  Intermediate Developer, where I have contributed to complex
                  projects at Nawadata Solutions, Iforce Consulting, and Anggada Duta Wisesa. At
                  these organizations, I specialized in backend development
                  using .Net Frameworks and .Net Core, designed and implemented RESTful APIs,
                  and optimized database performance with Microsoft SQL Server.
                </p>
                <p className="text-body text-text-primary leading-relaxed">
                  I pride myself on technical adaptability and a commitment to
                  performance optimization, consistently delivering solutions
                  that meet both functional requirements and business
                  objectives.
                </p>
              </div>
              {/* Core Competencies */}
              <div className="mb-12">
                <h3 className="text-text-primary mb-4">Core Competencies</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {skills.map(skill => <div key={skill} className="px-4 py-2 bg-primary-surface border border-border text-text-primary text-body">
                      {skill}
                    </div>)}
                </div>
              </div>
              {/* Language Proficiency */}
              <div>
                <h3 className="text-text-primary mb-4">Language Proficiency</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-4">
                    <span className="text-body text-text-primary font-medium w-32">
                      English
                    </span>
                    <span className="text-body text-text-secondary">
                      Fluent
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-body text-text-primary font-medium w-32">
                      Indonesian
                    </span>
                    <span className="text-body text-text-secondary">
                      Native
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>;
}