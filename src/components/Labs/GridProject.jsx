'use client';

import React from 'react';

import data from '@/data/Labs/works.json';
import ProjectData from '@/components/Labs/ProjectData';

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
