'use client';
import React from 'react';

function Menu() {
  function closeMenu() {
    document.querySelector('.hamenu').classList.remove('open');
  }

  function handleMouseEnter(event) {
    Object.values(event.currentTarget.parentElement.children).forEach(
      (el) => (el.style.opacity = '0.5'),
    );
    event.currentTarget.style.opacity = '1';
  }

  function handleMouseLeave(event) {
    Object.values(event.currentTarget.parentElement.children).forEach(
      (el) => (el.style.opacity = '1'),
    );
  }

  function handleOpenDMenu(event) {
    document.querySelector('.main-menu').classList.add('gosub');
    event.currentTarget.parentElement.parentElement
      .querySelector('.sub-menu')
      .classList.add('sub-open');
  }

  function handleCloseDMenu() {
    document.querySelector('.main-menu').classList.remove('gosub');
    document.querySelector('.main-menu .sub-menu').classList.remove('sub-open');
  }

  return (
    <div className="hamenu valign">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="menu-links">
              <ul className="main-menu rest">
                <li
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="o-hidden">
                    <a
                      href="/"
                      className="link animsition-link"
                      onClick={closeMenu}
                    >
                      <span className="nm">01.</span>Home
                    </a>
                  </div>
                </li>
                <li
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="o-hidden">
                    <a
                      href="/about"
                      className="link animsition-link"
                      onClick={closeMenu}
                    >
                      <span className="nm">02.</span>About
                    </a>
                  </div>
                </li>
                <li
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="o-hidden">
                    <a
                      href="/our-projects"
                      className="link animsition-link"
                      onClick={closeMenu}
                    >
                      <span className="nm">03.</span>Projects
                    </a>
                  </div>
                </li>
                <li
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="o-hidden">
                    <a
                      href="/labs"
                      className="link animsition-link"
                      onClick={closeMenu}
                    >
                      <span className="nm">04.</span>Labs
                    </a>
                  </div>
                </li>
                <li
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="o-hidden">
                    <a
                      href="/contact"
                      className="link animsition-link"
                      onClick={closeMenu}
                    >
                      <span className="nm">05.</span>Contact
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 valign">
            <div className="cont-info">
              <div className="item mb-50">
                <h6 className="text-u fw-600 mb-20">Address</h6>
                <p className="fw-400 fz-18">
                  31/20 Nguyen Dinh Chieu ,Ward 4, <br /> Phu Nhuan District,
                  HCMC
                </p>
              </div>
              <div className="item mb-50">
                <h6 className="text-u fw-600 mb-20">Contact us</h6>
                <p className="fw-400 fz-18">+84 707 596 663</p>
                <p className="fw-400 fz-18">contact@flowstu.com</p>
              </div>
              <div className="bottom">
                <h6 className="text-u fw-600 mb-20">Follow Us</h6>
                <ul className="rest social-text d-flex fz-13">
                  <li className="mr-20">
                    <a
                      href="https://www.facebook.com/flowstu"
                      target="_blank"
                      className="hover-this"
                    >
                      <span className="hover-anim">Facebook</span>
                    </a>
                  </li>
                  <li className="mr-20">
                    <a
                      href="https://vimeo.com/flowstu"
                      target="_blank"
                      className="hover-this"
                    >
                      <span className="hover-anim">Vimeo</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/flowstudiovn/"
                      target="_blank"
                      className="hover-this"
                    >
                      <span className="hover-anim">Instagram</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
