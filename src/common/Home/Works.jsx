'use client';
import React from 'react';
import Link from 'next/link';
//= Static Data
import data from '@/data/Landing/works.json';
import ImageGrid from '@/components/OurProjects/ProjectGrid';

function Works() {
  return (
    <section className="work section-padding-100 bg-gray text-dark">
      <div className="marquee-head">
        <div className="container-fluid rest">
          <div className="row">
            <div className="col-12">
              <div className="main-marq">
                <div className="slide-har mobile-hidden st1">
                  <div className="box non-strok">
                    {new Array(5).fill().map((_, i) => (
                      <div className="item" key={i}>
                        <h2>Our Latest Projects</h2>
                      </div>
                    ))}
                  </div>
                  <div className="box non-strok">
                    {new Array(5).fill().map((_, i) => (
                      <div className="item" key={i}>
                        <h2>Our Latest Projects</h2>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mobile-headline">
                  <h2>Our Latest Projects</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ImageGrid projectData={data} />
      <div className="all-projects-link">
        <div className="fit-text cursor-pointer">
          <a href="/our-projects">All Projects </a>
        </div>
      </div>
      {/* <div className="container">
        <div className="row">
          <div className="col-12">
          
          </div>
        </div>
      </div> */}
    </section>
  );
}

export default Works;
