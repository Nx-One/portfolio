import { useState } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
import ProjectDetailModal from '@/components/ProjectDetailModal';
import { Button } from '@/components/ui/button';
import { Project, projects } from "@/data/projects";

export function Projects() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  
  return <div className="w-full min-h-screen bg-primary-bg">
      <Navigation />
      {/* Page Content */}
      <div className="pt-32 pb-20">
        <div className="container">
          {/* Page Header */}
          <h1 className="text-text-primary mb-16">Projects</h1>
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => <div key={project.id} className="bg-primary-surface border border-border overflow-hidden flex flex-col">
                {/* Project Thumbnail */}
                <div className="aspect-video bg-primary-bg overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </div>
                {/* Project Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Project Title */}
                  <h4 className="text-text-primary mb-3">{project.title}</h4>
                  {/* Project Description */}
                  <p className="text-body text-text-secondary mb-4 flex-grow">
                    {project.hook}
                  </p>
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map(tech => <span key={tech} className="px-3 py-1 bg-primary-bg border border-border text-caption text-text-secondary">
                        {tech}
                      </span>)}
                  </div>
                  {/* Action Buttons */}
                  <div className="flex items-center gap-3">
                    <Button
                      className="flex items-center gap-2 px-4 py-2 bg-primary-accent text-text-primary text-body hover:opacity-90 transition-opacity"
                      onClick={() => setSelectedId(project.id)}
                      aria-label={`View details for ${project.title}`}
                    >
                      <span>View Details</span>
                      <ExternalLinkIcon size={16} />
                    </Button>
                    {/* <a href={project.project_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-primary-accent text-text-primary text-body hover:opacity-90 transition-opacity">
                      <span>View Details</span>
                      <ExternalLinkIcon size={16} />
                    </a> */}
                    <a href={project.repositoryUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 border border-border text-text-secondary hover:text-text-primary hover:border-text-primary transition-colors" aria-label="View repository">
                      <GithubIcon size={20} />
                    </a>
                  </div>
                </div>
              </div>)}
          </div>
          {selectedId && (() => {
            const item = projects.find(x => x.id === selectedId);
            if (!item) return null;

            return (
              <ProjectDetailModal
                item={item}
                open={true}
                onClose={() => setSelectedId(null)}
              />
            );
          })()}
        </div>
      </div>
      <Footer />
    </div>;
}