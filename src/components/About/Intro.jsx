'use client';
import React, { useEffect } from 'react';

function Intro() {
  useEffect(() => {
    gsap.to('.text-reval .text', {
      backgroundPositionX: '0%',
      stagger: 1,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '.text-reval',
        markers: false,
        scrub: 1,
        start: 'top center',
        end: 'bottom center',
      },
    });
  }, []);

  return (
    <section className="section-padding-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-10">
            <div className="text">
              <h3 className="f-bold text-u d-rotate wow mb-40">
                <span className="rotate-text">Who we are?</span>
              </h3>
              <h2 className="fz-22  mb-30">
                <span className="text">
                  Flow Studio is more than a creative hub; it's a fusion of
                  limitless creativity, spanning Creative Direction and Visual
                  Art with a modern aesthetic that defies boundaries.
                </span>
                {/* <span className="text">
                    it's a fusion of limitless creativity, spanning Creative
                    Direction and Visual Art with a modern aesthetic that defies
                    boundaries.
                  </span> */}
                <span className="text">
                  {' '}
                  Our relentless commitment to captivating storytelling
                  transcends the ordinary, blurring the lines between
                  technology, art, and craftsmanship.
                </span>
              </h2>
              <h2 className="fz-22  mb-30">
                <span className="text">
                  Despite our youth, we've made a profound impact, collaborating
                  with major brands like Pepsi, Unilever, Nestle. Our portfolio
                  showcases unique projects that reflect our passion and
                  creative brilliance. Together, we've crafted authentic
                  audiovisual masterpieces that push the limits of what's
                  possible
                </span>
              </h2>
            </div>
          </div>
        </div>
        {/* <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="row mt-80">
              <div className="col-md-4 sm-mb30">
                <ul className="list rest">
                  <li className="fz-18 mb-15">
                    <span className="mr-10">+</span> Branding Strategy
                  </li>
                  <li className="fz-18 mb-15">
                    <span className="mr-10">+</span> Digital Experiences
                  </li>
                  <li className="fz-18 mb-15">
                    <span className="mr-10">+</span> Social Media
                  </li>
                  <li className="fz-18 mb-15">
                    <span className="mr-10">+</span> Advertising
                  </li>
                </ul>
              </div>
              <div className="col-md-4 sm-mb30">
                <ul className="list rest">
                  <li className="fz-18 mb-15">
                    <span className="mr-10">+</span> Branding Strategy
                  </li>
                  <li className="fz-18 mb-15">
                    <span className="mr-10">+</span> Digital Experiences
                  </li>
                  <li className="fz-18 mb-15">
                    <span className="mr-10">+</span> Social Media
                  </li>
                  <li className="fz-18 mb-15">
                    <span className="mr-10">+</span> Advertising
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <ul className="list rest">
                  <li className="fz-18 mb-15">
                    <span className="mr-10">+</span> Branding Strategy
                  </li>
                  <li className="fz-18 mb-15">
                    <span className="mr-10">+</span> Digital Experiences
                  </li>
                  <li className="fz-18 mb-15">
                    <span className="mr-10">+</span> Social Media
                  </li>
                  <li className="fz-18 mb-15">
                    <span className="mr-10">+</span> Advertising
                  </li>
                </ul>
              </div>
            </div>
            <div className="row numbers mt-80">
              <div className="col-lg-4">
                <div className="item md-mb50">
                  <h3 className="stroke f-bold num pb-30 mb-30 bord-thin-bottom">
                    48
                  </h3>
                  <h6 className="fz-16">Projects Completed</h6>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="item md-mb50">
                  <h3 className="stroke f-bold num pb-30 mb-30 bord-thin-bottom">
                    64k
                  </h3>
                  <h6 className="fz-16">Clients Around the World</h6>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="item">
                  <h3 className="stroke f-bold num pb-30 mb-30 bord-thin-bottom">
                    30
                  </h3>
                  <h6 className="fz-16">Total Awards</h6>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default Intro;
