import React from 'react';
//= Static Data
import data from '@/data/About/team.json';

function Team() {
  return (
    <section className="team section-padding pb-0">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="row">
            <div className="col-lg-8">
              <h3 className="f-bold text-u d-rotate wow">
                <span className="rotate-text">Meet Our Team.</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid rest">
        <div
          className="row no-pad"
          style={{
            width: '80%',
            margin: '0 auto',
          }}
        >
          {data.map((item) => (
            <div className="col-lg-3 col-md-6 mb-40" key={item.id}>
              <div className="item">
                <div className="img">
                  <img src={item.image} alt="" />
                </div>
                <div className="info mt-20">
                  <span className="fz-12 opacity-8">{item.role}</span>
                  <h6 className="fz-18">{item.title}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
