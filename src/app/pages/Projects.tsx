import React from 'react';
import { Link } from 'react-router';
import { projects } from '../data/projects';

export function Projects() {
  const CATEGORIES = [
    'All',
    'Machine Learning',
    'Full-Stack',
    'Automation',
    'Data Engineering',
    'Development',
    'Embedded Systems',
    'Networking',
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filtered = selectedCategory === 'All'
    ? projects
    : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="projects-container">
      <h1>Projects</h1>

      {/* Category filters */}
      <div className="category-filters">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={selectedCategory === cat ? 'active' : ''}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects grid */}
      <div className="projects-grid">
        {filtered.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <p>{project.category}</p>
              <h3>{project.title}</h3>
              <p className="subtitle">{project.subtitle}</p>
              <div className="tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="links">
                <Link to={`/projects/${project.id}`}>
                  Read Case Study
                </Link>
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p>No projects found in this category.</p>
      )}
    </div>
  );
}

export default Projects;
