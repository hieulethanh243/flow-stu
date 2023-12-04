'use client';
import React, { useEffect } from 'react';

import data from '@/data/Common/Navigation.json';

function Navbar({ borderBottom }) {
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function handleScroll() {
    const menu = document.querySelector('.topnav');
    if (window.scrollY > window.innerHeight) {
      menu.style.top = '-100px';
    } else {
      menu.style.top = 0;
    }

    if (window.scrollY > 100) menu.classList.add('nav-scroll');
    else menu.classList.remove('nav-scroll');
  }

  function toggleMenu() {
    const navDark = document.querySelector('.topnav');

    document.querySelector('.hamenu').classList.toggle('open');
    document.querySelector('.topnav .menu-icon').classList.toggle('open');
    navDark.classList.toggle('navlit');

    if (
      document.querySelector('.topnav .menu-icon').classList.contains('open')
    ) {
      document.querySelector('.hamenu').style.top = '0';
    } else {
      document.querySelector('.hamenu').style.top = '-100%';
    }
  }

  const HeaderItem = () => {
    return data.map((item, index) => {
      return (
        <div className="link cursor-pointer" key={index}>
          <a href={item.link}>{item.title}</a>
        </div>
      );
    });
  };

  return (
    <div
      id="navi"
      className={`topnav blur ${borderBottom ? 'bord-thin-bottom' : ''}`}
    >
      <div className="container">
        <div className={`logo icon-img-${borderBottom ? '100' : '90'}`}>
          <div>
            <a href="/">
              <img src="/assets/imgs/flow-logo.png" alt="" />
            </a>
          </div>
        </div>
        <div className="menu-icon cursor-pointer" onClick={toggleMenu}>
          <span className="icon">
            <i></i>
            <i></i>
          </span>
        </div>
        <div className="menu-page-list">{HeaderItem()}</div>
      </div>
    </div>
  );
}

export default Navbar;
