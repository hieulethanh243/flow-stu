'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';

function Footer() {
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
    <footer>
      <div className="footer-container" style={{ textAlign: 'center' }}>
        <div className="container bord pt-70 bord-thin-top">
          <div className="row">
            <div className="col-lg-4">
              <div className="copyright ">
                <Link href={'/contact'}>Contact</Link>
              </div>
            </div>
            <div className="col-lg-4">
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
            </div>{' '}
            <div className="col-lg-4">
              <div className="copyright" style={{ color: 'white' }}>
                <div className="ml-auto">
                  <p className="fz-13">© Copyright 2022 Flow Studio </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
