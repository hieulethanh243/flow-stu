'use client';

import React from 'react';

import data from '@/data/Client/clients.json';

function Client() {
  return (
    <div className="logo-clients pt-80">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="col-lg-8">
            <h3 className="fz-70 text-u text-center">
              <span className="rotate-text">Our Partners</span>
            </h3>
          </div>
        </div>
      </div>
      <div className="container-fluid rest">
        <div className="row no-pad">
          {data.map((item) => (
            <div className="col-lg-new-5 mb-40" key={item.id}>
              <div className="item">
                <div className="img">
                  <img src={item.image} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Client;
