import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Icon } from '@iconify/react';
interface Skill {
  name: string;
  level: string;
  icon?: string;
}
interface SkillsData {
  programming_languages: Skill[];
  frameworks_libraries: Skill[];
  databases_apis: Skill[];
  tools_platforms: Skill[];
  other_skills: Skill[];
}
const skillsData: SkillsData = {
  programming_languages: [{
    name: 'PHP',
    level: 'Advanced',
    icon: 'devicon:php'
  }, {
    name: 'JavaScript',
    level: 'Advanced',
    icon: 'devicon:javascript'
  }, {
    name: 'Python',
    level: 'Advanced',
    icon: 'devicon:python'
  }, {
    name: 'C#',
    level: 'Expert',
    icon: 'devicon:csharp'
  }, {
    name: 'HTML',
    level: 'Expert',
    icon: 'devicon:html5'
  }, {
    name: 'CSS',
    level: 'Expert',
    icon: 'devicon:css3'
  }],
  frameworks_libraries: [{
    name: 'Laravel',
    level: 'Advanced',
    icon: 'devicon:laravel'
  }, {
    name: '.NET',
    level: 'Expert',
    icon: 'devicon:dotnetcore'
  }, {
    name: 'React',
    level: 'Intermediate',
    icon: 'devicon:react'
  }, {
    name: 'Vue.js',
    level: 'Intermediate',
    icon: 'devicon:vuejs'
  }, {
    name: 'Bootstrap',
    level: 'Advanced',
    icon: 'devicon:bootstrap'
  }, {
    name: 'Tailwind CSS',
    level: 'Advanced',
    icon: 'devicon:tailwindcss'
  }],
  databases_apis: [{
    name: 'MySQL',
    level: 'Advanced',
    icon: 'devicon:mysql'
  }, {
    name: 'MongoDB',
    level: 'Intermediate',
    icon: 'devicon:mongodb'
  }, {
    name: 'PostgreSQL',
    level: 'Intermediate',
    icon: 'devicon:postgresql'
  }, {
    name: 'REST API',
    level: 'Advanced',
    icon: 'simple-icons:fastapi'
  }, {
    name: 'Microsoft SQL Server',
    level: 'Expert',
    icon: 'devicon:microsoftsqlserver'
  }],
  tools_platforms: [{
    name: 'Git',
    level: 'Advanced',
    icon: 'devicon:git'
  }, {
    name: 'GitHub',
    level: 'Advanced',
    icon: 'devicon:github'
  }, {
    name: 'VS Code',
    level: 'Advanced',
    icon: 'devicon:vscode'
  }, {
    name: 'Postman',
    level: 'Intermediate',
    icon: 'simple-icons:postman'
  }, {
    name: 'Docker',
    level: 'Basic',
    icon: 'devicon:docker'
  }, {
    name: 'Figma',
    level: 'Intermediate',
    icon: 'devicon:figma'
  }],
  other_skills: [{
    name: 'UI/UX Design',
    level: 'Intermediate'
  }, {
    name: 'Data Analysis',
    level: 'Intermediate'
  }, {
    name: 'Artificial Intelligence',
    level: 'Basic'
  }]
};
interface SkillCardProps {
  skill: Skill;
}
function SkillCard({
  skill
}: SkillCardProps) {
  return <div className="flex flex-col items-center gap-3 p-6 bg-primary-surface border border-border">
      {skill.icon && <Icon icon={skill.icon} className="w-12 h-12 text-primary-accent" />}
      <div className="text-center">
        <h5 className="text-text-primary mb-1">{skill.name}</h5>
        <p className="text-caption text-text-secondary">{skill.level}</p>
      </div>
    </div>;
}
interface SkillSectionProps {
  title: string;
  skills: Skill[];
}
function SkillSection({
  title,
  skills
}: SkillSectionProps) {
  return <div className="mb-16">
      <h3 className="text-text-primary mb-6">{title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map(skill => <SkillCard key={skill.name} skill={skill} />)}
      </div>
    </div>;
}
export function Skills() {
  return <div className="w-full min-h-screen bg-primary-bg">
      <Navigation />
      {/* Page Content */}
      <div className="pt-32 pb-20">
        <div className="container">
          {/* Page Header */}
          <h1 className="text-text-primary mb-16">Skills</h1>
          {/* Skills Sections */}
          {/* <div className="max-w-5xl mx-auto"> */}
          <div className="grid">
            <SkillSection title="Programming Languages" skills={skillsData.programming_languages} />
            <SkillSection title="Frameworks & Libraries" skills={skillsData.frameworks_libraries} />
            <SkillSection title="Databases & APIs" skills={skillsData.databases_apis} />
            <SkillSection title="Tools & Platforms" skills={skillsData.tools_platforms} />
            <SkillSection title="Other Skills" skills={skillsData.other_skills} />
          </div>
        </div>
      </div>
      <Footer />
    </div>;
}