'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';

function Footer1({ subBg }) {
  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    () => window.removeEventListener('resize', handleResize);
  }, []);

  function handleResize() {
    if (window.innerWidth > 991) {
      gsap.set('.footer-container', { yPercent: -50 });
      const uncover = gsap.timeline({ paused: true });
      uncover.to('.footer-container', { yPercent: 0, ease: 'none' });

      ScrollTrigger.create({
        trigger: 'main',
        start: 'bottom bottom',
        end: '+=50%',
        animation: uncover,
        scrub: true,
      });
    }
  }

  return (
    <footer className={`${subBg ? 'sub-bg' : ''}`}>
      <div className="footer-container">
        <div className="container pb-80 pt-80 ontop">
          <div className="row mt-80">
            <div className="col-lg-9">
              <div className="eml">
                <h6 className="sub-title" style={{ color: 'white' }}>
                  we would love to hear from you.
                </h6>
                <h2 className="underline fz-60">
                  <a href="#0">contact@flowstu.com</a>
                </h2>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="column">
                <h6 className="sub-title mb-30">Our Office : </h6>
                <p style={{ color: 'white' }}>
                  31/20 Nguyen Dinh Chieu ,Ward 4, Phu Nhuan District, HCMC
                </p>
                <h5 className="mt-15 underline">
                  <a href="#0">+84 707 596 663</a>
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div
          className="container bord pt-30 pb-30 bord-thin-top"
          style={{ color: 'white' }}
        >
          <div className="row">
            <div className="col-lg-4">
              {/* <Link href={'/contact'}>Contact</Link> */}
              <div className="o-hidden">
                <a href="/contact" className="link animsition-link">
                  Contact
                </a>
              </div>
            </div>
            <div className="col-lg-4" style={{ textAlign: 'center' }}>
              <div className="links">
                <ul className="rest">
                  <li>
                    <a href="https://www.facebook.com/flowstu" target="_blank">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://vimeo.com/flowstu"
                      target="_blank"
                      className="animsition-link"
                    >
                      Vimeo
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/flowstudiovn/"
                      target="_blank"
                      className="animsition-link"
                    >
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="copyright d-flex">
                <div className="ml-auto">
                  <p className="fz-13" style={{ color: 'white' }}>
                    © Copyright 2022 Flow Studio
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer1;
