'use client';

import React from 'react';

import data from '@/data/OurProjects/works.json';
import ProjectData from '@/components/OurProjects/ProjectData';

function ProjectGrid() {
  const ProjectDataList = () => {
    return (
      <>
        {data.map((project) => {
          return <ProjectData project={project} />;
        })}
      </>
    );
  };

  return <div className="project-grid-detail-project">{ProjectDataList()}</div>;
}

export default ProjectGrid;
