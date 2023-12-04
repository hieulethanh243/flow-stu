'use client';

import React from 'react';
import ProjectCard from '../Common/ProjectCard';

function ImageGrid({ projectData }) {
  return (
    <div className="image-grid">
      {projectData.map((project, index) => {
        return <ProjectCard project={project} index={index} key={index} />;
      })}
    </div>
  );
}

export default ImageGrid;
