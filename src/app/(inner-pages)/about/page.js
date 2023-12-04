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
import Header from '@/components/About/Header';
import Intro from '@/components/About/Intro';
import Video from '@/components/About/Video';
import Team from '@/components/About/Team';
import Testimonials from '@/components/About/Testimonials';
import Footer from '@/components/Common/Footer2';
import Info from '@/components/Contact/Info';
import Contact from '@/components/CreativePortfolio/Contact';
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
      url: '/assets/imgs/seo/SEO_img.png',
      width: 300,
      height: 200,
    },
  ],
};

export default function About() {
  return (
    <body className="main-bg">
      <LoadingScreen />
      <Cursor />
      <ProgressScroll />

      <div id="smooth-wrapper">
        <Navbar />
        <Menu />
        <div id="smooth-content">
          <main className="main-bg">
            <Header />
            <Intro />
            <Video />
            <Team />
            <Client />
            <Contact />
          </main>
          <Footer />
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
