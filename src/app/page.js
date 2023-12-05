import Script from 'next/script';
//= Scripts
import generateStylesheetObject from '@/common/generateStylesheetsObject';
//= Common Components
import LoadingScreen from '@/components/Common/Loader';
import Cursor from '@/components/Common/Cursor';
import ProgressScroll from '@/components/Common/ProgressScroll';
//= Page Components
import Navbar from '@/components/Common/Navbar';
import Menu from '@/components/Common/Menu';
import Marquee from '@/components/CreativePortfolio/Marquee';
import About from '@/components/CreativePortfolio/About';
import Works from '@/common/Home/Works';
import Contact from '@/components/CreativePortfolio/Contact';

import Video from '@/components/CreativePortfolio/Video';
import Footer1 from '@/components/Common/Footer1';
import Client from '@/components/Common/Clients';

export const metadata = {
  title: 'Flow Studio | Post-Production | Ho Chi Minh City',
  icons: {
    icon: '/assets/imgs/tab-logo.png',
    shortcut: '/assets/imgs/tab-logo.png',
    other: generateStylesheetObject([
      'https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
      '/assets/fonts/Be_Vietnam/style.css',
      '/assets/css/plugins.css',
      '/assets/css/style.css',
    ]),
  },
  images: [
    {
      url: 'https://res.cloudinary.com/dtyv8vpj9/image/upload/v1701274364/0510_Cover_1_00000_uonmz2.jpg',
      width: 200,
      height: 200,
    },
  ],
  openGraph: {
    title: 'Flow Studio | Post-Production | Ho Chi Minh City',
    icons: {
      icon: '/assets/imgs/tab-logo.png',
      shortcut: '/assets/imgs/tab-logo.png',
      other: generateStylesheetObject([
        'https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
        '/assets/fonts/Be_Vietnam/style.css',
        '/assets/css/plugins.css',
        '/assets/css/style.css',
      ]),
    },
    description: 'We create a visual art to make your imagination come true.',

    images: [
      {
        url: 'https://res.cloudinary.com/dtyv8vpj9/image/upload/v1701274364/0510_Cover_1_00000_uonmz2.jpg',
        width: 200,
        height: 200,
      },
    ],
  },
};

export default function LandingPagePreview() {
  return (
    <body className="main-bg">
      <LoadingScreen />
      <Cursor />
      <ProgressScroll />

      <div id="smooth-wrapper">
        <Navbar borderBottom />
        <Menu />
        <div id="smooth-content" className="smooth-content">
          <main className="main-bg">
            <Video />
            <Marquee />
            <About />
            <Works />
            <Client />
            <Contact />
          </main>
          <Footer1 />
        </div>
      </div>

      <Script
        src="/assets/js/bootstrap.bundle.min.js"
        strategy="beforeInteractive"
      />
      <Script src="/assets/js/plugins.js" strategy="beforeInteractive" />
      <Script src="/assets/js/wow.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/gsap.min.js" strategy="beforeInteractive" />
      <Script
        src="/assets/js/ScrollSmoother.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/assets/js/ScrollTrigger.min.js"
        strategy="beforeInteractive"
      />
      <Script src="/assets/js/smoother-script.js" strategy="lazyOnload" />
      <Script src="/assets/js/scripts.js" strategy="lazyOnload" />
    </body>
  );
}
