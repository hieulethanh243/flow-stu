import React from 'react';
//= Static Data
import data from '@/data/About/brands.json';

function Video() {
  return (
    <div className="vid-sec sub-bg pb-70">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="vid-intro">
              <div className="video-container">
                <img
                  src="/assets/imgs/team/all-team.png"
                  style={{ width: '90%' }}
                  className="img-about"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;
