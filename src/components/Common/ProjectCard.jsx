import React, { useEffect, useState } from 'react';
import { Modal } from 'antd';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';

import data from '@/data/Landing/works.json';

function ProjectCard({ project, index }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [test, setTest] = useState(true);
  const [projectData, setProjectData] = useState(project);

  const [videoHeight, setVideoHeight] = useState(500);

  useEffect(() => {
    handleChangeVideoHeight();
    window.addEventListener('resize', handleChangeVideoHeight);
    return () => {
      window.addEventListener('resize', handleChangeVideoHeight);
    };
  }, []);

  const handleChangeVideoHeight = () => {
    setVideoHeight(Math.min(500, ((window.innerWidth * 0.8) / 16) * 9));
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setTest(false);
  };

  useEffect(() => {
    if (!test) {
      setIsModalOpen(false);
    }
    return () => {
      setIsModalOpen(false);
      setTest(true);
    };
  }, [test]);

  const handleClickOutside = (event) => {
    // Check if the click occurred outside of the modal
    if (isModalOpen && !event.target.closest('.ant-modal-content')) {
      setIsModalOpen(false);
    }
  };

  return (
    <div className={`projects-${index} projects`} onClick={showModal}>
      <div className="project-card cursor-pointer" key={project.id}>
        <img src={project.image} alt="Project image" />
        <h3 className="fadedbox">
          <div className="title text">{project.title}</div>
        </h3>
      </div>
      {isModalOpen && (
        <Modal
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          onClick={handleClickOutside}
          footer={false}
          className="custom-modal"
          centered
          maskStyle={{
            background: 'rgba(44, 113, 255, 0.7)',
          }}
        >
          <iframe
            className="iframe-video"
            title="vimeo-player"
            src={projectData.video}
            width="100%"
            height={videoHeight}
            allowFullScreen
          ></iframe>
          <div className="modal-title">{projectData.title}</div>
          <div
            onClick={() => {
              if (projectData.id === data.length) return;
              setProjectData(data.find((prj) => prj.id === projectData.id + 1));
            }}
            className="next-arrow"
          >
            <RightOutlined
              style={{
                fontSize: 20,
                color: 'white',
              }}
              disabled={projectData.id === data.length}
            />
          </div>
          <div
            onClick={() => {
              if (projectData.id === 1) return;

              setProjectData(data.find((prj) => prj.id === projectData.id - 1));
            }}
            className="prev-arrow"
          >
            <LeftOutlined
              disabled={projectData.id === 1}
              style={{
                fontSize: 20,
                color: 'white',
              }}
            />
          </div>
        </Modal>
      )}
    </div>
  );
}

export default ProjectCard;
