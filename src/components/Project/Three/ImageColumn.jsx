import React from "react";

function ImageColumn() {
  return (
    <div className="img-column">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img md-mb30">
              <img src="/assets/imgs/works/projects/3/2.jpg" alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="img">
              <img src="/assets/imgs/works/projects/3/3.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageColumn;
