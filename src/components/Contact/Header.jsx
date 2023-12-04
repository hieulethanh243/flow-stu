import React from 'react';

function Header() {
  return (
    <header className="contact-header section-padding">
      <div className="container mt-100">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="cont text-center mb-80">
              <h6 className="sub-title mb-15">
                <span className="icon-img-30 mr-10">
                  <img src="/assets/imgs/svg-assets/hi.png" alt="" />
                </span>{' '}
                Hello, Let's get in touch
              </h6>
              <h1>Get In Touch.</h1>
            </div>
          </div>
          <div className="col-lg-11">
            <div className="google-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d489.88747670585747!2d106.6797747!3d10.8036669!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528d9a6339c0f%3A0x63c890aee9df01d7!2zMzEgTmd1eeG7hW4gxJDDrG5oIENoaeG7g3UsIFBoxrDhu51uZyA0LCBQaMO6IE5odeG6rW4sIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaA!5e0!3m2!1svi!2s!4v1700710964388!5m2!1svi!2s"
                width="600"
                height="450"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
